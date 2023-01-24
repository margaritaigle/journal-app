import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

export const RegisterPage = () => {
  const { displayName, email, password, onInputChange } = useForm({
    email: "",
    password: "",
    displayName: "",
  });

  const onSubmit = (event) => {};

  return (
    <AuthLayout title="Create account">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Margarita Iglesias"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Register
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
            <Link color="inherit" to="/auth/login" component={RouterLink}>
              Sign In
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
