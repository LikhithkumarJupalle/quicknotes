import React, { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [page, setPage] = useState<"register" | "login" | "home">(token ? "home" : "register");

  const onAuth = (token: string, name: string) => {
    setToken(token);
    setName(name);
    localStorage.setItem("token", token);
    localStorage.setItem("name", name);
    setPage("home");
  };

  return (
    <div>
      {page === "register" && (
        <>
<Register onAuth={onAuth} goToLogin={() => setPage("login")} />

          <p>
            Already registered?{" "}
            <button onClick={() => setPage("login")}>Login</button>
          </p>
        </>
      )}
      {page === "login" && (
        <>
<Login onAuth={onAuth} goToRegister={() => setPage("register")} />

          <p>
            New user?{" "}
            <button onClick={() => setPage("register")}>Register</button>
          </p>
        </>
      )}
      {page === "home" && <Home token={token} name={name} />}
    </div>
  );
}

export default App;
