# Contact Form API

## Working Video
https://github.com/user-attachments/assets/bd0d3960-c05f-411b-a606-7d95d51c5bbe



## Overview
The Contact Form API allows users to submit their contact information through a web form. The submissions are stored in a MongoDB database and trigger email notifications to the site administrator. This project provides a simple and effective way to manage contact inquiries and ensure timely responses.

## Features
- **Form Submission**: Allows users to submit their name, email, and message.
- **Data Storage**: Stores submissions in a MongoDB database.
- **Email Notifications**: Sends email notifications to the site administrator upon form submission.
- **Retrieve Submissions**: API endpoint to retrieve all contact form submissions.

## Technologies Used
- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for Node.js to manage routes and middleware.
- **MongoDB**: NoSQL database for storing contact submissions.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Nodemailer**: Module to send emails from Node.js applications.
- **Postman**: API development tool for testing and documenting the API.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/TheGamingGod85/CSI-Web_Dev.git
   cd CSI-Web_Dev
   cd contact-form-api
   ```
2. **Install Dependencies**:
    ```bash
    npm install
    ```
3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add the following variables:
    ```
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.dc8k1.mongodb.net/contactDB?retryWrites=true&w=majority
    ADMIN_EMAIL=your_admin_email@example.com
    MAILGUN_USER=Mail Me Back If You need this.
    MAILGUN_PASSWORD=Mail Me Back If You need this.
    ```
4. **Run the Application**:
    ```bash
    npm start
    ```
## API Endpoints

### Submit a Contact Form (POST)
 - **Endpoint** `/api/contact`
 - **Request Body**:
   ```json
   {
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Hello, I am interested in your services."
    }
    ```
 - **Response**:
    - Success (201):
        ```json
        {
            "message": "Contact form submitted successfully"
        }
        ```
    - Error (400):
        ```json
        {
            "error": "Please provide all required fields"
        }
        ```
### Retrieve All Submissions (GET)
 - **Endpoint** `/api/contact`
 - **Response**:
    ```json
    [
        {
            "_id": "60c72b2f9b1e8a1f8c8e4f30",
            "name": "John Doe",
            "email": "john@example.com",
            "message": "Hello, I am interested in your services.",
            "createdAt": "2024-10-06T12:00:00.000Z",
            "__v": 0
        },
        ...
    ]   
    ```
## Postman Workspace
You can import and test the API using the provided Postman workspace:
[CSI WebDev Postman Workspace](https://www.postman.com/mission-participant-78873652/workspace/csi-web-dev). The name of the account on Postman is different because it was created to reduce spam on my main email.

## Author
**Aayushya Lakkadwala**  
0827CS231008  
CSI Web-Dev Track

## Proof of Working
- POST Request in Postman
![POST Request in Postman](./images/image.png)
- GET Request in Postman
![GET Request in Postman](./images/image-3.png)
- Data in MongoDB
![Data in MongoDB](./images/image-4.png)
- Email Received
![Email Received](./images/image-1.png)
- Email Format
![Email Format](./images/image-2.png)
