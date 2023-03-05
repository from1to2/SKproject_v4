import React from 'react';
import { Checkbox, TextField, Button, FormControlLabel, Link, Grid, Typography, Avatar, Box, Container } from "@mui/material";
import { LockOutlined } from '@mui/icons-material';

const New = () => {
    return (
        <Container component="main" maxwidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" varient='h5'>
                    Sign in
                </Typography>
                <TextField
                    label="Email Address"
                    required
                    name='email'
                    autoComplete='email'
                    autoFocus
                    fullWidth
                    margin="normal"
                /><br />
                <TextField
                    label="Password"
                    type="password"
                    name='password'
                    autoComplete='current-password'
                    fullWidth
                />
                <FormControlLabel control={<Checkbox
                    value='remember' color='primary' />}
                    label='Remember me' />
                <Button
                    type='submit'
                    fullWidth
                    varient='contained'
                    sx={{ mt: 3, mb: 2 }}
                    size="large">SIGN IN!</Button>
                <Grid container>
                    <Grid item xs>
                        <Link>Forgot password?</Link>
                    </Grid>
                    <Grid item>
                        <Link>"Sign Up!"</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
};

export default New;             