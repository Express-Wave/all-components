export function removePrependSlash(path: string) {
    return path.replace(/^.*\//, '');
  }