var https = require("https");



var postRequest = {
    host: "api.twitter.com",
    path: "/1.1/statuses/user_timeline.json?&screen_name=Eziohao&count1",
    port: 443,
    method: "GET",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization":
              "OAuth"+" "+"oauth_consumer_key=BG3LxcstcnhCGpk45HiVOrwRS,"+
              "oauth_nonce=f5df031b1450ba8dcdd8b9b597b816d0,"+
              "oauth_signature=Ox1kre2Mzy6Kspr3lSTMc2IETtg%3D,"+ 
              "oauth_signature_method=HMAC-SHA1,"+ 
              "oauth_timestamp=1453843910,"+ 
              "oauth_token=569920169-mVoel8rqjyhhaEGPeDCXWyGSX6xNbwfRwkLqUdIe,"+ 
              "oauth_version=1.0"
      
    }
};

var req = https.request( postRequest, function(res) {
    var buffer = "";
    res.setEncoding("utf-8");
    res.on( "data", function(data) {
      buffer += data;
    });
    res.on("end", function() {
      console.log(buffer);
    });
});


req.end();
