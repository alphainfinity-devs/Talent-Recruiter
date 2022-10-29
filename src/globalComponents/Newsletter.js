import React, { useEffect } from "react";
import { useEmailNewsLetterSentMutation } from "../features/emailCampaignSlice/emailCampaignSlice";
import { Dna } from "react-loader-spinner";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [emailNewsLetterSent, { isLoading, isError, error, isSuccess }] =
    useEmailNewsLetterSentMutation();
  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.error, {
        toastId: "newsletterError",
      });
    }
    if (isSuccess) {
      toast.info("Please check your email inbox to confirm", {
        toastId: "newsletterSuccess",
      });
    }
  }, [error, isSuccess, isError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email_subject = `Please confirm your email address`;
    const email_body = `Please click on the following link,
    or paste this into your browser to complete the process:
    ${window.location.origin}/email-confirmation/${e.target.email.value}`;

    emailNewsLetterSent({
      email: e.target.email.value,
      email_subject,
      email_body,
    });
    e.target.reset();
  };
  return (
    <section className="bg-primary p-10 max-w-4xl mx-auto py-16 px-5">
      <div className="flex justify-center">
        <div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe For Newsletter
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <input
                required
                type="email"
                name="email"
                placeholder="Enter you Email"
                className="p-4 outline-none w-[80%]"
              />
              <button
                disabled={isLoading}
                type="submit"
                className="bg-[tomato] font-bold px-2 md:px-10 duration-700 text-white border-2 border-white hover:bg-primary "
              >
                {isLoading ? (
                  <Dna
                    visible={true}
                    height="50"
                    width="120"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperclassName="dna-wrapper"
                  />
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
