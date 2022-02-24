## DESCRIPTION

RandomColorGiver help the user to generate random color and convert the HEXA colors to rgb colors.

## HOW TO USE?

const randomcolor = require("randomcolorgiver");

console.log(randomcolor.generateRandomRGB())

PackageName.FunctionName(Arguments List, if any)

## FUNCTIONS

generateRandomRGB({Red: number, Green: number, Blue: number, opacity: float, format: string})

> It generates RGB and RGBA. The constraints can also be passed for Red, Green, Blue, opacity, format. The constraints are optional. If a constraint is not provided, the package will randomly generate that constraint. By default, the format is 'rgb'. The format should be either 'rgb' or 'rgba'

>| 	contraints 		| 	min  	| max   |
>|-------------------|-----------|-------|	
>|   Red      		|	0		|	255	|
>|   Green      |	0		|	255	|
>|   Blue     	|	0		|	255	|
>|   opacity      	|	0		|	1	|

>Examples: 
> + generateRandomRGB({Red: 5, Green: 10, Blue: 100, opacity: 0.1}) => 'rgb(5, 10, 100, 0.1)'
> + generateRandomRGB({Red: 5, Blue: 100, opacity: 0.1}) => 'rgb(5, 89, 100, 0.1)'	
> + generateRandomRGB() => 'rgb(9, 6, 227, 0.6)'
> + generateRandomRGB({Red: 5, Green: 10, Blue: 100, opacity: 0.1, format: 'rgba'}) => 'rgba(5, 10, 100, 0.1)'


generateHEXcolor(number count)

> It returns a valid hexa color string. By default, the count is 6. It accepts 3 or 6. 
> Example: 
> + generateHEXcolor() or generateHEXcolor(6) => #F9323C 
> + generateHEXcolor(3) => #0CC

convertRGBtoHEX(string rgbValue)

> It take rgb string as argument and give its corresponding hexa color as output.
> Example: 'rgb(0, 33 ,70)' => #002A46 ,'rgb(0, 330 ,70)' => throws error

generateHSL({hue: number, saturation: number, lightness: number, opacity: float, format: string})

> It generates HSL and HSLA. The constraints can also be passed for hue, saturation, lightness, opacity, format. The constraints are optional. If a constraint is not provided, the package will randomly generate that constraint. By default, the format is 'hsl'. The format should be either 'hsl' or 'hsla' 

>| 	contraints 		| 	min  	| max   |
>|-------------------|-----------|-------|	
>|   hue      		|	0		|	360	|
>|   saturation      |	0		|	100	|
>|   lightness     	|	0		|	100	|
>|   opacity      	|	0		|	1	|

>Examples: 
> + generateHSL({hue: 5, saturation: 10, lightness: 100, opacity: 0.1}) => 'hsl(5, 10%, 100%, 0.1)'
> + generateHSL({hue: 5, lightness: 100, opacity: 0.1}) => 'hsl(5, 16%, 100%, 0.1)'	
> + generateHSL() => 'hsl(173, 80%, 90%, 0.3)'
> + generateHSL({hue: 5, saturation: 10, lightness: 100, opacity: 0.1, format: 'hsla'}) => 'hsla(5, 10%, 100%, 0.1)'