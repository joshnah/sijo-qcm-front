import { Quiz } from "../../../shared/models/quiz.model";

export const SampleQuiz: Quiz = {
  title: "World Trivia Quiz",
  description: "Test your knowledge about geography, history, and science with this fun trivia quiz.",
  category: "Trivia",
  questions: [
    {
      id: 1,
      text: "What is the largest ocean on Earth?",
      options: [
        { id: 1, text: "Pacific Ocean" },
        { id: 2, text: "Atlantic Ocean" },
        { id: 3, text: "Indian Ocean" },
        { id: 4, text: "Arctic Ocean" }
      ]
    },
    {
      id: 2,
      text: "Who wrote the play 'Romeo and Juliet'?",
      options: [
        { id: 1, text: "William Shakespeare" },
        { id: 2, text: "Charles Dickens" },
        { id: 3, text: "Jane Austen" },
        { id: 4, text: "Mark Twain" }
      ]
    },
    {
      id: 3,
      text: "What is the chemical symbol for gold?",
      options: [
        { id: 1, text: "Au" },
        { id: 2, text: "Ag" },
        { id: 3, text: "Fe" },
        { id: 4, text: "Pb" }
      ]
    },
    {
      id: 4,
      text: "Which country is known as the Land of the Rising Sun?",
      options: [
        { id: 1, text: "Japan" },
        { id: 2, text: "China" },
        { id: 3, text: "South Korea" },
        { id: 4, text: "Thailand" }
      ]
    }
  ]
};
