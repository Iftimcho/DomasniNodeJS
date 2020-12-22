const calc = require('./calculator');

const result = calc.calc(2,6,'e');
if(result)
{
    console.log(result);
}
else
{
    console.log('Invalid operation');
}