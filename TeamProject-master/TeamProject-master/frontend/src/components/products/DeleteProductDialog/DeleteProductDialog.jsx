import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

const DeleteProductDialog = ({open, onClose, onDelete, product}) => {

    const handleSubmit = () => {
        onDelete(product.productId);
        onClose();
    };


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete <strong>[{product.productId}]: {product.productName}</strong>? This action cannot be undone.
                </DialogContentText>

                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button color="error" variant="contained" onClick={handleSubmit}>Delete</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );

};

export default DeleteProductDialog;