let express = require('express'),
    bodyParser = require('body-parser'),
    parseUrlencoded = bodyParser.urlencoded({extended:false});
    app = express();
    var result_obj={};
app.use(express.static('public/html'));
app.use(express.static('public/js'));

// app.use(function (request,response) {
//   console.log("First Method");
//   response.send("Hello !!!!!!!");
// });

app.post('/Even',parseUrlencoded,function (request,response) {
  var number = request.body;
  var data = number.Data;
  var result;
  for(var counter=0;counter<data.length;counter++){
    var num=parseInt(data[counter]);
    if(num%2===0)
    {
      result = num+",";
    }
  }
  result_obj.operation = "Even";
  result_obj.result = result;
  response.status(200).json(result_obj);

//  response.send("Hello Even");
});
app.post('/Odd',parseUrlencoded,function (request,response) {
  var number = request.body;
  var data = number.Data;
  var result;
  for(var counter=0;counter<data.length;counter++){
    var num=parseInt(data[counter]);
    if(num%2!=0)
    {
      result = num+",";
    }
  }
  result_obj.operation = "Even";
  result_obj.result = result;
  response.status(200).json(result_obj);

//  response.send("Hello Even");
});
app.listen(8080,function () {
  console.log("listen on port 8080");
});
