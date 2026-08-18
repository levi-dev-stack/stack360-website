export const isClientSideComponent = () => typeof window !== 'undefined';

export const safeJSONParser = (json: string | null) => {
  try {
    return json ? JSON.parse(json) : null;
  } catch (err) {
    console.error('safeJSONParser:-> ', err);
    return json;
  }
};

export const logGroup = (header: string, logs: Record<string, unknown>) => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  const isHeaderPresent = header?.trim().length > 0;
  isHeaderPresent && console.group(`---------------- ${header} ----------------`);
  for (const [key, value] of Object.entries(logs)) {
    console.log(`${key}:->`, value);
  }
  isHeaderPresent && console.groupEnd();
};

export const waitTill = (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};
