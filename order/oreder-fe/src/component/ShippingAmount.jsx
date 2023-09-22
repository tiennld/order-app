import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export function ShippingAmount({ formData, handleChange }) {
    return (
        <Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Shipping Amount <span className="required">*Required</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div> {/* Use a <div> here instead of <Typography> */}
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-name`}>amount</InputLabel>
                        <Input
                            id={`component-helper-name`}
                            value={formData.shippingAmount.amount}
                            type="number"
                            data-id-error="shippingAmount-amount"
                            aria-describedby={`component-helper-text-name`}
                            onChange={(e) => handleChange(e, 'shippingAmount', -1, 'amount', 'none')}
                        />
                        <FormHelperText error hidden id={`shippingAmount-amount`}>
                            Some important helper text
                        </FormHelperText>
                    </FormControl>
                    <span className="required">*Required</span>
                    <br />
                    <FormControl variant="standard">
                        <InputLabel htmlFor={`component-helper-category`}>currency</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.shippingAmount.currency}
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'shippingAmount', -1, 'currency', 'none')}
                        />
                    </FormControl>
                </div> {/* Close the <div> */}
            </AccordionDetails>
        </Accordion>
    )
}