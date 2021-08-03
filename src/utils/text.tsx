export const ellipsis = (str: string, max: number) =>
  str && str.length < max ? str : `${str.substring(0, max)}...`;

export const capitalize = (str: string): string =>
  str.substr(0, 1).toUpperCase() + str.substr(1);

export const underscoresToSpaces = (str: string): string =>
  str.replace(/_/g, ' ');
