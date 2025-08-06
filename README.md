
# 🧠 Neuralis – Your Intelligent Companion for Mental Clarity

**Neuralis** is a GenAI-powered mental wellness agent designed to support users with emotional check-ins, guided journaling, therapeutic suggestions, and intelligent conversations. Built using advanced Generative AI concepts like Prompting, Structured Output, Function Calling, and Retrieval-Augmented Generation (RAG), Neuralis is where emotional intelligence meets artificial intelligence.

---

## 🌟 Why Neuralis?
In a world full of noise, stress, and uncertainty, **Neuralis** offers a calm, intelligent, and understanding companion to reflect, release, and regain control of your mental state. Think of it as your personal AI therapist-lite and emotional wellness tracker — private, intelligent, and always listening.

---

## 📌 Features

- 💬 **Mood Check-In**: Understand how you're feeling through natural conversation.
- 📝 **AI-Powered Journaling**: Prompt-based daily journaling powered by LLMs.
- 📊 **Mood Analytics**: Track and visualize your emotional trends over time.
- 🧘 **Coping Recommendations**: Personalized suggestions like breathing exercises or mindfulness tasks.
- 📚 **Therapy-Informed Responses (RAG)**: Leverages a knowledge base of CBT, mental health guides, and emotional tools.
- 🔔 **Smart Reminders**: Daily or weekly mental health reminders using function calling.

---

## ⚙️ GenAI Concepts in Neuralis

| Concept             | Implementation Example |
|---------------------|------------------------|
| **Prompting**       | “How was your day today?” → Reflective journaling questions |
| **Structured Output** | JSON format of user mood, intensity, and triggers |
| **Function Calling** | `log_mood()`, `get_exercise()`, `set_reminder()` |
| **RAG**             | Retrieves articles and tips from a curated therapy knowledge base |

---

## 🧠 Sample Structured Output

```json
{
  "mood": "anxious",
  "intensity": 6,
  "trigger": "upcoming exam",
  "journal": "I'm stressed about my test tomorrow and can't focus."
}
```

---

## 🧰 Tech Stack

| Layer      | Technology                       |
|------------|----------------------------------|
| LLM        | OpenAI GPT-4o / Claude            |
| Backend    | Node.js or Python (FastAPI)       |
| Frontend   | React + Tailwind CSS              |
| Vector DB  | ChromaDB or Pinecone + LangChain  |
| Database   | MongoDB                           |
| Auth       | JWT / OAuth2                      |

---

## 🗃️ Project Structure

```
neuralis/
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── vectorstore/        # RAG docs and embeddings
│   └── main.js / main.py
├── frontend/
│   ├── components/
│   ├── pages/
│   └── App.js
├── rag_docs/               # CBT PDFs, mindfulness guides, FAQ
└── README.md
```

---

## 📥 Data & Resources Used

- GoEmotions Dataset (Google)
- Reddit r/Depression Dataset (Zenodo)
- DailyDialog Dataset (Emotion conversations)
- CBT Guides from [CCI Health WA](https://www.cci.health.wa.gov.au/)
- TherapistAid.com worksheets
- Motivational Quotes Dataset (Kaggle)

---

## 🚀 Getting Started

### Backend (Node.js or FastAPI)
```bash
cd backend
npm install   # or pip install -r requirements.txt
npm run dev   # or uvicorn main:app --reload
```

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

---

## ✨ Future Roadmap

- Voice journaling with speech-to-text
- Integration with calendar and smart reminders
- Personalized daily affirmations from LLM
- Risk-level detection from journaling history

---

## 💬 Example Prompt

> “I feel like I’m failing everything.” → Returns emotion: "Overwhelmed", intensity: 8, recommends grounding exercise, and stores journal.

---

## 🧑‍💻 Contributing

Open to community contributions! Fork the repo and submit your improvements.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🔗 Follow the Journey

**Neuralis** – Reimagining self-reflection with GenAI.
