const calc = require('./calculator');

const result = calc.calc(19,6,'%');
if(result)
{
    console.log(result);
}
else
{
    console.log('Invalid operation. Enter valid operation from: +, -, *, /, e (exponent) or % (module)');
}
