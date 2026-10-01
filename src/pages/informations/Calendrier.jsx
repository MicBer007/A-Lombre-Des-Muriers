import AvailabilityCalendar from "../../components/AvailabilityCalendar";

import { Navigate } from "react-router-dom";
import { useAdminSession } from "../../components/AdminSession";
import Page from "../../components/Page";
export default function Calendrier({ editing = false }) {
  const { session, ready, admin, error } = useAdminSession();
  if (editing && !ready) return <p className="calendar-access">Vérification de la connexion…</p>;
  if (editing && !session) return <Navigate to="/connexion" replace />;
  if (editing && !admin) return <p className="calendar-access" role="alert">{error || "Ce compte ne peut pas modifier le calendrier."}</p>;
  return (
    <Page padding="40px 20px 84px">
      <AvailabilityCalendar key={editing ? "edit" : "view"} editing={editing} />
    </Page>
  );
}
