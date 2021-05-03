import { BaseModel } from "./BaseModels";

export class Quiz extends BaseModel {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correctAnswer: string;

  constructor(name: string) {
    super();
    this.question = question;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.correctAnswer = correctAnswer;
  }
}

export default Quiz;
