class Player {
    constructor(palyer_name){
        this.name = player_name
        this.collected = []
        this.sum = 0
    }
    
    get sum(){
        return this.sum
    }

    get name(){
        return this.name
    }

    get collected(){
        return this.collected
    }

    addNumber(value){
         this.collected.push(value)
         this.sum += value
    }
    
}