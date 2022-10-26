import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { ProgressBar } from "react-loader-spinner";

export default function CheckoutForm() {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "pk_test_51HOOgiJm9OErWZzlBMPnc8mHUiPluKuNyCZ6rbwwamXwxr5IjyBYPU2hsRqGyT6FCSj9LannpoMNdPG0jCqZZlk500JetbUqld",
    );
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      toast.error("Stripe is not loaded", {
        toastId: "error",
      });
    }
    setIsLoading(true);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required", //stripe redirect disabled
      confirmParams: {
        return_url: "",
      },
    });
    if (error?.type === "card_error" || error?.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    if (paymentIntent.status === "succeeded") {
      navigate("/recruiter/jobs");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        disabled={isLoading || !stripe || !elements}
        type="submit"
        className="btn btn-primary mt-5">
        {isLoading ? (
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        ) : (
          "Pay now"
        )}
      </button>
      {/* Show any error or success messages */}
      {message && <div className="text-red-500 text-2xl">{message}</div>}
    </form>
  );
}
