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

const generateRandomRGB = (obj = {}) => {
	if(obj.Red && (typeof (obj.Red) !== 'number' || (obj.Red < 0 || obj.Red > 100))) 
		throw "Error : Red range should be between 0 and 255"
	if(obj.Green && (typeof (obj.Green) !== 'number' || (obj.Green < 0 || obj.Green > 100)))
		throw "Error : Green range should be between 0 and 255"
	if(obj.Blue &&  (typeof (obj.Blue) !== 'number' || (obj.Blue < 0 || obj.Blue > 360)))
		throw "Error : Blue range should be between 0 and 255"
	if(obj.opacity && (typeof (obj.opacity) !== 'number' || (obj.opacity < 0 || obj.opacity > 1)))
		throw "Error : opacity range should be between 0 and 1"
		const formatSpecified = obj.format || 'rgb';
		if(formatSpecified != 'rgb' && formatSpecified != 'rgba')
			throw "Error : provide valid format - rgb or rgba"
	return `${formatSpecified}(${obj.Red || range(0, 255)}, ${obj.Green || range(0, 255)}%, ${obj.Blue || range(0, 255)}%, ${obj.opacity || opacityRange() })`
} 

const generateHEXcolor = (count = 6) => {
	if(count != 3 && count != 6){
		throw "Error : The Hex Color format should be either 3 or 6"
	}
	let hexValue = "#"; 
	for(var i=0; i < count; i++){
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
	const formatSpecified = obj.format || 'hsl';
	if(formatSpecified != 'hsl' && formatSpecified != 'hsla')
		throw "Error : provide valid format - hsl or hsla"
	return `${formatSpecified}(${obj.hue || range(0, 360)}, ${obj.saturation || range(0, 101)}%, ${obj.lightness || range(0, 101)}%, ${obj.opacity || opacityRange() })`
}

module.exports = { generateRandomRGB, generateHEXcolor, convertRGBtoHEX, generateHSL }