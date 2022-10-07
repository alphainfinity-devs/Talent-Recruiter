import { useEffect, useState } from "react";

const FetchData = (value) => {
    const [getVisualData, setGetVisualData] = useState([]);
    useEffect(() => {
      fetch(
        `https://rm-chartjs-react.herokuapp.com/fakeData?value=${value}`,
      )
        .then((res) => res.json())
        .then((data) => setGetVisualData(data));
    },[value]);
    return getVisualData;
};

export default FetchData;