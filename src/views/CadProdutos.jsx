import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container } from "@material-ui/core";
import { useState } from "react";
import api from "../Api";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: "90px",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 230,
    },
  },
  form: {
    paddingLeft: 100,
    margin: 0,
  },
}));

const CadProdutos = () => {
  const classes = useStyles();

  const [idprodutos, setIdprodutos] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [error, setError] = useState("");
  const [isNew, setIsNew] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const { state } = location;
    const { dados, create } = state;
    setIsNew(create);

    if (dados) {
      setNome(dados.nome);
      setPreco(dados.preco);
      setQuantidade(dados.quantidade);
      setIdprodutos(dados.idprodutos);
    } else {
      setNome("");
      setPreco("");
      setQuantidade("");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const json = (await isNew)
      ? api.CadProdutos(nome, preco, quantidade)
      : api.PutProdutos(idprodutos, nome, preco, quantidade);

    if (json.error) {
      setError(json.error);
    } else {
      window.location.href = "/produtos";
      console.log("else");
    }
  };

  return (
    <>
      <Container>
        <h1 className={classes.title}>
          {isNew ? "Cadastrar" : "Editar"} Produtos
        </h1>
        <Grid className={classes.form}>
          <form
            className={classes.title}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <TextField
                  label="Preco"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                />
                <TextField
                  label="Quantidade"
                  value={quantidade}
                  onChange={(e) => {
                    setQuantidade(e.target.value);
                  }}
                />
              </Grid>
            </Grid>

            <Button variant="contained" color="primary" onClick={handleSubmit}>
              {" "}
              Cadastrar Produtos
            </Button>
          </form>
        </Grid>
      </Container>
    </>
  );
};

export default CadProdutos;
