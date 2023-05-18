const cleaning = (arr: (number | string)[]): number[] => {
  const newArr = arr.map((num) => {
    if (typeof num === "string") {
      return Number(num);
    } else {
      return num;
    }
  });
  return newArr;
};
console.log(cleaning([1, 2, 3, 4]));
console.log(cleaning([1, "2", 3, "4"]));
console.log(cleaning(["1", "2", "3"]));

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };

const subjectFinder = (x: { subject: string | string[] }) => {
  if (typeof x.subject === "string") {
    return x.subject;
  }
  if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  }
  if (!Array.isArray(x.subject)) {
    return "type Error";
  }
};
console.log(subjectFinder(철수쌤));
console.log(subjectFinder(영희쌤));
