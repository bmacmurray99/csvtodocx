
const csv = require("csvtojson");
const docTemplates = require("docx-templates");
const yargs = require("yargs").argv;
var inputFile = yargs.input;
var outputFile = yargs.output;
var templateFile =yargs.template;
var jsonObj;

var regex = /\s|\-|\%|\&|/g
  

var jsonData = csv()
	.fromFile(inputFile)
	.then((jsonObj)=>{
		//console.log(jsonObj.length);
		console.log(Object.keys(jsonObj[0]))
		preparedHeadJson = [];
		for (i=0;i<jsonObj.length; i++){
			preparedHeadJson.push({});
			keys = Object.keys(jsonObj[i]);
			for (j = 0; j< keys.length; j++){
			preparedHeadJson[i][keys[j].replace(regex,"_")] = jsonObj[i][keys[j]];

			}
			
		};
		console.log(Object.keys(preparedHeadJson[0]))
		return preparedHeadJson
	});

 


 docTemplates({template:templateFile,output:outputFile,
	data:{jsonData}},
	(err)=>{console.log(err)});


