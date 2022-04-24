let questions = [
  {
    question:
      "More than 1/5 of all the calories consumed by humans worldwide is provided by:",
    choice1: "Rice",
    choice2: "Potatoes",
    choice3: "Cereals",
    choice4: "Fish",
    answer: 1,
    hint: "Requires a lot of water.",
  },

  {
    question:
      "In South Korea, there is an emergency number (113) to report what?",
    choice1: "Escaped Livestock",
    choice2: "Trespassing foreigners",
    choice3: "Spies",
    choice4: "Police officers abusing their powers",
    answer: 3,
    hint: "Be on the lookout for moles.",
  },

  {
    question: "What is the air speed velocity of an unladen swallow?",
    choice1: "At least 2",
    choice2: "An African or European swallow? ",
    choice3: "6.4",
    choice4: "20,000",
    answer: 2,
    hint: "Any Monty Python fans?",
  },

  {
    question: "Who is the richest person in the world?",
    choice1: "Warren Buffett",
    choice2: "Elon Musk",
    choice3: "Jeff Bezos",
    choice4: "Bill Gates",
    answer: 2,
    hint: " He also owns a space company.",
  },

  {
    question: "How long was the Hundred Years' War?",
    choice1: "100 years... duh",
    choice2: "99 Years?",
    choice3: "116 Years",
    choice4: "1 Year",
    answer: 3,
    hint: " Not as straight forward as you may think.",
  },

  {
    question: "How do White-Faced Capuchin monkeys greet each other?",
    choice1: "Jumping on each others backs",
    choice2: "Hugging",
    choice3: "Howling from a distance",
    choice4: "Sticking their fingers up each others' noses",
    answer: 4,
    hint: " How very intrusive...",
  },

  {
    question: "Which country has the highest number of cats per person?",
    choice1: "Egypt",
    choice2: "Thailand",
    choice3: "Greece",
    choice4: "New Zealand",
    answer: 4,
    hint: " It is also one of the least populated countries in the world.",
  },

  {
    question: "What is a group of stringrays called?",
    choice1: "A fever",
    choice2: "A School",
    choice3: "A flock",
    choice4: "A flourish",
    answer: 1,
    hint: " Is it hot in here?",
  },

  {
    question: "Which of these creatures has a beak?",
    choice1: "Dog",
    choice2: "Giraffe",
    choice3: "Badger",
    choice4: "Octopus",
    answer: 4,
    hint: " Well it isn't a dog... is it?",
  },

  {
    question: "Cherophobia is the fear of what?",
    choice1: "Dancing with the lights on",
    choice2: "Cher",
    choice3: "Being happy",
    choice4: "Fear",
    answer: 3,
    hint: " Sadly it isn't Cher.",
  },
];

const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice_data"));
let hint = document.querySelector("#hint");

let current_question = {};
let accepting_answers = true;
let user_score = 0;
let question_number = 0;
let remaining_questions = [];
const TOTAL_QUESTIONS = 10;

start_quiz = () => {
  question_number = 0;
  user_score = 0;
  remaining_questions = [...questions];
  next_question();
};

show_hint = (e) => {
  hint.innerText = current_question.hint;
};

//Code below commented out as timer is not functioning 100% correctly. Partial functionality has been acheived.
// function start_clock() {
//   var time_remaining = 5;
//   var timer = setInterval(function start_countdown() {
//     if (time_remaining == 0) {
//       clearInterval(timer);
//       next_question();
//     } else {
//       document.getElementById("countdown").innerHTML =
//         time_remaining + " seconds remaining";
//     }
//     time_remaining -= 1;
//   }, 1000);
// }

next_question = () => {
  // start_clock();
  hint.innerText = "Hint?";

  if (remaining_questions.length === 0 || question_number > TOTAL_QUESTIONS) {
    localStorage.setItem("last_score", user_score);

    return window.location.assign("../html/quiz_end.html");
  }
  question_number++;

  const question_index = Math.floor(Math.random() * remaining_questions.length);
  current_question = remaining_questions[question_index];
  question.innerText = current_question.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = current_question["choice" + number];
  });

  hint.addEventListener("click", (e) => {
    show_hint();
  });

  remaining_questions.splice(question_index, 1);
  accepting_answers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!accepting_answers) return;

    accepting_answers = false;
    const selected_choice = e.target;
    const selected_answer = selected_choice.dataset["number"];

    if (selected_answer == current_question.answer) {
      user_score += 1;
    }

    next_question();
  });
});

start_quiz();
