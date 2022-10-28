import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useStripePaymentInitQuery } from "../../features/stripePayment/stripePayment";
const stripePromise = loadStripe(
  "pk_test_51HOOgiJm9OErWZzlBMPnc8mHUiPluKuNyCZ6rbwwamXwxr5IjyBYPU2hsRqGyT6FCSj9LannpoMNdPG0jCqZZlk500JetbUqld",
);

export default function StripePayment() {
  const [clientSecret, setClientSecret] = useState("");
  const { isLoading, data, error } = useStripePaymentInitQuery({
    amount: 1000,
    currency: "usd",
  });
  useEffect(() => {
    if (data?.clientSecret) {
      setClientSecret(data.clientSecret);
    }
  }, [data?.clientSecret]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  // decide what to render
  let content;
  if (isLoading) {
    content = (
      <div className="text-2xl animate-pulse bg-gray-300 text-center">
        Loading...
      </div>
    );
  } else if (error) {
    content = (
      <div className="text-xl text-red-500 text-center">
        Error: {error?.message}
      </div>
    );
  } else {
    content = (
      <>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </>
    );
  }

  return <>{content}</>;
}
