const express = require("express");
const Route = express.Router();
const controller = require("./controller");

const { getProduct, getArea, getReportProduct } = require("./controller");

Route.get("/get-product", getProduct);
Route.get("/get-area", getArea);
Route.get("/get-report-product", getReportProduct);
module.exports = Route;
