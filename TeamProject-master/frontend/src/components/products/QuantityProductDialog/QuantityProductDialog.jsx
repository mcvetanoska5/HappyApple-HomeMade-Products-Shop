import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import React, {useState} from "react";

const QuantityProductDialog = ({open, onClose, changeQuantity, product}) => {
    const [quantity, setQuantity] = useState(1); // default quantity = 1

    const handleSubmit = () => {
        if (quantity > 0) {
            changeQuantity(product.productId, quantity);
            onClose();
        } else {
            alert("Quantity must be greater than 0!");
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Change Quantity</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter the new quantity for <strong>[{product.productId}]: {product.productName}</strong>:
                </DialogContentText>

                <TextField
                    autoFocus
                    margin="dense"
                    label="Quantity"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={quantity}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        if (value >= 1) setQuantity(value);
                    }}
                    inputProps={{ min: 1 }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button color="primary" variant="contained" onClick={handleSubmit}>
                    Update
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default QuantityProductDialog;