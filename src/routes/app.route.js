import React from "react";
import Dashboard from "../views/Dashboard";
import Produtos from "../views/Produtos";
import Pedidos from "../views/Pedidos";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AssignmentIcon from "@material-ui/icons/Assignment";

const AppRoutes = [
  {
    text: "Dashboard",
    path: "/dashboard",
    component: <Dashboard />,
    icon: <DashboardIcon />,
  },
  {
    text: "Estoque",
    path: "/produtos",
    component: <Produtos />,
    icon: <ShoppingCartIcon />,
  },
  {
    text: "Pedidos",
    path: "/pedidos",
    component: <Pedidos />,
    icon: <AssignmentIcon />,
  },
];

export default AppRoutes;
