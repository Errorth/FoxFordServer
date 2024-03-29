const ApiError = require('../exceptions/api-error')
const tokenService = require('../services/token-service')
module.exports = function (req,res,next){
    try{
        const authorizationHeader =req.headers.authorization;
        if(!authorizationHeader){
            return next(ApiError.UnauthorizedError())
        }
        const accessToken = authorizationHeader.split(' ')[1]
        if(!accessToken){
            console.log(`ACCESS: ${accessToken}`)
            return next(ApiError.UnauthorizedError())
        }
        const userData = tokenService.validateAccessToken(accessToken)
        if(!userData){
            console.log(`DATA: ${userData}`)

            return next(ApiError.UnauthorizedError())
        }

        req.user = userData;
        next();
    }catch (e) {
        console.log(`E: ${e}`)
        return next(ApiError.UnauthorizedError())
    }
}