import React, { useState } from "react";
import Layout from "@theme/Layout";

export default function Ask() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/.netlify/functions/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });

      const data = await res.json();
      setAnswer(data.answer || "No response. The void stares back.");
    } catch (err) {
      setAnswer("Something broke. Not you. Probably.");
    }

    setLoading(false);
  }

  return (
    <Layout title="Ask the Wiki">
      <main style={{ maxWidth: 800, margin: "2rem auto", padding: "1rem" }}>
        <h1>Ask the Wiki</h1>
        <p>Ask a question about audio, lighting, or whatever chaos this wiki documents.</p>

        <textarea
          rows={4}
          style={{ width: "100%", padding: "0.5rem" }}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Why does the mixer hate me?"
        />

        <button
          onClick={askAI}
          disabled={loading}
          style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
        >
          {loading ? "Thinking..." : "Ask"}
        </button>

        {answer && (
          <div style={{ marginTop: "2rem", whiteSpace: "pre-wrap" }}>
            <strong>Answer:</strong>
            <p>{answer}</p>
          </div>
        )}
      </main>
    </Layout>
  );
}
