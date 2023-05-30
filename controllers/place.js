const express = require("express");
const router = express.Router();
const Place = require("../models/place")

//Index: show all the things
router.get("/", (req,res) =>{
   // res.send("Welcome to My page")
    Place.find({}, (error, foundPlace)=>{
        res.json(foundPlace)
        });
    });


router.delete('/:id', (req, res)=>{
    Place.findByIdAndRemove(req.params.id, (err, deletedPlace)=>{
    res.json(deletedPlace)
})
})


router.put("/:id", (req, res)=>{
    Place.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, updatedPlace)=>{
    res.json(updatedPlace)
    });
});

router.post('/',(req, res) => {
       Place.create(req.body, (err, createdPlace)=>{
            res.json(createdPlace)
         });
    });

 
//SHOW
    router.get('/:id', (req, res)=>{
        //res.send("Showing the Place")
    Place.findById(req.params.id, (err, foundPlace)=>{
        res.json(foundPlace)
    });
});
module.exports =router;