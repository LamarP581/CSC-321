import { useState } from "react";

export default function EMATWebsite() {
  const calculatorCode = `x = (5 + 3) * 2;\nprint(x);`;

  
  const [output, setOutput] = useState("");

  
  const runCode = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          code: calculatorCode
        })
      });

      const data = await response.json();

      console.log("Backend response:", data);

      if (data.success) {
        setOutput(data.result);
      } else {
        setOutput("Error: " + data.error);
      }

    } catch (err) {
      console.error(err);
      setOutput("Server connection error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* HERO SECTION */}
      <header className="bg-black text-white p-8 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold">EMAT</h1>
          <p className="text-xl mt-4 max-w-3xl">
            A high-performance mathematical and scientific programming language
            focused on fast calculations, financial tools, and readable syntax.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-md hover:scale-105 transition">
              Start Calculating
            </button>

            <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
              Documentation
            </button>
          </div>
        </div>
      </header>

      {/* CALCULATOR */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">EMAT Calculator</h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* CODE BOX */}
            <div className="bg-gray-900 text-green-400 p-6 rounded-3xl shadow-xl font-mono">
              <p className="mb-4 text-white text-lg">EMAT Code</p>
              <pre>{calculatorCode}</pre>

              <button
                onClick={runCode}
                className="mt-6 bg-white text-black px-6 py-2 rounded-xl font-semibold hover:scale-105 transition"
              >
                Run EMAT
              </button>
            </div>

            {/* OUTPUT BOX */}
            <div className="bg-gray-100 p-6 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Output</h3>

              <div className="bg-black text-green-400 p-4 rounded-xl font-mono text-2xl min-h-[60px]">
                {output || "Run code to see output"}
              </div>

              <p className="mt-6 text-gray-700">
                This demonstrates EMAT executing arithmetic expressions using your custom interpreter.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}