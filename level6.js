"use strict";
//type alias 쓰려면 함수를 표현식으로 정의해야함
const sum = (a, b) => {
    return a + b;
};
let 회원정보 = {
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
const cutZero = (x) => {
    if (x[0] === "0") {
        return x.substr(1);
    }
    else {
        return x;
    }
};
console.log(cutZero("01234"));
console.log(cutZero("0하하하하"));
console.log(cutZero("101234"));
const removeDash = (x) => {
    return parseInt(x.replace(/-/g, ""));
};
console.log(removeDash("010-9999-8888"));
const 만들함수 = (x, cutZero, removeDash) => {
    return removeDash(cutZero(x));
};
console.log(만들함수("010-9999-0000", cutZero, removeDash));
console.log(만들함수("110-9999-1230", cutZero, removeDash));
