## DESCRIPTION

RandomColorGiver help the user to generate random color and convert the HEXA colors to rgb colors.

## HOW TO USE?

const randomcolor = require("randomcolorgiver");

console.log(randomcolor.generateRandomRGB())

PackageName.FunctionName(Arguments List, if any)

## FUNCTIONS

generateRandomRGB()

> It returns a valid rgb string
> Example: rgb(14, 124, 51)

generateRandomRGBA()

> It returns a valid rgba string
> Example: rgba(51, 93, 166, 0.8)

generateHEXUsingNumber()

> It returns a valid hexa color string. This method selects 3 number randomly and generate corresponding hexadecimal values
> Example: #F9323C

generateHEXUsingAlphaLong()

> It returns a valid hexa color string. This method selects 6 Hexadecimal digits randomly.
> Example: #2BD26D

generateHEXUsingAlphaShort()

> It returns a valid hexa color string. This method selects 3 Hexadecimal digits randomly.
> Example: #EC4

convertRGBtoHEX(string rgbValue)

> It take rgb string as argument and give its corresponding hexa color as output.
> Example: 'rgb(0, 33 ,70)' => #002A46 ,'rgb(0, 330 ,70)' => throws error

generateHSL({hue: number, saturation: number, lightness: number, opacity: float}))

> It generates HSL and HSLA. The constraints can also be passed for hue, saturation, lightness, opacity. The constraints are optional. If a constraint is not provided, the package will randomly generate the constraints.  

>| 	contraints 		| 	min  	| max   |
>|-------------------|-----------|-------|	
>|   hue      		|	0		|	360	|
>|   saturation      |	0		|	100	|
>|   lightness     	|	0		|	100	|
>|   opacity      	|	0		|	1	|

> Example1: generateHSL({hue: 5, saturation: 10, lightness: 100, opacity: 0.1}) => 'hsl(5, 10%, 100%, 0.1)'
> Example2: generateHSL({hue: 5, lightness: 100, opacity: 0.1}) => 'hsl(5, 16%, 100%, 0.1)'	
> Example3: generateHSL() => 'hsl(173, 80%, 90%, 0.3)'