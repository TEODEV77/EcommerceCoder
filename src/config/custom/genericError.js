export const genericErrorHandler = (err, req, res, code) => {
    res.status(500).json({ error: err.message, cause: err.cause });
};
