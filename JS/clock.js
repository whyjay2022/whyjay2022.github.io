const clock = document.querySelector("h2#clock");
// clock.innerText = "roco";

function getClock() {
    const date = new Date();
    /* padStart() : string에 쓸 수 있는 function이다. (padEnd도 있음)
        첫 번쨍 인자: 문자 길이, 두 번째 인자: 첫 인자 길이보다 짧을 때 앞쪽에 채울 것*/
    // padStart 함수는 string에 쓸 수 있는데 시간은 숫자이기 때문에 String()으로 감싸서 number->string 했다.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 5000 -> 5초
// setInterval(sayHello, 5000); // 첫 번째 인자는 실행하고자하는 함수, 두 번째 인자는 호출되는 함수 간견을 몇 ms(milliseconds)로 할지 작성
// setTimeout(sayHello, 5000); // 첫 번째 인자: 실행하고자하는 함수, 두 번째 인자: 얼마나 기다릴지 ms 단위로 작성

getClock();
setInterval(getClock, 1000);



