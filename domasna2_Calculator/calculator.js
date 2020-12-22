function calc(x, y, operator)
{
    switch(operator){
        case '+':
            return add(x,y);
        case '-':
            return sub(x,y);
        case '*':
            return mul(x,y);
        case '/':
            return div(x,y);
        case 'e':
            return powerOf(x,y);
        case '%':
            return moduleFrom(x, y);
        default:
            break;
    }
}

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

// Moja implementacija na funkcijata za eksponent.
function powerOf(x, y) {
    let result = 1;
    for(i = 0; i < y; i++)
    {
        result *= x;
    }
    return result;
}

function moduleFrom(x , y) {
    if(x % y === 0)
    {
        // Mi vrakjase invalid operation koga nemase ostatok vo proverkata(validacijata) vo main.js modulot.
        return '0';
    }
    else
    {
        return x % y;
    }
}

module.exports = {
    calc,
}
