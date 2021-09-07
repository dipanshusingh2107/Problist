const allowUrl = ['/' , '/register'];

check = (requrl)=>{

    for(i = 0 ; i<allowUrl.length;i++)
    {
        // if(requrl.startsWith(allowUrl[i]))
        if(requrl == allowUrl[i])
        return true;
    }
    return false
}

x = async (req , res , next)=>{
    if(await check(req.url))
    {
        next();
        return;
    }

    if(req.isAuthenticated())
    {
        next();
    }
    else
    {
        res.redirect('/');
    }
}

module.exports = x