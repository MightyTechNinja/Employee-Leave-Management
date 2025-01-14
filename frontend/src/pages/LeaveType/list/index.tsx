import {
    useDeleteLeaveTypeMutation,
    useGetLeaveTypesQuery,
} from "../../../store";
import useSnackbar from "../../../hooks/useSnackbar";
import useAuth from "../../../hooks/useAuth";
import DefaultPage from "../../../layout/DefaultPage";
import ActionButtons from "../../../components/ActionButtons";
import BasicTable from "../../../components/Table";
import { fields } from "./config";

const LeaveTypeList = () => {
    const { handleOpen } = useSnackbar();
    const { user } = useAuth();

    const { data, isLoading, isFetching } = useGetLeaveTypesQuery();
    const [deleteLeaveType, result] = useDeleteLeaveTypeMutation();

    if (!data && !isLoading) {
        return null;
    }

    const leaveTypeData = Array.isArray(data)
        ? data.map((row) => ({
              ...row,
              isLoading: result.isLoading,
              userRole: user?.roles,
              handleDelete: () => handleDelete(row._id!),
          }))
        : [];

    const handleDelete = (id: string) => {
        deleteLeaveType(id)
            .then(() => {
                handleOpen("Leave Type Remove Successful");
            })
            .catch((err) => handleOpen(err.message, "error"));
    };

    return (
        <DefaultPage label="Leave Type List" bg>
            <ActionButtons
                label="Add Leave Type"
                extended={user?.roles !== "staff"}
            />
            <BasicTable
                headerOptions={fields}
                rowData={leaveTypeData}
                isLoading={isFetching}
            />
        </DefaultPage>
    );
};

export default LeaveTypeList;
