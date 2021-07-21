import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

import { Grid } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    whiteSpace: "nowrap",
  },
  body: {
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  wrow: {
    width: "555px",
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    marginTop: 30,
    maxWidth: 400,
    marginLeft: 300,
  },
  icons: {
    width: 33,
    cursor: "pointer",
  },
  acoesIcons: {
    display: "flex",
    justifyContent: "space-around",
  },
  addcliente: {
    marginTop: 100,
    marginLeft: 300,
  },
  button: {
    whiteSpace: "nowrap",
  },
});

const Pedidos = () => {
  const classes = useStyles();
  return (
    <>
      <Paper>
        <Container>
          <Grid>
            <h1>Pedidos</h1>
          </Grid>
          <TableContainer>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>teste</StyledTableCell>
                  <StyledTableCell align="center">teste</StyledTableCell>
                  <StyledTableCell align="center">teste</StyledTableCell>
                  <StyledTableCell align="center">teste</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {pedidos.map((dados) => (
                                <StyledTableRow key={dados}>
                                    <StyledTableCell className={classes.wrow} component="th" scope="row">
                                        {dados.nome}
                                    </StyledTableCell>
                                    <StyledTableCell className={classes.wrow} align="center">{dados}</StyledTableCell>
                                    <StyledTableCell className={classes.wrow} align="center">{dados}</StyledTableCell>
                                    <StyledTableCell className={classes.wrow} align="right">{dados}</StyledTableCell>
                                </StyledTableRow>
                            ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Paper>
    </>
  );
};

export default Pedidos;
