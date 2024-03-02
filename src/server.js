// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
  Username: String,
  EMail: String,
  Password: String,
  ConfirmPassword: String,
});

const Contact = mongoose.model('Register', contactSchema);

app.post('/register', async (req, res) => {
  const { Username, EMail, Password, ConfirmPassword } = req.body;

  try {
    const existingUser = await Contact.findOne({ EMail });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const newContact = new Contact({ Username, EMail, Password, ConfirmPassword });
    await newContact.save();

    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
