const  express = require('express');
const router = express.Router();

router.get('/foodData',(req,res)=>{
    try{
        //console.log(global.Sample)
        res.send([global.Sample,global.Sample2])

    } catch(error){
        console.error(error.message);
        res.send("Server Error")

    }
});
module.exports = router;
