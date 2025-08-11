const Admin = require('../models/model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = process.env.JWT_SECRET; // Make sure this is set in your .env file

const allowedAdminEmails = [
  "khildwhoj.pandey027@gmail.com",
  "pandeynikesh54@gmail.com"
];
// Admin registration
exports.postAdmindata = async (req, res) => {
  try {
    const { email } = req.body;
console.log("Request body is:", req.body);
//if the request sent in the body  isnot matched with allowedAdminEmails then throw error
    if (!allowedAdminEmails.includes(email)) {
      return res.status(403).json({ message: "Access denied: email not authorized" });
    }

    // Do NOT hash here, model pre-save hook will do it
    const datafromuser = new Admin(req.body);

    const admindata = await datafromuser.save();

    if (!admindata) {
      return res.status(400).json({ message: "Data not saved" });
    }

    console.log('Hashed password saved:', admindata.password);  // for debug

    res.status(200).json({ message: "Data posted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};


// Admin login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find admin by email
    const admin = await Admin.findOne({ email });
        console.log(' Found admin:', admin);

    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
      console.log(' Entered password:', password);
    console.log(' Stored hashed password:', admin.password);
    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    console.log('Password match:', isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.uploadImage = (req, res) => {
  res.send('Upload image works!');
};
exports.editProject = (req, res) => {
  res.send(`Editing project with ID: ${req.params.id}`);
};


