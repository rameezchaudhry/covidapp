
import { useSelector, useDispatch } from "react-redux"
import update from "./action"
import { useState, useEffect } from "react";
function Get() {
    let [country, setCountry] = useState("")
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountry(data));
    },[]);
    const state = useSelector(state => state)
    let dispatch = useDispatch()
    update(dispatch)

    return (
        <div className="container">
            <p className="h2 mt-5 ">Covid-19 Current  Status</p>
            <div>
                <select className="form-select" className="mt-3 p-3 w-50" aria-label="Default select example">
                    <option defaultValue>Select Country</option>
                   
    {/* {country.map((country,i)=><option value="">country.target.value</option>)} */}
                </select>
            </div>
            <div>

                <button className="btn m-2 p-2 bg-info text-white" >
                    Search</button>
            </div>
        </div>

    )
}
export { Get }