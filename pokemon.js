$(document).ready(function() {
    $("#intro").html("Welcome to AlbinMon the pokemon simulator designed by Royce Williams and Dylan Delancie");
    $("#go").click(function(){
        var trainer1Name =$("#trainer1Name").val();
        var trainer2Name = $("#trainer2Name").val();
        var trainer1 = new Trainer(trainer1Name);
        var trainer2 = new Trainer(trainer2Name);
        console.log(trainer1);
        console.log(trainer2);
        $("#nameTaker").hide();
        alert("Hello "+ trainer1.name+" and "+trainer2.name+" welcome to our game. Your next step is to go and select the available pokemon below to battle each other with.");
        $("#intro").hide();
    });
});
function constructMenus(){

}


