const express = require("express");

const app = express();

const PORT = 8080;

app.get("/greeting", (req, res) => {
  res.send("Hello Stranger");
});

app.get("/greeting/:name", (req, res) => {
  res.send("hello " + req.params.name);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  let tipAmount = (req.params.tipPercentage / 100) * req.params.total;
  res.send(`Your Tip Was $${tipAmount}`);
});

const quotes = require("./Modules/quotes");

app.get("/magic/:question", (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(
      `<h1>${req.params.question}</h1>` + `<h1>${randomQuote}</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});