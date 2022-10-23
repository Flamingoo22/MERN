class Ninjas{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
        return this;
    }
    showStats(){
        console.log(this);
        return this;
    }

    drinkSake(){
        return this.health+=10;
    }
}


class Sensei extends Ninjas{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Last time I ate.... was last time.");
        return this;
    }
}

const john = new Ninjas("John", 100);

const seisei = new Sensei("Itachi");

seisei.showStats();
seisei.speakWisdom();


john.showStats();
