import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", textAlign: "center", padding: 50 }}>
      <h1 style={{ color: "#333" }}>Page non trouvée</h1>
      <p>
        Redirection vers la{" "}
        <a href="/" style={{ color: "#0066cc" }}>page d&apos;accueil</a>
        {" "}...
      </p>
    </div>
  );
}
