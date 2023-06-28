import { IGameInput } from "../types/Game";

type TAnswer = IGameInput['answer']
type TInputChars = IGameInput['inputChars']

export function getIncorrect(answer: TAnswer, inputChars: TInputChars) {
  const answerChars = answer.toLowerCase().split('');
  return inputChars.filter(c => !answerChars.includes(c));
}

export function getNumIncorrect(answer: TAnswer, inputChars: TInputChars) {
  return getIncorrect(answer, inputChars).length;
}
