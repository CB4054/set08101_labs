const leaderboard = document.querySelector("#leaderboard");
const high_scores = JSON.parse(localStorage.getItem("high_scores"));

leaderboard.innerHTML = high_scores
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score} points</li>`;
  })
  .join("");

function reset_scores() {
  // Clear localStorage items
  localStorage.clear();
  window.location.reload();
}
