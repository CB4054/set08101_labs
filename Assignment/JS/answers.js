let questions = [
  {
    question: "What is the capital of China?",
    answer: "Beijing",
  },

  {
    question: "Who released the songs Bohemian Rhapsody and Don't stop me now?",
    answer: "Queen",
  },

  {
    question: "What is the air speed velocity of an unladen swallow?",
    answer: "An African or European swallow? ",
  },

  {
    question: "Who is the richest person in the world?",
    answer: "Elon Musk",
  },

  {
    question: "How long was the Hundred Years' War?",
    answer: "116 Years",
  },

  {
    question: "How do White-Faced Capuchin monkeys greet each other?",
    answer: "Sticking their fingers up each others' noses",
  },

  {
    question: "Which country has the highest number of cats per person?",
    answer: "New Zealand",
  },

  {
    question: "What is a group of stringrays called?",
    answer: "A fever",
  },

  {
    question: "Which of these creatures has a beak?",
    answer: "Octopus",
  },

  {
    question: "Cherophobia is the fear of what?",
    answer: "Being happy",
  },
];

const answer_list = document.querySelector("#answer_list");
const answers = JSON.stringify(questions);

for (var a of answers) {
  document.write(a);
}

// document.getElementById("answer_list").innerHTML = JSON.stringify(questions);

function show_answers() {
  var rick_roll = document.getElementById("rick_roll");
  var answer_button = document.getElementById("answer_button");

  rick_roll.style.display = "none";
  rick_roll.remove();
  answer_button.style.display = "none";
}
