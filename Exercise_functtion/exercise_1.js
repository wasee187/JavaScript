const count = sum([1,2,4,4,5])

console.log(count);
function sum(...args){
    if(args.length === 1 && Array.isArray(args[0]))
        args = [...args[0]];
    return args.reduce((a,b) => a+b);
}