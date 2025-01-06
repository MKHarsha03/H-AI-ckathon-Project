import os
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

# Load the FAISS index
def load_index(index_path):
    embeddings = HuggingFaceEmbeddings(
        model_name='sentence-transformers/all-MiniLM-L6-v2',
        model_kwargs={'device': 'cpu'}
    )
    db = FAISS.load_local(index_path, embeddings, allow_dangerous_deserialization=True)
    return db.as_retriever()

# Retrieve relevant context
def retrieve_context(retriever, user_message, top_k=5):
    docs = retriever.invoke(user_message)
    context = ""
    for i, doc in enumerate(docs[:top_k]):  # Limit to top_k contexts
        context += doc.page_content
    return context

# Prediction function
def predict_response(user_message, retriever):
    # Retrieve relevant context
    context = retrieve_context(retriever, user_message)

    # For now, just return the context as the response
    # You can integrate GPT or other logic here for better responses
    return context
