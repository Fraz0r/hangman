import { useEffect, useState } from "react";
import { getRandomWord } from "../services/game";

export default function useRandomWord() {
  const [word, setWord] = useState<string>();

  useEffect(() => {
    getRandomWord().then((w) => setWord(w));
  }, []);

  return word;
}
