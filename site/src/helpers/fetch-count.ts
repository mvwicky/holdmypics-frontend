export async function fetchCount(): Promise<number | null> {
  const countUrl = new URL("https://holdmypics.com/api/count/");
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
