const coin = {
    state: 0,

    flip: function () {        
        let chosenValue = Math.random() < 0.5 ? value1 : value2;   
        if(chosenValue == value1) {
            this.state = 0
        } 
        if(chosenValue == value2){
            this.state = 1
        }      
    },

    toString: function (){
        if (this.state === 0){
            return "Heads";
        }
        if (this.state === 1){
            return "Tails"
        }
    },

    toHTML: function () {
        const image = document.createElement("img");
        document.body.appendChild(image)
        image.src = "./images/cara.png";
        image.alt = "Heads/Tails";

        
    }    
}

coin.toHTML()
console.log(coin.toString())

//Hora de jogar a moeda;

function display20Flips() {
    const results = [];
    //use um loop para arremessar a moeda 20 vezes;
    for (let i = 0; i < 20; i ++){
        results.push(coin.toString())
    }

    return results
}

console.log(display20Flips())

function display20Images(){
    const results = []
    for (let i = 0; i < 20; i ++){
        results.push(coin.toString())
    }

    return results

}