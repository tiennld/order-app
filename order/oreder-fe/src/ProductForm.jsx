import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import axios from 'axios';

import { TotalAmount } from './component/TotalAmount';
import { Consumer } from './component/Consumer';
import { Billing } from './component/Billing';
import { Shipping } from './component/Shipping';
import { Items } from './component/Items';
import { Discounts } from './component/Discounts';
import { Merchant } from './component/Merchant';
import { MerchantReference } from './component/MerchantReference';
import { ShippingAmount } from './component/ShippingAmount';
import { Type } from './component/Type';
import { TaxAmount } from './component/TaxAmount';
import { Product } from './component/Product';
import { Frequency } from './component/Frequency';
import { OrderExpiry } from './component/OrderExpiry';
function ProductForm() {

    const EXAMPLEDATA = {
        totalAmount: {
            currency: 'EUR',
            amount: '190.00',
        },
        consumer: {
            phoneNumber: '0400000001',
            givenNames: 'Joe',
            surname: 'Consumer',
            email: 'test@scalapay.com',
        },
        billing: {
            name: 'Joe Consumer',
            line1: 'Via della Rosa, 58',
            suburb: 'Montelupo Fiorentino',
            postcode: '50056',
            countryCode: 'IT',
            phoneNumber: '0400000000',
        },
        shipping: {
            name: 'Joe Consumer',
            line1: 'Via della Rosa, 58',
            suburb: 'Montelupo Fiorentino',
            postcode: '50056',
            countryCode: 'IT',
            phoneNumber: '0400000000',
        },
        merchant: {
            redirectConfirmUrl: 'https://portal.integration.scalapay.com/success-url',
            redirectCancelUrl: 'https://portal.integration.scalapay.com/failure-url',
        },
        shippingAmount: {
            currency: 'EUR',
            amount: '10.00',
        },
        taxAmount: {
            currency: 'EUR',
            amount: '3.70',
        },
        type: 'online',
        product: 'pay-in-3',
        frequency: {
            number: '1',
            frequencyType: 'monthly',
        },
        orderExpiryMilliseconds: 600000,
        items: [
            {
                name: 'T-Shirt',
                category: 'clothes',
                subcategory: ['shirt', 'long-sleeve'],
                brand: 'TopChoice',
                gtin: '123458791330',
                sku: '12341234',
                quantity: '1',
                price: {
                    amount: '10.00',
                    currency: 'EUR',
                },
                pageUrl: 'https://www.scalapay.com//product/view/',
                imageUrl: 'https://www.scalapay.com//product/view/',
            },
            {
                name: 'Jeans',
                category: 'clothes',
                subcategory: ['pants', 'jeans'],
                brand: 'TopChoice',
                gtin: '123458722222',
                sku: '12341235',
                quantity: '1',
                price: {
                    amount: '20.00',
                    currency: 'EUR',
                },
                pageUrl: '',
                imageUrl: '',
            },
        ],
        discounts: [
            {
                displayName: '10% Off',
                amount: {
                    amount: '200',
                    currency: 'EUR',
                },
            },
        ],
        merchantReference: 'merchantOrder-1234',
    };

    const EMPTYDATA = {
        totalAmount: {
            currency: '',
            amount: '',
        },
        consumer: {
            phoneNumber: '',
            givenNames: '',
            surname: '',
            email: '',
        },
        billing: {
            name: '',
            line1: '',
            suburb: '',
            postcode: '',
            countryCode: '',
            phoneNumber: '',
        },
        shipping: {
            name: '',
            line1: '',
            suburb: '',
            postcode: '',
            countryCode: '',
            phoneNumber: '',
        },
        merchant: {
            redirectConfirmUrl: '',
            redirectCancelUrl: '',
        },
        shippingAmount: {
            currency: '',
            amount: '',
        },
        taxAmount: {
            currency: '',
            amount: '',
        },
        type: 'online',
        product: 'pay-in-3',
        frequency: {
            number: '',
            frequencyType: '',
        },
        orderExpiryMilliseconds: 600000,
        items: [
            {
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
            }
        ],
        discounts: [
        ],
        merchantReference: '',
    }

    const [formData, setFormData] = useState(EMPTYDATA);

    // Change input values
    const handleChange = (e, parentKey, index, key, childrenKey) => {
        let value = e.target.value;
        let error = e.target.parentNode.getAttribute('data-id-error');
        const inputElement = document.getElementById(error);
        if (inputElement) {
            inputElement.hidden = true;
        }
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };
            let obj = updatedFormData[parentKey];
            if (Array.isArray(obj)) {
                if (childrenKey !== "none") {
                    obj[index][childrenKey][key] = value;
                } else {
                    obj[index][key] = value;
                }
            } else if (typeof obj === 'object') {
                obj[key] = value;
            } else {
                updatedFormData[parentKey] = value;
            }

            return updatedFormData;
        });
    };

    // Change the dataset 
    const handleChangeDataset = (e) => {
        
        if(e.target.value === 'Empty'){
            setFormData(EMPTYDATA);
        }else{
            setFormData(EXAMPLEDATA);
        }
    };

     // Display error fields
    const errorFieldsHandling = (errorMap) => {
        for (const [field, errorMessage] of Object.entries(errorMap)) {
            const inputElement = document.getElementById(field);
            if (inputElement) {
                inputElement.innerHTML = errorMessage;
                inputElement.hidden = false;
            }
        }
    }

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, e.g., sending data to the server
        console.log(formData)
        try {
            // Define the API endpoint URL
            const apiUrl = 'http://localhost:8080/v2/order'; // Replace with your API URL

            // Make a POST request to the API with formData as the request body
            const response = await axios.post(apiUrl, formData);
            console.log(response.data.data.checkoutUrl)
            window.location = response.data.data.checkoutUrl;
        } catch (error) {
            
            if (error.response.data.code === 301) {
                displayAndRemoveElement('success-alert');
                window.location = error.response.data.data.checkoutUrl;
                return;
            }

            displayAndRemoveElement('error-alert');
            if (error.response.data.code === 400) {
                errorFieldsHandling(error.response.data.message)
            }
        }
    };

    const displayAndRemoveElement = (alert) => {
        const element = document.getElementById(alert);
      
        // Display the element
        element.hidden = false
      
        // Schedule removal after the specified time interval
        setTimeout(() => {
            element.hidden = true // Change the display style as needed for removal
        }, 5000);
      }
      
      

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                '& > :not(style)': { m: 1 },
                backgroundColor: 'white', // Set background color to white
                padding: '20px', // Add margin
            }}
            noValidate
            autoComplete="off"


        >
            <h4 style={{color: 'black'}}>Dataset</h4>
            <FormControl sx={{ minWidth: 200 }}>
                <Select
                    value=''
                    onChange={handleChangeDataset}
                >
                    <MenuItem value={'Empty'}>Empty dataset</MenuItem>
                    <MenuItem value={'Example dataset'}>Example dataset</MenuItem>
                </Select>
            </FormControl>
            <div id="success-alert" hidden>
                <Alert  severity="success">Created order successfully!</Alert>
            </div>
            <div id="error-alert" hidden>
                <Alert   severity="error">Some fileds went wrong!</Alert>
            </div>
            {/*Total Amount*/}
            <TotalAmount formData={formData} handleChange={handleChange} />

            {/* CONSUMER*/}
            <Consumer formData={formData} handleChange={handleChange} />

            {/* BILLING*/}
            <Billing formData={formData} handleChange={handleChange} />

            {/* SHIPPING*/}
            <Shipping formData={formData} handleChange={handleChange} />

            {/* ITEMS*/}
            <Items formData={formData} handleChange={handleChange} setFormData={setFormData} />

            {/* DISCOUNTS*/}
            <Discounts formData={formData} handleChange={handleChange} setFormData={setFormData} />

            {/*MERCHANT*/}
            <Merchant formData={formData} handleChange={handleChange} />

            {/*MERCHANT REFERENCE*/}
            <MerchantReference formData={formData} handleChange={handleChange} />

            {/*SHIPPING AMOUNT*/}
            <ShippingAmount formData={formData} handleChange={handleChange} />

            {/*TAX AMOUNT*/}
            <TaxAmount formData={formData} handleChange={handleChange} />

            {/*TYPE*/}
            <Type formData={formData} handleChange={handleChange} setFormData={setFormData} />

            {/*PRODUCT*/}
            <Product formData={formData} handleChange={handleChange} setFormData={setFormData} />

            {/*FREQUENCY*/}
            <Frequency formData={formData} handleChange={handleChange} />

            {/*ORDEREXPIRYMILLISECONDS*/}
            <OrderExpiry formData={formData} handleChange={handleChange} />

            <Button variant="contained" type="submit" size="large">Submit</Button>
        </Box>


    );
}

export default ProductForm;