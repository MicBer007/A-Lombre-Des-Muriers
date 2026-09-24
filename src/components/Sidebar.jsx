import Comment, { CommentList } from "./Comment";

export default function Sidebar() {
  return (
    <div className="Preview_column__1KeVx col" style={{ minHeight: "100%" }}>
      <div className="Preview_row__3Fkye row" style={{ minHeight: 55, width: 220 }}>
        <div
          data-id="267DB8CB-A357-4934-8655-6829C6FF9368"
          data-kind="TEXT"
          style={{ width: 190, minHeight: 44, marginTop: 11, marginLeft: 15 }}
          className="Preview_componentWrapper__2i4QI"
        >
          <div
            data-in-template="false"
            data-id="267DB8CB-A357-4934-8655-6829C6FF9368"
            data-kind="Component"
            data-specific-kind="TEXT"
            className="Preview_component__SbiKo text-align-null"
          >
            <div
              data-mve-font-change="0"
              className="styles_contentContainer__lrPIa textnormal styles_text__3jGMu"
            >
              <p className="textnormal" style={{ textAlign: "left", fontSize: 20, lineHeight: 1.1 }}>
                Derniers commentaires
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-comments">
        <CommentList>
          <Comment author="Bragard" date="29 mai 2022">
            Bonjour. Votre gîte est-il toujours disponible début juillet? La location pourrait-elle
            prendre cours du lundi 4 juillet au dimanche 10 juillet par exemple? Quel serait le prix
            pour 2 personnes?
          </Comment>
          <Comment author="Philippe et Albin" date="13 fév 2022">
            Un gite très calme, bien agencé. Nous avons passé trois nuits reposante durant un
            week-end chargé au pole mécanique d'Alès.
          </Comment>
          <Comment author="CREUSOT Isabelle" date="9 mar 2021">
            Bonjour, je suis intéressée par votre location du lundi 26 avril au samedi 1er mai pour 3
            adultes non-fumeurs et sans animaux. Est-ce possible et à quel tarif ? Bonne soirée.
          </Comment>
        </CommentList>
      </div>
      <div style={{ clear: "both" }}></div>

      {/* Share section */}
      <div style={{ marginTop: 32, marginLeft: 20, width: 220 }}>
        <div style={{ backgroundColor: "rgb(255, 255, 255)", borderRadius: 10, paddingBottom: 11 }}>
          <p className="textnormal" style={{ textAlign: "left", fontSize: 20, lineHeight: 1.1, paddingTop: 11, paddingLeft: 15 }}>
            Partagez cette page
          </p>
          <div style={{ marginTop: 17, marginLeft: 15 }}>
            <iframe
              src="/assets/tweet_button.2f70fb173b9000da126c79afe2098f02.fr.html"
              style={{ width: 120, height: 28, border: "none" }}
              title="Share on Twitter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
