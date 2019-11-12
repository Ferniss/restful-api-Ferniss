const {getAllProducts, getSingleProducts} = require("../controllers/products.controller")

module.exports = function(router){
    router.options("/products", function(req, res){
        res.header("Allow", "OPTIONS, GET, POST");
        res.status(204);
        res.end();
    });

    router.get("/products", getAllProducts)

    router.get("/products/:sku", getSingleProducts)

    router.delete("/products/:sku",)

    router.patch("/products/:sku",)

    router.post("/products",);
};                                     