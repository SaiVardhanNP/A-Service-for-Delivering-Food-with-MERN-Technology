# Full Stack Food Ordering Website

In this project, I will make a Full-stack food ordering website using React JS, Node JS, Express JS, MongoDB, and Stripe payment gateway.

In this Full-stack food ordering website, I will create the frontend website, admin panel, and backend server. I will create the user authentication system so that anyone can create an account and log in to this food order website.

I will create the shopping cart functionality so that user can add food items in their cart and order food from this app. We will also integrate the Stripe payment gateway to place the order and with online payment. Then I will create the order status update features also.


## Demo

By clicking this link you can see the demonstration of the full stack food ordering website.

Link 👉 https://drive.google.com/file/d/1DaTTg_E8wPOxg03M1VPbIDha54J_ih75/view?usp=sharing 👈


## Installation

#### Clone the repository and navigate to each project folder to install dependencies.
```bash
  git clone https://github.com/MrTharinduDasantha/Full-Stack-Food-Ordering-App.git
  cd Full-Stack-Food-Ordering-App
```
#### Folder Setup
The project is divided into three main folders: admin, frontend, and backend. You will need to install dependencies for each.
- Navigate to each folder (admin, frontend, and backend) and run.
```bash
npm install
```
- Replace the placeholders in firebaseConfig in the project with your actual Firebase details.
- Save the changes.
#### Environment Variables
Before running the app, configure the .env file in the backend folder with the necessary environment variables.
- Go to .env file in the backend folder.
- Replacing placeholders with your own values.
```bash
STRIPE_SECRET_KEY = 'Enter your stripe secret key here'
```
- Go to db.js file in the config folder in the backend folder.
- Replacing placeholder with your actual MongoDB URI.
```bash
import mongoose from'mongoose'

// Connect to MongoDB
export const connectDB = async () => {
    await mongoose.connect('<Enter your mongodb uri here>/food_delivery_db').then(() => console.log('DB connected successfully'))
}
```
#### Run the Project
- Start the backend server.
```bash
cd backend
npm run server
```
- Start the frontend.
```bash
cd ../frontend
npm run dev
```
- Start the panel.
```bash
cd ../admin
npm run dev
```
#### Important Notes
- MongoDB Configuration
Make sure your MongoDB URI is correct and that your database permissions are configured for secure access.
- Stripe Setup
Ensure your Stripe account is configured to work in the environment you're testing.


## Screenshots

