import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export function MerchantReference({ formData, handleChange }) {
    return (
        <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Merchant Reference </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div> {/* Use a <div> here instead of <Typography> */}
                        <FormControl variant="standard">
                            <InputLabel htmlFor={`component-helper-name`}></InputLabel>
                            <Input
                                id={`component-helper-name`}
                                value={formData.merchantReference}
                                aria-describedby={`component-helper-text-name`}
                                onChange={(e) => handleChange(e, 'merchantReference', -1, 'merchantReference', 'none')}
                            />
                        </FormControl>
                    </div> {/* Close the <div> */}
                </AccordionDetails>
            </Accordion>
    )
}