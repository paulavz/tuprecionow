import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
/*
// Rutas
app.get('/', (req, res) => {
  res.send('Hello World!');
});*/
app.use("/api", require("./routes/api"));
app.use("/api/ticker", require("./routes/ticker"));
app.use("/api/history", require("./routes/history"));
app.use("/api/ohlcv", require("./routes/ohlcv"));

app.use(express.static(path.join(__dirname, "public")));

app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), () => {
  console.log("Example app listening on port" + app.get("puerto"));
});
