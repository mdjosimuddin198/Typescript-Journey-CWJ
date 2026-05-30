// first code
console.log("hello world/Ai");
// declare  variables
const fname = "md Josim uddin";
const age = 21;
const isStudent = true;
console.log(`Assalamu-Alaikum / Hello Everyone, My Name is ${fname} . I am ${age} years old and I am Currently a  ${isStudent ? "student " : "not a student"} `);
// declare array
const friends = ["Mobasser", "Emran", "Belal", "Samirul", "Asadul"];
// create  loop
for (let friend of friends) {
    console.log(friend);
}
const studentInfo = {
    name: "md josim uddin",
    age: 21,
    isStudent: true,
    isHireable: () => {
        console.log("not perfect yet");
    },
};
console.log(studentInfo);
// make  function
const add = (a, b) => {
    return a + b;
};
const result = add(5, 8);
console.log(result);
export {};
//# sourceMappingURL=script.js.map