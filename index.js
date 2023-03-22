const people = require("../country/state/city/index");
const firstName = require("../utilities/utils/index");
const getPeopleInCity = (people) => {
  return firstName(people);
};
module.exports = getPeopleInCity;
