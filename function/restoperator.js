function sum(discount, ...prices){
    const total = prices.reduce((a,b)=> a+b);

    return total *(1- discount);
}

console.log(sum(0.1, 1,2,3,4,5,10))