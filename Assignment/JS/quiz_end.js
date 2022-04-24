const username = document.querySelector("#username");
const score_button = document.querySelector("#score_button");
const user_score = document.querySelector("#user_score");
const last_score = localStorage.getItem("last_score");

const high_scores = JSON.parse(localStorage.getItem("high_scores")) || [];
const TOTAL_HIGH_SCORES = 5;

user_score.innerText = last_score;

username.addEventListener("keyup", () => {
  score_button.disabled = !username.value;
});

save_score = (e) => {
  e.preventDefault();

  const score = {
    score: last_score,
    name: username.value,
  };

  high_scores.push(score);
  high_scores.sort((a, b) => {
    return b.score - a.score;
  });

  high_scores.splice(5);
  localStorage.setItem("high_scores", JSON.stringify(high_scores));
  window.location.assign("../html/high_scores.html");
};
