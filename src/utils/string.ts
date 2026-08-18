export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const capitalizeWords = (text: string) =>
  text
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const capitalizeAndRemoveUnderscore = (text: string) =>
  text
    .split('_')
    .map((word) => capitalize(word))
    .join(' ');

export const camelize = (str: string) =>
  str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) {
      return '';
    }
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });

export const formatEnumLabel = (value: string) => {
  return value
    .replace(/_/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .replace(/\bAnd\b/g, '&');
};

export const SEARCH_INPUT_MAX_LENGTH = 30;

const SEARCH_INPUT_ALLOWED_PATTERN = /[^a-zA-Z\s]/g;

export const stripSearchInputSpecialChars = (value: string) =>
  value.replace(SEARCH_INPUT_ALLOWED_PATTERN, '');

export const sanitizeSearchInput = (value: string, maxLength = SEARCH_INPUT_MAX_LENGTH) =>
  stripSearchInputSpecialChars(value).slice(0, maxLength);

export const getSearchInputLengthError = (
  value: string,
  maxLength = SEARCH_INPUT_MAX_LENGTH
): string | null => {
  if (stripSearchInputSpecialChars(value).length > maxLength) {
    return `Search must be ${maxLength} characters or less`;
  }

  return null;
};
