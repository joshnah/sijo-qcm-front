export interface Quiz {
    title: string;
    description: string;
    category: string;
    questions: Question[];
}

export interface Question {
    id: number
    text: string;
    options: Option[];
}

export interface Option {
    id: number
    text: string;
}

export interface SelectedResponses {
    responses: Record<number, Set<number>>;
}