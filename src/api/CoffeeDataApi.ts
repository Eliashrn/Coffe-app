export async function fecthData(url: string) {
  const res = await fetch(url);
  return res.json();
}
