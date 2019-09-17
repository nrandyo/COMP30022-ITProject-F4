var express = require('express');
const router = express.Router();
//import all from '../db/artifact';

var all = require('../db/artifact');

module.exports = app => {
    router.get('api/artifacts', async (req,res) =>{
        try{
            let artifact = await all();
            res.json(artifact);
        } catch (e) {
            console.log(e);
            res.sendStatus(500); 

        }
    })
}