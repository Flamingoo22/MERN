class Unit{
    constructor(name, cost, power, resilience){
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        target.resilience -= this.power;
        console.log(`<${target.name}> attacked by <${this.name}>, <${target.name}>'s resilience is reduced by ${this.power}.`)
        if(target.resilience <= 0){
            console.log(`${target.name} has fallen...`);
        }
        return this;
    }
}

class Effect{
    constructor(name, cost, text, stat, magnitude){
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        console.log(`User used <${this.name}> on <${target.name}>, and ${target.name}'s ${this.stat} increased by ${this.magnitude}`);
        this.stat === "power" ? target.power += this.magnitude : target.resilience+= this.magnitude;
        return target;
    }
}

const redBeltNinja = new Unit("Red Belt Ninja",3,3,4);
const blackBeltNinja = new Unit("Belt Belt Ninja",4,5,4);

const hardAlgo = new Effect("Hard Algorithum", 2,"increase target's resilence by 3", "resilience", 3);
const uPR = new Effect("Unhandled Promised Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

hardAlgo.play(redBeltNinja);
uPR.play(blackBeltNinja);
pProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);