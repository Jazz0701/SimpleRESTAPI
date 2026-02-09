const db = require("../config/firebase.js");  


// GET /users Retrieve all expenses
exports.getExpense = async(req, res) => {
    //Read users from database
    try{
    const data = await db.ref("expenses").once("value");

    res.json(data.val());}catch(error)   
    {
        res.status(500).json({error:error.message})
    }
};

// POST /users Add a new expense
exports.postExpense = async (req, res) => {    //endpoint to add a new user
    try {
        const newExpenseRef = await db.ref("expenses").push(req.body);     
        res.status(201).json({message:"expense added"});                           
    } catch (error) {
        res.status(500).json({ error: error.message });            
    }
};

// PUT /users/:id Update a expense
exports.putExpense = async (req, res) => {    //endpoint to update a user
    try {                                                    
        const expenseRef = await db.ref("expenses/" + req.params.id).update(req.body);          
        res.status(200).json({message:"expense updated"});  
    } catch (error) {                                        
        res.status(500).json({ error: error.message });      
    }
};


// DELETE /users/:id Delete a expense
exports.deleteExpense = async (req, res) => {
    try {
        const expenseRef = await db.ref("expenses/" + req.params.id).remove();
        res.status(200).json({message:"expense deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


