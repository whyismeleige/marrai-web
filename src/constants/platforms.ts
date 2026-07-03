export type AiPlatform = {
  id: string;
  name: string;
  iconSrc: string;
  iconAlt: string;
};

export const aiPlatforms = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    iconSrc: "/ai-platform-icons/chatgpt.svg",
    iconAlt: "ChatGPT logo",
  },
  {
    id: "claude",
    name: "Claude",
    iconSrc: "/ai-platform-icons/claude.svg",
    iconAlt: "Claude logo",
  },
  {
    id: "google-ai-mode",
    name: "Google AI Mode",
    iconSrc: "/ai-platform-icons/google.svg",
    iconAlt: "Google AI Mode logo"
  },
  {
    id: "perplexity",
    name: "Perplexity",
    iconSrc: "/ai-platform-icons/perplexity.svg",
    iconAlt: "Perplexity logo",
  },
  {
    id: "gemini",
    name: "Gemini",
    iconSrc: "/ai-platform-icons/gemini.svg",
    iconAlt: "Gemini logo",
  },
  {
    id: "grok",
    name: "Grok",
    iconSrc: "/ai-platform-icons/grok.svg",
    iconAlt: "Grok logo",
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    iconSrc: "/ai-platform-icons/microsoft-copilot.svg",
    iconAlt: "Microsoft Copilot logo",
  },
  {
    id: "google-ai-overviews",
    name: "Google AI Overviews",
    iconSrc: "/ai-platform-icons/google.svg",
    iconAlt: "Google logo",
  },
  {
    id: "deepseek",
    name: "Deepseek",
    iconSrc: "/ai-platform-icons/deepseek.svg",
    iconAlt: "Deepseek logo",
  },
] as const satisfies readonly AiPlatform[];

export const aiPlatformNames = aiPlatforms.map((platform) => platform.name);

