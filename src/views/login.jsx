import React from "react"
import { Button, Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid'





const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        padding: theme.spacing(0),
        margin: theme.spacing(0),
        marginTop: '-65px',
        display: "flex",
        maxWidth: "100%",
        alignItems: "center",
    },
    subTitle: {
        fontSize: theme.spacing(3),
        fontStyle: "normal",
        fontWeight: "800",
        margin: '10vh',
        // lineHeight: "117px",
        [theme.breakpoints.down('md')]: {
            fontSize: theme.spacing(2),
        }
    },
    loginContainer: {
        height: "100%",
        width:'50%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    imageContainer: {
        height: "100vh",
        width:'50%',
        //backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
    },
  
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5%",
        marginTop: "2%",
        borderWidth: "2%",
        fontWeight: "800",

    },
    buttonsActions: {
        alignItems: "baseline",
        justifyContent: "space-between",
        border: 1,
        padding: "0",
    },
    textField: {
        paddingBottom: theme.spacing(2.5),
    },
    footTitle: {
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: theme.spacing(2.3),
        lineHeight: "89%",
        display: "flex",
        alignItems: "flex-end",
        textAlign: "center",
        color: theme.palette.primary.main,
        marginTop: "15%",
    },

    GoogleLogo: {
        marginTop: "5%",
        width: "82%",
        height: "auto",
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(5),
            padding:'2px',
        }

    },

    containerButton: {
        display: "flex",
    },


    typographyLink: {
        textDecoration: "none",
        color: theme.palette.warning.light,
    },
    typographyLinkA: {
        fontWeight: "800",
        letterSpacing: "0.2em",
        fontSize: theme.spacing(1.5),
    },
    loginButton: {},
    googleGImage: {
        maxHeight: "40%",
    },
    colaboradoresLabel: {
        color: theme.palette.primary.light,
        fontWeight: "800",
        position: "absolute",
        bottom: "10px",
    },
    gridContainer: {
        maxWidth: theme.spacing(40)
    }
}))

// const validationSchema = Yup.object().shape({
//     username: Yup.string().required("Campo Obrigatório"),
//     password: Yup.string().required("Campo Obrigatório"),
// })

const Login = () => {
    const classes = useStyles()
   


    return (
        <Container className={classes.container}>
            <Container className={classes.loginContainer}>

                <img  alt="Ahgora" className={classes.ahgoraLogo}/>
                <Typography className={classes.subTitle} align="center"> Sistema OcenanoCafé</Typography>

                <Grid container direction="row" justify="center" alignContent="center" className={classes.gridContainer}>
                    <Grid  item sm={3} md={2}>
                        <img  alt='logo' className={classes.GoogleLogo} />
                    </Grid>
                    <Grid item sm={9} md={10} >
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            
                            className={classes.buttonContainer}
                            type="submit"

                        >
                            Logar com o Google
                    </Button>
                    </Grid>

                </Grid>

                <Typography className={classes.footTitle}>Acesso exclusivo para colaboradores </Typography>

            </Container>
           

        </Container>
    )
}

export default Login
