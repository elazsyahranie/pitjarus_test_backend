require("dotenv").config();

module.exports = {
  response: (response, status, msg, data, dataLength) => {
    const result = {};
    result.status = status || 200;
    result.msg = msg;
    result.data = data;
    result.dataLength = dataLength;
    return response.status(result.status).json(result);
  },
};
