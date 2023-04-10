import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate()

  async function handleLogin(event) {
    event.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      alert('deu erro')
    }

    if (data) {
      navigation('/dashboard')
    }
  }

  async function isAuthenticated() {
    const { data: { session } } = await supabase.auth.getSession()
    if (session) navigation('/dashboard')
  }

  useEffect(() => {
    isAuthenticated()
  }, [])

  return (
    <form onSubmit={e => handleLogin(e)} className="login-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="login-form-btn">
        Login
      </button>
    </form>
  );
}