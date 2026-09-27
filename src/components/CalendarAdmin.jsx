import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useAdminSession } from "./AdminSession";

export default function CalendarAdmin() {
  const { session, ready, error } = useAdminSession();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function login(event) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const { error } = await supabase.auth.signInWithOtp({ email: email.trim(), options: { shouldCreateUser: false, emailRedirectTo: `${window.location.origin}/informations/calendrier` } });
      setMessage(error ? "Connexion impossible. Réessayez dans un instant." : "Si votre adresse est reconnue, vous recevrez un lien pour vous connecter.");
    } catch { setMessage("Connexion impossible. Réessayez."); }
    finally { setBusy(false); }
  }
  async function logout() {
    setBusy(true);
    try {
      const { error } = await supabase.auth.signOut({ scope: "local" });
      setMessage(error ? "Déconnexion impossible. Réessayez." : "");
    } catch { setMessage("Déconnexion impossible. Réessayez."); }
    finally { setBusy(false); }
  }
  return <section className="signin-page textnormal"><div className="page-main-column"><div className="signin-content">
    <h1 className="textheading3">{session ? "Votre compte" : "Se connecter"}</h1>
    {!ready ? <p>Vérification de la connexion…</p> : !session ? <form onSubmit={login}>
      <label htmlFor="signin-email">Adresse e-mail</label>
      <input id="signin-email" type="email" autoComplete="email" placeholder="vous@exemple.fr" required value={email} onChange={e => setEmail(e.target.value)} />
      <button className="calendar-save" disabled={busy}>{busy ? "Connexion…" : "Se connecter"}</button>
    </form> : <>
      <p className="signin-email">{session.user.email}</p>
      <button className="account-signout" disabled={busy} onClick={logout}>Se déconnecter</button>
    </>}
    {(message || error) && <p role="status">{message || error}</p>}
  </div></div></section>;
}
