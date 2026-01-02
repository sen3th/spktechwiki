export async function handler(event) {
  try {
    const { question } = JSON.parse(event.body);

    const res = await fetch("https://ai.hackclub.com/proxy/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.HACKCLUB_AI_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-5-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an assistant for a school tech wiki. Answer clearly, concisely, and practically."
          },
          {
            role: "user",
            content: question
          }
        ]
      })
    });

    const data = await res.json();
    const answer = data.choices?.[0]?.message?.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ answer })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "AI failure" })
    };
  }
}
