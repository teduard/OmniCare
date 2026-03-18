import { useState } from "react";
function useAi() {
  const [aiData] = useState<object>({
    message: "empty",
  });

  return { aiData };
}

const updateAI = async (text: string) => {
  await window.embedder(text, {
    pooling: "mean",
    normalize: true,
  });
};

export { useAi, updateAI };
