import jwt from "jsonwebtoken";

const generateToken = (data) => {
    try {

        const JWT_KEY = process.env.JWT_KEY;
        const JWT_TOKEN_EXPIRE_TIME = 1;

        return jwt.sign(data, JWT_KEY, { expiresIn: JWT_TOKEN_EXPIRE_TIME });

    } catch (error) {
        throw error;
    }

}

const verifyToken = (token) => {
    try {
        const JWT_KEY = process.env.JWT_KEY;
        return jwt.verify(token, JWT_KEY);

    } catch (error) {
        throw error;

    }
}

export { generateToken, verifyToken }