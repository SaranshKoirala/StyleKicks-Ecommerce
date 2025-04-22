import express from "express";

const route = express.Router();

route.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
      {
        inputs: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
        },
      }
    );

    const generated = response.data?.[0]?.generated_text || "No response.";
    res.json({ reply: generated });
  } catch (error) {
    console.error("HF Error:", error.message);
    res.status(500).json({ error: "HuggingFace API failed." });
  }
});

export default route;
