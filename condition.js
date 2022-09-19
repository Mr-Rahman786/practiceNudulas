var numberOne = 20;
var numberTwo = 18;

if (numberOne<numberTwo && numberOne>numberTwo) {
    console.log('Sorry sir you cant be entry without id');
}
else if (numberOne < numberTwo || numberOne > numberTwo) {
    console.log('you have been passed');
}
else {
    console.log('Today will be finished');
}




// task 6


let subjectOne = 88;
let subjectTwo = 91;
let subjectThree = 77;

if (subjectOne < subjectTwo && subjectOne < subjectThree) {
    console.log(false);
}
else if (subjectTwo > subjectOne || subjectTwo < subjectThree){
    console.log('Congratulations you Have been Passed',true);
}
else {
    console.log('you can not select anyone');
}
