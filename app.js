
const container = document.getElementById('container');
const buttonForNewDie = document.getElementById('btnForNewDie');
const buttonForUpdate = document.getElementById('btnForUpdate');
const buttonForRefresh = document.getElementById('btnForRefresh');
const dice = document.getElementsByClassName('die');
const buttonForSum = document.getElementById('btnForSum');

let diceArray = [];
// Create a class Die to make a new die object
class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.roll();
        container.appendChild(this.div);
        diceArray.push(this);

    }

    roll() {
        let randomNum = Math.floor(Math.random() * 6) + 1;
        this.value = randomNum;
        this.div.innerHTML = this.value;
    }


}


//Generate Dice button : Each time it is clicked, a new die shows up
buttonForNewDie.addEventListener('click', function () {
   
    let die = new Die();
// when the die is clicked once, it calls roll() and changes its value
    die.div.addEventListener('click', function () {
        die.roll()
    })
//When  the die is dblclicked, it disappers from the screen and the matched  Die object in the diceArry is taken away   
    die.div.addEventListener('dblclick', function(){
        die.div.remove();
        const removeIndex = diceArray.indexOf(die);
        diceArray.splice(removeIndex, 1);
        
    })
});

//Roll Dice button : when it is clicked , it changes the value of the all dice presented on the screen.
buttonForUpdate.addEventListener('click', function () {

    diceArray.forEach((item)=>{
        item.roll()
    })
});

//Sum Dice button : when it is clicked, it calls sumDice() and it adds up the value of the all dice presented on the screen
buttonForSum.addEventListener('click', sumDice);


function sumDice() {

    let sum = 0;

    diceArray.forEach((item)=>{
        return sum += item.value
    })
    
    alert(sum);

};


//Refresh button : when it is clicked, it reloads the page.
buttonForRefresh.addEventListener('click',function(){
    location.reload();
})





