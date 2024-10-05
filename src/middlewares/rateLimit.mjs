import rateLimit from "express-rate-limit";

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  handler: function (req, res) {
    res.status(429).json({
      ok: false,
      message: "Too many requests, please try again later.",
    });
  },
});

export default loginLimiter;
