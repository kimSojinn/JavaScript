import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-02
 * **/

/** 문제 설명
정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요..**/

function solution(numbers, n) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
    if (sum > n) {
      return sum;
    }
  }
}

/** while문을 활용한 풀이
 * function solution(numbers, n) {
    let answer = 0;
    let i = 0;
    while(answer <= n) {
        answer += numbers[i++]
    }
    return answer;
}
 */

function main() {
  const numbers = [58, 44, 27, 10, 100];
  const n = 139;
  const result = 239;

  checkAnswer(solution(numbers, n) === result);
}

main();
