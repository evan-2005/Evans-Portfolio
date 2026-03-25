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
    id: 1,
    name: "Smart-Irrigation-System",
    description: "Built a hybrid IoT irrigation system using Arduino Uno and ESP8266 with layered architecture for modularity and fault tolerance. Implemented threshold-based pump automation and enabled remote monitoring via Blynk.",
    html_url: "https://github.com/evan-2005/Smart-Irrigation-System",
    language: "C++",
    topics: ["Arduino", "IoT", "Hardware"]
  },
  {
    id: 2,
    name: "Computer-Vision-Image-Processing",
    description: "Developed document and video processing pipelines using OpenCV. Includes projection profile-based OCR segmentation and Haar Cascade face detection with Gaussian blurring for anonymization.",
    html_url: "https://github.com/evan-2005",
    language: "Python",
    topics: ["OpenCV", "NumPy", "ML/AI"]
  },
  {
    id: 3,
    name: "Travelicks",
    description: "Developed a culturally tailored homestay platform using Laravel and Vue.js, featuring Google Maps API integration, halal-friendly filters, and an admin analytics dashboard.",
    html_url: "https://github.com/evan-2005/Travelicks",
    language: "PHP",
    topics: ["Laravel", "Vue.js", "Web"]
  },
  {
    id: 4,
    name: "NutriTrack",
    description: "Desktop nutrition tracking system using Scala 3 with ScalaFX (JavaFX-based) and MVC architecture. Implemented FXML-based UI, SQLite persistence, and nutrition analytics.",
    html_url: "https://github.com/evan-2005/NutriTrack",
    language: "Scala",
    topics: ["ScalaFX", "JavaFX", "SQLite"]
  },
  {
    id: 5,
    name: "Cybersecurity-Practice",
    description: "Practiced ethical hacking techniques using Kali Linux, including reconnaissance, vulnerability scanning, and basic penetration testing for secure software design.",
    html_url: "https://github.com/evan-2005",
    language: "Shell",
    topics: ["Kali Linux", "Security"]
  },
  {
    id: 6,
    name: "Worm-Game",
    description: "Developed a native 2D Worm Game using Java and Android Studio, featuring custom collision detection, and optimized rendering for consistent device performance.",
    html_url: "https://github.com/evan-2005",
    language: "Java",
    topics: ["Android", "Game Dev"]
  },
  {
    id: 7,
    name: "Dina-Dyno-Chatbot",
    description: "Local Streamlit-based chatbot with multiple AI personas, persistent memory using ChromaDB, and RAG-powered contextual responses via Ollama.",
    html_url: "https://github.com/evan-2005",
    language: "Python",
    topics: ["Streamlit", "RAG", "LLM"]
  }
];
