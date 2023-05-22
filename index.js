"use strict";
let 제목 = document.querySelector("#title");
if (제목 instanceof Element) {
    제목.innerHTML = "반가워요";
}
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://www.google.com";
}
let 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", () => {
    alert("버튼을 눌렀습니다.");
});
