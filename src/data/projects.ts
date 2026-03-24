export interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
}

export const projects: Project[] = [
  {
    id: 1138367051,
    name: "gemma-chatbot",
    description: "A Streamlit-based chatbot application featuring two distinct AI personas (Dina and Dyno) with persistent memory using ChromaDB and local LLM inference via Ollama.",
    html_url: "https://github.com/evan-2005/gemma-chatbot",
    language: "Python",
    topics: ["AI", "ML/AI"]
  },
  {
    id: 1136630376,
    name: "Travelicks-Travel-Companion",
    description: "A modern travel booking platform built with Laravel and Vue.js, allowing users to browse, book, and manage vacation rental properties.",
    html_url: "https://github.com/evan-2005/Travelicks-Travel-Companion",
    language: "PHP",
    topics: ["Web", "Laravel", "Vue.js"]
  },
  {
    id: 1132703283,
    name: "NutriTrack-Nutrition-Planner",
    description: "NutriTrack is a Scala-based desktop nutrition tracking system developed using ScalaFX, JavaFX and SQLite.",
    html_url: "https://github.com/evan-2005/NutriTrack-Nutrition-Planner",
    language: "Scala",
    topics: ["Systems", "JavaFX"]
  },
  {
    id: 1125774125,
    name: "JobHub",
    description: "JobHub is a modern web-based recruitment platform designed to help employers find and connect with skilled employees quickly.",
    html_url: "https://github.com/evan-2005/JobHub",
    language: "PHP",
    topics: ["Web"]
  },
  {
    id: 1125779369,
    name: "LodgeLogic-Analytics-Suite",
    description: "LodgeLogic is a data-driven intelligence platform designed to extract actionable insights from complex hotel booking records...",
    html_url: "https://github.com/evan-2005/LodgeLogic-Multi-Dimensional-Hotel-Analytics-Suite",
    language: "Scala",
    topics: ["Systems", "Analytics"]
  },
  {
    id: 1125776840,
    name: "SweetStream-Bakery-System",
    description: "SweetStream is a comprehensive backend architecture designed to streamline the operations of a digital bakery or cake shop.",
    html_url: "https://github.com/evan-2005/SweetStream-Integrated-Bakery-Management-System",
    language: "Scala",
    topics: ["Systems", "Backend"]
  },
  {
    id: 1118988786,
    name: "Smart-Irrigation-System",
    description: "Smart Irrigation System using Arduino Uno and ESP8266, few sensors, external DC, pump and Blynk intergration.",
    html_url: "https://github.com/evan-2005/Smart-Irrigation-Sytem",
    language: "C++",
    topics: ["IoT", "Other"]
  },
  {
    id: 1026083562,
    name: "Merge-Sort-Algorithm",
    description: "Python implementation of the Merge Sort algorithm using a recursive divide-and-conquer approach.",
    html_url: "https://github.com/evan-2005/Merge-Sort-Algorithm",
    language: "Python",
    topics: ["Algorithms", "Other"]
  },
  {
    id: 1026089124,
    name: "Huffman-Coding-Algorithm",
    description: "Huffman Coding implementation in Python using a custom min-heap, supporting encoding and decoding for lossless data compression.",
    html_url: "https://github.com/evan-2005/Huffman-Coding-Algorithm",
    language: "Python",
    topics: ["Algorithms", "Other"]
  }
];
