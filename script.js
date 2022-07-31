// Write your JavaScript code here!


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets);
  
       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);
   })

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let pilot = document.querySelector("input[name=pilotName]");
        let coPilot = document.querySelector("input[name=copilotName]");

        if (fuelLevel.value === "" || cargoMass.value === "" || pilotName.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
         }
    
        else if(validateInput(fuelLevel.value) !== "Is a Number"){
            alert("Fuel level needs to be a number");
        }

        else if(validateInput(cargoMass.value) !== "Is a Number"){
            alert("Cargo mass level needs to be a number");
        }

        else if(validateInput(pilot.value) === "Is a Number"){
            alert("Pilot name needs to be a string");
        }

        else if(validateInput(coPilot.value) === "Is a Number"){
            alert("Co-pilot name needs to be a string");
        }

      formSubmission(document,"", pilot, coPilot, fuelLevel, cargoMass);

   });


   
   
});



