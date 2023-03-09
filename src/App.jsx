import "./App.css";
import { useState } from "react";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";

function App() {
  const [username, setUsername] = useState(null);

  return (
    <div className="App">
      {username ? (
        <>
          <Main />
        </>
      ) : (
        <Login setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
