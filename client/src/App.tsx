import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { createPortal } from "react-dom";
import useSnackbar from "./hooks/useSnackbar";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import DepartmentNew from "./pages/Department/new";
import DepartmentEdit from "./pages/Department/edit";
import DepartmentList from "./pages/Department/list";
import EmployeeNew from "./pages/Employee/new";
import EmployeeEdit from "./pages/Employee/edit";
import EmployeeList from "./pages/Employee/list";
import LeaveTypeList from "./pages/LeaveType/list";
import LeaveTypeEdit from "./pages/LeaveType/edit";
import LeaveTypeNew from "./pages/LeaveType/new";
import LeaveNew from "./pages/Leave/new";
import LeaveEdit from "./pages/Leave/edit";
import LeaveList from "./pages/Leave/list";
import LeaveListPending from "./pages/Leave/listPending";
import LeaveListApproved from "./pages/Leave/listApproved";
import LeaveListRejected from "./pages/Leave/listRejected";
import ProfileSettings from "./pages/ProfileSettings";
import PrivateOutlet from "./pages/PrivateOutlet";
import NotFound from "./pages/404";
import SnackbarMsg from "./components/SnackbarMsg";
import Test from "./pages/test";
import useAuth from "./hooks/useAuth";
import { useFetchUserQuery } from "./store";

const App = () => {
    useFetchUserQuery();

    const { handleOpen } = useSnackbar();
    const { isAuthenticated } = useAuth();

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         handleOpen("Successful logged in", "success");
    //     }
    // }, [isAuthenticated]);

    return (
        <>
            <Routes>
                <Route path="/login" element={<Auth />} />
                <Route path="/register" element={<Auth />} />
                <Route path="/password/reset" element={<Auth />} />
                <Route element={<PrivateOutlet />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/department">
                        <Route path="new" element={<DepartmentNew />} />
                        <Route path="edit/:id" element={<DepartmentEdit />} />
                        <Route path="list" element={<DepartmentList />} />
                    </Route>
                    <Route path="/leave-type">
                        <Route path="new" element={<LeaveTypeNew />} />
                        <Route path="edit/:id" element={<LeaveTypeEdit />} />
                        <Route path="list" element={<LeaveTypeList />} />
                    </Route>
                    <Route path="/employee">
                        <Route path="new" element={<EmployeeNew />} />
                        <Route path="edit/:id" element={<EmployeeEdit />} />
                        <Route path="list" element={<EmployeeList />} />
                    </Route>
                    <Route path="/leave">
                        <Route path="new" element={<LeaveNew />} />
                        <Route path="edit/:id" element={<LeaveEdit />} />
                        <Route path="list" element={<LeaveList />} />
                        <Route
                            path="list-pending"
                            element={<LeaveListPending />}
                        />
                        <Route
                            path="list-approved"
                            element={<LeaveListApproved />}
                        />
                        <Route
                            path="list-rejected"
                            element={<LeaveListRejected />}
                        />
                    </Route>
                    <Route path="/settings" element={<ProfileSettings />} />
                    <Route path="/test" element={<Test />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
            <div className="fixed left-2 bottom-1 w-[calc(150px)] text-center text-gray-500 text-sm">
                If data doesn't load properly{" "}
                <button
                    onClick={() => window.location.reload()}
                    className="underline hover:text-gray-700"
                >
                    refresh the page
                </button>
            </div>
            {createPortal(<SnackbarMsg />, document.body)}
        </>
    );
};

export default App;
