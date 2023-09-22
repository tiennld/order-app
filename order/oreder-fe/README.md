# Order Creating Application


## Table of Contents

- [Overview](#overview)
- [Running the Application](#running-the-application)
  - [Using Docker](#using-docker)
  - [Manual Setup](#manual-setup)
    - [Frontend (React.js)](#frontend-reactjs)
    - [Backend (Spring Boot)](#backend-spring-boot)
- [The flow of the Application](#the-flow-of-the-application)
  - [Frontend Flow](#frontend-flow)
  - [Backend Flow](#backend-flow)

## Overview

Provide a brief overview of your application, including its purpose and main features.

## Running the Application

You can run the application using either Docker or by setting up the environment manually.

But first clone my application on GitHub

```bash
   git clone https://github.com/tiennld/order-app.git
```   

###  Using Docker

To run the application using Docker, follow these steps:

1. **Install Docker Desktop:**

   If you haven't already, download and install [Docker Desktop](https://www.docker.com/products/docker-desktop) for your operating system. Create a Docker account if needed.

2. **Open Docker Desktop:**


3. **Run Docker Compose file:**

    Open a command prompt or terminal in the directory containing the provided docker-compose.yml file. Run the following command to start both the frontend and backend containers:

    ```bash
    docker compose up

3. **Access the Application:**

    Once the containers are up and running, you can access the frontend of the application by opening a web browser and navigating to (http://localhost:3000).

### Manual Setup

If you prefer to set up the environment manually, follow these steps:

#### Frontend (React.js)

1. **Install Node.js:**

    If you don't already have Node.js installed, download and install it from the official website.

2. **Open app and run:**

    Start the React.js frontend application with the following command:

    ```bash
    npm run dev

#### Backend (Spring Boot)

1. **Prepare the Environment:**

    Ensure you have the following installed:

        JDK 17: You can download and install JDK 17 from the Oracle website.

        Gradle: You can download and install Gradle from the official Gradle website.

        Spring Boot 3.x.x: You can create a Spring Boot project with the desired version using Spring Initializer.

2. **Run the Backend:**

    Use your preferred development environment, such as IntelliJ IDEA, to open the backend project. Build and run the Spring Boot application. The backend will be accessible at (http://localhost:8080).


## The flow of the Application

You can run the application using either Docker or by setting up the environment manually.

### Frontend Flow

1. **User Input and API Call:**

   - Prompt the user to enter the required fields to create an order.
   - Make an API call to the backend, sending the form data as a DTO (Data Transfer Object).

2. **Response Handling:**

   - Two scenarios can occur:

     - **Scenario 1 - Successful Order Creation:**

       If all fields are valid, the backend responds with a status code 301 and a JSON structure like this:

       ```json
       {
           "status": "REDIRECTION",
           "code": 301,
           "message": "Created order successfully!",
           "data": {
               "token": "AYX6ZRLP84R1",
               "expires": "2023-09-22T12:20:58.000Z",
               "checkoutUrl": "https://portal.integration.scalapay.com/checkout/AYX6ZRLP84R1"
           }
       }
       ```

       - The frontend extracts the `checkoutUrl` from the response.
       - It uses this URL to redirect the user to the payment portal.

     - **Scenario 2 - Validation Errors:**

       If some fields are invalid, the backend responds with a status code 400 and a JSON structure like this:

       ```json
       {
           "status": "BAD_REQUEST",
           "code": 400,
           "message": {
               "shipping-countryCode": "This field length must be 2 characters long",
               "billing-countryCode": "This field length must be 2 characters long"
           }
       }
       ```

       - The frontend maps the error fields to the corresponding HTML elements and highlights the fields with validation errors.

### Backend Flow

1. **Order Reception:**

   - The backend receives an order as a DTO containing the required information fields from the frontend.

2. **Interaction with Scalapay API:**

   - The backend makes a call to the Scalapay API (https://integration.api.scalapay.com/v2/orders) to create an order with the provided data.

3. **Response Handling:**

   - Two scenarios can occur:

     - **Scenario 1 - Successful Order Creation:**

       If the order is created successfully, the Scalapay API responds with a structure like this:

       ```json
       {
           "token": "WCPAQXQI4NNT",
           "expires": "2023-09-22T09:31:05.000Z",
           "checkoutUrl": "https://portal.integration.scalapay.com/checkout/WCPAQXQI4NNT"
       }
       ```

       - The backend converts this response into its own format:

       ```json
       {
           "status": "REDIRECTION",
           "code": 301,
           "message": "Created order successfully!",
           "data": {
               "token": "HWJBTPFANHWF",
               "expires": "2023-09-22T12:32:38.000Z",
               "checkoutUrl": "https://portal.integration.scalapay.com/checkout/HWJBTPFANHWF"
           }
       }
       ```
        - The backend sends this response to the frontend for redirection.

     - **Scenario 2 - Order Creation Failure:**

       If the order creation fails, the Scalapay API responds with an error structure like this:

       ```json
       {
           "errorCode": "api_validationerror",
           "errorId": "error-19g6ilmukrmgr",
           "message": {
               "status": 400,
               "statusText": "Bad Request",
               "errors": [
                   {
                       "field": [
                           "totalAmount",
                           "amount"
                       ],
                       "location": "body",
                       "messages": [
                           "\"amount\" is required"
                       ],
                       "types": [
                           "any.required"
                       ]
                   },
                   {
                       "field": [
                           "items",
                           0,
                           "quantity"
                       ],
                       "location": "body",
                       "messages": [
                           "\"quantity\" is required"
                       ],
                       "types": [
                           "any.required"
                       ]
                   }
               ]
           },
           "httpStatusCode": 400
       }
       ```

       - The backend converts this error response into its own format by mapping error fields to error messages:

       ```json
       {
           "status": "BAD_REQUEST",
           "code": 400,
           "message": {
               "totalAmount-amount": "This field is required",
               "items-0-quantity": "This field is required"
           }
       }
       ```

       - The backend sends this error response to the frontend for field highlighting.

This flow description outlines how frontend and backend components interact to create an order, handle different scenarios, and communicate with the Scalapay API.



