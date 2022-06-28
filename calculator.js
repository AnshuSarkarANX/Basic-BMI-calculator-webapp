const expr = require("express");
//const { get } = require("http");
const bpars = require("body-parser");
const app = expr();
app.use(bpars.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/cal.html");
});
app.post("/", function (req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;
  res.send("The addition of those two numbers is - " + result);
});
app.get("/BMI_calculator", function (req, res) {
  "<h1>BMICalculator</h1>";
  res.sendFile(__dirname + "/BMIcalculator.html");
});
app.post("/BMI_calculator", function (req, res) {
  var w = Number(req.body.kg);
  var h = Number(req.body.cm) / 100;
  var result = w / (h * h);
  res.send("Your BMI is - " + result);
});
app.listen(3000);
