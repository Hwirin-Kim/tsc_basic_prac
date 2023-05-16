"use strict";
//타입을 미리 정하기 애매할 때
//number or string (Union Type)
let member = 123;
member = "member";
let members = [1, 2, 3, "4", "5"];
let members2 = { a: "apple" };
members2.a = 30;
// any type (일반 자바스크립트 변수처럼 사용됨, 권장 X )
let 애니;
애니 = "애니";
애니 = 30;
애니 = true;
애니 = undefined;
//unknown type
let 언노운;
언노운 = "언노운";
언노운 = 30;
//언노운과 애니의 차이점
언노운 - 1; //unknown타입은 간단한 수학연산도 불가능함
//유니온 타입인 경우에도 수학연산 불가 ==> +연산자가 string에도 number에도 적용이 되기 때문
