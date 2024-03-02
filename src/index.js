const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcrypt');
const Login = require("./Login.jsx"); // Import the Login component
const Register = require("./Register.jsx"); // Import the Register component

const app = express();
// convert data into json format
app.use(express.json());
// Static file
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
// use EJS as the view engine
app.set("view engine", "ejs");

// Route to render the login page
app.get("/", (req, res) => {
    res.render("login");
});

// Route to render the signup page
app.get("/signup", (req, res) => {
    res.render("signup");
});

// Route to handle user registration
app.post("/signup", async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    try {
        // Check if the username already exists in the database
        const existingUser = await collection.findOne({ name: data.name });
        if (existingUser) {
            res.send('User already exists. Please choose a different username.');
        } else {
            // Hash the password using bcrypt
            const saltRounds = 10; // Number of salt rounds for bcrypt
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);

            data.password = hashedPassword; // Replace the original password with the hashed one

            // Insert the user data into the database
            const userdata = await collection.insertMany(data);
            console.log(userdata);

            // Redirect to the login page after successful registration
            res.redirect("/");
        }
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send("Internal server error");
    }
});

// Route to handle user login
app.post("/login", async (req, res) => {
    try {
        // Find the user in the database by username
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            // If user not found, send error message
            res.send("User name not found");
        } else {
            // Compare the hashed password from the database with the plaintext password
            const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
            if (!isPasswordMatch) {
                // If password does not match, send error message
                res.send("Wrong password");
            } else {
                // If login successful, redirect to the home page
                res.redirect("/home");
            }
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).send("Internal server error");
    }
});

// Route to render the home page (assuming it exists)
app.get("/home", (req, res) => {
    res.render("home");
});

// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${ port }`);
});
