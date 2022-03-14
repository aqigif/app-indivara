import { CircularProgress, Snackbar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import MuiAlert from '@mui/material/Alert';
import { useFormik } from "formik";
import * as yup from 'yup';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Indivara App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Login() {
  const { doLogin } = useAuth("no-auth-only");

  const navigate = useNavigate();
  
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState(""); // to store error message

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ""
    },
    validationSchema: yup.object({
      email: yup.string().email("Format email tidak sesuai").required("Email wajib diisi"),
      password:  yup.string().min(6, "Password minimal 6 karakter").required("Password wajib diisi")
    }),
    onSubmit: values => {
      handleSubmit(values)
    },
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    const payload = await doLogin({
      email: values.email,
      password: values.password,
    });

    if (payload?.token) {
      navigate("/pokemons");
    } else  if (payload?.data?.error === "user not found") {
      setMessage("Email or Password is Wrong")
    } else {
      setMessage("Somethin went wrong")
    }
    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={formik.handleBlur("email")}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formik.values.password}
            onChange={formik.handleChange("password")}
            onBlur={formik.handleBlur("password")}
            error={formik.touched.email && formik.errors.password}
            helperText={formik.touched.email && formik.errors.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disableElevation
            disabled={loading}
          >
            {loading && <CircularProgress
              size={20}
              style={{ color: "white", marginRight: 10 }}
            />}
            <span>Sign In</span>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
      <Snackbar open={Boolean(message)} autoHideDuration={6000} onClose={() => setMessage("")}>
        <Alert onClose={() => setMessage("")} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      {/* snackbar alert with error severity*/}
    </Container>
  );
}
