<script>
	import { onMount } from 'svelte';

	let currentDate = new Date();
	let currentMonth = currentDate.getMonth();
	let currentYear = currentDate.getFullYear();

	let currentMonthTitle = '';
	let nextMonthTitle = '';
	let currentMonthDays = [];
	let nextMonthDays = [];
	let currentMonthEvents = [];
	let nextMonthEvents = [];

	const events = {
		'2024-12': [
			{
				date: '12/15/2024',
				formattedDate: 'Sun, Dec 15',
				time: '18:30',
				title: 'Christmas Cantata',
				description: ''
			},
			{
				date: '12/22/2024',
                formattedDate: 'Sun, Dec 22',
				time: '18:30',
				title: "Lord's Supper",
				description: ''
			},
			{
				date: '12/30/2024 - 01/01/2025',
                formattedDate: 'Mon, Dec 30 - Wed, Jan 01',
				time: '18:30',
				title: 'Mid Atlantic Youth Conference',
				description: ''
			}
		],
		'2025-01': [
			{
				date: '01/05/2025',
				formattedDate: 'Sun, Jan 01',
				time: '18:30',
				title: 'Vision Sunday',
				description: ''
			},
			{
				date: '01/30/2025',
                formattedDate: 'Thu, Jan 30',
				time: '20:30',
				title: "Marriage Retreat",
				description: ''
			},
            {
				date: '01/31/2025',
                formattedDate: 'Fri, Jan 31',
				time: '10:30',
				title: "Marriage Retreat",
				description: ''
			},
		]
	};

	function renderCalendar(year, month) {
		const firstDay = new Date(year, month, 1).getDay();
		const daysInMonth = new Date(year, month + 1, 0).getDate();

		// Adjust for Sunday start (align first day of the month with Sunday in the grid)
		const adjustedFirstDay = firstDay;

		const days = Array.from({ length: 42 }, (_, i) => {
			const day = i - adjustedFirstDay + 1;
			return day > 0 && day <= daysInMonth ? day : '';
		});
		return days;
	}

	function isToday(day, monthOffset) {
		const currentDate = normalizeDate(new Date(get(year), get(month) + monthOffset, day));
		return currentDate === normalizeDate(today);
	}

	function getMonthEvents(year, month) {
		// Format the key to match 'YYYY-MM'
		const eventsKey = `${year}-${String(month + 1).padStart(2, '0')}`;
		return events[eventsKey] || [];
	}

	function updateCalendar() {
		currentMonthDays = renderCalendar(currentYear, currentMonth);
		currentMonthTitle = `${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`;
		currentMonthEvents = getMonthEvents(currentYear, currentMonth);

		const nextDate = new Date(currentYear, currentMonth + 1, 1);
		nextMonthDays = renderCalendar(nextDate.getFullYear(), nextDate.getMonth());
		nextMonthTitle = `${nextDate.toLocaleString('default', { month: 'long' })} ${nextDate.getFullYear()}`;
		nextMonthEvents = getMonthEvents(nextDate.getFullYear(), nextDate.getMonth());
	}

	const formattedDate = (date) => {
		const eventDate = new Date(date);
		return new Intl.DateTimeFormat('en-US', {
			weekday: 'short',
			month: 'short',
			day: 'numeric'
		}).format(eventDate);
	};

	const formattedTime = (time) => {
		const [hours, minutes] = time.split(':').map(Number); // Split the time into hours and minutes
		const isPM = hours >= 12;
		const adjustedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour format
		const period = isPM ? 'PM' : 'AM';

		return `${adjustedHours}:${String(minutes).padStart(2, '0')} ${period}`;
	};

	onMount(() => {
		updateCalendar();
	});
</script>

<div class="flex flex-wrap gap-6 justify-center p-4">
	<!-- Current Month -->
	<div class="w-full rounded-lg border-2 border-gray-200 md:w-1/4">
		<div class="p-4 text-xl font-bold text-center bg-transparent border-b border-gray-300">
			{currentMonthTitle}
		</div>
		<div class="grid grid-cols-7 gap-1 p-4">
			<div class="font-semibold text-center">Su</div>
			<div class="font-semibold text-center">Mo</div>
			<div class="font-semibold text-center">Tu</div>
			<div class="font-semibold text-center">We</div>
			<div class="font-semibold text-center">Th</div>
			<div class="font-semibold text-center">Fr</div>
			<div class="font-semibold text-center">Sa</div>

			{#each currentMonthDays as day}
				<div
					class="h-10 flex items-center justify-center text-sm border rounded-md
                    {day ? 'bg-white' : 'bg-gray-50 text-gray-300'}"
				>
					{day}
				</div>
			{/each}
		</div>
		<div class="p-8 mt-2 w-full bg-gray-100 border-t border-gray-200">
			<!-- <h3 class="text-lg font-semibold">Events</h3> -->
			{#each currentMonthEvents as event}
				<div class="pb-4 mb-4 border-b border-gray-500 border-dashed">
					<p class="text-lg font-bold">{event.title}</p>
					<p class="text-lg font-medium">
						{event.formattedDate} at {formattedTime(event.time)}
					</p>
					{#if event.description}
						<p class="text-base text-gray-500">{event.description}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<!-- Next Month -->
	<div class="w-full rounded-lg border-2 border-gray-200 md:w-1/4">
		<div class="p-4 text-xl font-bold text-center bg-transparent border-b border-gray-300">
			{nextMonthTitle}
		</div>
		<div class="grid grid-cols-7 gap-1 p-4">
			<div class="font-semibold text-center">Su</div>
			<div class="font-semibold text-center">Mo</div>
			<div class="font-semibold text-center">Tu</div>
			<div class="font-semibold text-center">We</div>
			<div class="font-semibold text-center">Th</div>
			<div class="font-semibold text-center">Fr</div>
			<div class="font-semibold text-center">Sa</div>

			{#each nextMonthDays as day}
				<div
					class="h-10 flex items-center justify-center text-sm border rounded-md
                    {day ? 'bg-white' : 'bg-gray-50 text-gray-300'}"
				>
					{day}
				</div>
			{/each}
		</div>
		<div class="p-8 mt-2 w-full bg-gray-100 border-t border-gray-200">
			<!-- <h3 class="text-lg font-semibold">Events</h3> -->
			{#each nextMonthEvents as event}
				<div class="pb-4 mb-4 border-b border-gray-500 border-dashed">
					<p class="text-lg font-bold">{event.title}</p>
					<p class="text-lg font-medium">
						{event.formattedDate} at {formattedTime(event.time)}
					</p>
					{#if event.description}
						<p class="text-base text-gray-500">{event.description}</p>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
