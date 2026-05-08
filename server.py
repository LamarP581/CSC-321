from flask import Flask, request, jsonify
from flask_cors import CORS

from language_build import Lexer, Parser, Interpreter

app = Flask(__name__)
CORS(app)

@app.route("/run", methods=["POST"])
def run_emat():

    data = request.json
    code = data.get("code", "")

    try:
        
        lexer = Lexer(code)

        
        parser = Parser(lexer)
        ast = parser.parse()

        
        interpreter = Interpreter()
        result = interpreter.visit(ast)

        return jsonify({
            "success": True,
            "result": result
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e)
        })

if __name__ == "__main__":
    app.run(debug=True)