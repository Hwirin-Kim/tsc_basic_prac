const 홍길동 = (이름?: string): void => {
  if (이름) {
    console.log(이름 + "입니다.");
  } else {
    console.log("이름이 없습니다.");
  }
};

홍길동();
홍길동("홍길동");

const count = (x: string | number): number => {
  if (typeof x === "string") {
    return x.length;
  } else {
    let y = x.toString();
    return y.length;
  }
};

console.log(count("12345"), count(123456));

const 결혼가능여부 = (
  월소득: number,
  집보유여부: boolean,
  매력점수: "상" | "중" | "하"
): string | void => {
  let score = 0;
  if (집보유여부 === true) {
    score = score + 500;
  }
  if (매력점수 === "상") {
    score = score + 100;
  }
  if (월소득 + score >= 600) {
    return "결혼가능";
  }
};
console.log(결혼가능여부(100, true, "상"));
console.log(결혼가능여부(99, true, "중"));
