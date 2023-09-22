import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export function Consumer({ formData, handleChange }) {
    return (
        <Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Consumer <span className="required">*Required</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div> {/* Use a <div> here instead of <Typography> */}
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-name`}>phone number</InputLabel>
                        <Input
                            id={`component-helper-name`}
                            value={formData.consumer.phoneNumber}
                            aria-describedby={`component-helper-text-name`}
                            onChange={(e) => handleChange(e, 'consumer', -1, 'phoneNumber', 'none')}
                        />
                    </FormControl>
                    <br />
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-category`}>given names</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.consumer.givenNames}
                            data-id-error="consumer-givenNames"
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'consumer', -1, 'givenNames', 'none')}
                        />
                        <FormHelperText error hidden id={`consumer-givenNames`}>
                            Some important helper text
                        </FormHelperText>
                    </FormControl>
                    <span className="required">*Required</span>
                    <br />
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-category`}>surname</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.consumer.surname}
                            data-id-error="consumer-surname"
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'consumer', -1, 'surname', 'none')}
                        />
                        <FormHelperText error hidden id={`consumer-surname`}>
                            Some important helper text
                        </FormHelperText>
                    </FormControl>
                    <span className="required">*Required</span>
                    <br />
                    <FormControl variant="standard">
                        <InputLabel htmlFor={`component-helper-category`}>email</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.consumer.email}
                            data-id-error="consumer-email"
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'consumer', -1, 'email', 'none')}
                        />
                        <FormHelperText error hidden id={`consumer-email`}>
                            Some important helper text
                        </FormHelperText>
                    </FormControl>

                </div> {/* Close the <div> */}
            </AccordionDetails>
        </Accordion>
    )
}