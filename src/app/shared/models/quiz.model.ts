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

export interface SelectedResponses {
    responses: Record<string, Set<string>>;
}