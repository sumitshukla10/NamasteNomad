const User=require("../models/user");

module.exports.rendersignUpForm=(req,res)=>{
    res.render("users/signup.ejs");
};


module.exports.signup=async(req,res)=>{
    try{
        let{username,email,password}=req.body;
        const newUser=new User({email,username});
        const registeredUser=await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success","Welcomes you to NamasteNomad");
            res.redirect("/listings");
        })
       
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
   
};

module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs");
};

module.exports.login=async(req,res)=>{
    // res.send("welcome to wanderlust.You are logged in 😀");
    req.flash("success","welcome back to the NamasteNomad you are logged in😀");
    let redirectUrl=res.locals.redirectUrl ||"/listings"; 
    res.redirect(redirectUrl);
};

module.exports.logout=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
          return  next(err);
        }
        req.flash("success","successfully logged out👍");
        res.redirect("/listings");
    })
};