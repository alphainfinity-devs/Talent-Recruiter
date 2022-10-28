import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useEmailNewsLetterConfirmMutation } from "../../features/emailCampaignSlice/emailCampaignSlice";
import { useParams } from "react-router-dom";
const EmailNewsLetter = () => {
  const [emailNewsLetterConfirm, { isLoading, isError, isSuccess }] =
    useEmailNewsLetterConfirmMutation();
  const { email } = useParams();
  useEffect(() => {
    if (email) {
      emailNewsLetterConfirm({
        email,
      });
    }
  }, [emailNewsLetterConfirm, email]);

  useEffect(() => {
    if (isError && !isLoading) {
      toast.error("Email is not valid", {
        toastId: "newsletterError",
      });
    }
    if (isSuccess && !isLoading && !isError) {
      toast.success("Email Save Successfully", {
        toastId: "newsletterSuccess",
      });
    }
  }, [isSuccess, isError, isLoading]);
  return (
    <>
      {isLoading && (
        <div className="animate-pulse bg-gray-300 text-center text-2xl font-bold">
          Loading...
        </div>
      )}
      {isSuccess && (
        <div className="animate-pulse bg-green-300 text-center text-xl py-3 font-bold">
          You can close this page now
        </div>
      )}
    </>
  );
};

export default EmailNewsLetter;
