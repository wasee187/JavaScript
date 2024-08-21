//we can add circle object by adding or removing property in const object.

const circle = {
    radius : 1
};
circle.color = 'Yellow'
circle.draw = function(){}

delete circle.color;
delete circle.draw;
console.log(circle);