const quotes = [
  "“Wherever you go, there you are.” — Jon Kabat-Zinn",
  "“Live the actual moment. Only this actual moment is life.” — Thich Nhât Hanh",
  "“Nothing can harm you as much as your own thoughts unguarded.” — Buddha",
  "“Mindfulness isn’t difficult, we just need to remember to do it.” — Sharon Salzberg",
  "“If you want to conquer the anxiety of life, live in the moment, live in the breath.” — Amit Ray",
  "“Meditation is not evasion; it is a serene encounter with reality.” — Thich Nhât Hanh",
  "“Open the window of your mind. Allow the fresh air, new lights and new truths to enter.” — Amit Ray",
  "“The mind is just like a muscle – the more you exercise it, the stronger it gets and the more it can expand.” — Idowu Koyenikan",
  "“Life is a dance, Mindfulness is witnessing that dance.” — Amit Ray",
];

const quoteDisplay = document.getElementById("quote");

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

let number = randomNumber(quotes.length);

quoteDisplay.innerHTML = quotes[number];