import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store";
import { FormControl, Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CustomIconButtom from "../MenuIconButton";
import Logo from "../Logo";
import AccountMenu from "./AccountMenu";

const Header = () => {
    const dispatch = useDispatch();

    const onSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <div className="fixed top-0 left-0 right-0 flex flex-row justify-center bg-white px-5 p-2 z-50 md:px-10 md:space-x-8">
            <section className="hidden md:block">
                <Logo />
            </section>
            <section className="flex flex-row items-center md:space-x-4 md:flex-1">
                <CustomIconButtom
                    className="md:hidden"
                    handleOpen={() => dispatch(toggleSidebar(true))}
                >
                    <MenuIcon />
                </CustomIconButtom>
                {/* change to reusable */}
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit }) => (
                        <form
                            className="hidden lg:block"
                            onSubmit={handleSubmit}
                        >
                            <Field name="search">
                                {(props) => (
                                    <FormControl variant="standard">
                                        <Input
                                            id="input-with-icon-adornment"
                                            placeholder="Search"
                                            name={props.input.name}
                                            value={props.input.value}
                                            onChange={props.input.onChange}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                )}
                            </Field>
                        </form>
                    )}
                />
            </section>
            <section>
                <AccountMenu />
            </section>
        </div>
    );
};

export default Header;

//not centered vertically
