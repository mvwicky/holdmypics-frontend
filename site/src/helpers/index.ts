type StringTup = [string, string];

export function onlyTruthy(arr: [string, string | undefined][]): StringTup[] {
  const _arr = arr.filter(
    (elem) => typeof elem[1] !== "undefined"
  ) as StringTup[];
  return _arr;
}
