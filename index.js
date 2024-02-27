// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());
console.log(saturdayFun('bath my dog'));

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(flair='*'){
return function (adjective){
    return "You are " + flair + adjective + flair +"!"; 
};
}
const h=wrapAdjective("*");
console.log(hh("a hard worker"));
const hh=wrapAdjective("||");
console.log(hh("a hard worker"));