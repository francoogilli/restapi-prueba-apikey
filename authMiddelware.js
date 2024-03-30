import { API_KEY } from './config.js';

export const authenticate = (req, res, next) => {
    const apiKey = req.headers['api-key'];

    if (!apiKey || apiKey !== API_KEY) {
        return res.status(401).json({
            message: 'No tenes permiso'
        });
    }

    next();
};
