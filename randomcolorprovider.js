// Helper Functions

const HEXADECIMALCONSTANT = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F'];

const range = (min, max) =>{
	return Math.floor(Math.random() * (max - min) + min);
}

const opacityRange = () => {
	return Math.random().toFixed(1);
}

const hexaDecimaHelperFuncation = (num) => {
	let numBySixteen = (num/16).toString().split(".");
	let firstHalf = parseInt(numBySixteen[0]) || 0;
	let secondHalf = parseInt(numBySixteen[1]) || 0;
	secondHalf = secondHalf / (10 ** (secondHalf.toString().length))*16
	return HEXADECIMALCONSTANT[firstHalf] + ""+ HEXADECIMALCONSTANT[secondHalf]
}


// Main Funcations

const generateRandomRGB = () => {
	return `rgb(${range(0, 255)}, ${range(0, 255)}, ${range(0, 255)})`;
}

const generateRandomRGBA = () => {
	return `rgba(${range(0, 255)}, ${range(0, 255)}, ${range(0, 255)}, ${opacityRange()})`;
}

const generateHEXUsingNumber = () => {
	let range1 = hexaDecimaHelperFuncation(range(0,255));
	let range2 = hexaDecimaHelperFuncation(range(0,255));
	let range3 = hexaDecimaHelperFuncation(range(0,255));
	return `#${range1 + range2 + range3}`
}

const generateHEXUsingAlphaLong = () => {
	let hexValue = "#"; 
	for(var i=0; i < 6; i++){
		hexValue += HEXADECIMALCONSTANT[range(0, 16)];
	}
	return hexValue;
}

const generateHEXUsingAlphaShort = () => {
	let hexValue = "#"; 
	for(var i=0; i < 3; i++){
		hexValue += HEXADECIMALCONSTANT[range(0, 16)];
	}
	return hexValue;
}

const convertRGBtoHEX = (rgb) => {
	const regexpWithoutE = /[\d]+/ig;
	let rgbArray = rgb.match(regexpWithoutE);
	let hexValue = "#"; 
	for(var i=0; i < rgbArray.length; i++){
		let eachValue = parseInt(rgbArray[i]); 
		if( eachValue < 0 || eachValue > 255){
			return "error"
		}
		hexValue += hexaDecimaHelperFuncation();
	}
	return hexValue
}


module.exports = { generateRandomRGB, generateRandomRGBA, generateHEXUsingNumber, generateHEXUsingAlphaLong, generateHEXUsingAlphaShort, convertRGBtoHEX }