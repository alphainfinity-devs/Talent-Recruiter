import React from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const AdminCustomize = () => {
  return (
    <>
      <div className="flex items-center justify-center md:my-14 my-3">
        <BsFillJournalBookmarkFill className="mr-2 md:w-9 md:h-9 w-5 h-5" />
        <h2 className="md:text-3xl uppercase md:font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
          Customize Option
        </h2>
      </div>
      <div className="mockup-window border-2 border-secondary bg-success">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-6 px-4 py-16 bg-base-200">
          

          <div className="stack">
            <div className="card shadow-md bg-primary text-primary-content">
              <div className="card-body">
              <label className="flex justify-center items-center">
            Theme Font Family
            <div
              className="tooltip cursor-pointer overflow-visible z-10"
              data-tip={"Only support Google font family"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current flex-shrink-0 w-6 h-6 mx-3">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <input type="text" className="py-1 rounded px-2" placeholder='i.e."Sofia", sans-serif' />
          </label>
              </div>
            </div>
            <div className="card shadow bg-primary text-primary-content">
              <div className="card-body"></div>
            </div>
            <div className="card shadow-sm bg-primary text-primary-content">
              <div className="card-body"></div>
            </div>
          </div>
          <div className="stack">
            <div className="card shadow-md bg-primary text-primary-content">
              <div className="card-body">
                <label className="flex items-center justify-center">
                  Theme Background
                  <input type="color" className="ml-3" id="colorPicker" />
                </label>
              </div>
            </div>
            <div className="card shadow bg-primary text-primary-content">
              <div className="card-body"></div>
            </div>
            <div className="card shadow-sm bg-primary text-primary-content">
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCustomize;
