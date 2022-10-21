import { APIsSlice } from "../APIs/APIsSlice";
const roleHeader = {
  role: "admin",
};
export const emailCampaign = APIsSlice.injectEndpoints({
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
  }),
});

export const { useSingleEmailSendMutation } = emailCampaign;
