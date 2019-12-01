
const csv = require("csvtojson");
const docTemplates = require("docx-templates");
const yargs = require("yargs").argv;
var inputFile = yargs.input;
var outputFile = yargs.output;
var templateFile =yargs.template;
var jObj;



 

var jsonData = csv({
		
					})
	.fromFile(inputFile)
	.then((jsonObj)=>{
		console.log(jsonObj);
		jObj = jsonObj;
		return jObj;
	});
 

 docTemplates({template:templateFile,output:outputFile,
	data:{jsonData}},
	function(err){console.log(err)});