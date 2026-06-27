import {useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import useUsers from "../../../hooks/useUsers";


const EditUserDialog = ({open, onClose, user}) => {

    const [editCardDialogOpen, setEditCardDialogOpen] = useState(false);

    const {onEdit} = useUsers();

    const [formData, setFormData] = useState({
        "name": user.name,
        "surname": user.surname,
        "password": ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        onEdit(formData)
        onClose();
    };


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Surname"
                    name="surname"
                    type="text"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" color="warning" className="submit-btn" onClick={handleSubmit}>Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditUserDialog;