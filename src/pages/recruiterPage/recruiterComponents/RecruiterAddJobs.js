import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useGetCategoryQuery } from "../../../features/category/categoryApi";
import { usePostJobMutation } from "../../../features/requiter/recruiterApi";
import Spinner from "../../../utils/Spinner";

const RecruiterAddJobs = () => {
  const { data: category, isLoading } = useGetCategoryQuery();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [postJob, { isSuccess, isError }] = usePostJobMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Job posted successfully", {
        toastId: "success",
      });
      reset();
    }
    if (isError) {
      toast.error("Something Went Wrong", {
        toastId: "error",
      });
    }
  }, [isError, isSuccess, reset]);


  return (
    <section className="w-full container mx-auto mb-5">
      <div className="flex justify-center items-center">
        {
          isLoading ? <Spinner /> :
            <form onSubmit={handleSubmit((data) => {
              postJob(data);
            })}
              className="w-full bg-secondary p-5 md:p-10 shadow-lg"
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
              {/* .......job category and job type......... */}
              <div className="flex mb-6 gap-1">
                {/* .....job category input..... */}
                <div className="w-full md:w-1/2 mb-2 md:mb-0">
                  <label className="block mb-2">Job Category*</label>
                  <select
                    defaultValue={"none"}
                    {...register("category", {
                      required: {
                        value: true,
                        message: "Job Category is required",
                      },
                    })}
                    className="select select-bordered w-full text-gray-800 rounded-none">
                    <option disabled value={"none"}>
                      Select Category
                    </option>
                    {category?.all_category.map((category) => (
                      <option
                        className="text-gray-800"
                        key={category._id}
                        value={"category._id"}>
                        {category.category}
                      </option>
                    ))}
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
                    className="select select-bordered w-full rounded-none">
                    <option disabled>Job Type</option>
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Contactual</option>
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
                    {...register("dead_line", {
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
                    className="select select-bordered w-full rounded-none">
                    <option disabled>Select Salary</option>
                    <option>Negotiable</option>
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
                    {...register("level", {
                      required: {
                        value: true,
                        message: "lavel is required",
                      },
                    })}
                    className="select select-bordered w-full rounded-none">
                    <option disabled>Select Level</option>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
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

                {/* .....Experience file input..... */}
                <div className="w-full md:w-1/2 mb-2 md:mb-0">
                  <label className="block mb-2">Experience*:</label>
                  <input
                    className="input input-bordered w-full rounded-none"
                    type="text"
                    placeholder="Experience"
                    {...register("experience", {
                      required: {
                        value: true,
                        message: "Experience is required",
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
              {/* ...lavel and compani Logo.. */}
              <div className="flex mb-6 gap-1">
                {/* .....Company Detail ..... */}
                <div className="w-full md:w-1/2 mb-2 md:mb-0">
                  <label className="block mb-2">Company Name*:</label>
                  <input
                    className="input input-bordered w-full rounded-none"
                    type="text"
                    placeholder="Company Name"
                    {...register("company_name", {
                      required: {
                        value: true,
                        message: "Company Name is required",
                      },
                    })}
                  />
                  <label className="label p-[2px]">
                    {errors.company_name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.company_name.message}
                      </span>
                    )}
                    {errors.company_name?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.company_name.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* .....Company Website ..... */}
                <div className="w-full md:w-1/2 mb-2 md:mb-0">
                  <label className="block mb-2">Company Website*:</label>
                  <input
                    className="input input-bordered w-full rounded-none"
                    type="url"
                    placeholder="Company Website"
                    {...register("company_link", {
                      required: {
                        value: true,
                        message: "Company Website is required",
                      },
                    })}
                  />
                  <label className="label p-[2px]">
                    {errors.company_link?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.company_link.message}
                      </span>
                    )}
                    {errors.company_link?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.company_link.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              {/* ...lavel and compani Logo.. */}
              <div className="flex mb-6 gap-1">
                {/* .....Address ..... */}
                <div className="w-full md:w-1/2 mb-2 md:mb-0">
                  <label className="block mb-2">Address*:</label>
                  <input
                    className="input input-bordered w-full rounded-none"
                    type="text"
                    placeholder="Address"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                  />
                  <label className="label p-[2px]">
                    {errors.address?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.address.message}
                      </span>
                    )}
                    {errors.address?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.address.message}
                      </span>
                    )}
                  </label>
                </div>

                {/* .....Company Website ..... */}
                <div className="w-full md:w-1/2 mb-2 md:mb-0">
                  <label className="block mb-2">Vacancy*:</label>
                  <input
                    className="input input-bordered w-full rounded-none"
                    type="number"
                    placeholder="Vacancy"
                    {...register("vacancy", {
                      required: {
                        value: true,
                        message: "Vacancy is required",
                      },
                    })}
                  />
                  <label className="label p-[2px]">
                    {errors.vacancy?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.vacancy.message}
                      </span>
                    )}
                    {errors.vacancy?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.vacancy.message}
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
                    })}></textarea>
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
        }
      </div>
    </section>
  );
};

export default RecruiterAddJobs;
