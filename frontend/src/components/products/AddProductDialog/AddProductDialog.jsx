import { useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";

const initialFormData = {
    productName: "",
    productPrice: "",
    productQuantity: "",
    description: "",
    images: [],
    featureList: [],
};

const AddProductDialog = ({ open, onClose, onAdd }) => {
    const [formData, setFormData] = useState(initialFormData);

    // -----------------------
    // BASIC INPUT HANDLER
    // -----------------------
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "productQuantity" && Number(value) <= 0) return;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // -----------------------
    // IMAGES HANDLERS
    // -----------------------
    const handleImageChange = (index, value) => {
        const updated = [...formData.images];
        updated[index] = value;
        setFormData({ ...formData, images: updated });
    };

    const addImageField = () => {
        setFormData({
            ...formData,
            images: [...formData.images, ""],
        });
    };

    const removeImageField = (index) => {
        const updated = formData.images.filter((_, i) => i !== index);
        setFormData({ ...formData, images: updated });
    };

    // -----------------------
    // FEATURES HANDLERS
    // -----------------------
    const handleFeatureChange = (index, value) => {
        const updated = [...formData.featureList];
        updated[index] = value;
        setFormData({ ...formData, featureList: updated });
    };

    const addFeatureField = () => {
        setFormData({
            ...formData,
            featureList: [...formData.featureList, ""],
        });
    };

    const removeFeatureField = (index) => {
        const updated = formData.featureList.filter((_, i) => i !== index);
        setFormData({ ...formData, featureList: updated });
    };

    // -----------------------
    // SUBMIT
    // -----------------------
    const handleSubmit = () => {
        onAdd({
            ...formData,
            images: formData.images.filter(img => img.trim() !== ""),
            featureList: formData.featureList.filter(f => f.trim() !== ""),
        });

        setFormData(initialFormData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Add Product</DialogTitle>

            <DialogContent>

                {/* NAME */}
                <TextField
                    margin="dense"
                    label="Name"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    fullWidth
                />

                {/* PRICE */}
                <TextField
                    margin="dense"
                    label="Price"
                    name="productPrice"
                    value={formData.productPrice}
                    onChange={handleChange}
                    fullWidth
                />

                {/* QUANTITY */}
                <TextField
                    margin="dense"
                    label="Quantity"
                    name="productQuantity"
                    type="number"
                    value={formData.productQuantity}
                    onChange={handleChange}
                    fullWidth
                />

                {/* DESCRIPTION */}
                <TextField
                    margin="dense"
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={3}
                />

                {/* ---------------- IMAGES ---------------- */}
                <h3 style={{ marginTop: "16px" }}>Images (URLs)</h3>

                {(formData.images || []).map((img, index) => (
                    <div key={index} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                        <TextField
                            fullWidth
                            placeholder="Image URL"
                            value={img}
                            onChange={(e) => handleImageChange(index, e.target.value)}
                        />
                        <Button
                            color="error"
                            onClick={() => removeImageField(index)}
                        >
                            X
                        </Button>
                    </div>
                ))}

                <Button onClick={addImageField} style={{ marginBottom: 16 }}>
                    + Add Image
                </Button>

                {/* ---------------- FEATURES ---------------- */}
                <h3>Features</h3>

                {(formData.featureList || []).map((feature, index) => (
                    <div key={index} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                        <TextField
                            fullWidth
                            placeholder="Feature"
                            value={feature}
                            onChange={(e) =>
                                handleFeatureChange(index, e.target.value)
                            }
                        />
                        <Button
                            color="error"
                            onClick={() => removeFeatureField(index)}
                        >
                            X
                        </Button>
                    </div>
                ))}

                <Button onClick={addFeatureField}>
                    + Add Feature
                </Button>

            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Add Product
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddProductDialog;