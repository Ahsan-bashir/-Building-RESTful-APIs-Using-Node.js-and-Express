const express = require('express');
const router = express.Router();

const userController = require('./userController');
// get request to fetch the user details for the logged in user to authenticate JWT
router.get('/', (req, res) => {
    try {
        const userData = req.claims
        console.log(userData);
        if(!userData.email){
           return res.status(400).send({message:"Please provide email"});
        }
        userController.findUser(userData.email, (err, result) => {
            if (err) {
                return res.status(400).send({ message: "User not found" });
            }
            return res.status(200).send({ message: result });
        })

    } catch (error) {
        return res.status(400).send({ message: "Unexpected error while fetching the users", error });
    }
});

module.exports = router;