var http = require("http");


var Flickr=require("flickrapi"),
 flickrOptions={
 	api_key:"4693590b8f046823e52912ecee62d74d",
 	secret:"20c5719e28db29fc"
 }
 Flickr.tokenOnly(flickrOptions,function(err,flickr){
       flickr.photos.search({
       	text:"kancolle",
       	format:"SOAP"
       },function(err,result){
       	if(err){
       		throw new Error(err);
               }
        console.log(result);;
       })
});
function onRequest(request,response){
   response.writeHead(200,{"Content-type":"text-plan"});
   response.write("Hello")
  
   response.end();   
}
http.createServer(onRequest).listen(8888);
