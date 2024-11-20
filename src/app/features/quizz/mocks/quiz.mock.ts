import { Quiz } from "../../../shared/models/quiz.model";

export const SampleQuiz: Quiz = {
  title: "World Trivia Quiz",
  description: "Test your knowledge about geography, history, and science with this fun trivia quiz.",
  category: "Trivia",
  questions: [
    {
      id: 1,
      text: "What is the largest ocean on Earth?",
      answers: [
        { id: 1, option: "Pacific Ocean" },
        { id: 2, option: "Atlantic Ocean" },
        { id: 3, option: "Indian Ocean" },
        { id: 4, option: "Arctic Ocean" }
      ]
    },
    {
      id: 2,
      text: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { id: 1, option: "William Shakespeare" },
        { id: 2, option: "Charles Dickens" },
        { id: 3, option: "Jane Austen" },
        { id: 4, option: "Mark Twain" }
      ]
    },
    {
      id: 3,
      text: "What is the chemical symbol for gold?",
      answers: [
        { id: 1, option: "Au" },
        { id: 2, option: "Ag" },
        { id: 3, option: "Fe" },
        { id: 4, option: "Pb" }
      ]
    },
    {
      id: 4,
      text: "Which country is known as the Land of the Rising Sun?",
      answers: [
        { id: 1, option: "Japan" },
        { id: 2, option: "China" },
        { id: 3, option: "South Korea" },
        { id: 4, option: "Thailand" }
      ]
    }
  ]
};
