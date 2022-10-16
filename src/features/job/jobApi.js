import { APIsSlice } from '../APIs/APIsSlice';


export const JobsApi = APIsSlice.injectEndpoints({
reducerPath: 'JobsApi',
 endpoints: (builder) => ({
  getAllJobs: builder.query({
   query: () => ({
    url: '/api/jobs',
    method: 'GET'
   })
  }),
  getJobById: builder.query({
    query: (id) => {
     console.log("ID:", id)
     return {
      url: `jobs/job/${id}`,
      method: 'GET'
     }
    }
   })
})
})

export const { useGetAllJobsQuery, useGetJobByIdQuery} = JobsApi