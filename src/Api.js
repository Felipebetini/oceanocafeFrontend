const BASEAPI = "http://localhost:3000/api";

const apiFetchPost = async (endpoint, body) => {
  const res = await fetch(BASEAPI + endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  return json;
};
const apiFetchPut = async (endpoint, body) => {
  const res = await fetch(BASEAPI + endpoint, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  return json;
};

const apiFetchDelete = async (endpoint, body) => {
  const res = await fetch(BASEAPI + endpoint, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  if (json.notallowed) {
    window.localtion.href = `/produtos/${body.idprodutos}`;
    return;
  }
  return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //########################PRODUTOS#############################################

  getProdutos: async () => {
    const res = await fetch(BASEAPI + "/produtos");
    const json = await res.json();
    return json;
  },

  CadProdutos: async (nome, preco, quantidade) => {
    console.log("api", nome);
    const json = await apiFetchPost("/produtos", {
      nome,
      preco,
      quantidade,
    });
    return json;
  },

  PutProdutos: async (idprodutos, nome, preco, quantidade) => {
    console.log("api");
    const json = await apiFetchPut(`/produtos/${idprodutos}`, {
      idprodutos,
      nome,
      preco,
      quantidade,
    });
    return json;
  },

  DelProdutos: async (idprodutos) => {
    const json = await apiFetchDelete(`/produtos/${idprodutos}`, {
      idprodutos,
    });
    return json;
  },
};
