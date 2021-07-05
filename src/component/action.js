import {useState,useEffect} from "react"
import axios from 'axios';

function update(dispatch){

    fetch('https://api.covidtracking.com/v1/states/current.json')
    .then(response => response.json())
    .then(data => dispatch({type:"UPDATE",covidStatus:data}));

    return
}


export default update;