const URL = "http://localhost:5000/products";

export default {
  getSerchId: async () => {
    const res = await fetch(URL);
    const json = await res.json();
    return json;
  },
};
