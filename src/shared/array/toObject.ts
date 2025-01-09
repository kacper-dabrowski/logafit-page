export const arrayToObject = <T>(array: T[]) => {
  const obj: Record<number, T> = {};

  return array.reduce((acc, item, index) => ({ ...acc, [index]: item }), obj);
};
