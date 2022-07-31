// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
     document.getElementById(`missionTarget`).innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    }
    else if (isNaN(testInput) === true){
        return "Not a Number";
    }
    else if (isNaN(testInput) === false){
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    
    document.getElementById("faultyItems").style.visibility = "hidden";

    document.getElementById("pilotStatus").innerHTML = "Pilot " + pilot.value + " is ready for launch";
    document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilot.value +  " is ready for launch";
    
    //both incorrect
    if (fuelLevel.value < 10000 && cargoMass.value > 10000) {
       //change faulty items to visible
       document.getElementById("faultyItems").style.visibility = "visible";

       document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
       document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";

       document.getElementById("launchStatus").style.color = "red";
       document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    }
    //mass wrong - fuel correct
    else if (cargoMass.value > 10000 && fuelLevel.value >= 10000) {
        //change faulty items to visible
        document.getElementById("faultyItems").style.visibility = "visible";

        document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
        document.getElementById("fuelStatus").innerHTML = "There is enough fuel for the journey";

        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
     }
    //mass correct - fuel wrong
    else if (cargoMass.value <= 10000 && fuelLevel.value < 10000) {
        //change faulty items to visible
        document.getElementById("faultyItems").style.visibility = "visible";

        document.getElementById("cargoStatus").innerHTML = "There is low enough mass for the shuttle to take off";
        document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";

        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
     }
    //both correct
    else if (cargoMass.value <= 10000 && fuelLevel.value >= 10000){
        document.getElementById("faultyItems").style.visibility = "hidden";

        document.getElementById("cargoStatus").innerHTML = "There is low enough mass for the shuttle to take off";
        document.getElementById("fuelStatus").innerHTML = "There is enough fuel for the journey";
        
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
     }


}

async function myFetch() {
    let planetsReturned;

    await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        planetsReturned = response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let max = planets.length; 
    let index = Math.floor(Math.random() * max);

    return planets[index];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
