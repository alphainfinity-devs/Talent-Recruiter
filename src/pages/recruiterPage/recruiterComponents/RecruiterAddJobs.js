import React from "react";
import { useForm } from "react-hook-form";

const RecruiterAddJobs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <section className="py-10 w-full container mx-auto">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[650px] bg-secondary p-5 md:p-10 shadow-lg"
        >
          {/* ........job title input filed......... */}
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block mb-2">Job Title*</label>
              <input
                className="input input-bordered w-full rounded-none"
                type="text"
                placeholder="job title"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Job title is required",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.title?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.title.message}
                  </span>
                )}
                {errors.title?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.title.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* .......job categor and job type......... */}
          <div className="flex mb-6 gap-1">
            {/* .....job category input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Job Category*</label>
              <select
                {...register("category", {
                  required: {
                    value: true,
                    message: "Job Category is required",
                  },
                })}
                className="select select-bordered w-full rounded-none"
              >
                <option disabled selected>
                  Web Developer
                </option>
                <option>UI/UX Designer</option>
                <option>Web Designer</option>
                <option>Software</option>
                <option>SEO</option>
                <option>Digital Markater</option>
              </select>
              <label className="label p-[2px]">
                {errors.category?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.category.message}
                  </span>
                )}
                {errors.category?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.category.message}
                  </span>
                )}
              </label>
            </div>

            {/* .....job type input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Job Type*</label>
              <select
                {...register("type", {
                  required: {
                    value: true,
                    message: "Job type is required",
                  },
                })}
                className="select select-bordered w-full rounded-none"
              >
                <option disabled selected>
                  Full Time
                </option>
                <option>Part Time</option>
                <option>Remote</option>
                <option>Office</option>
                <option>Internship</option>
                <option>Contract</option>
              </select>
              <label className="label p-[2px]">
                {errors.type?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.type.message}
                  </span>
                )}
                {errors.type?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.type.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* ...Application Deadline and Salary Currency.. */}
          <div className="flex mb-6 gap-1">
            {/* .....Application Deadline input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Deadline*</label>

              <input
                className="input input-bordered w-full rounded-none"
                type="date"
                placeholder="Job Title"
                {...register("deadline", {
                  required: {
                    value: true,
                    message: "Job deadline is required",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.deadline?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.deadline.message}
                  </span>
                )}
                {errors.deadline?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.deadline.message}
                  </span>
                )}
              </label>
            </div>

            {/* .....job type input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Salary*</label>
              <select
                {...register("salary", {
                  required: {
                    value: true,
                    message: "Job salary is required",
                  },
                })}
                className="select select-bordered w-full rounded-none"
              >
                <option disabled selected>
                  25000 - 30000
                </option>
                <option>30000 - 40000</option>
                <option>40000 - 50000</option>
                <option>50000 - 60000</option>
                <option>60000 - 70000</option>
                <option>70000 - 80000</option>
                <option>80000 - 90000</option>
              </select>
              <label className="label p-[2px]">
                {errors.salary?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.salary.message}
                  </span>
                )}
                {errors.salary?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.salary.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* ...lavel and compani Logo.. */}
          <div className="flex mb-6 gap-1">
            {/* .....cadidate lavel input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Lavel*</label>
              <select
                {...register("lavel", {
                  required: {
                    value: true,
                    message: "lavel is required",
                  },
                })}
                className="select select-bordered w-full rounded-none"
              >
                <option disabled selected>
                  Senior
                </option>
                <option>Fresher</option>
                <option>Junior</option>
              </select>
              <label className="label p-[2px]">
                {errors.lavel?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.lavel.message}
                  </span>
                )}
                {errors.lavel?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.lavel.message}
                  </span>
                )}
              </label>
            </div>

            {/* .....logo file input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Company Logo*:</label>
              <input
                className="w-full"
                type="file"
                {...register("cLogo", {
                  required: {
                    value: true,
                    message: "company logo is required",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.cLogo?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.cLogo.message}
                  </span>
                )}
                {errors.cLogo?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.cLogo.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* .....Job description input fied...... */}
          <div className="flex flex-wrap mb-2">
            <div className="w-full">
              <label className="block mb-2">Job Description*</label>
              <textarea
                className="textarea textarea-bordered w-full border-1 rounded-none h-[100px]"
                type="text"
                placeholder="Job Description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Job Description is required",
                  },
                })}
              ></textarea>
              <label className="label p-[2px]">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
                {errors.description?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <input
            className="btn btn-primary hover:bg-accent w-full text-white rounded-none hover:shadow-lg"
            type="submit"
            value="Post the job"
          />
        </form>
      </div>
    </section>
  );
};

export default RecruiterAddJobs;
