import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import Home from "./pages/Home";
import Terrasse from "./pages/Terrasse";
import Jardin from "./pages/Jardin";
import Parking from "./pages/Parking";
import PhotosRegion from "./pages/PhotosRegion";
import Contact from "./pages/Contact";
import AVisiter from "./pages/AVisiter";
import InterieurIndex from "./pages/interieur/Index";
import Chambre from "./pages/interieur/Chambre";
import PieceAVivre from "./pages/interieur/PieceAVivre";
import SalleDeBain from "./pages/interieur/SalleDeBain";
import InformationsIndex from "./pages/informations/Index";
import Calendrier from "./pages/informations/Calendrier";
import Tarifs from "./pages/informations/Tarifs";
import Contrat from "./pages/informations/Contrat";
import Commentaires from "./pages/informations/Commentaires";
import Producteurs from "./pages/informations/Producteurs";
import TraductionsIndex from "./pages/traductions/Index";
import English from "./pages/traductions/English";
import Deutsch from "./pages/traductions/Deutsch";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="terrasse" element={<Terrasse />} />
          <Route path="jardin" element={<Jardin />} />
          <Route path="parking" element={<Parking />} />
          <Route path="photos-region" element={<PhotosRegion />} />
          <Route path="contact" element={<Contact />} />
          <Route path="a-visiter" element={<AVisiter />} />
          <Route path="interieur" element={<InterieurIndex />} />
          <Route path="interieur/chambre" element={<Chambre />} />
          <Route path="interieur/piece-a-vivre" element={<PieceAVivre />} />
          <Route path="interieur/salle-de-bain" element={<SalleDeBain />} />
          <Route path="informations" element={<InformationsIndex />} />
          <Route path="informations/calendrier" element={<Calendrier />} />
          <Route path="informations/tarifs" element={<Tarifs />} />
          <Route path="informations/contrat" element={<Contrat />} />
          <Route path="informations/commentaires" element={<Commentaires />} />
          <Route path="informations/producteurs" element={<Producteurs />} />
          <Route path="traductions" element={<TraductionsIndex />} />
          <Route path="traductions/english" element={<English />} />
          <Route path="traductions/deutsch" element={<Deutsch />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
