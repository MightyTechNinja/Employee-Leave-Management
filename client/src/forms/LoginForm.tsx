import { useState } from "react";
import { Link } from "react-router-dom";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import { AppDispatch, login } from "../store";
import useSnackbar from "../hooks/useSnackbar";
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    InputAdornment,
    OutlinedInput,
    IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

const LoginWindow = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { handleOpen } = useSnackbar();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const onSubmit = (values: { email: string; password: string }) => {
        dispatch(login(values))
            .unwrap()
            .catch((err: any) => console.log(err))
            .finally(() => handleOpen("xd"));
    };

    return (
        <>
            <div className="flex flex-col bg-white shadow rounded w-screen md:min-w-96 md:w-full">
                <Logo primary />
                <div className="flex flex-col text-center px-8 py-4">
                    <h3 className="text-lg text-gray-700 font-semibold">
                        Sign In
                    </h3>
                    <p className="text-sm text-gray-500">
                        Enter your email address and password to access admin
                        panel
                    </p>
                </div>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col items-center space-y-6 pb-12 py-2 px-8"
                        >
                            <Field name="email">
                                {(props) => (
                                    <TextField
                                        variant="outlined"
                                        label="Email"
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                        sx={{ width: "320px" }}
                                        fullWidth
                                        required
                                    />
                                )}
                            </Field>
                            <Field name="password">
                                {(props) => (
                                    <div className="flex flex-col items-center space-y-1">
                                        <Link
                                            to="/reset"
                                            className="w-full text-end text-xs text-gray-500 hover:text-gray-700"
                                        >
                                            Forget your password?
                                        </Link>
                                        <FormControl
                                            variant="outlined"
                                            fullWidth
                                        >
                                            <InputLabel htmlFor="outlined-adornment-password">
                                                Password
                                            </InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={
                                                                handleClickShowPassword
                                                            }
                                                            onMouseDown={
                                                                handleMouseDownPassword
                                                            }
                                                            edge="end"
                                                        >
                                                            {showPassword ? (
                                                                <VisibilityOff />
                                                            ) : (
                                                                <Visibility />
                                                            )}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                                sx={{ width: "320px" }}
                                                required
                                            />
                                        </FormControl>
                                    </div>
                                )}
                            </Field>
                            <Button
                                type="submit"
                                sx={{ bgcolor: "#3B82F6" }}
                                variant="contained"
                            >
                                Log In
                            </Button>
                        </form>
                    )}
                />
            </div>
            <Footer center>
                <p>
                    Don't have an account?{" "}
                    <Link to="/register" className="hover:text-gray-700">
                        Sign Up
                    </Link>
                </p>
            </Footer>
        </>
    );
};

export default LoginWindow;