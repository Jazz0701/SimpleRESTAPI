const db = require("../config/firebase.js");  


// GET /users Retrieve all income
exports.getIncome = async(req, res) => {
    //Read users from database
    try{
    const data = await db.ref("income").once("value");

    res.json(data.val());}catch(error)   
    {
        res.status(500).json({error:error.message})
    }
};

// POST /users Add a new income
exports.postIncome = async (req, res) => {    //endpoint to add a new income
    try {
        const newIncomeRef = await db.ref("income").push(req.body);     
        res.status(201).json({message:"income added"});  
                               
    } catch (error) {
        res.status(500).json({ error: error.message });            
    }
};

// PUT /users/:id Update a income
exports.putIncome = async (req, res) => {    //endpoint to update a income
    try {                                                    
        const incomeRef = await db.ref("income/" + req.params.id).update(req.body);          
        res.status(200).json({message:"income updated"});  
    } catch (error) {                                        
        res.status(500).json({ error: error.message });      
    }
};


// DELETE /users/:id Delete a income
exports.deleteIncome = async (req, res) => {
    try {
        const incomeRef = await db.ref("income/" + req.params.id).remove();
        res.status(200).json({message:"income deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


