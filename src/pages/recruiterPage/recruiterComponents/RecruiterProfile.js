import React from "react";
import { useForm } from "react-hook-form";

const RecruiterProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <section className="w-full container mx-auto">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full bg-secondary p-5 md:p-10 shadow-lg"
        >
          <div className="flex mb-6 gap-1">
            {/* .....first name input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">First Name*</label>
              <input
                type="text"
                placeholder="first name"
                {...register("fName", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
                className="input input-bordered w-full rounded-none"
              />

              <label className="label p-[2px]">
                {errors.fName?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.fName.message}
                  </span>
                )}
                {errors.fName?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.fName.message}
                  </span>
                )}
              </label>
            </div>

            {/* .....last name input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Last Name*</label>
              <input
                type="text"
                placeholder="lest name"
                {...register("lName", {
                  required: {
                    value: true,
                    message: "last name is required",
                  },
                })}
                className="input input-bordered w-full rounded-none"
              />
              <label className="label p-[2px]">
                {errors.lName?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.lName.message}
                  </span>
                )}
                {errors.lName?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.lName.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* ......email and phone input.. */}
          <div className="flex mb-6 gap-1">
            {/* .......email input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Email*</label>

              <input
                className="input input-bordered w-full rounded-none"
                type="email"
                placeholder="enter email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            {/* .....phone number input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Phone*</label>
              <input
                type="number"
                placeholder="phone number"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "phone number is required",
                  },
                })}
                className="input input-bordered w-full rounded-none"
              />

              <label className="label p-[2px]">
                {errors.phone?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
                {errors.phone?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.phone.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          {/* .......Category and profile image.. */}
          <div className="flex mb-6 gap-1">
            {/* .....category lavel input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">Category*</label>
              <input
                {...register("category", {
                  required: {
                    value: true,
                    message: "category is required",
                  },
                })}
                className="select select-bordered w-full rounded-none"
              />
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

            {/* .....profile image file input..... */}
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <label className="block mb-2">profile*:</label>
              <input
                className="w-full"
                type="file"
                {...register("pImage", {
                  required: {
                    value: true,
                    message: "profile is required",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.pImage?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.pImage.message}
                  </span>
                )}
                {errors.pImage?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.pImage.message}
                  </span>
                )}
              </label>
            </div>
          </div>

          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label className="block mb-2">Full Address*</label>
              <input
                className="input input-bordered w-full rounded-none"
                type="text"
                placeholder="full address"
                {...register("address", {
                  required: {
                    value: true,
                    message: "address is required",
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
          </div>

          <input
            className="btn btn-primary hover:bg-accent w-full text-white rounded-none hover:shadow-lg"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </section>
  );
};

export default RecruiterProfile;
