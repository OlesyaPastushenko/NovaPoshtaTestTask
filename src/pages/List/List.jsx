import { useEffect, useState } from "react"
import axios from "axios";
import env from "react-dotenv";
import Card from "../../components/card/Card";
import './list.css'

export default function List () {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('Loading...')
    const [results, setResults] = useState([])
    const [count, setCount] = useState(1)
    const onPrev = () => {
        count > 1 ? setCount(prev=>prev-1) : setCount(1)
    }
    const onNext = () => {
        count < 20 ? setCount(prev=>prev+1) : setCount(20)
    }
    const fetchAdress = async()=>{
        await axios
        .post("https://api.novaposhta.ua/v2.0/json/", {
          "apiKey": env.API_KEY,
          "modelName": "Address",
          "calledMethod": "getWarehouses",
          "methodProperties": {
            "CityName" : "Київ",
            "Page" : count,
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
    useEffect(()=>{
        setResults([])
        fetchAdress()
        window.scrollTo(0, 0)
    },[count])
    return(
        <div className="cover">
          <div className="h3">Список відделень у Києві</div>
          {results.length < 1 ? <p className="loading">{loading}</p> :<Card results={results}/>}
          { error && <div>{error}</div>}
          <div className="page">
            <button className="pageBtn" onClick={onPrev}>&#60;</button>
            <div>{count}</div>
            <button className="pageBtn" onClick={onNext}>&#62;</button>
          </div>
        </div>
    )
}