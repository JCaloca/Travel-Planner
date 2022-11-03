const Location = require("./locations");
const Traveler = require("./travelers");
const Trip = require("./trip");

Location.belongsToMany(Traveler, {
  through: Trip,
});

Traveler.belongsToMany(Location, {
  through: Trip,
});

module.exports = { Location, Traveler, Trip };
