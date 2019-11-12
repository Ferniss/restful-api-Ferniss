const db = require("../config/database");

const ProductRef = db.firestore().collection("products")

module.export = ProductRef