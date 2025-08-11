const express= require("express");
const router = express.Router(); 
const controller= require('../controllers/controllers');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/Register',controller.postAdmindata);
router.get('/auth/login', controller.login);
router.post('/admin/upload-image', authMiddleware, controller.uploadImage);
router.put('/admin/edit-project/:id', authMiddleware, controller.editProject);
module.exports=router;