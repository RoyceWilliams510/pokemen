$(document).ready(function() {
    $("#intro").html("Welcome to AlbinMon the pokemon simulator designed by Royce Williams and Dylan Delancie");
    $("#go").click(function(){
        var trainer1Name =$("#trainer1Name").val();
        var trainer2Name = $("#trainer2Name").val();
        trainer1.setName(trainer1Name);
        trainer2.setName(trainer2Name);
        console.log(trainer1);
        console.log(trainer2);
        $("#nameTaker").hide();
        alert("Hello "+ trainer1.name+" and "+trainer2.name+" welcome to our game. Your next step is to go and select the available pokemon below to battle each other with.");
        $("#intro").hide();
        constructMenus();
    });
});
//newPokemon(name, type, health, speed, defense, attack, id)
function constructMenus(){
    var table2 = "<table id ='pokemonMenu2' class='menuCharts'><tr>"+trainer1.name+"'s Menu</tr>" +
            "<tr>" +
        "    <th>Name</th>" +
        "    <th>Type</th>" +
        "    <th>Health</th>" +
        "    <th>Speed</th>"+
        "    <th>Defense</th>"+
        "    <th>Attack</th>" +
               "  </tr>";
    var table1 = "<table id ='pokemonMenu1'><tr>"+trainer2.name+"'s Menu</tr>" +
        "<tr>" +
        "    <th>Name</th>" +
        "    <th>Type</th>" +
        "    <th>Health</th>" +
        "    <th>Speed</th>" +
        "    <th>Defense</th>" +
        "    <th>Attack</th>" +
        "  </tr>";
    for(var i =0; i<allPokemon.length; i++){
        table1+="<tr><td>"+allPokemon[i].name+"</td>" +
            "<td>"+allPokemon[i].type.name+"</td>"+
            "<td>"+allPokemon[i].health+"</td>"+
            "<td>"+allPokemon[i].speed+"</td>"+
            "<td>"+allPokemon[i].defense+"</td>"+
            "<td>"+allPokemon[i].attackPow+"</td>" +
            "<td><button id ='add"+allPokemon[i].id+"'value ='"+allPokemon[i].id+"' onclick='addPokemon2("+allPokemon[i].id+")'>Add to team</button></td></tr>"
    }

    for(var k =0; k<allPokemon.length; k++){
        table2+="<tr><td>"+allPokemon[k].name+"</td>" +
            "<td>"+allPokemon[k].type.name+"</td>"+
            "<td>"+allPokemon[k].health+"</td>"+
            "<td>"+allPokemon[k].speed+"</td>"+
            "<td>"+allPokemon[k].defense+"</td>"+
            "<td>"+allPokemon[k].attackPow+"</td>" +
            "<td><button id ='add"+allPokemon[k].id+"' value ='"+allPokemon[k].id+"' onclick='addPokemon1("+allPokemon[k].id+")'>Add to team</button></td></tr>"
    }
    $("#trainer1Menu").html(table1);
    $("#trainer2Menu").html(table2);
}

function addPokemon1(id){
    trainer1.addPokemon(id);
    console.log(trainer1.pokemons);
}
function addPokemon2(id){
    trainer2.addPokemon(id);
    for(var i= 0;i<allPokemon.length; i++){
        if(id ==allPokemon[i].id){
            var pokeName = allPokemon[i].name;
        }
    }
    alert(trainer2.name+" has added "+pokeName+" to their team.");
    console.log(trainer2.pokemons);
}
