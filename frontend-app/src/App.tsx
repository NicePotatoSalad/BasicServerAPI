import { useState } from 'react'
import './App.css'

function App() {
  const [backendMessage, setBackendMessage] = useState<string>("");

  const handleClick = async () => {
    try {
      // 1. Send the request to your .NET backend
      const response = await fetch('http://localhost:5042/testapi');

      // 2. Turn the raw response into a JSON object
      const data = await response.json();

      // 3. Update the UI with the message from your C# code
      setBackendMessage(data.message);
    } catch (error) {
      console.error("Error connecting to backend:", error);
      setBackendMessage("Backend is offline!");
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>My First Fullstack App</h1>
      
      <button onClick={handleClick}>
        Call My C# Backend
      </button>

      {backendMessage && (
        <div style={{ marginTop: '20px', color: '#646cff' }}>
          <strong>Response:</strong> {backendMessage}
        </div>
      )}
    </div>
  )
}

export default App