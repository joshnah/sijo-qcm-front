import { Quiz } from '../../../shared/models/quiz.model';
import { Submission } from '../../../shared/models/submission.model';

export const MockQuiz: Quiz = {
  _id: '%s',
  title: "Questions d'entretien Java %s",
  explanation:
    "Ce quiz teste vos connaissances sur les concepts fondamentaux de Java, souvent posés lors des entretiens d'embauche.",
  category: 'Java',
  questions: [
    {
      id: 'q1',
      text: "Quel est le type de retour de la méthode 'main' en Java ?",
      answers: [
        { id: 'a1', option: 'void', isCorrect: true },
        { id: 'a2', option: 'int', isCorrect: true },
        { id: 'a3', option: 'String' },
        { id: 'a4', option: 'boolean' },
      ],
    },
  ],
};

