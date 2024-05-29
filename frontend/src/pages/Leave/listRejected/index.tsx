import useExtendedLeaves from "../../../hooks/useExtendedLeaves";
import DefaultPage from "../../../layout/DefaultPage";
import ListSearchForm from "../../../forms/SearchForm";
import BasicTable from "../../../components/Table";
import { fields } from "../config";

const LeaveListRejected = () => {
    const { data, isFetching } = useExtendedLeaves();

    const handleSubmit = (values: any) => {
        console.log(values);
    };

    return (
        <DefaultPage label="Leave List Rejected" bg>
            <ListSearchForm data={[{ label: "x" }]} />
            <BasicTable
                headerOptions={fields}
                rowData={Array.isArray(data) ? data : []}
                isLoading={isFetching}
            />
        </DefaultPage>
    );
};

export default LeaveListRejected;
