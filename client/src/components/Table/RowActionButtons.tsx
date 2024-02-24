import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface Props {
    id: number | string;
}

const RowActionButtons = ({ id }: Props) => {
    const navigate = useNavigate();

    const handleNavigate = (to: string) => {
        navigate(to);
    };

    return (
        <div className="flex flex-row items-center justify-end space-x-2">
            <IconButton
                onClick={() => handleNavigate(`../edit?id=${id}`)} //{`../edit?id=...`}
                aria-label="edit"
                sx={{ padding: 0 }}
            >
                <Edit />
            </IconButton>
            <IconButton aria-label="edit" sx={{ padding: 0 }}>
                <Delete />
            </IconButton>
        </div>
    );
};

export default RowActionButtons;
