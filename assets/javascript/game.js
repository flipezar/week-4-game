console.log("helo");

var numberToBeat = 40;
var couter =0;
var nuberToPick=[10,6,4,14];

$("#Match-that-number").text(numberToBeat);
for(var i =0; i < nuberToPick.length; i++){
	var crystalImage = $("img");

	crystalImage.addClass("image-crystal");

	crystalImage.attr("data-crystalvalue",nuberToPick[i]);

	$("#crystals").append(crystalImage);
}

$(".image-crystal").on("click",function(){


	var crystalvalue = ($(this).attr(data-crystalvalue));
	crystalvalue = parseInt(crystalvalue);

	couter += crystalvalue;
	getDocumentById
});