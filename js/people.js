const { objectNames } = require("./names.js");
// const objectNames = require("./names.js");

const { objectHobbies } = require("./hobbies.js");



// console.log(objectNames("Nicola", "Pasqua"));

// console.log(objectHobbies("calcio", "volley", "pesca"));






function init() {
        const fullName = objectNames("Nicola", "Pasqua");
        const hobbies = objectHobbies("volley","pesca","musica");
        return {
            fullName,
            hobbies
        }
}

console.log(init());