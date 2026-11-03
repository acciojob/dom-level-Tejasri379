//your JS code here. If required.
//your JS code here. If required.
const element = document.getElementById('level');
let count = 0;
let currElement = element;
while(currElement){
    count++;
    currElement = currElement.parentElement;
}
alert(`The level of the element is:${count}`);