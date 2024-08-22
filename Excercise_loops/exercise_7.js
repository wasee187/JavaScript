const movie = {
    title: 'a',
    releasseYear: 2018,
    rating: 45,
    director: 'b'
};
showProperties(movie);
function showProperties(obj){
    for (let x in obj){
        if (typeof obj[x] === 'string')
            console.log(x, obj[x]) 
    }
} 