const express= require("express");
const router = express.Router(); 
const controller= require('../controllers/controllers');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.post('/Register',controller.postAdmindata);
router.get('/auth/login', controller.login);
router.post('/upload-image', upload.single('image'), controller.uploadImage);

module.exports=router;