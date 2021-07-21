import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logoOceanoCafe from "../assets/img/logoOceanoCafe.png";
import { Button, Grid } from "@material-ui/core";
import CadProdutos from "../views/CadProdutos";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#37BEB0",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#37BEB0",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menu: {
    textDecoration: "none",
    color: "#FFF",
    fontWeight: "700",
  },
  logo: {
    textAlign: "center",
    padding: "20px",
    color: "#FFFF",
  },
  img: {
    borderRadius: "50%",
  },
  botao: {
    backgroundColor: "#BDBDBD",
  },
  areabtn: {
    textAlign: "center",
    marginTop: 190,
  },
  sidbar: {
    backgroundColor: "#1f3f49",
  },
  icons: {
    color: "#FFF",
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.logo}>
        <img
          className={classes.img}
          alt={"Logo "}
          width={130}
          src={logoOceanoCafe}
        />
        OceanoCaféSpring
      </div>

      <Divider />
      <List>
        {props.routes.map(({ text, path, icon }) => (
          <Link className={classes.menu} to={path}>
            <ListItem button key={text}>
              <ListItemIcon className={classes.icons}>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />

      <Grid className={classes.areabtn}>
        <Button className={classes.botao} variant="contained">
          Logout
        </Button>
      </Grid>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Router className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Oceano Café
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/cadprodutos">
            <CadProdutos />
          </Route>
          {props.routes.map((route) => (
            <Route exact path={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </main>
    </Router>
  );
}

export default ResponsiveDrawer;
