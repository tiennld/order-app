import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
export function Shipping({ formData, handleChange }) {
    return (
        <Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Shipping </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div> {/* Use a <div> here instead of <Typography> */}
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-name`}>phone number</InputLabel>
                        <Input
                            id={`component-helper-name`}
                            value={formData.shipping.phoneNumber}
                            aria-describedby={`component-helper-text-name`}
                            onChange={(e) => handleChange(e, 'shipping', -1, 'phoneNumber', 'none')}
                        />
                    </FormControl>
                    <br />
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-category`}>country code</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.shipping.countryCode}
                            data-id-error="shipping-countryCode"
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'shipping', -1, 'countryCode', 'none')}
                        />
                        <FormHelperText error hidden id={`shipping-countryCode`}>
                            Some important helper text
                        </FormHelperText>
                    </FormControl>
                    <br />
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-category`}>name</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.shipping.name}
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'shipping', -1, 'name', 'none')}
                        />
                    </FormControl>
                    <br />
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-category`}>postcode</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.shipping.postcode}
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'shipping', -1, 'postcode', 'none')}
                        />
                    </FormControl>
                    <br />
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-category`}>suburb</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.shipping.suburb}
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'shipping', -1, 'suburb', 'none')}
                        />
                    </FormControl>
                    <br />
                    <FormControl variant="standard">
                        <InputLabel htmlFor={`component-helper-category`}>line1</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.shipping.line1}
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'shipping', -1, 'line1', 'none')}
                        />
                    </FormControl>
                </div> {/* Close the <div> */}
            </AccordionDetails>
        </Accordion>
    )
}