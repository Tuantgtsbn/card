const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const generateTokens = (user) => {
    const { _id, role } = user;
    const accessToken = jwt.sign({ userId: _id, role }, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: _id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    return { accessToken, refreshToken };
}
const authControllers = {
    register: async (req, res) => {
        try {
            const { fullName, email, password } = req.body;
            console.log(req.body);
            const existingUser = await User.findOne({
                email
            });
            console.log(existingUser);
            if (existingUser) {
                res.status(409).json({
                    success: false,
                    message: 'User or email already exists'
                });
                return;
            }
            // Create new user
            const user = new User({ fullName, email, password });
            await user.save();

            // Generate tokens
            res.status(200).json({
                success: true,
                message: 'Register successfully',
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Register failed',
                error: error.message
            });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            // Check user
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: 'User not found'
                });
            }
            // Check password
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(401).json({
                    success: false,
                    message: 'Wrong password'
                })
            }
            // Generate tokens
            const { accessToken, refreshToken } = generateTokens(user);
            console.log("Access token", accessToken, "Refresh token", refreshToken);
            user.refreshToken = refreshToken;
            await user.save();
            res.status(200).json({
                success: true,
                message: 'Login successfully',
                accessToken,
                refreshToken
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Login failed',
                error: error.message
            })
        }
    },
    refreshToken: async (req, res) => {
        try {
            const { refreshToken } = req.body;
            if (!refreshToken) {
                return res.status(401).json({
                    success: false,
                    message: 'Refresh token is required'
                });
            }
            // Check refresh token
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            // Check user
            const user = await User.findById(decoded.userId);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'Refresh token is invalid'
                })
            }
            // Generate new access token
            const accessToken = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_ACCESS_SECRET, { expiresIn: '15m' });
            res.status(200).json({
                success: true,
                message: 'Refresh token successfully',
                accessToken
            });
        } catch (error) {
            res.status(403).json({
                success: false,
                message: 'Refresh token failed',
                error: error.message
            })
        }
    },
    getUserInfor: async (req, res) => {
        try {
            const user = await User.findById(req.userId);
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found'
                });
            }
            res.status(200).json({
                success: true,
                data: user
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Get user infor failed',
                error: error.message
            })
        }
    }
}
module.exports = authControllers;