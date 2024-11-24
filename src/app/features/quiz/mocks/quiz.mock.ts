import { Quiz } from '../../../shared/models/quiz.model';

export const SampleQuiz: Quiz = {
  id: '1',
  title: 'General Knowledge Quiz',
  explanation: 'Test your general knowledge with this quick quiz.',
  category: 'General Knowledge',
  questions: [
    {
      id: '1',
      text: 'What is the capital of France?',
      answers: [
        {
          id: '1',
          text: 'Berlin',
          isCorrect: false,
        },
        {
          id: '2',
          text: 'Madrid',
          isCorrect: false,
        },
        {
          id: '3',
          text: 'Paris',
          isCorrect: true,
        },
        {
          id: '4',
          text: 'Rome',
          isCorrect: false,
        },
      ],
    },
    {
      id: '2',
      text: 'What is 2 + 2?',
      answers: [
        {
          id: '5',
          text: '3',
          isCorrect: false,
        },
        {
          id: '6',
          text: '4',
          isCorrect: true,
        },
        {
          id: '7',
          text: '5',
          isCorrect: false,
        },
      ],
    },
  ],
};
