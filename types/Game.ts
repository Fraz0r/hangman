export type TGuessIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

// This could be locked down to just [a-z] or similar down the road for increased type safety
export type TValidInputChar = string;

export interface IGameInput {
  answer: string;
  inputChars: string[];
}

export interface IKeyboardLayout {
  name: string;
  layout: string[][];
}
