import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export function Type({ formData, setFormData }) {

    const handleChangeType = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            type: e.target.value,
        }));
    };

    return (
        <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Type </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div> {/* Use a <div> here instead of <Typography> */}
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Type"
                                value={formData.type}
                                onChange={handleChangeType}
                            >
                                <MenuItem value={'online'}>online</MenuItem>
                                <MenuItem value={'offline'}>offline</MenuItem>
                            </Select>
                        </FormControl>
                    </div> {/* Close the <div> */}
                </AccordionDetails>
            </Accordion>
    )
}