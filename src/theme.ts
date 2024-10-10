// DEFINE BASE COLORS:
export const colorPrimary = "#e9c2e2";
export const colorSecondary = "#fffeff";
export const colorDark = "#201e21";

// Helper function to convert hex to RGB
function hexToRgb(hex: string): [number, number, number] {
    const bigint = parseInt(hex.slice(1), 16);
    return [
        (bigint >> 16) & 255, // red
        (bigint >> 8) & 255,  // green
        bigint & 255          // blue
    ];
}

// Helper function to convert RGB to hex
function rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

// Function to lighten or darken a color
function adjustColor(hex: string, amount: number): string {
    const [r, g, b] = hexToRgb(hex);
    const newR = Math.min(255, Math.max(0, r + amount));
    const newG = Math.min(255, Math.max(0, g + amount));
    const newB = Math.min(255, Math.max(0, b + amount));
    return rgbToHex(newR, newG, newB);
}

// GENERATE SHADES
export function generateShades(hex: string, totalShades: number = 9): Record<string, string> {
    let shades: Record<string, string> = {};

    const halfShades = totalShades / 2;

    // Generate lighter shades
    for (let i = 1; i <= halfShades; i++) {
        const lightenAmount = Math.floor((i / halfShades) * 255);  // Lightening ratio
        shades[`${i * 100}`] = adjustColor(hex, lightenAmount);
    }

    // Generate darker shades
    for (let i = 1; i <= halfShades; i++) {
        const darkenAmount = Math.floor((i / halfShades) * -255);  // Darkening ratio
        shades[`${(i + halfShades) * 100}`] = adjustColor(hex, darkenAmount);
    }

    return shades;
}

// Generate theme colors
export const themeColors = {
    primary: generateShades(colorPrimary),
    secondary: generateShades(colorSecondary),
    dark: generateShades(colorDark),
};
