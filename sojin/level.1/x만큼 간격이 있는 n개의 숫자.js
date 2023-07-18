import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-07-14
 * **/

/** 문제 설명
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요. 
-> x만큼 간격이 있다는 뜻은 곧 배수를 구하는 문제를 뜻한다!
**/

function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

/**
 * function solution(x, n) {
 * return Array(n).fill(x).map((v, i) => (i+1) * v);
 * }
 */

function main() {
  const x = 2;
  const n = 5;
  const result = [2, 4, 6, 8, 10];

  checkAnswer(JSON.stringify(solution(x, n)) === JSON.stringify(result));
}

main();
