import express from "express";
const router = express.Router();
import ccxt from "ccxt";

const binance = new ccxt.binance({
  enableRateLimit: true,
  rateLimit: 1000,
});
/*BTC/USDT--,
ETH/USDT--,
 BNB/USDT--,
  ETC/USDT--, 
  LTC/USDT--,  
  BCH/USDT--,
   IOTS/USDT, 
   XRP/USDT--, 
   ANKR/USDT*/

router.get("/BTC/USDT", async (req, res) => {
  try {
    let arreglo = [];
    let ticker = await binance.fetchTicker("BTC/USDT");
    arreglo[0] = ticker.close;
    arreglo[1] = ticker.timestamp;
    arreglo[2] = ticker.symbol;
    arreglo[3] = ticker.ask;
    arreglo[4] = ticker.bid;
    arreglo[5] = ticker.high;
    arreglo[6] = ticker.low;
    arreglo[7] = ticker.open;
    res.json(arreglo);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/ETH/USDT", async (req, res) => {
  try {
    let arreglo = [];
    let ticker = await binance.fetchTicker("ETH/USDT");
    arreglo[0] = ticker.close;
    arreglo[1] = ticker.timestamp;
    arreglo[2] = ticker.symbol;
    arreglo[3] = ticker.ask;
    arreglo[4] = ticker.bid;
    arreglo[5] = ticker.high;
    arreglo[6] = ticker.low;
    arreglo[7] = ticker.open;
    res.json(arreglo);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/BNB/USDT", async (req, res) => {
  try {
    let arreglo = [];
    let ticker = await binance.fetchTicker("BNB/USDT");
    arreglo[0] = ticker.close;
    arreglo[1] = ticker.timestamp;
    arreglo[2] = ticker.symbol;
    arreglo[3] = ticker.ask;
    arreglo[4] = ticker.bid;
    arreglo[5] = ticker.high;
    arreglo[6] = ticker.low;
    arreglo[7] = ticker.open;
    res.json(arreglo);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/ETC/USDT", async (req, res) => {
  try {
    let arreglo = [];
    let ticker = await binance.fetchTicker("ETC/USDT");
    arreglo[0] = ticker.close;
    arreglo[1] = ticker.timestamp;
    arreglo[2] = ticker.symbol;
    arreglo[3] = ticker.ask;
    arreglo[4] = ticker.bid;
    arreglo[5] = ticker.high;
    arreglo[6] = ticker.low;
    arreglo[7] = ticker.open;
    res.json(arreglo);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/LTC/USDT", async (req, res) => {
  try {
    let arreglo = [];
    let ticker = await binance.fetchTicker("LTC/USDT");
    arreglo[0] = ticker.close;
    arreglo[1] = ticker.timestamp;
    arreglo[2] = ticker.symbol;
    arreglo[3] = ticker.ask;
    arreglo[4] = ticker.bid;
    arreglo[5] = ticker.high;
    arreglo[6] = ticker.low;
    arreglo[7] = ticker.open;
    res.json(arreglo);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/BCH/USDT", async (req, res) => {
  try {
    let arreglo = [];
    let ticker = await binance.fetchTicker("BCH/USDT");
    arreglo[0] = ticker.close;
    arreglo[1] = ticker.timestamp;
    arreglo[2] = ticker.symbol;
    arreglo[3] = ticker.ask;
    arreglo[4] = ticker.bid;
    arreglo[5] = ticker.high;
    arreglo[6] = ticker.low;
    arreglo[7] = ticker.open;
    res.json(arreglo);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/XRP/USDT", async (req, res) => {
  try {
    let arreglo = [];
    let ticker = await binance.fetchTicker("XRP/USDT");
    arreglo[0] = ticker.close;
    arreglo[1] = ticker.timestamp;
    arreglo[2] = ticker.symbol;
    arreglo[3] = ticker.ask;
    arreglo[4] = ticker.bid;
    arreglo[5] = ticker.high;
    arreglo[6] = ticker.low;
    arreglo[7] = ticker.open;
    res.json(arreglo);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/ANKR/USDT", async (req, res) => {
  try {
    let arreglo = [];
    let ticker = await binance.fetchTicker("ANKR/USDT");
    arreglo[0] = ticker.close;
    arreglo[1] = ticker.timestamp;
    arreglo[2] = ticker.symbol;
    arreglo[3] = ticker.ask;
    arreglo[4] = ticker.bid;
    arreglo[5] = ticker.high;
    arreglo[6] = ticker.low;
    arreglo[7] = ticker.open;
    res.json(arreglo);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});
router.get("/BAT/USDT", async (req, res) => {
  try {
    let arreglo = [];
    let ticker = await binance.fetchTicker("BAT/USDT");
    arreglo[0] = ticker.close;
    arreglo[1] = ticker.timestamp;
    arreglo[2] = ticker.symbol;
    arreglo[3] = ticker.ask;
    arreglo[4] = ticker.bid;
    arreglo[5] = ticker.high;
    arreglo[6] = ticker.low;
    arreglo[7] = ticker.open;
    res.json(arreglo);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

module.exports = router;

//new Date().getTime()
