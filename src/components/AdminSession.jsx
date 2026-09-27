import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
const AdminContext = createContext(null);
export const useAdminSession = () => useContext(AdminContext);
export function AdminSessionProvider({ children }) {
  const [identity, setIdentity] = useState({ session: null, ready: false });
  const [membership, setMembership] = useState({ userId: null, admin: false, error: "" });
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => setIdentity({ session, ready: true }));
    return () => subscription.unsubscribe();
  }, []);
  useEffect(() => {
    if (!identity.session) { setMembership({ userId: null, admin: false, error: "" }); return; }
    let active = true;
    const userId = identity.session.user.id;
    supabase.from("user_profiles").select("role").eq("user_id", userId).maybeSingle().then(({ data, error }) => {
      if (!active) return;
      setMembership(previous => error
        ? { userId, admin: previous.userId === userId && previous.admin, error: "Impossible de vérifier les droits. Rechargez la page pour réessayer." }
        : { userId, admin: data?.role === "admin", error: "" });
    });
    return () => { active = false; };
  }, [identity.session]);
  const matches = !!identity.session && membership.userId === identity.session.user.id;
  return <AdminContext.Provider value={{ session: identity.session,
    ready: identity.ready && (!identity.session || matches),
    admin: matches && membership.admin, error: matches ? membership.error : "" }}>{children}</AdminContext.Provider>;
}
