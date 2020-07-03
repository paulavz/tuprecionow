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
   IOTS/USDTXXX, 
   XRP/USDT--, 
   ANKR/USDT
   */

router.get("/BTC/USDT/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let history = await binance.fetchOHLCV(
      "BTC/USDT",
      id,
      undefined,
      undefined,
      {
        limit: 250,
      }
    );
    res.json(history);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/ETH/USDT/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let history = await binance.fetchOHLCV(
      "ETH/USDT",
      id,
      undefined,
      undefined,
      {
        limit: 250,
      }
    );
    res.json(history);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/BNB/USDT/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let history = await binance.fetchOHLCV(
      "BNB/USDT",
      id,
      undefined,
      undefined,
      {
        limit: 250,
      }
    );
    res.json(history);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/ETC/USDT/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let history = await binance.fetchOHLCV(
      "ETC/USDT",
      id,
      undefined,
      undefined,
      {
        limit: 250,
      }
    );
    res.json(history);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/LTC/USDT/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let history = await binance.fetchOHLCV(
      "LTC/USDT",
      id,
      undefined,
      undefined,
      {
        limit: 250,
      }
    );
    res.json(history);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/BCH/USDT/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let history = await binance.fetchOHLCV(
      "BCH/USDT",
      id,
      undefined,
      undefined,
      {
        limit: 250,
      }
    );
    res.json(history);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/XRP/USDT/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let history = await binance.fetchOHLCV(
      "XRP/USDT",
      id,
      undefined,
      undefined,
      {
        limit: 250,
      }
    );
    res.json(history);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

router.get("/ANKR/USDT/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let history = await binance.fetchOHLCV(
      "ANKR/USDT",
      id,
      undefined,
      undefined,
      {
        limit: 250,
      }
    );
    res.json(history);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});
router.get("/BAT/USDT/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let history = await binance.fetchOHLCV(
      "BAT/USDT",
      id,
      undefined,
      undefined,
      {
        limit: 250,
      }
    );
    res.json(history);
  } catch (error) {
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});
module.exports = router;

//new Date().getTime()
