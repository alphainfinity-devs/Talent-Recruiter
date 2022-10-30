import { Oval } from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex justify-center my-20">
        <Oval
          height={80}
          width={80}
          color="#3CCF56"
          wrapperStyle={{}}
          wrapperclassName=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    </>
  );
};
export default Spinner;
