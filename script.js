async function generate() {
  const text = document.getElementById("text").value;
  const language = document.getElementById("language").value;

  const res = await fetch(
    "https://YOUR-BACKEND-URL/generate-song",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, language })
    }
  );

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);

  document.getElementById("audio").src = url;
  document.getElementById("download").href = url;
}
