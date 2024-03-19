# Constants, operators and functions for formulas in openLCA

<div style='text-align: justify;'>

When you add a formula in openLCA (e.g. in the amount cell of Inputs/Outputs tab) The formula interpreter allows you to use these constants, operators and functions.

## Constants

| Constant | Description                                  | Value             |
|----------|----------------------------------------------|-------------------|
| pi       | the ratio of the circumference to the diameter of a circle | 3.141592653589793 |
| e        | base of the natural system of logarithms     | 2.718281828459045 |

## Operators

| Precedence | Operator | Description     | Example        |
|------------|----------|-----------------|----------------|
| 7          | - (unary)| negation        | -1 #> -1       |
| 6          | ^        | exponentiation  | 2^3 #> 8      |
| 5          | *        | multiplication  | 2*2 #> 4      |
| 5          | /        | division        | 2/2 #> 1      |
| 5          | div      | integer division| 7 div 2 #> 3  |
| 5          | mod      | modulus         | 7 mod 2 #> 1  |
| 4          | +        | addition        | 1+1 #> 2      |
| 4          | -        | subtraction     | 1-1 #> 0      |
| 3          | =  <br> ==      | equal to        | 1 = 1 #> true |
| 3          | <>   <br> !=           | not equal to    | 1 <> 2 #> true|
| 3          | <        | less than       | 2 < 2 #> false|
| 3          | <=       | less than or equal to | 2 <= 2 #> true |
| 3          | >        | greater than    | 3 > 2 #> true |
| 3          | >=       | greater than or equal to | 3 >= 4 #> false |
| 2          | &  <br> &&       | logical and     | true() & false() #> false |
| 1          | \|   <br> \|\|    | logical or      | true() \| true() #> true |

## Functions

| Function | Description                                  | Example               |
|----------|----------------------------------------------|-----------------------|
| abs(x)   | the absolute value of x                      | abs(-1) #> 1         |
| acos(x)  | arccos(x) the inverse cosine of x            | acos(-1) #> 3.14159265|
| and(x1;x2;...xn) | logical and                        | and(1<2;2>1) #> true  |
| asin(x)  | arcsin(x) the inverse sine of x             | asin(-1) #> -1.57079633 |
| atan(x)  | arctan(x) the inverse tangent of x          | atan(-1) #> -0.785398163 |
| avg(x1;…;xN) | mean(x1;…;xN) the arithmetic mean of the given numbers | avg(1;2;3) #> 2 |
| ceil(x)  | the smallest integer not less than x         | ceil(2.2) #> 3       |
| cos(x)   | the cosine of x                              | cos(0) #> 1          |
| cosh(x)  | the hyperbolic cosine of x                   | cosh(0) #> 1         |
| cotan(x) | cot(x) the cotangent of x                    | cotan(pi/2) #> 0     |
| exp(x)   | Euler’s number e raised to the power of x    | exp(2) #> 7.38905609893065 |
| floor(x) | the largest integer not greater than x       | floor(2.7) #> 2      |
| frac(x)  | the fractional part of x                     | frac(2.7) #> 0.7     |
| if(b;x;y) | iff(b;x;y) iif(b;x;y) returns x if b evaluates to true, otherwise y is returned | if(1>2;1;2) #> 2 |
| ipower(x;y) | raises x to a power of y (y is an integer) | ipower(4;2) #> 16   |
| ln(x)    | the natural logarithm (base e) of x          | ln(7.38905609893065) #> 2 |
| lg(x)    | log(x) the base 10 logarithm of x            | lg(1000) #> 3        |
| max(x1;…;xN) | the maximum of the given numbers           | max(1;2;3) #> 3     |
| min(x1;…;xN) | the minimum of the given numbers           | min(1;2;3) #> 1     |
| not(b)   | the logical complement of b                  | not(false) #> true  |
| or(x1;x2;...;xn) | logical or                             | or(1<2;2<1) #> true |
| power(x;y) | pow(x;y) raises x to a power of y           | power(4;2.2) #> 21.112126572366314 |
| random() | returns a random number between 0 and 1      | random() #> …        |
| round(x) | rounds x to the nearest integer              | round(2.5) #> 3      |
| sin(x)   | the sine of x                                | sin(2*pi) #> 0      |
| sinh(x)  | the hyperbolic sine of x                     | sinh(0) #> 0        |
| sqr(x)   | the square of x                              | sqr(2) #> 4         |
| sqrt(x)  | the square root of x                         | sqrt(4) #> 2        |
| tan(x)   | the tangent of x                             | tan(pi/4) #> 1      |
| tanh(x)  | the hyperbolic tangent of x                  | tanh(0.5) #> 0.46…  |
| trunc(x) | int(x) the integer part of x                 | trunc(2.7) #> 2     |

</div>