import { Link } from "react-router-dom";
import moment from 'moment';
moment().format();

const ApplicantListRow = ({applicant}) => {
  let link = `jobs/applicants/${applicant._id}`


  return (     

    <>
      <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left whitespace-nowrap">
            <div className="flex items-center">
              <span className="font-medium">{applicant.name}</span>
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
            {applicant.email}
            </span>
          </td>
          <td className="py-3 px-6 text-center">
            {moment(applicant.createdAt).fromNow()}
          </td>
          <td className="py-3 px-6 text-center">
            <div className="flex item-center justify-center">
              <Link to={link}>
                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div> 
              </Link>
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="flex item-center justify-center">
              <Link to={link}>
                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div> 
              </Link>
 
              
            </div>
          </td>
        </tr>
      </tbody>
      </>

    )
};

export default ApplicantListRow;
