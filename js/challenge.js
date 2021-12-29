//challenge 1, should see timer increment every second
//when pages loads
//setInterval run some code every second
//change the number in the timer

//challenge 2
//when the plus button is clicked
//update the current number(add 1)
//update the DOOM
//same for subtract

//challenge 3
//when the pause button is clicked
    //pause the counter(stop the interval OR stop the number from going up)
//find all buttons that aren't pause button and set the 'disabled' attribure to true
//when 'resume' is clicked, restart the counter and re-enable the buttons

//challenge 4
//when like button is clicked
//if the number hasn't been clicked
    //add a new LI to the ul.likes
    //that shows "the number X has been liked 1 time
//if the number HAS been like
    //find LI for that number
    //upade the text to "the number X has been clicked X times"

//challenge 5
//Leave comments on my gameplay, such as: "Wow, what a fun game this is."


//Application state - single source of true/app state
let currentNumber = 0
let counterRunning = true //when we load the page, we want counter running up
let likedNumbers = {} //frequency counter
// {1: 3, 20: 1} first which num, second how many times 


//DOM elements
const timerH1 = document.querySelector("h1#counter")
const buttonContainer = document.querySelector("#button-container")
const likesUl = document.querySelector("ul.likes")
const comment = document.querySelector("#comment-input")

//submit button with a comment
comment.addEventListener('click', commentBox)
console.log(comment)


//events to figure out which button is clicked(using with forms as well)
buttonContainer.addEventListener("click", event => {
    // console.log(event.target)
    if(event.target.id === "plus") {
        changeCounter(1)
    } else if (event.target.id === "minus") {
        changeCounter(-1)
    } else if (event.target.id === "pause") {
        togglePaused() // will run when you click pause button
    } else if (event.target.id === "heart") {
        updateLikes()
    } 
})


function commentBox() {
   
    // comment.textContent = 
}



//DOM creation, updating the likes
function updateLikes() { //if the key exist in the object
    if(likedNumbers[currentNumber]) {
 // if our object have currentNumber do this
        const li = document.querySelector(`[data-number="${currentNumber}"]`)
        likedNumbers[currentNumber] += 1
        li.textContent = `The number ${currentNumber} has been liked ${likedNumbers[currentNumber]} times`
    } else {
        //in case it doesn't
        likedNumbers[currentNumber] = 1 //creating a new key on this object with current number
        const li = document.createElement("li")  //add a new LI to the ul.likes
        li.dataset.number = currentNumber //easier to find via dataset
        li.textContent =`The number ${currentNumber} has been liked 1 time`//show "the number X has been liked 1 time
        likesUl.append(li) //adding to the page
    }
    
}

//paused click fn
function togglePaused (){
    counterRunning = !counterRunning //set into false so when we click pause, we want counter to stop running
    document.querySelectorAll("button").forEach(button => {
        if(button.id !== "pause"){ //if is not disabled button
            button.disabled = !counterRunning //true value make it disabled
        } else {
            if(counterRunning){
                button.textContent = "pause" //if counter is running show pause 
            } else {
                button.textContent = "resume"//if is paused change text to 'resume'
            }
        
        }
    })
}

function changeCounter(amount) {
    currentNumber = currentNumber + amount
    timerH1.textContent = currentNumber
}


//set interval run code every second
setInterval(() => {
    if (counterRunning)
changeCounter(1)
   
}, 1000)
