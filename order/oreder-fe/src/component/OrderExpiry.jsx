import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

export function OrderExpiry({ formData, handleChange }) {
    return (
        <Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Order Expiry Miliseconds </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div> {/* Use a <div> here instead of <Typography> */}
                    <FormControl variant="standard">
                        <InputLabel htmlFor={`component-helper-name`}></InputLabel>
                        <Input
                            id={`component-helper-name`}
                            value={formData.orderExpiryMilliseconds}
                            type="number"
                            data-id-error="orderExpiryMilliseconds"
                            aria-describedby={`component-helper-text-name`}
                            onChange={(e) => handleChange(e, 'orderExpiryMilliseconds', -1, 'orderExpiryMilliseconds', 'none')}
                        />
                    </FormControl>
                    <FormHelperText error hidden id={`orderExpiryMilliseconds`}>
                        Some important helper text
                    </FormHelperText>
                </div> {/* Close the <div> */}
            </AccordionDetails>
        </Accordion>
    )
}