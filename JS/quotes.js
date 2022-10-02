const quotes = [
    {
        quote: "Forget injuries, never forget kindnesses",
        author: "Confucius",
    },
    {
        quote: "The saddest thing I can imagine is to get used to luxury",
        author: "Charlie Chaplin",
    },
    {
        quote: "True knowledge exists in knowing that you know nothing",
        author: "Socrates",
    },
    {
        quote: "He who would travel happily must travel light",
        author: "Antoine de saint-Exupery",
    },
    {
        quote: "Everywhere I go I find a poet has been there before me",
        author: "Siqmund Freud",
    },
    {
        quote: "Today that you have lived in vain is the tomorrow that a person who died yesterday truly wanted to live",
        author: "Sophocles",
    },
    {
        quote: "carpe diem",
        author: "...",
    },
    {
        quote: "un jour, je vais m'envoler",
        author: "...",
    },
    {
        quote: "la dolce vita",
        author: "...",
    },
    {
        quote: "No man is wise enough by himself",
        author: "Titus Maccius Plautus",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[10-1]); // 10번째 명언 나옴
// console.log(quotes[Math.floor(Math.random() * 10)]); // 바로 아래 줄 참고
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);
/*
Math.random() // 랜덤 숫자
Math.random() * 10 // 0에서 10까지 랜덤
Math.round(1.1) // 1(반올림)
Math.ceil(1.1) // 2(최대한 크게 만든다), ceil: 천장
Math.floor(1.1) // 1(최대한 작게 만든다), floor: 마루
*/

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

