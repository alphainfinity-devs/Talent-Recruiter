import React from 'react';
import { useForm } from 'react-hook-form';

const AddJobs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className='hero min-h-[60vh]'>
      <div className='card w-full max-w-sm shadow-2xl bg-base-100'>
        <h2 className='text-2xl text-center text-secondary font-bold pb-5'>
          Add a Job
        </h2>
        <div className='flex  justify-center items-center'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control w-full max-w-xs '>
              <label className='label'>
                <span className='label-text'>Job Position</span>
              </label>

              <input
                type='text'
                placeholder='Job Position'
                className='input input-bordered w-full max-w-xs'
                {...register('jobPosition', {
                  required: {
                    value: true,
                    message: 'Job Position is Required',
                  },
                })}
              />

              <label className='label'>
                {errors.name?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className='form-control w-full max-w-xs '>
              <label className='label'>
                <span className='label-text'>Company Name</span>
              </label>

              <input
                type='text'
                placeholder='Company Name'
                className='input input-bordered w-full max-w-xs'
                {...register('companyName', {
                  required: {
                    value: true,
                    message: 'Company Name is Required',
                  },
                })}
              />

              <label className='label'>
                {errors.name?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className='form-control w-full max-w-xs '>
              <label className='label'>
                <span className='label-text'>Vacancy</span>
              </label>

              <input
                type='number'
                placeholder='Vacancy'
                className='input input-bordered w-full max-w-xs'
                {...register('vacancy', {
                  required: {
                    value: true,
                    message: 'Vacancy is Required',
                  },
                })}
              />

              <label className='label'>
                {errors.name?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className='form-control w-full max-w-xs '>
              <label className='label'>
                <span className='label-text'>Job Details</span>
              </label>

              <textarea
                type='text'
                placeholder='Job Details'
                className='textarea textarea-bordered w-full max-w-xs'
                {...register('jobDetails', {
                  required: {
                    value: true,
                    message: 'Job details is Required',
                  },
                })}
              />

              <label className='label'>
                {errors.name?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className='form-control w-full max-w-xs '>
              <label className='label'>
                <span className='label-text'>Job Requirement</span>
              </label>

              <textarea
                type='text'
                placeholder='Job Requirement'
                className='textarea textarea-bordered w-full max-w-xs'
                {...register('jobRequirement', {
                  required: {
                    value: true,
                    message: 'Job Requirement is Required',
                  },
                })}
              />

              <label className='label'>
                {errors.name?.type === 'required' && (
                  <span className='label-text-alt text-red-500'>
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className='btn w-full max-w-xs bg-primary text-black mb-4'
              type='submit'
              value='Add'
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
