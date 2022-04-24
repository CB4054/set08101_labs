function show_answers() {
  var rick_roll = document.getElementById("rick_roll");
  var answer_button = document.getElementById("answer_button");

  rick_roll.style.display = "none";
  rick_roll.remove();
  answer_button.style.display = "none";

  const answer_list = document.querySelector("#answer_list");
  const answers = JSON.parse(localStorage.getItem("answers"));

  answer_list.innerHTML = answers
    .map((answers) => {
      return `<li class="answer_list">${answers.question} - ${answers.answers}</li>`;
    })
    .join("");
  console.log(answers);
}
