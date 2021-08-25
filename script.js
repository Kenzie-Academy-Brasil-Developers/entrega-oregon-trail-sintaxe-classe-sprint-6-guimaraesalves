
// Criação do personagem viajante;
class Traveler {
    constructor(nome){
        this.nome = nome;
        this.food = 1;
        this.isHealthy = true;
    }

    //função caçar
    hunt(){
        return this.food = this.food + 2;
    };

    // função comer
    eat() {
    if (this.food == 0){
        this.isHealthy = false;
    }

    if (this.food > 0){
        return this.food = this.food - 1;
    }
};
}






//Criação da Carroça;



class Wagon {
    constructor(capacity) {       
        this.capacity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
        return this.capacity;
    }  

    join(nome){
        if(this.capacity > 0){
            this.passengers.push(nome);
            this.capacity -= 1
        }
    }

    shouldQuarantine(passengers){ 
        //fazer umm for dentro da lista de passageiros para ver se tem algum doente;
        for(let temDoente = 0; temDoente < passengers; temDoente++){

            if (this.passengers.isHealthy === true){
                return true
            }
        }
        
    }

    totalFood(){
        let tot = 0
        for (let i = 0; i < this.passengers; i++){
            tot += this.passengers.food;
        }

        return tot
    }

}
    


   
   
  

    
    





 // Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);

