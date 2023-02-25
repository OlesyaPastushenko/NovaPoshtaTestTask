import { useEffect, useState } from "react"
import axios from "axios";
import env from "react-dotenv";
import Card from "../../components/card/Card";

export default function List () {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('Loading...')
    const [results, setResults] = useState([])
    const fetchAdress = async()=>{
        await axios
        .post("https://api.novaposhta.ua/v2.0/json/", {
          "apiKey": env.API_KEY,
          "modelName": "Address",
          "calledMethod": "getWarehouses",
          "methodProperties": {
            "CityName" : "Київ",
            "Page" : "1",
            "Limit" : "20",
            "Language" : "UA"
          },

        })
        .then(function (response) {
          let succes = response.data.success
          !succes ? setError('Упс, щось пішло не так. Спробуйте пізніше') :
          setResults(response.data.data)
        })
        .catch(function (error) {
            setError(`Упс, щось пішло не так: ${error.message}`);
            setLoading('')
        });
    }

    useEffect(()=>{
        fetchAdress()
    },[])

    return(
        <div className="cover">
          <div className="h3">Список відделнь у Києві</div>
          {results.length < 1 ? <p>{loading}</p> :<Card results={results}/>}
          { error && <div>{error}</div>}
        </div>
    )
}