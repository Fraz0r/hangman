const MOCK_LOAD_TIME = 500;

// This is simulating an endpoint
export function getRandomWord(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello");
    }, MOCK_LOAD_TIME);
  });
}
