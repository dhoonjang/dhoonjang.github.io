export const getArrayAverage = (arr: Array<number>) => {
  return arr.reduce((sum, current) => sum + current, 0) / arr.length;
};
