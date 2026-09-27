import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useAdminSession } from "./AdminSession";

export default function CalendarAdmin() {
  const { session, admin, ready, error } = useAdminSession();
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function login(event) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const { error } = await supabase.auth.signInWithOtp({ email: email.trim(), options: { shouldCreateUser: false, emailRedirectTo: `${window.location.origin}/informations/calendrier` } });
      setMessage(error ? "Connexion impossible. Vérifiez votre adresse ou réessayez." : "Lien envoyé. Consultez votre messagerie.");
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
  return <section className="signin-page textnormal"><div className="signin-card">
    <p className="signin-eyebrow">Administration</p>
    <h1 className="textheading3">{session ? "Votre compte" : "Se connecter"}</h1>
    {!ready ? <p>Vérification de la connexion…</p> : !session ? <form onSubmit={login}>
      <p>Recevez un lien de connexion par e-mail pour gérer les disponibilités du gîte.</p>
      <label htmlFor="signin-email">Adresse e-mail</label>
      <input id="signin-email" type="email" autoComplete="email" placeholder="vous@exemple.fr" required value={email} onChange={e => setEmail(e.target.value)} />
      <button className="calendar-save" disabled={busy}>{busy ? "Envoi…" : "Recevoir mon lien"}</button>
      <small>Accès réservé aux comptes autorisés.</small>
    </form> : <>
      <p className="signin-email">{session.user.email}</p>
      {admin ? <Link className="calendar-edit-link" to="/informations/calendrier">Voir le calendrier <span aria-hidden="true">↗</span></Link> : <p>Ce compte ne peut pas modifier le calendrier.</p>}
      <button className="account-signout" disabled={busy} onClick={logout}>Se déconnecter</button>
    </>}
    {(message || error) && <p role="status">{message || error}</p>}
  </div></section>;
}
