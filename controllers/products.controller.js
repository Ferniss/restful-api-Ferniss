const ProductRef = require("../models/product.model");
exports.getALLProducts = function(req, res){
    ProductRef.get().then(docs => {
        const results = [];
        docs.forEach(doc => results.push(doc.data()));
        res.json(results);
    });
};
exports.getSingelProduct = function(req, res){
    try{
        const docs = await ProductRef.where("sku", "=", req.params.sku);
        res.json(getSingleDocument(docs.data()));
    } catch (error){
        res.status(500).end();
        log.error(error);
    }
 };
 exports.createProduct = function(req, res){
     req.fields.price = parseFloat(req.fields.price);
     req.fields.weight = parseFloat(req.fields.weight);
    ProductRef.add({...req.fields})
    .then(ref => {
        ref.get().then(doc => res.status(201).json(doc.data()))
    })
       .catch(error => res.json(error));
};
exports.updateProkduct = function(req, res){
    if (req.fields.price) {
        req.fields.price
    } else {
        
    }
    try{
        const docs = await ProductRef.where("sku", "=", req.params.sku).limit(1).get();
        docs.forEach(async doc =>{
            try{
                doc.ref.updtae({ ...req.fields });
                const result = await doc.ref.get();
                res.json(result.dat())
            }catch(error){
                
            }
        })
    }
};
 exports.deleteProduct = async function(req, res){
    try{
        const docs = await ProductRef.where("sku", "=", req.params.sku).get();
        docs.forEach(doc =>)
};

exports.patchProduct = function(req, res){
    try{
        const docs = await ProductRef.where("sku", "=", req.params.sku);
        res.json(getSingleDocument(docs.data()));
    } catch (error){
        res.status(500).end();
        log.error(error);
    }
};