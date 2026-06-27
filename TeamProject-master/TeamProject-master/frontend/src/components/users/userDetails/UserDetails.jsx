import {useEffect, useState} from "react";
import userRepository from "../../../repository/userRepository";
import {Box, Button, CircularProgress, Paper, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {EditIcon} from "lucide-react";
import EditUserDialog from "../EditUserDialog/EditUserDialog";


const UserDetails = () => {

    const [user, setUser] = useState(null);
    const [editCardDialogOpen, setEditCardDialogOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        userRepository.me() // <-- use the `me` method here
            .then((response) => {
                setUser(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Failed to fetch current user", error);
                setLoading(false);
            });
    }, []);

    if (!user)
        return <Box className="progress-box"><CircularProgress/></Box>;


    return (
        <>
            <Box width={750} mx="auto" mt={3}>
                <Paper elevation={12} sx={{p: 4, borderRadius: 4}}>
                    <Stack spacing={3}>
                        <Typography variant="h5" fontWeight="bold" color="text.secondary">
                            Username: {user.username}
                        </Typography>
                        <Stack spacing={1}>
                            <Typography variant="h6" color="text.secondary" sx={{fontStyle: 'italic'}}>
                                {user.role}
                            </Typography>

                            <Stack direction="row" spacing={1}>
                                <Typography variant="body1" color="text.secondary">
                                    {user.name}
                                </Typography>

                                <Typography variant="body1" color="text.secondary">
                                    {user.surname}
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between" spacing={2} mt={2}>
                            <Button
                                variant="outlined"
                                color="warning"
                                startIcon={<EditIcon/>}
                                sx={{mr: "0.25rem"}}
                                onClick={() => setEditCardDialogOpen(true)}
                            >
                                Edit Profile
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </Box>

            <EditUserDialog
                open={editCardDialogOpen}
                onClose={() => setEditCardDialogOpen(false)}
                user={user}
            />
        </>
    );
};

export default UserDetails;