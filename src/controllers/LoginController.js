const LoginService = require("../services/LoginService");

const login = async (req, res) => {
    try{
    const response = await LoginService.login(req.body);
    console.log(response)
    if(response){
        res.set("authorization", response);
        res.send()
    }else{
        res.status(404).json({ "error": "incorrect user or password"});
    }
    }catch(error){
        res.status(500).json({ "error": error});
}

}

module.exports = { login };