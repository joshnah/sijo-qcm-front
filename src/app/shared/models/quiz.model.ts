export interface Quiz {
    title: string;
    description: string;
    category: string;
    questions: Question[];
}

export interface Question {
    id: number
    text: string;
    answers: Answer[];
}

export interface Answer {
    id: number
    option: string;
}

export interface SelectedAnswer {
    answers: Record<number, Set<number>>;
  }