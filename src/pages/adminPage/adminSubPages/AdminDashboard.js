import LineChart from "../adminPageComponents/LineChart";
import AllState from "../adminPageComponents/AllState";

export default function AdminDashboard() {
  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 relative top-12">
        <div className="px-3 md:px-8">
          <div className="container">
            <LineChart />
          </div>
          <div className="container my-20">
            <AllState />
          </div>
        </div>
      </div>
    </>
  );
}
