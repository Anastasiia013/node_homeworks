export const checkMustChangePassword = (req, res, next) => {
    if (req.user.mustChangePassword) {
        return res.status(403).json({ message: "Password change required" });
    }
    next();
};
