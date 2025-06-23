const userService=require("../services/auth.service");
const httpStatus=require("../util/httpStatus");
// const tokenService=require("../services/token.service");

const signUp=async(req,res)=>{
    const{name,email,password,username,role}=req.body;
    const user=await userService.createUser({
        name,
        email,
        username,
        password,
        role,
    });
    user.password=undefined;

    return res.status(httpStatus.created).json({
        message:"Account created successfully really",
        user,
    })

}

// const signIn=async(req,res)=>{
//     const {email,password}=req.body;
//     const user=await userService.loginUserWithEmailAndPassword(email,password);

//     const token=await tokenService.generateAuthTokens(user);
//     user.password=undefined;

//     res.status(httpStatus.ok).json({
//         message:"user signed in successfully",
//         token,
//         user,
//     })
// }

module.exports={signIn,signUp};