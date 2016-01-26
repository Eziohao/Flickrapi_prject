var https = require("https");

var xmlbody = "<s:Envelope" +
"    xmlns:s='http://www.w3.org/2003/05/soap-envelope'" +
"	xmlns:xsi='http://www.w3.org/1999/XMLSchema-instance'" +
"	xmlns:xsd='http://www.w3.org/1999/XMLSchema'" +
">" +
"   <s:Body>" +
"       <x:FlickrRequest xmlns:x='urn:flickr'>" +
"           <api_key>4693590b8f046823e52912ecee62d74d</api_key>" +
"           <method>flickr.people.getPhotos</method>" +
"           <user_id>139582518@N06</user_id>" +
"        </x:FlickrRequest>" +
"    </s:Body>" +
"</s:Envelope>";

var postRequest = {
    host: "api.flickr.com",
    path: "/services/soap",
    port: 443,
    method: "POST",
    headers: {
        "Content-Type": "application/soap+xml",
        "Content-Length": Buffer.byteLength(xmlbody)
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

req.write(xmlbody);
req.end();
