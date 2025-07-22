import express from "express";
import { generateToken, verifyToken } from "../utils/jwtToken.js";
const router = express.Router();


// Get API
router.get("/get", (req, res) => {
    try {
        const token = req.headers.authorization;
        const _token = token.split(" ")[1];
        const responce = verifyToken(_token)

        res.json({
            status: true,
            message: "This is a get API",
            data: responce
        });

    } catch (error) {
        res.send({
            status: false,
            message: error.message,
        });

    }


});

// Post API
router.post("/post", (req, res) => {
    const body = req.body;
    const token = generateToken(body);
    res.send({
        statusCode: 201,
        message: "This is a post API",
        status: true,
        data: token
    });
});

// Post API
router.put("/post", (req, res) => {
    res.send("This is a post API");
});

// Post API
router.delete("/post", (req, res) => {
    res
        .send("This is a post API");
});



export default router;