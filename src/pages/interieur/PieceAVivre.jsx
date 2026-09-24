import Sidebar from "../../components/Sidebar";
import Photo from "../../components/Photo";

export default function PieceAVivre() {

  return (
    <div className="Preview_row__3Fkye row Preview_noSideMargin__2I-_n" style={{ width: "100%" }}>
      <div data-kind="SECTION" className="Preview_componentWrapper__2i4QI" style={{ width: "100%" }}>
        <div id="PageSection" className="Preview_block__16Zmu">
          <div className="StripPreview_backgroundComponent__3YmQM Background_backgroundComponent__3_1Ea hasChildren" style={{ backgroundColor: "transparent" }}>
            <div className="Preview_column__1KeVx col" style={{ width: 1200, margin: "0 auto" }}>
              <div className="Preview_row__3Fkye row" style={{ width: 1200 }}>
                <div className="Preview_componentWrapper__2i4QI" style={{ width: 1130, marginLeft: 35 }}>
                  <div className="Preview_block__16Zmu">
                    <div className="BackgroundPreview_backgroundComponent__3Dr5e BackgroundPreview_bgHeight__3dD2e hasChildren" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                      <div className="Preview_column__1KeVx col">
                        <div className="Preview_row__3Fkye row" style={{ width: 1130 }}>
                          <div className="Preview_column__1KeVx col" style={{ width: 870, float: "left" }}>
                            <div className="page-content" style={{ "--page-gap": "40px", padding: "40px 20px" }}>

                              <h1 className="textheading3 mobile-oversized">La pièce à vivre</h1>
                              <p className="textnormal">Le salon est équipé d'une climatisation réversible pour votre confort en été comme en hiver.</p>
                              <Photo src="/assets/salon-vue-ensemble-2026.jpeg" width={680} height={510} caption="La pièce à vivre" />
                              <Photo src="/assets/salon-climatise-2026.jpeg" width={680} height={510} caption="Le salon avec climatisation réversible" />
                              <Photo src="/assets/salon-fauteuils-2026.jpeg" width={680} height={907} caption="Le coin salon" />
                              <Photo src="/assets/climatisation-salon-2026.jpeg" width={680} height={832} caption="Climatisation réversible dans le salon" />
                              <Photo src="/assets/poele-bois-2026.jpeg" width={680} height={907} caption="Le poêle à bois" />
                              <Photo src="/assets/living-room-2026.jpeg" width={680} height={510} caption="Canapé lit rapido" />
                              <Photo src="/assets/i284571214522769720.jpg" width={680} height={510} caption="Le canapé lit rapido ouvert" />
                              <Photo src="/assets/i284571214522769663.jpg" width={680} height={510} caption="Le canapé lit rapido ouvert. Couchage 160/190 cm" />
                              <Photo src="/assets/cuisine-coin-repas-2026.jpeg" width={680} height={510} caption="La cuisine et le coin repas" />
                              <Photo src="/assets/cuisine-salon-2026.jpeg" width={680} height={510} caption="La cuisine ouverte sur le salon" />
                              <h2 className="textheading3 mobile-oversized">Les appareils de la cuisine</h2>
                              <Photo src="/assets/nespresso-2026.jpeg" width={680} height={907} caption="Machine à café Nespresso" />
                              <Photo src="/assets/cuisine-coin-repas-2026.jpeg" width={680} height={510} caption="Micro-ondes, à gauche du plan de travail" />
                              <Photo src="/assets/sodastream-2026.jpeg" width={680} height={907} caption="Sodastream" />
                              <Photo src="/assets/airfryer-2026.jpeg" width={680} height={907} caption="Airfryer" />
                              <Photo src="/assets/four-vapeur-2026.jpeg" width={680} height={488} caption="Four vapeur" />

                              {/* Kitchen items heading */}
                              <h3 className="textheading3 mobile-oversized" style={{ textAlign: "left", lineHeight: 1.17 }}>
                                À disposition dans la cuisine
                              </h3>

                              <ul className="kitchen-equipment textnormal">
                                <li>Four vapeur</li>
                                <li>Micro-ondes</li>
                                <li>Airfryer</li>
                                <li>Frigo-congélateur</li>
                                <li>Plaque à induction</li>
                                <li>Machine à café Nespresso</li>
                                <li>Bouilloire</li>
                                <li>Grille-pain</li>
                                <li>Robot Kenwood</li>
                                <li>Sodastream</li>
                                <li>Mixsoupe</li>
                                <li>Presse-agrumes</li>
                                <li>Vaisselle pour 4 personnes</li>
                                <li>Plats pour le four</li>
                                <li>Moule à tarte</li>
                                <li>Sel, poivre, sucre</li>
                                <li>Capsules de café, thé, tisanes</li>
                                <li>Détergent vaisselle</li>
                                <li>Savon pour les mains</li>
                                <li>Essuie-main et torchon vaisselle</li>
                                <li>Sacs poubelle</li>
                              </ul>

                              <Photo src="/assets/covered-terrace-2026-b.jpeg" width={680} height={907} caption={["Terrasse couverte", "Covered patio", "Überdachte Terrasse"]} />


                            </div>
                            <div style={{ clear: "both" }}></div>
                          </div>
                          <div className="Preview_column__1KeVx col" style={{ width: 220, float: "left" }}>
                            <Sidebar />
                          </div>
                          <div style={{ clear: "both" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
