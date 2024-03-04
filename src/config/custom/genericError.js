export const genericErrorHandler = (err, req, res, code) => {
    res.status(code).json({ error: err.message, cause: err.cause });
};
