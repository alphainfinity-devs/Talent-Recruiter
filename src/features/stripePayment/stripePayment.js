import { APIsSlice } from "../APIs/APIsSlice";
const roleHeader = {
  role: "recruiter",
};
export const stripePayment = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    stripePaymentInit: builder.query({
      query: ({ amount, currency }) => ({
        url: `api/create-payment`,
        method: "GET",
        headers: { role: roleHeader.role, amount, currency },
      }),
    }),
  }),
});

export const { useStripePaymentInitQuery } = stripePayment;
