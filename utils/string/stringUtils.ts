export function minimizeTextByCharacters(
  title: string,
  maxCharacters: number
): string {
  if (title && title.length > maxCharacters)
    return title.substring(0, maxCharacters) + "...";
  return title;
}

export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const capitalizeText = (text: string): string => {
  return text
    .split(" ")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
};

export function trimSpaces(input: string): string {
  // Remove leading and trailing spaces using regular expressions
  return input.replace(/^\s+|\s+$/g, "");
}

export function keepStringBeforeFirstComma(input: string): string {
  const index = input.indexOf(",");
  if (index !== -1) {
    return input.substring(0, index);
  }
  return input; // If no comma is found, return the original string
}
