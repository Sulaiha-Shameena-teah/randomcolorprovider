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
			throw "Error : provide valid RGB color"
		}
		hexValue += hexaDecimaHelperFuncation(eachValue);
	}
	return hexValue
}

const generateHSL = (obj = {}) => {
	if(obj.saturation && (typeof (obj.saturation) !== 'number' || (obj.saturation < 0 || obj.saturation > 100))) 
		throw "Error : saturation range should be between 0 and 100"
	if(obj.lightness && (typeof (obj.lightness) !== 'number' || (obj.lightness < 0 || obj.lightness > 100)))
		throw "Error : lightness range should be between 0 and 100"
	if(obj.hue &&  (typeof (obj.hue) !== 'number' || (obj.hue < 0 || obj.hue > 360)))
		throw "Error : hue range should be between 0 and 360"
	if(obj.opacity && (typeof (obj.opacity) !== 'number' || (obj.opacity < 0 || obj.opacity > 1)))
		throw "Error : opacity range should be between 0 and 1"
	return `hsl(${obj.hue || range(0, 360)}, ${obj.saturation || range(0, 101)}%, ${obj.lightness || range(0, 101)}%, ${obj.opacity || opacityRange() })`
}

module.exports = { generateRandomRGB, generateRandomRGBA, generateHEXUsingNumber, generateHEXUsingAlphaLong, generateHEXUsingAlphaShort, convertRGBtoHEX, generateHSL }