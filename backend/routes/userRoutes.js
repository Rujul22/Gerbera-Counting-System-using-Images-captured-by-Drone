const express = require('express');
const { registerUser, 
    authUser 
} = require('../controllers/userControllers');

const router= express.Router();

//first route
router.route('/').post(registerUser);//register user route
router.route("/login").post(authUser);//login route


module.exports = router;
//export default router;
