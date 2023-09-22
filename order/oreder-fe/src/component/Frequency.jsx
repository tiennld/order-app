import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export function Frequency({ formData, handleChange }) {
    return (
        <Accordion >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>Frequency <span className="required">*Required</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div> {/* Use a <div> here instead of <Typography> */}
                    <FormControl variant="standard" className="margin-form-control">
                        <InputLabel htmlFor={`component-helper-name`}>number</InputLabel>
                        <Input
                            id={`component-helper-name`}
                            value={formData.frequency.number}
                            type="number"
                            data-id-error="frequency-number"
                            aria-describedby={`component-helper-text-name`}
                            onChange={(e) => handleChange(e, 'frequency', -1, 'number', 'none')}
                        />
                        <FormHelperText error hidden id={`frequency-number`}>
                            Some important helper text
                        </FormHelperText>
                    </FormControl>
                    <span className="required">*Required</span>
                    <br />
                    <FormControl variant="standard">
                        <InputLabel htmlFor={`component-helper-category`}>frequency type</InputLabel>
                        <Input
                            id={`component-helper-category`}
                            value={formData.frequency.frequencyType}
                            data-id-error="frequency-frequencyType"
                            aria-describedby={`component-helper-text-category`}
                            onChange={(e) => handleChange(e, 'frequency', -1, 'frequencyType', 'none')}
                        />
                        <FormHelperText error hidden id={`frequency-frequencyType`}>
                            Some important helper text
                        </FormHelperText>
                    </FormControl>
                    <span className="required">*Required</span>
                </div> {/* Close the <div> */}
            </AccordionDetails>
        </Accordion>
    )
}