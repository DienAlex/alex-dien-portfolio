declare global {
  interface Window {
    particlesJS: {
      load: (
        tagId: string,
        path: string,
        callback?: () => void
      ) => void;
    };
  }
}

export {};