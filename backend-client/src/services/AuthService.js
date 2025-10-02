import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export default class AuthService {
    static async login(email, password) {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error("NOT_FOUND");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("INVALID_PASSWORD");
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
            }
        };
    }

    static async register({ name, email, cpf, password }) {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) throw new Error("EMAIL_EXISTS");

        const user = await User.create({
            name,
            email,
            cpf,
            password,
            role: "user",
        });

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        };
    }
    static async getUserFromToken(token) {
        if (!token) return null;

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);      
            const user = await User.findOne({ where: { id: decoded.id } });

            if (!user) return null;

            return {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                avatar: user.avatar || "/avatar.png"
            };
        } catch (err) {
            return null;
        }
    }
}
