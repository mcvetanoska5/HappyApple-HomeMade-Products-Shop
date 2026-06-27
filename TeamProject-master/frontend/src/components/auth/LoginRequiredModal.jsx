import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginRequiredModal = ({ open, onClose }) => {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        onClose();
        navigate("/login");
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogTitle>Потребна е најава</DialogTitle>
            <DialogContent>
                <Typography>
                    Нарачката не може да се изврши доколку не сте најавени.
                    Ве молиме најавете се за да продолжите.
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Откажи</Button>
                <Button variant="contained" color="primary" onClick={handleGoToLogin}>
                    Најави се
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginRequiredModal;