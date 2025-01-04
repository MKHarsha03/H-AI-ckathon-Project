from flask import Flask, request, jsonify
from flask_cors import CORS
from model.model import load_index, predict_response

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Load the vector database index
INDEX_PATH = "C:\\Users\\Mayank\\Desktop\\my_faiss_index"

retriever = load_index(INDEX_PATH)

# Root Route
@app.route('/')
def home():
    return jsonify({"message": "Flask Chatbot Backend is Running!"})

# Chatbot Route
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data.get('message', '')

    if not user_message:
        return jsonify({"error": "Message field is required"}), 400

    # Generate bot response
    bot_response = predict_response(user_message, retriever)

    return jsonify({"response": bot_response})

# Run the app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
