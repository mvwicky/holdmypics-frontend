function fakeFetchCount(
  maxValue: number,
  waitTime: number = 1000
): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(Math.trunc(Math.random() * maxValue));
    }, waitTime);
  });
}

export async function fetchCount(): Promise<number | null> {
  const countUrl = new URL("https://holdmypics.com/api/count/");
  const devMode = import.meta.env.MODE === "development";
  if (devMode) {
    const count = await fakeFetchCount(33000, 3000);
    return count;
  }

  try {
    const res = await fetch(countUrl.href);
    if (res.ok) {
      const data = await res.json();
      if (Object.prototype.hasOwnProperty.call(data, "count")) {
        return Number(data.count);
      }
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}
