const randomcolor = require("../randomcolorprovider");

console.log(randomcolor.generateRandomRGB(), randomcolor.generateRandomRGBA(), randomcolor.generateHEXUsingNumber(), randomcolor.generateHEXUsingAlphaLong(), randomcolor.generateHEXUsingAlphaShort(), randomcolor.convertRGBtoHEX('rgb(0, 80 ,70)'), randomcolor.generateHSL({hue: 5, saturation: 10, lightness: 100, opacity: 0.1}));