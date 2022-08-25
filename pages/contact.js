import Head from "next/head";
import ContactComponent from "../components/Contact";
export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="contact"
          content="dheeman's blogs contact page here you can contact with me"
        />
      </Head>
      <ContactComponent />
    </>
  );
}
