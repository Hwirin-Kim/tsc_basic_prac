let title: string = "hello world";
title = "hi";
let age: number = 100;
age = 0.4;
let isTrue: boolean = false;
isTrue = true;

//array
let team: string[] = ["kim", "park", "lee"];

//object
let teams: { team1: string; team2: string; team3: string } = {
  team1: "hello",
  team2: "world",
  team3: "javascript",
};

//모든것에 타입 지정할 필요 없음
let 회원 = "kim";
//이런 경우 회원에 string을 넣으면서 자동으로 타입 지정이 된 경우임
//이 경우 회원에 다른 숫자를 할당할 수 없음

//나의 이름 출생지역을 변수로 지정하는 경우 (굳이 타입지정을 안해도 재할당시 같은 타입만 기입할 수 있음)
let 나의이름 = "김휘린";
let 출생지역 = "전주";
let 나이 = 32;

//obj
let likeSong: {
  name: string;
  song: string;
} = {
  name: "마크툽",
  song: "찰나가 영원이 될때",
};

//복합적인 타입지정
let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
