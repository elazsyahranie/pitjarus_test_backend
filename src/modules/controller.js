const helper = require("../helper/wrapper");
const model = require("./model");

module.exports = {
  getProduct: async (req, res) => {
    try {
      const result = await model.getProducts();
      return helper.response(res, 200, "Get products success!", result);
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad request", error);
    }
  },
  getArea: async (req, res) => {
    try {
      const result = await model.getArea();
      return helper.response(
        res,
        200,
        "Get area success!",
        result,
        result.length
      );
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad request", error);
    }
  },
  getReportProduct: async (req, res) => {
    try {
      const result = await model.getReportProduct();
      return helper.response(
        res,
        200,
        "Get report product success!",
        result,
        result.length
      );
    } catch (error) {
      console.log(error);
      return helper.response(res, 400, "Bad request", error);
    }
  },
};
