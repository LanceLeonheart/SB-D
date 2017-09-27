class Jungle {
    constructor(){
        this.tiger = 0;
        this.monkey = 0;
        this.snake = 0;
        this.meat = 50;
        this.fish = 50;
        this.bug = 50;
        this.grain = 50;
        this.animals = [];
    }
    
    addAnimal(Obj){
        if( Obj instanceof Tiger){
            this.tiger++;
            this.animals.push(Obj);
        }
        if( Obj instanceof Monkey){
            this.monkey++;
            this.animals.push(Obj);
        }
        if( Obj instanceof Snake){
            this.snake++;
            this.animals.push(Obj);
        }
    }
    
    soundOff(){
        for(let i = 0; i < this.animals.length; i++){
            this.animals[i].sound();
            console.log(this.animals[i].energy);
        }
    }
}

class Animal {
    constructor(j){
        this.energy = 10;
        this.home = j;
    }
    
    eat(){
        this.energy += 5;
    }
    
    sleep(){
        this.energy += 10;
    }
    
    sameKind(type){
        return this.home[type];
    }
}

class Tiger extends Animal {
    constructor(j){
        super(j);
        this.type = "Tiger";
    }
    sound(){
        this.energy -= 3;
        console.log(this.type + " roars");
    }
    
    sleep(){
        this.energy += 5;
    }
    
    others(){
        return this.sameKind("tiger");
    }
}

class Monkey extends Animal {
    constructor(j){
        super(j);
        this.type = "Monkey";
    }
    sound(){
        this.energy -= 4;
        console.log(this.type + " Oooos");
    }
    
    eat(){
        this.energy += 2;
    }
    
    play(){
        if(this.energy >= 8){
            this.energy -= 8;
            console.log(this.type + " Oooo Oooo Oooos");
        }
        else{
            console.log(this.type + " Monkey is too tired");
        }
    }
    
    others(){
        return this.sameKind("monkey");
    }
}

class Snake extends Animal {
    constructor(j){
        super(j);
        this.type = "Snake";
    }
    sound(){
        this.energy -= 3;
        console.log(this.type + " ssssssss");
    }
    
    
    others(){
        return this.sameKind("snake");
    }
}