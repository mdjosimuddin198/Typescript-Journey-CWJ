console.log("typescript learning day 02");
// make a  function  with optional parameter and default value and check if the parameter is provided or not and return the full name if last name is provided otherwise return first name only
const subtract = (a, b = 10) => {
    return a - b;
};
const result = subtract(12);
console.log(result);
const fullName = (firstName, lastName) => {
    return lastName ? firstName + " " + lastName : firstName;
};
const name1 = fullName("josim");
console.log(name1);
const name2 = fullName("alex", "jamai");
console.log(name2);
export {};
//# sourceMappingURL=script.js.map