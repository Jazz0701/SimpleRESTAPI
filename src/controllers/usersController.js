const db = require("../config/firebase.js");  


// GET /users Retrieve all users
exports.getUsers = async(req, res) => {       //endpoint to retrieve all users
    //Read users from database
    try{
    const data = await db.ref("users").once("value");

    res.json(data.val());}catch(error)   
    {
        res.status(500).json({error:error.message})
    }
};

// POST /users Add a new user
exports.postUser = async (req, res) => {    //endpoint to add a new user
    try {
        const newUserRef = await db.ref("users").push(req.body);     
        res.status(201).json({message:"user added"});                           
    } catch (error) {
        res.status(500).json({ error: error.message });            
    }
};

// PUT /users/:id Update a user
exports.putUser = async (req, res) => {    //endpoint to update a user
    try {                                                    
        const userRef = await db.ref("users/" + req.params.id).update(req.body);          
        res.status(200).json({message:"user updated"});  
    } catch (error) {                                        
        res.status(500).json({ error: error.message });      
    }
};


// DELETE /users/:id Delete a user
exports.deleteUser = async (req, res) => {   //endpoint to delete a user
    try {
        const userRef = await db.ref("users/" + req.params.id).remove();
        res.status(200).json({message:"user deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


