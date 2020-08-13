const Serie = require('../models/series.js');

function createCar(req,res){
    const newSerie = new Serie(req.body);
    newCar.save((err,result)=>{
    if (err){
        return res.send({error: err.toString()});
    }
        return res.send(result);
    })
}
module.exports.createCar = createCar;