type FuncType = (a: number, b: number) => number;

//type alias 쓰려면 함수를 표현식으로 정의해야함
const sum: FuncType = (a, b) => {
  return a + b;
};

type MemberInfo = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: MemberInfo = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();

//문자열 제일 첫번째에 '0'이 있으면 자르고 보여주는 함수
type CutZero = (x: string) => string;
const cutZero: CutZero = (x) => {
  if (x[0] === "0") {
    return x.substr(1);
  } else {
    return x;
  }
};
console.log(cutZero("01234"));
console.log(cutZero("0하하하하"));
console.log(cutZero("101234"));

//문자에 '-'가 있으면 모두 제거하고 보여주기
type RemoveDash = (x: string) => number;
const removeDash: RemoveDash = (x) => {
  return parseInt(x.replace(/-/g, ""));
};

console.log(removeDash("010-9999-8888"));

//위 두개 함수 섞어서 만들기
type AssembleFunc = (x: string, func1: CutZero, func2: RemoveDash) => number;
const 만들함수: AssembleFunc = (x, cutZero, removeDash) => {
  return removeDash(cutZero(x));
};
console.log(만들함수("010-9999-0000", cutZero, removeDash));
console.log(만들함수("110-9999-1230", cutZero, removeDash));
