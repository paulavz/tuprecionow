import express from "express";
const router = express.Router();
import ccxt from "ccxt";

const binance = new ccxt.binance({
  enableRateLimit: true,
  rateLimit: 1000,
});

router.get("/method", async (req, res) => {
  try {
    let time = new ccxt.binance();
    res.json(time);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

module.exports = router;

//new Date().getTime()
