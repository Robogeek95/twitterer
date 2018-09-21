let userTweets = [
    {
        body:"Although this is tedioue, its kinda intreasting",
        user:"Azeez Lukman",
        date: new Date
    },
    {
        body:"Although this is tedioue, its kinda intreasting",
        user:"Astromind",
        date: new Date
    },
    {
        body:"Although this is tedioue, its kinda intreasting",
        user:"Robogeek",
        date: new Date
    },
    {
        body:"Although this is tedioue, its kinda intreasting",
        user:"Dolph Dolphin",
        date: new Date
    },
]


exports.homepage = function(req, res, next){
    res.render('index',{title: "my homepage"});
};

exports.tweets = function(req, res, next){
    res.render('tweets',{title: "My tweets", tweets: userTweets});
};

exports.profilePage = function(req, res, next){
    res.render('profile',{title: "My Profile", username:req.params.name});
};

exports.followers = function(req, res, next){
    res.render('followers',{title:"Your Followers"});
};