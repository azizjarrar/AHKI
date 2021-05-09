import cookie from "cookie";

export default (req,res)=>{
    res.setHeader("Set-Cookie",cookie.serialize("token",req.body.token,{

        httpOnly:true,
        //secure:process.env.NODE_ENV !=="development",
        maxAge:req.body.ext||60*60*24*365,
        sameSite:"Lax",path:"/"
    }
        ))

        res.statusCode=200,
        res.json({succes:true})
}