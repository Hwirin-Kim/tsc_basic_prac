"use strict";
//리터럴
const 가위바위보 = (x) => {
    return [x];
};
let obj = {
    name: "kim",
};
//as const를 적으면 속성의 밸류값을 타입으로 지정하게 됨 따라서 name의 type이 string이 아니라 'kim'이 되는것
const asConst = (x) => { };
asConst(obj.name);
