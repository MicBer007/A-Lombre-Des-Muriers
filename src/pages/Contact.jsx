import GoogleMap from "../components/GoogleMap";
import Photo from "../components/Photo";
import RichText from "../components/RichText";
import Page from "../components/Page";

export default function Contact() {

  return (
    <Page gap={20} padding="70px 20px 30px">
      {/* EMAIL FORM HIDDEN - no working email provider */}
      <RichText
        content={{
          blocks: [
            { type: "heading", spans: [{ text: "Pour me contacter :" }] },
            { type: "paragraph", spans: [{ text: "Par mail : alombredesmuriers@gmail.com" }] },
            { type: "paragraph", spans: [{ text: "Par téléphone et WhatsApp : 0033 (0) 6 26 03 04 19" }] },
            {
              type: "paragraph",
              spans: [
                {
                  text: "Je ne réponds pas aux numéros inconnus, donc uniquement messages oraux ou écrits et je vous rappellerai.",
                },
              ],
            },
          ],
        }}
      />
      <GoogleMap src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d444.7182970338744!2d4.032107489728119!3d44.0605804456429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sza!4v1773379472864!5m2!1sen!2sza" />
      <Photo src="/assets/i284571214498199093.jpg" width={680} height={461} />
    </Page>
  );
}
