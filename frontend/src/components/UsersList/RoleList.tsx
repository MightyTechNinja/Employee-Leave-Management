import { useGetEmployeesQuery } from "../../store";
import ProfileCell from "../ProfileCell";

const RoleList = ({ role }: { role: "hod" | "staff" }) => {
    const { data } = useGetEmployeesQuery("staff,hod");

    if (!Array.isArray(data)) {
        return <></>;
    }

    const employeeData = data.filter((e) => e.roles === role);

    return (
        <div className="flex-1 p-6 rounded space-y-2 bg-white shadow">
            <h3>{role === "hod" ? "Department Head" : "Staff List"}</h3>
            {employeeData.map((user, index) => {
                return (
                    <ProfileCell
                        key={user.firstName + "_" + index.toString()}
                        data={user}
                    />
                );
            })}
        </div>
    );
};

export default RoleList;
