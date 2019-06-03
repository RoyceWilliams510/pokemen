
//creates types on load
function run(){
    var electricity = new Typing("electricity");
    electricity.setWeakness([ground]);
    electricity.setResistance([electricity,flying]);

    var fire = new Typing("fire");
    fire.setWeakness([water,rock,ground]);
    fire.setResistance([fire,water,rock,dragon]);

    var ground = new Typing("ground");
    ground.setWeakness([water,grass,ice,]);
    ground.setResistance([electricity,rock,poison]);

    var water = new Typing("water");
    water.setWeakness([electricity,grass]);
    water.setResistance([fire,water,ice]);

    var grass = new Typing("grass");
    grass.setResistance([water,electricity,ground,grass]);
    grass.setWeakness([flying,fire,ice,poison]);
    var ice = new Typing("ice");
    ice.setWeakness([fire,fighting,rock]);
    ice.setResistance([ice]);

    var fighting = new Typing("fighting");

    var poison = new Typing("poison");
    var flying = new Typing("flying");
    var psychic = new Typing("psychic");
    var bug = new Typing("bug");
    var rock =  new Typing("rock");
    var ghost = new Typing("ghost");
    var dragon =new Typing("dragon");
    var dark = new Typing("dark");

}

class Typing{
    constructor(name){
        this.name= name;

    }
    setWeakness(weakness){
        this.weakness = weakness;
    }
    setResistance(resistance){
        this.effective = resistance;
    }
    set
}
class Pokemon{
    constructor(name,type,health){
        this.moves =[];
        this.name= name;
        this.type=type;
        this.health = health;
    }
    addMoves(move){
        this.moves.push(move);
    }
    getHealth(){
        return this.health;
    }
    getName(){
        return this.name;
    }

}

class Move{
    constructor(type,damage,effectChance,acc,pp){
        this.type = type;
        this.damage= damage;
        this.effectChance= effectChance;
        this.acc = acc;
        this.pp = pp;
    }
    go(){
    }

}