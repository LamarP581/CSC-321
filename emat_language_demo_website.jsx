import { useState } from "react";

export default function EMATWebsite() {
  const [calculatorInput, setCalculatorInput] = useState("");
  const [calculatorResult, setCalculatorResult] = useState(0);

  const [salary, setSalary] = useState("");
  const [savingsPercent, setSavingsPercent] = useState(20);
  const [billsPercent, setBillsPercent] = useState(50);
  const [spendingPercent, setSpendingPercent] = useState(30);

  const [budgetResults, setBudgetResults] = useState({
    savings: 0,
    bills: 0,
    spending: 0,
  });

  const calculateExpression = () => {
    try {
      const result = eval(calculatorInput);
      setCalculatorResult(result);
    } catch {
      setCalculatorResult("Invalid Expression");
    }
  };

  const calculateBudget = () => {
    const income = Number(salary);

    const savings = income * (Number(savingsPercent) / 100);
    const bills = income * (Number(billsPercent) / 100);
    const spending = income * (Number(spendingPercent) / 100);

    setBudgetResults({
      savings,
      bills,
      spending,
    });
  };
  const calculatorCode = `x = (5 + 3) * 2;\nprint(x);`;

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

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-10">Why EMAT?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Mathematical Computation</h3>
            <p>
              EMAT handles arithmetic operations, algebraic expressions,
              scientific formulas, and advanced numerical calculations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Scientific Computing</h3>
            <p>
              Designed for engineers, scientists, and students needing reliable
              and fast computation tools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Financial Tools</h3>
            <p>
              Includes budgeting systems, tax estimation, and financial
              calculation support.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">EMAT Calculator</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 text-green-400 p-6 rounded-3xl shadow-xl font-mono">
              <p className="mb-4 text-white text-lg">Enter Expression</p>

              <textarea
                value={calculatorInput}
                onChange={(e) => setCalculatorInput(e.target.value)}
                placeholder="Example: (5 + 3) * 2"
                className="w-full h-40 p-4 rounded-xl bg-black text-green-400 border border-green-500"
              />

              <button
                onClick={calculateExpression}
                className="mt-6 bg-green-500 text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition"
              >
                Calculate
              </button>
            </div>

            <div className="bg-gray-100 p-6 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Output</h3>

              <div className="bg-black text-green-400 p-4 rounded-xl font-mono text-2xl min-h-[80px] flex items-center">
                {calculatorResult}
              </div>

              <p className="mt-6 text-gray-700">
                Users can type mathematical expressions and EMAT will evaluate the calculation instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TAX TOOL */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Tax Estimator</h2>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="border-2 border-dashed border-gray-400 rounded-2xl p-10 text-center">
              <p className="text-xl font-semibold">Upload Tax File</p>
              <p className="text-gray-600 mt-2">
                EMAT can read financial values and estimate taxes.
              </p>

              <button className="mt-6 bg-black text-white px-6 py-3 rounded-2xl hover:scale-105 transition">
                Upload File
              </button>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-6 rounded-2xl">
                <h4 className="font-bold text-xl">Income</h4>
                <p className="text-2xl mt-2">$50,000</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl">
                <h4 className="font-bold text-xl">Estimated Tax</h4>
                <p className="text-2xl mt-2">$7,500</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl">
                <h4 className="font-bold text-xl">Refund</h4>
                <p className="text-2xl mt-2">$500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUDGET TOOL */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Budget Planner</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Monthly Salary</h3>

              <div className="space-y-4">
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  placeholder="Enter Salary"
                  className="w-full p-4 rounded-xl border"
                />

                <input
                  type="number"
                  value={savingsPercent}
                  onChange={(e) => setSavingsPercent(e.target.value)}
                  placeholder="Savings %"
                  className="w-full p-4 rounded-xl border"
                />

                <input
                  type="number"
                  value={billsPercent}
                  onChange={(e) => setBillsPercent(e.target.value)}
                  placeholder="Bills %"
                  className="w-full p-4 rounded-xl border"
                />

                <input
                  type="number"
                  value={spendingPercent}
                  onChange={(e) => setSpendingPercent(e.target.value)}
                  placeholder="Spending %"
                  className="w-full p-4 rounded-xl border"
                />

                <button
                  onClick={calculateBudget}
                  className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:scale-105 transition"
                >
                  Calculate Budget
                </button>
              </div>
            </div>

            <div className="bg-black text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Budget Results</h3>

              <div className="space-y-4 text-xl">
                <div className="flex justify-between border-b border-gray-700 pb-3">
                  <span>Savings</span>
                  <span>${budgetResults.savings.toFixed(2)}</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 pb-3">
                  <span>Bills</span>
                  <span>${budgetResults.bills.toFixed(2)}</span>
                </div>

                <div className="flex justify-between border-b border-gray-700 pb-3">
                  <span>Spending</span>
                  <span>${budgetResults.spending.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LANGUAGE STRUCTURE */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">EMAT Language Architecture</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-2xl mb-3">Lexer</h3>
              <p>Breaks EMAT code into tokens such as integers, operators, and variables.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-2xl mb-3">Parser</h3>
              <p>Builds an Abstract Syntax Tree for mathematical expressions.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-2xl mb-3">AST</h3>
              <p>Represents assignments, arithmetic operations, and print statements.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-2xl mb-3">Execution</h3>
              <p>Processes calculations quickly and accurately for scientific and financial computation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 text-center">
        <h2 className="text-3xl font-bold">EMAT</h2>
        <p className="mt-4 text-gray-400">
          Mathematical & Scientific Programming Language
        </p>
      </footer>
    </div>
  );
}


