const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utlis/config");

const auth = {
    verifyUser: async (request, response, next) => {
        try{

            const token = request.cookies.token;
            // console.log(JSON.stringify(request ))
            console.log(token)
            
            if (!token) {
                return response.status(401).json({ message: 'Access denied' });
            }
            
            try {
                const verfied = jwt.verify(token, SECRET_KEY);
                request.userid = verfied.id;
            }
            catch {
                return response.status(400).json({ message: 'Invalid token' });
            }
        }
        catch(error){
            response.status(500).json(error)
        }
        next()
    } 
}

module.exports = auth;