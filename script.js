// const getAbility = async (url) => {
//     // console.log();
//     let ability = await fetch(url);
//     // results += "<p> " + " <strong>" + "Ability: " + "</strong>" + json.name + " " + json.flavor_text_entries[2].flavor_text + " <\p>";
//     console.log(ability);
//     return ability
// };

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("pokemonName").value;
    if (value === "")
        return;
    const url = "https://pokeapi.co/api/v2/pokemon/" + value.toLowerCase();
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
        console.log(json);
        //defining what results is
        let results = "";

        results += "<h2> #" + json.id + " " + json.name + " </h2>";
        results += "<img class=\"image\" src=" + json.sprites.front_default + " />";
        if (json.sprites.front_female !== null) {
            results += "<img class=\"image\" src=" + json.sprites.front_female + " />";
        }
        if (json.sprites.front_shiny !== null) {
            results += "<img class=\"image\" src=" + json.sprites.front_shiny + " />";
        }
        if (json.sprites.front_shiny_female !== null) {
            results += "<img class=\"image\" src=" + json.sprites.front_shiny_female + " />";
        }

        results += "<p> " + " <strong>" + "Type: " + "</strong> ";
        for (let i = 0; i < json.types.length; i++) {
            if (i !== 0){
                results += ", "
            }
            results += json.types[i].type.name;
        }
        results += " </p>";

        results += "<p> <strong> Weight: </strong> " + json.weight / 10 + " kg <\p>"

        results += "<p> " + " <strong>" + "Abilities: " + "</strong> ";
        for (let i = 0; i < json.abilities.length; i++) {
            if (i !== 0){
                results += ", "
            }
            results += json.abilities[i].ability.name;
        }
        results += " </p>";

        results += "<p> " + " <strong>" + "Moves: " + "</strong> ";
        for (let i = 0; i < json.moves.length; i++) {
            if (i !== 0){
                results += ", "
            }
            results += json.moves[i].move.name;
        }
        results += " </p>";

        document.getElementById("pokemonSprite").innerHTML = results;

    });
});