import { Route, Routes } from "react-router-dom";
import { createPortal } from "react-dom";
import Layout from "./layout/Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NewDepartment from "./pages/Department/new";
import DepartmentList from "./pages/Department/list";
import NewEmployee from "./pages/Employee/new";
import EmployeeList from "./pages/Employee/list";
import LeaveTypeList from "./pages/LeaveType/list";
import LeaveTypeUpdate from "./pages/LeaveType/update";
import SnackbarStatus from "./components/SnackbarStatus";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/login" element={<Auth />} />
                <Route path="/register" element={<Auth />} />
                <Route element={<Home />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/department">
                        <Route path="new" element={<NewDepartment />} />
                        <Route path="list" element={<DepartmentList />} />
                    </Route>
                    <Route path="/leave-type">
                        <Route path="update" element={<LeaveTypeUpdate />} />
                        <Route path="list" element={<LeaveTypeList />} />
                    </Route>
                    <Route path="/employee">
                        <Route path="new" element={<NewEmployee />} />
                        <Route path="list" element={<EmployeeList />} />
                    </Route>
                    <Route path="/leave"></Route>
                </Route>
            </Routes>
            {createPortal(<SnackbarStatus />, document.body)}
        </Layout>
    );
};

export default App;
