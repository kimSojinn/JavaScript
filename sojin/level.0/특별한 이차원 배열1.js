import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-06
 * **/

/** 문제 설명
정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 return 하는 solution 함수를 작성해 주세요.

arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.
**/

function solution(n) {
  const answer = [];
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    answer.push(arr);
  }
  return answer;
}

function main() {
  const n = 3;
  const result = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  checkAnswer(JSON.stringify(solution(n)) === JSON.stringify(result));
}

main();
