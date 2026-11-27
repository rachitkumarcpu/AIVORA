
"use strict";

/* AIVORA KNOWLEDGE ENGINE */

const AIVORA_KNOWLEDGE = {

  greetings: {
    "hello": "Hello! I am AIVORA. How can I help you?",
    "hi": "नमस्ते! मैं AIVORA हूँ। आज क्या जानना चाहते हो?",
    "नमस्ते": "नमस्ते! AIVORA में आपका स्वागत है।"
  },

  india: {
    "भारत की राजधानी": "भारत की राजधानी नई दिल्ली है।",
    "capital of india": "The capital of India is New Delhi.",
    "भारत का संविधान कब लागू हुआ": "भारत का संविधान 26 जनवरी 1950 को लागू हुआ था।",
    "भारत कब स्वतंत्र हुआ": "भारत 15 अगस्त 1947 को स्वतंत्र हुआ था।",
    "भारत के प्रथम राष्ट्रपति": "भारत के प्रथम राष्ट्रपति डॉ. राजेंद्र प्रसाद थे।",
    "भारत के प्रथम प्रधानमंत्री": "भारत के प्रथम प्रधानमंत्री जवाहरलाल नेहरू थे।"
  },

  history: {
    "1857 की क्रांति": "1857 का विद्रोह ब्रिटिश शासन के विरुद्ध एक महत्वपूर्ण व्यापक विद्रोह था।",
    "अशोक कौन था": "सम्राट अशोक मौर्य वंश का प्रसिद्ध शासक था।",
    "पानीपत का प्रथम युद्ध": "पानीपत का प्रथम युद्ध 1526 में बाबर और इब्राहिम लोदी के बीच हुआ था।"
  },

  geography: {
    "विश्व का सबसे बड़ा महाद्वीप": "एशिया विश्व का सबसे बड़ा महाद्वीप है।",
    "विश्व का सबसे बड़ा महासागर": "प्रशांत महासागर विश्व का सबसे बड़ा महासागर है।",
    "भारत की सबसे लंबी नदी": "भारत में पूरी तरह बहने वाली सबसे लंबी नदी गंगा है।"
  },

  science: {
    "पानी का रासायनिक सूत्र": "पानी का रासायनिक सूत्र H₂O है।",
    "सूर्य के सबसे निकट ग्रह": "बुध सूर्य के सबसे निकट ग्रह है।",
    "पौधे भोजन कैसे बनाते हैं": "पौधे प्रकाश संश्लेषण की प्रक्रिया से अपना भोजन बनाते हैं।"
  },

  mathematics: {
    "2+2": "2 + 2 = 4",
    "5+5": "5 + 5 = 10",
    "10*10": "10 × 10 = 100"
  }

};


/* QUESTION MATCHING */

function aivoraKnowledgeAnswer(question) {

  if (!question) return null;

  const q = question
    .toLowerCase()
    .trim()
    .replace(/[?!.,]/g, "");

  for (const category of Object.values(AIVORA_KNOWLEDGE)) {

    for (const [key, answer] of Object.entries(category)) {

      const normalizedKey = key.toLowerCase();

      if (q === normalizedKey || q.includes(normalizedKey)) {
        return answer;
      }

    }

  }

  return null;

}

console.log("AIVORA Knowledge Engine Loaded");
