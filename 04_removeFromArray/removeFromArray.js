const removeFromArray = function (array, ...theArgs) {
    return array.filter( element => !theArgs.includes(element))
};

//same as const removeFromArray = (array, ...args)=> array.filter( val => !args.includes(val) )
// Do not edit below this line
module.exports = removeFromArray;
