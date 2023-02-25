import "./checkttn.css";
import Input from "../../components/input/Input";
import Status from "../../components/status/Status";
import History from "../../components/history/History";
import { useEffect, useState } from "react";
import axios from "axios";
import env from "react-dotenv";

export default function CheckTTN() {
  const [status, setStatus] = useState({});
  const [array, setArray] = useState([]);

  const clearStatus = () => {
    setStatus('')
  }

  const addItem = (el) => {
    setArray([...array, el]);
  };
  const clearStorage = () => {
    setArray([]);
    localStorage.setItem("arr", JSON.stringify([]));
  };

  useEffect(() => {
    const newArr = JSON.parse(localStorage.getItem("arr"));
    setArray(newArr);
  }, []);

  useEffect(() => {
    array.length > 0 && localStorage.setItem("arr", JSON.stringify(array));
  }, [array]);

  const fetchData = async (value) => {
    await axios
      .post("https://api.novaposhta.ua/v2.0/json/", {
        apiKey: env.API_KEY,
        modelName: "TrackingDocument",
        calledMethod: "getStatusDocuments",
        methodProperties: {
          Documents: [
            {
              DocumentNumber: `${value}`,
            },
          ],
        },
      })
      .then(function (response) {
        console.log(response.data.data[0])
        setStatus(response.data.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="cover">
        <div className="wrapSec">
          <div>
            <Input fetchData={fetchData} addItem={addItem} clearStatus={clearStatus}/>
            <Status status={status}/>
          </div>
          <History array={array} clearStorage={clearStorage} />
        </div>
      </div>
    </div>
  );
}
