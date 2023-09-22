import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export function Items({ formData, handleChange,setFormData }) {

    const addItem = () => {
        // Create a new discount object with default or initial values
        const newItem = {
            name: '',
            category: '',
            subcategory: [],
            brand: '',
            gtin: '',
            sku: '',
            quantity: '',
            price: {
                amount: '',
                currency: '',
            },
            pageUrl: '',
            imageUrl: '',
        };
    
        // Update the formData state by adding the new discount to the discounts array
        setFormData((prevFormData) => ({
            ...prevFormData,
            items: [...prevFormData.items, newItem],
        }));
    };
    
    const removeItem = (indexToRemove) => {
        // Create a copy of the formData object
        const updatedFormData = { ...formData };
    
        // Use splice to remove the discount item at the specified index
        updatedFormData.items.splice(indexToRemove, 1);
    
        // Update the formData state with the modified array
        setFormData(updatedFormData);
    };
    
    const handleChangeSubcategory = (e, indexItem, indexSub) => {
        let value = e.target.value;
        setFormData((prevFormData) => {
            const updatedItems = [...prevFormData.items];
            updatedItems[indexItem].subcategory[indexSub] = value
            return {
                ...prevFormData,
                items: updatedItems,
            };
        });
    };
    
    const addSubcategory = (itemIndex) => {
        setFormData((prevFormData) => {
            const updatedItems = [...prevFormData.items];
            updatedItems[itemIndex].subcategory.push("");
    
            return {
                ...prevFormData,
                items: updatedItems,
            };
        });
    };
    const removeSubcategory = (indexItems, indexSubToRemove) => {
        // Create a copy of the formData object
        const updatedFormData = { ...formData };
    
        // Use splice to remove the discount item at the specified index
        updatedFormData.items[indexItems].subcategory.splice(indexSubToRemove, 1);
    
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
                    <Typography>Item <span className="required">*Required</span></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Button onClick={addItem} variant="outlined">Add more</Button>
                    <br />
                    <br />
                    {formData.items.length == 0 && "Empty"}
                    {formData.items.map((item, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Item {index + 1}
                                    <IconButton onClick={() => removeItem(index)} aria-label="delete" color="error" size="large">
                                        <DeleteIcon />
                                    </IconButton>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div> {/* Use a <div> here instead of <Typography> */}
                                    <FormControl variant="standard" className='margin-form-control'>
                                        <InputLabel htmlFor={`component-helper-name-${index}`}>Name</InputLabel>
                                        <Input
                                            id={`component-helper-name-${index}`}
                                            value={item.name}
                                            aria-describedby={`component-helper-text-name-${index}`}
                                            onChange={(e) => handleChange(e, 'items', index, 'name', 'none')}
                                        />
                                    </FormControl>
                                    {/*PRICE*/}
                                    <Accordion className='margin-form-control'>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Price <span className="required">*Required</span></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div> {/* Use a <div> here instead of <Typography> */}
                                                <FormControl variant="standard" className='margin-form-control'>
                                                    <InputLabel htmlFor={`component-helper-name`}>amount</InputLabel>
                                                    <Input
                                                        id={`component-helper-name`}
                                                        value={item.price.amount}
                                                        type="number"
                                                        data-id-error={`items-` + index + `-price-amount`}
                                                        aria-describedby={`component-helper-text-name`}
                                                        onChange={(e) => handleChange(e, 'items', index, 'amount', 'price')}
                                                    />
                                                    <FormHelperText error hidden id={`items-` + index + `-price-amount`}>
                                                        Some important helper text
                                                    </FormHelperText>
                                                </FormControl>
                                                <span className="required">*Required</span>
                                                <br />
                                                <FormControl variant="standard">
                                                    <InputLabel htmlFor={`component-helper-category`}>currency</InputLabel>
                                                    <Input
                                                        id={`component-helper-category`}
                                                        value={item.price.currency}
                                                        aria-describedby={`component-helper-text-category`}
                                                        onChange={(e) => handleChange(e, 'items', index, 'currency', 'price')}
                                                    />
                                                </FormControl>
                                            </div> {/* Close the <div> */}
                                        </AccordionDetails>
                                    </Accordion>
                                    <FormControl variant="standard" className='margin-form-control'>
                                        <InputLabel htmlFor={`component-helper-category-${index}`}>Category</InputLabel>
                                        <Input
                                            id={`component-helper-category-${index}`}
                                            value={item.category}
                                            aria-describedby={`component-helper-text-category-${index}`}
                                            onChange={(e) => handleChange(e, 'items', index, 'category', 'none')}
                                        />
                                    </FormControl>
                                    {/* SUB CATEGORY*/}
                                    <Accordion className='margin-form-control'>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography>Subcategory</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Button onClick={() => addSubcategory(index)} variant="outlined">Add more</Button>
                                            <br />
                                            <br />
                                            {item.subcategory.length == 0 && "Empty"}
                                            {item.subcategory.map((sub, indexSub) => (
                                                <Accordion key={indexSub}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography>Subcategory {indexSub + 1}
                                                            <IconButton onClick={() => removeSubcategory(index, indexSub)} aria-label="delete" color="error" size="large">
                                                                <DeleteIcon />
                                                            </IconButton>
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <div> {/* Use a <div> here instead of <Typography> */}
                                                            <FormControl variant="standard">
                                                                <InputLabel htmlFor={`component-helper-name`}></InputLabel>
                                                                <Input
                                                                    id={`component-helper-name`}
                                                                    value={sub}
                                                                    aria-describedby={`component-helper-text-name`}
                                                                    onChange={(e) => handleChangeSubcategory(e, index, indexSub)}
                                                                />
                                                            </FormControl>
                                                        </div> {/* Close the <div> */}
                                                    </AccordionDetails>
                                                </Accordion>
                                            ))}
                                        </AccordionDetails>
                                    </Accordion>
                                    <FormControl variant="standard" className='margin-form-control'>
                                        <InputLabel htmlFor={`component-helper-category-${index}`}>Brand</InputLabel>
                                        <Input
                                            id={`component-helper-category-${index}`}
                                            value={item.brand}
                                            aria-describedby={`component-helper-text-category-${index}`}
                                            onChange={(e) => handleChange(e, 'items', index, 'brand', 'none')}
                                        />
                                    </FormControl>
                                    <br />
                                    <FormControl variant="standard" className='margin-form-control'>
                                        <InputLabel htmlFor={`component-helper-category-${index}`}>Gtin</InputLabel>
                                        <Input
                                            id={`component-helper-category-${index}`}
                                            value={item.gtin}
                                            aria-describedby={`component-helper-text-category-${index}`}
                                            onChange={(e) => handleChange(e, 'items', index, 'gtin', 'none')}
                                        />
                                    </FormControl>
                                    <br />
                                    <FormControl variant="standard" className='margin-form-control'>
                                        <InputLabel htmlFor={`component-helper-category-${index}`}>Sku</InputLabel>
                                        <Input
                                            id={`component-helper-category-${index}`}
                                            value={item.sku}
                                            aria-describedby={`component-helper-text-category-${index}`}
                                            onChange={(e) => handleChange(e, 'items', index, 'sku', 'none')}
                                        />
                                    </FormControl>
                                    <br />
                                    <FormControl variant="standard" className='margin-form-control'>
                                        <InputLabel htmlFor={`component-helper-category-${index}`}>Quantity</InputLabel>
                                        <Input
                                            id={`component-helper-category-${index}`}
                                            value={item.quantity}
                                            type="number"
                                            data-id-error={`items-` + index + `-quantity`}
                                            aria-describedby={`component-helper-text-category-${index}`}
                                            onChange={(e) => handleChange(e, 'items', index, 'quantity', 'none')}
                                        />
                                        <FormHelperText error hidden id={`items-` + index + `-quantity`}>
                                            Some important helper text
                                        </FormHelperText>
                                    </FormControl>
                                    <span className="required">*Required</span>
                                    <br />
                                    <FormControl variant="standard" className='margin-form-control'>
                                        <InputLabel htmlFor={`component-helper-category-${index}`}>page url</InputLabel>
                                        <Input
                                            id={`component-helper-category-${index}`}
                                            value={item.pageUrl}
                                            aria-describedby={`component-helper-text-category-${index}`}
                                            onChange={(e) => handleChange(e, 'items', index, 'pageUrl', 'none')}
                                        />
                                    </FormControl>
                                    <br />
                                    <FormControl variant="standard">
                                        <InputLabel htmlFor={`component-helper-category-${index}`}>image url</InputLabel>
                                        <Input
                                            id={`component-helper-category-${index}`}
                                            value={item.imageUrl}
                                            aria-describedby={`component-helper-text-category-${index}`}
                                            onChange={(e) => handleChange(e, 'items', index, 'imageUrl', 'none')}
                                        />
                                    </FormControl>
                                </div> {/* Close the <div> */}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </AccordionDetails>
            </Accordion>
    )
}