// first code
console.log("hello world/Ai");

// declare  variables
const fname: string = "md Josim uddin";
const age: number = 21;
const isStudent: boolean = true;
console.log(
  `Assalamu-Alaikum / Hello Everyone, My Name is ${fname} . I am ${age} years old and I am Currently a  ${isStudent ? "student " : "not a student"} `,
);

// declare array

const friends: string[] = ["Mobasser", "Emran", "Belal", "Samirul", "Asadul"];

// create  loop
for (let friend of friends) {
  console.log(friend);
}

// declare object

type student = {
  name: string;
  age: number;
  isStudent: boolean;
  isHireable: () => void;
};

const studentInfo: student = {
  name: "md josim uddin",
  age: 21,
  isStudent: true,
  isHireable: () => {
    console.log("not perfect yet");
  },
};

console.log(studentInfo);

// make  function
const add = (a: number, b: number): number => {
  return a + b;
};

const result = add(5, 8);
console.log(result);
