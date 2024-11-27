export interface Quiz {
    id: string;
    title: string;
    explanation: string;
    category: string;
    questions: Question[];
}

export interface Question {
    id: string
    text: string;
    answers: Answer[];
}

export interface Answer {
    id: string
    text: string;
    isCorrect?: boolean;
}

type AnswerSet = Set<string>;
type StringId = string;
export type QuizAnswer = Record<StringId, AnswerSet>;

export interface SubmissionRequest {
    quizId: string; 
    answers: QuizAnswer;
}

export interface Submission {
    submissionId: string; 
    request: SubmissionRequest;
    correctAnswers: QuizAnswer;
    score?: number;
}

