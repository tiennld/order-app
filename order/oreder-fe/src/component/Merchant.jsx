import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export function Merchant({ formData, handleChange }) {
    return (
        <Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Merchant <span className="required">*Required</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div> {/* Use a <div> here instead of <Typography> */}
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-name`}>redirect cancel url</InputLabel>
                        <Input
                            id={`component-helper-name`}
                            value={formData.merchant.redirectCancelUrl}
                            data-id-error="merchant-redirectCancelUrl"
                            aria-describedby={`component-helper-text-name`}
                            onChange={(e) => handleChange(e, 'merchant', -1, 'redirectCancelUrl', 'none')}
                        />
                        <FormHelperText error hidden id={`merchant-redirectCancelUrl`}>
                            Some important helper text
                        </FormHelperText>
                    </FormControl>
                    <span className="required">*Required</span>
                    <br />
                    <FormControl variant="standard">
                        <InputLabel htmlFor={`component-helper-category`}>redirect confirm url</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.merchant.redirectConfirmUrl}
                            data-id-error="merchant-redirectConfirmUrl"
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'merchant', -1, 'redirectConfirmUrl', 'none')}
                        />
                        <FormHelperText error hidden id={`merchant-redirectConfirmUrl`}>
                            Some important helper text
                        </FormHelperText>
                    </FormControl>
                    <span className="required">*Required</span>
                </div> {/* Close the <div> */}
            </AccordionDetails>
        </Accordion>
    )
}