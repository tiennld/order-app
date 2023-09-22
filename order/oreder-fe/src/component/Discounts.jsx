import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export function Discounts({ formData, handleChange,setFormData }) {

    const addDiscount = () => {
        // Create a new discount object with default or initial values
        const newDiscount = {
            displayName: '',
            amount: {
                amount: '',
                currency: '',
            },
        };

        // Update the formData state by adding the new discount to the discounts array
        setFormData((prevFormData) => ({
            ...prevFormData,
            discounts: [...prevFormData.discounts, newDiscount],
        }));
    };

    const removeDiscount = (indexToRemove) => {
        // Create a copy of the formData object
        const updatedFormData = { ...formData };

        // Use splice to remove the discount item at the specified index
        updatedFormData.discounts.splice(indexToRemove, 1);

        // Update the formData state with the modified array
        setFormData(updatedFormData);
    };

    return (
        <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Discount</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Button onClick={addDiscount} variant="outlined">Add more</Button>
                    <br />
                    <br />
                    {formData.discounts.length == 0 && "Empty"}
                    {formData.discounts.map((discount, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Discount {index + 1}
                                    <IconButton onClick={() => removeDiscount(index)} aria-label="delete" color="error" size="large">
                                        <DeleteIcon />
                                    </IconButton>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div> {/* Use a <div> here instead of <Typography> */}

                                    <FormControl variant="standard">
                                        <InputLabel htmlFor={`component-helper-name-${index}`}>Display name</InputLabel>
                                        <Input
                                            id={`component-helper-name-${index}`}
                                            value={discount.displayName}
                                            aria-describedby={`component-helper-text-name-${index}`}
                                            onChange={(e) => handleChange(e, 'discounts', index, 'displayName', 'none')}
                                        />
                                        <FormHelperText id={`component-helper-text-name-${index}`}>
                                            Some important helper text
                                        </FormHelperText>
                                    </FormControl>
                                    {/*Total Amount*/}
                                    <Accordion >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Amount <span className="required">*Required</span></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div> {/* Use a <div> here instead of <Typography> */}
                                                <FormControl variant="standard" className="margin-form-control">
                                                    <InputLabel htmlFor={`component-helper-name`}>amount</InputLabel>
                                                    <Input
                                                        id={`component-helper-name`}
                                                        value={discount.amount.amount}
                                                        type="number"
                                                        data-id-error={`discounts-` + index + `-amount-amount`}
                                                        aria-describedby={`component-helper-text-name`}
                                                        onChange={(e) => handleChange(e, 'discounts', index, 'amount', 'amount')}
                                                    />
                                                    <FormHelperText error hidden id={`discounts-` + index + `-amount-amount`}>
                                                        Some important helper text
                                                    </FormHelperText>
                                                </FormControl>
                                                <span className="required">*Required</span>
                                                <br />
                                                <FormControl variant="standard">
                                                    <InputLabel htmlFor={`component-helper-category`}>currency</InputLabel>
                                                    <Input
                                                        id={`component-helper-category`}
                                                        value={discount.amount.currency}
                                                        aria-describedby={`component-helper-text-category`}
                                                        onChange={(e) => handleChange(e, 'discounts', index, 'currency', 'amount')}
                                                    />
                                                </FormControl>
                                            </div> {/* Close the <div> */}
                                        </AccordionDetails>
                                    </Accordion>

                                </div> {/* Close the <div> */}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </AccordionDetails>
            </Accordion>
    )
}