// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    
    //h2
    const head2 = document.createElement("h2");
    const node = document.createTextNode("Mission Destination");
    head2.appendChild(node);
    missionTarget.appendChild(head2);

    //ol
    const orderedList = document.createElement("ol");
    missionTarget.appendChild(orderedList);

    //li name
    const list_1 = document.createElement("li");
    const node_1 = document.createTextNode("Name: " + name);
    
    list_1.appendChild(node_1);
    orderedList.appendChild(list_1);

    //li diameter
    const list_2 = document.createElement("li");
    const node_2 = document.createTextNode("Diameter: " + diameter);
     
    list_2.appendChild(node_2);
    orderedList.appendChild(list_2);
    
    //li star
     const list_3 = document.createElement("li");
     const node_3 = document.createTextNode("Star: " + star);
     
     list_3.appendChild(node_3);
     orderedList.appendChild(list_3);

    //li distance
     const list_4 = document.createElement("li");
     const node_4 = document.createTextNode("Distance: " + distance);
     
     list_4.appendChild(node_4);
     orderedList.appendChild(list_4);

    //li moons
     const list_5 = document.createElement("li");
     const node_5 = document.createTextNode("Moons: " + moons);
     
     list_5.appendChild(node_5);
     orderedList.appendChild(list_5);
   
    //li imageUrl
     const list_6 = document.createElement("img");
     list_6.setAttribute("src", imageUrl)
    //  const node_6= document.createTextNode(imageUrl);
     missionTarget.appendChild(list_6);
   

//    /*
//                 <h2>Mission Destination</h2>
//                 <ol>
//                     <li>Name: </li>
//                     <li>Diameter: </li>
//                     <li>Star: ${star}</li>
//                     <li>Distance from Earth: </li>
//                     <li>Number of Moons: </li>
//                 </ol>
//                 <img src="">
//    */

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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    console.log("I sure ran");
    
    document.getElementById("pilotStatus").innerHTML = `Chris`;
    document.getElementById("copilotStatus").innerHTML = `Blake`;

    if (fuelLevel.value < 10000) {
       //change faulty items to visible
       document.getElementById("faultyItems").style.visibility = "visible";
       document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
       
       document.getElementById("launchStatus").style.color = "red";
       document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
    }

    if (cargoMass.value > 10000) {
        //change faulty items to visible
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
        
        document.getElementById("launchStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
     }

     if (cargoMass.value < 10000 && fuelLevel.value > 10000){
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
     }


}

async function myFetch() {
    let planetsReturned;

    await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        planetsReturned=response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let max = planets.length(); 
    let index = Math.floor(Math.random() * max);

    return planets(index);

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
