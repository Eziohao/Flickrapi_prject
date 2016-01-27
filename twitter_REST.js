var https = require("https");
var OAuth=require("OAuth");

var oauth=new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'BG3LxcstcnhCGpk45HiVOrwRS',
      '9n4kDPUFrI1u3SAPIhKLLlAyCDvzVGnOU5h2WAaT5oO4nNh5VZ',
      '1.0A',
      null,
      'HMAC-SHA1');
oauth.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=Eziohao&count=1',
    '569920169-mVoel8rqjyhhaEGPeDCXWyGSX6xNbwfRwkLqUdIe',
    'GiWrbrkG1MttA3zjVvRIUsMq5Z145B6rid3eiRsHlz1Re',
     function(err,data,res){
        if(err){
            console.log(err);
        }
         
        console.log(JSON.parse(data));
    })






