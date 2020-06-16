//Getting Hang of the button 
let button = document.getElementById(`TheBoxes`);
//Adding eventListener to the button
button.addEventListener(`click`, MyFunction);
//keeping count that how many boxes have been generated
//let count = 0;
let old_value = 0;
let index = 1;
//declaring function to handle the click event
function MyFunction() {
    //getting the number from text box
    let n = document.getElementById(`number`).value;

    n = parseInt(n) + parseInt(old_value);
    for (; index <= n; index++) {
        let box = document.createElement(`div`);
        box.classList.add(`myDiv`);
        box.innerHTML = index;
        document.getElementById(`box`).appendChild(box);
        old_value = document.getElementById(`box`).lastElementChild.innerHTML;
        console.log(`oldvalue : ${old_value} , n : ${n} , index : ${index}`);
    }
}