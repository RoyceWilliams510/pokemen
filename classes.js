///Possible pokemon ideas:Blastoise, Pikachu, Charizard,
//creates types on load
function run(){

}
var electricity = new Typing("electricity");
var fire = new Typing("fire");
var ground = new Typing("ground");
var water = new Typing("water");
var grass = new Typing("grass");
var fighting = new Typing("fighting");
var poison = new Typing("poison");
var ice = new Typing("ice");
var psychic = new Typing("psychic");
var bug = new Typing("bug");
var rock =  new Typing("rock");
var ghost = new Typing("ghost");
var dragon =new Typing("dragon");
var dark = new Typing("dark");
var normal = new Typing("normal");
var flying = new Typing("flying");



//electricty
electricity.setWeakness([ground]);
electricity.setResistance([electricity,flying]);

//fire
fire.setWeakness([water,rock,ground]);
fire.setResistance([fire,water,rock,dragon]);

//ground
ground.setWeakness([water,grass,ice]);
ground.setResistance([electricity,rock,poison]);

//water
water.setWeakness([electricity,grass]);
water.setResistance([fire,water,ice]);

// grass
grass.setResistance([water,electricity,ground,grass]);
grass.setWeakness([flying,fire,ice,poison]);

//ice
ice.setWeakness([fire,fighting,rock]);
ice.setResistance([ice]);

// fighting
fighting.setResistance([bug, rock, dark]);
fighting.setWeakness([flying, psychic]);

//poison
poison.setResistance([fighting, poison, bug, grass]);
poison.setWeakness([ground, psychic]);

//flying
flying.setResistance([grass, fighting, bug, ground]);
flying.setWeakness([electricity, ice, rock]);


//psychic
psychic.setResistance([fighting, psychic]);
psychic.setWeakness([bug, ghost, dark]);

//bug
bug.setResistance([grass, fighting, ground]);
bug.setWeakness([fire, flying, rock]);

//rock
rock.setResistance([normal, fire, poison, flying]);
rock.setWeakness([water, grass, fighting, ground]);

//ghost
ghost.setResistance([poison, bug, normal, fighting]);
ghost.setWeakness([ghost, dark]);

//dragon
dragon.setResistance([fire, water, electricity, grass]);
dragon.setWeakness([ice, dragon]);

//dark
dark.setResistance([psychic, ghost, dark]);
dark.setWeakness([fighting, bug]);

//normal
normal.setResistance([ghost]);
normal.setWeakness([fighting]);

class Typing{
    constructor(name){
        this.name= name;

    }
    setWeakness(weakness){
        this.weakness = weakness;
    }
    setResistance(resistance){
        this.resistance = resistance;
    }
}

class Pokemon{
    constructor(name,type,health,speed,defense,attack,id){
        this.moves =[];
        this.name= name;
        this.type=type;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.id = id;
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
}
class Trainer{
    constructor(name){
        this.name = name;
        this.teamCount =0;
        this.pokemons = [];
        this.currentPokemon =[];
    }
    addPokemon(pokemonId){
        for(var i= 0;i<this.currentPokemon.length; i++){
            if(this.currentPokemon[i].pokemonId){

            }
        }
    }
    switchPokemon(pokemonId){

    }
}