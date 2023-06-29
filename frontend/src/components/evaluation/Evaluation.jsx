import React, { useEffect, useState } from 'react'
import "./Evaluation.scss";
import axios from 'axios'


function Evaluation() {
    const [optionBrand, setOptionBrand] = useState([])
    const url = import.meta.env.VITE_BACKEND_URL
    useEffect(() => {
        axios.get(`${url}/evaluation/brands`)
        .then(res => console.log(res))
    })
  return (
    <form action="">
        <section className="container first-page">
            <p className="title">
            Remplissez les champs ci-dessous pour évaluer le smartphone :
            </p>
            <label htmlFor="brand">
                <select name="brand" id="brand">
                    <option value=""></option>
                </select>
            </label>
        </section>
    </form>
  )
}

export default Evaluation