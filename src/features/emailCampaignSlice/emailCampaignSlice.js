import { APIsSlice } from "../APIs/APIsSlice";
const roleHeader = {
  role: "admin",
};
export const emailCampaignSlice = APIsSlice.injectEndpoints({
  endpoints: (builder) => ({
    singleEmailSend: builder.mutation({
      query: (data) => ({
        url: `/api/email-campaign/email`,
        method: "POST",
        headers: roleHeader,
        body: {
          data,
        },
      }),
    }),
    emailNewsLetterSent: builder.mutation({
      query: ({ email, email_subject, email_body }) => ({
        url: `/api/email-campaign/email-sent`,
        method: "POST",
        body: {
          email,
          email_subject,
          email_body,
        },
      }),
    }),
    emailNewsLetterConfirm: builder.mutation({
      query: ({ email }) => ({
        url: `/api/email-campaign/email-confirmation`,
        method: "POST",
        body: {
          email,
        },
      }),
    }),
  }),
});

export const {
  useSingleEmailSendMutation,
  useEmailNewsLetterConfirmMutation,
  useEmailNewsLetterSentMutation,
} = emailCampaignSlice;
