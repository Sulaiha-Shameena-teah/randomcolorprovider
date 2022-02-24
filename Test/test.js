const randomcolor = require("../randomcolorprovider");

console.log(randomcolor.generateRandomRGB({ Red: 5, opacity: 0.7, format:'rgba'}), randomcolor.generateHEXcolor(), randomcolor.convertRGBtoHEX('rgb(0, 80 ,70)'), randomcolor.generateHSL({format: 'hsla',hue: 5, saturation: 10, lightness: 100, opacity: 0.1}));