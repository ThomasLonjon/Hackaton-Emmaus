import React, { useEffect, useState, useRef } from 'react'
import "./Evaluation.scss";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import {os, storage, memory, network, condition, ponderation, agency} from './data'

import iphone from '../../assets/iphone.png'


function Evaluation() {
    const [optionBrand, setOptionBrand] = useState([])
    const [optionModel, setOptionModel] = useState([])
    const [smartphoneObj, setSmartphoneObj] = useState({
        brand: "",
        model: "",
        os: "",
        release_year: "",
        ram: "",
        storage: "",
        network: "",
        condition: "",
        agency:"",
    })

    

    const [price, setPrice] = useState(0)

    const url = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    const brandRef = useRef()
    const modelRef = useRef()
    const osRef = useRef()
    const releaseRef = useRef()
    const memoryRef = useRef()
    const storageRef = useRef()
    const networkRef = useRef()
    const conditionRef = useRef()
    const agencyRef = useRef()

    console.log(ponderation);

    

    useEffect(() => {
        axios.get(`${url}/evaluation/brands`)
        .then(res => setOptionBrand(res.data))

        axios.get(`${url}/evaluation`)
        .then(res => setOptionModel(res.data))
    }, [])


    const handleClickToPageTwo = (e) => {
        e.preventDefault()
        const firstPage = document.querySelector('.first-page')
        const secondPage = document.querySelector('.second-page')
        const thirdPage = document.querySelector('.third-page')

        firstPage.style.display = "none"
        secondPage.style.display = "flex"
        thirdPage.style.display = "none"
    }

    const handleClickToPageThree = (e) => {
        e.preventDefault()
        const firstPage = document.querySelector('.first-page')
        const secondPage = document.querySelector('.second-page')
        const thirdPage = document.querySelector('.third-page')

        firstPage.style.display = "none"
        secondPage.style.display = "none"
        thirdPage.style.display = "flex"

        const INITIAL_PRICE = 50
        const result = INITIAL_PRICE * ponderation.memory[memoryRef.current.value] * ponderation.storage[storageRef.current.value] * ponderation.release[releaseRef.current.value] * ponderation.condition[conditionRef.current.value] * ponderation.brand[brandRef.current.value]
        setPrice(result.toFixed(2))

        setSmartphoneObj({
            brand: brandRef.current.value,
            model: modelRef.current.value,
            os: osRef.current.value,
            release_year: releaseRef.current.value,
            ram: memoryRef.current.value,
            storage: storageRef.current.value,
            network: networkRef.current.value,
            condition: conditionRef.current.value,
            agency: agencyRef.current.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // faire le axios post
        //...
        const {ram, storage, network, os, condition, brand, agency} = smartphoneObj
        axios.post(`${url}/evaluation`, {ram, storage, network, os, condition, price, brand, agency})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        

        navigate('/')
    }

  return (
    <form onSubmit={handleSubmit}>
        <section className="container first-page">
            <p className="title">
            Remplissez les champs ci-dessous pour évaluer le smartphone :
            </p>
            <div className=" select-container">
                <label htmlFor="brand"> Marque </label>
                <select name="brand" id="brand" ref={brandRef}>
                    <option value=""></option>
                    {
                        optionBrand.map((brand, index) => <option key={index} value={index}> {brand.brand} </option>)
                    }
                </select>
            </div>

            <div className="model select-container">
                <label htmlFor="model"> Modèle </label>
                <select name="model" id="model" ref={modelRef}>
                    <option value=""></option>
                    {
                        optionModel.map((model, index) => <option key={index} value={model.name}> {model.name} </option>)
                    }
                </select>
            </div>

            <div className="os select-container">
                <label htmlFor="os"> Système d'exploitation </label>
                <select name="os" id="os" ref={osRef}>
                    <option value=""></option>
                    {
                        os.map((os, index) => <option key={os.name} value={os.name}> {os.name} </option>)
                    }
                </select>
            </div>

            <div className="release select-container">
                <label htmlFor="release"> Année de sortie </label>
                <input type="number" min="1900" max="2099" step="1" ref={releaseRef}/>
            </div>
            <button className="next btn" onClick={handleClickToPageTwo} >Suivant</button>
        </section>

        <section className="container second-page">
            <div className="flex-container">
                <div className="left">
                    <p className="title">
                    Remplissez les champs ci-dessous pour évaluer le smartphone :
                    </p>
                    <div className="ram select-container">
                        <label htmlFor="ram"> RAM </label>
                        <select name="ram" id="ram" ref={memoryRef}>
                            <option value=""></option>
                            {
                                memory.map((a) => <option key={a.capacity} value={a.capacity}> {a.capacity} Go </option>)
                            }
                        </select>
                    </div>
                    <div className="storage select-container">
                        <label htmlFor="storage"> Stockage </label>
                        <select name="storage" id="storage" ref={storageRef}>
                            <option value=""></option>
                            {
                                storage.map((a) => <option key={a.capacity} value={a.capacity}> {a.capacity} Go </option>)
                            }
                        </select>
                    </div>
                    <div className="network select-container">
                        <label htmlFor="network"> Réseau </label>
                        <select name="network" id="network" ref={networkRef}>
                            <option value=""></option>
                            {
                                network.map((a) => <option key={a.id} value={a.network}> {a.network} </option>)
                            }
                        </select>
                    </div>
                    <div className="condition select-container">
                        <label htmlFor="condition"> Etat </label>
                        <select name="condition" id="condition" ref={conditionRef}>
                            <option value=""></option>
                            {
                                condition.map((a) => <option key={a.id} value={a.name}> {a.name} </option>)
                            }
                        </select>
                    </div>
                    <div className="agency select-container">
                        <label htmlFor="agency"> Agence </label>
                        <select name="agency" id="agency" ref={agencyRef}>
                            <option value=""></option>
                            {
                                agency.map((a) => <option key={a.id} value={a.id}> {a.name} </option>)
                            }
                        </select>
                    </div>
                <button className="submit btn" onClick={handleClickToPageThree}>Valider</button>

                </div>
                <div className="right">
                    <img src={iphone} alt="" />
                </div>
            </div>
        </section>

        <section className="container third-page">
            <div className="flex-container">
                <div className="left">
                    <h2>Prix conseillé pour le <span className="smartphone">smartphone</span></h2>
                    <p className="price">{price} €</p>
                    <div className="specs">
                        <p>Modèle: {smartphoneObj.model}</p>
                        <p>Ram: {smartphoneObj.ram}Go</p>
                        <p>Stockage: {smartphoneObj.storage}Go</p>
                        <p>Etat: {smartphoneObj.condition}</p>
                    </div>
                    <button className="submit btn">Valider</button>
                </div>
                <div className="right">
                    <img src={iphone} alt="" />
                </div>
            </div>
        </section>
    </form>
  )
}

export default Evaluation