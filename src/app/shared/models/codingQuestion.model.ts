export interface CodingQuestion {
  id: string;
  title: string;
  description: string;
  testCases: TestCase[];
  functionSignatures: FunctionSignature[];
  functionName: string;
}

export interface FunctionSignature {
  language: string;
  arguments: FunctionArgument[];
  returnType: string;
}

export interface FunctionArgument {
  name: string;
  type: string;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
}

export interface CodingSubmission {
  codingSubmissionId: string;
  questionId: string;
  userCode: string;
  language: string;
  userId: string;
  status: string; // e.g., "Accepted", "Wrong Answer", etc.
  date: string; // ISO 8601 formatted date
  score: number; // e.g., 90/100
}
