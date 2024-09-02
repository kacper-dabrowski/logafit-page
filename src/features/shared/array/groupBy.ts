export const groupBy = <T, K extends keyof T>(array: T[], key: K) => {
  return array.reduce((acc, current) => {
    const value = current[key];

    if (!acc[value]) {
      Object.assign(acc, { [value]: [] });
    }

    acc[value].push(current);

    return acc;
  });
};
