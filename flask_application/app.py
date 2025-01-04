from flask import Flask, request, jsonify
from flask_cors import CORS
from model.model import predict_response

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

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

    # Placeholder response (replace with model prediction later)
    bot_response = predict_response(user_message)

    return jsonify({"response": bot_response})

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
