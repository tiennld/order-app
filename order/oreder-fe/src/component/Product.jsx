import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export function Product({ formData, setFormData }) {

    const handleChangeProduct = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            product: e.target.value,
        }));
    };

    return (
        <Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Product</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div> {/* Use a <div> here instead of <Typography> */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Product</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Product"
                            value={formData.product}
                            onChange={handleChangeProduct}
                        >
                            <MenuItem value={'pay-in-3'}>pay-in-3</MenuItem>
                            <MenuItem value={'pay-in-4'}>pay-in-4</MenuItem>
                            <MenuItem value={'later'}>later</MenuItem>
                        </Select>
                    </FormControl>
                </div> {/* Close the <div> */}
            </AccordionDetails>
        </Accordion>
    )
}