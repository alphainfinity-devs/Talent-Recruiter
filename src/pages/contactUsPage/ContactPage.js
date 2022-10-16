import React from "react";
import ContactForm from "./contactUsPageComponents/ContactForm";
import Newsletter from "../../globalComponents/Newsletter";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";

const ContactPage = () => {
  return (
    <>
      <PageTitleBanner title="Contact Us" />
      <ContactForm />
      <Newsletter />
    </>
  );
};

export default ContactPage;
