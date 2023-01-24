import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layout/AuthLayout";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };
  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              onChange={onInputChange}
              name="password"
              value={password}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuthenticating}
                variant="contained"
                fullWidth
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ ml: 1 }}> Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link color="inherit" to="/auth/register" component={RouterLink}>
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
