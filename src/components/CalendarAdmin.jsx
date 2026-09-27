import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useAdminSession } from "./AdminSession";

export default function CalendarAdmin({ modal = false, onClose }) {
  const { session, ready, error } = useAdminSession();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  async function login(event) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const { error } = await supabase.auth.signInWithOtp({ email: email.trim(), options: { shouldCreateUser: false, emailRedirectTo: window.location.origin } });
      setMessage(error ? "Connexion impossible. Réessayez dans un instant." : "Si votre adresse est reconnue, vous recevrez un lien pour vous connecter.");
      setSent(!error);
    } catch { setMessage("Connexion impossible. Réessayez."); }
    finally { setBusy(false); }
  }
  async function logout() {
    setBusy(true);
    try {
      const { error } = await supabase.auth.signOut({ scope: "local" });
      setMessage(error ? "Déconnexion impossible. Réessayez." : "");
      if (!error) { setSent(false); onClose?.(); }
    } catch { setMessage("Déconnexion impossible. Réessayez."); }
    finally { setBusy(false); }
  }
  return <section className={`signin-page textnormal${modal ? " signin-modal-content" : ""}`}><div className="page-main-column"><div className="signin-content">
    <h1 id={modal ? "account-modal-title" : undefined} className="textheading3">{session ? "Votre compte" : sent ? "Consultez votre messagerie" : "Se connecter"}</h1>
    {!ready ? <p>Vérification de la connexion…</p> : !session && !sent ? <form onSubmit={login}>
      <label htmlFor={modal ? "modal-signin-email" : "signin-email"}>Adresse e-mail</label>
      <input id={modal ? "modal-signin-email" : "signin-email"} type="email" autoComplete="email" placeholder="vous@exemple.fr" required value={email} onChange={e => setEmail(e.target.value)} />
      <button className="calendar-save" disabled={busy}>{busy ? "Connexion…" : "Se connecter"}</button>
    </form> : session ? <>
      <p className="signin-email">{session.user.email}</p>
      <button className="account-signout" disabled={busy} onClick={logout}>Se déconnecter</button>
    </> : null}
    {(message || error) && <p role="status">{message || error}</p>}
    {sent && !session && <>{onClose && <button className="calendar-save" onClick={onClose}>Fermer</button>}<button className="account-signout" onClick={() => { setSent(false); setMessage(""); }}>Modifier l’adresse</button></>}
  </div></div></section>;
}
