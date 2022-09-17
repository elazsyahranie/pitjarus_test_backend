const db = require("../config/sqlite");

module.exports = {
  getProducts: () => {
    return new Promise((resolve, reject) => {
      let query = "SELECT product_id, product_name, ";
      query += "product.brand_id, product_brand.brand_id, brand_name ";
      query += "FROM product LEFT JOIN product_brand ";
      query += "ON product.brand_id = product_brand.brand_id";
      db.all(query, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  getArea: () => {
    return new Promise((resolve, reject) => {
      let query = "SELECT store_id, store_name, ";
      query += "store.account_id, store.area_id, is_active, ";
      query += "store_account.account_id, account_name, ";
      query += "store_area.area_id, area_name ";
      query += "FROM store INNER JOIN store_account ";
      query += "ON store.account_id = store_account.account_id ";
      query += "INNER JOIN store_area ";
      query += "ON store.area_id = store_area.area_id ";
      db.all(query, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
  getReportProduct: () => {
    return new Promise((resolve, reject) => {
      let query = "SELECT report_id, store_id, report_product.product_id, ";
      query += "compliance, tanggal, product.product_id, ";
      query += "product_name, brand_id ";
      query += "FROM report_product INNER JOIN product ";
      query += "ON report_product.product_id = product.product_id";
      //   const query = "SELECT * FROM report_product";
      db.all(query, (error, result) => {
        !error ? resolve(result) : reject(new Error(error));
      });
    });
  },
};
