export default class Data {
  async getData(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`could not fetch ${url} problem ${res.status}`);
    }
    return await res.json();
  }
}
