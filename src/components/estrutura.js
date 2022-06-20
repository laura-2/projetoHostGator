import "./estrutura.css";
import background from '../img/armarios.svg';
import homem from '../img/homem.svg';
import icone from '../img/icon-check.svg';
import flecha from '../img/flecha.svg';
import logo from '../img/logo.svg';
import bola from '../img/Selection Control - Radio - Off - Enabled.svg';
import React, { useState } from 'react';


export default function Estrutura(props) {
    const [period, setPeriod] = useState("monthly")

    return (
        <div>
            <img className="titulo" src={logo} alt="logo"/>    
            <div className="fundo">
            <div>
                <img className="armario" src={background} alt="background" />
                <img className="homem" src={homem} alt="homem"/>
            </div>
                <p className="subtitulo">Hospedagem de Sites</p>
                <h3 className="inicio">
                    <strong>Tenha uma hospedagem de sites estável</strong>
                    <br></br> 
                </h3>
                <h3 className="inicio2">    
                    <strong>e evite perder visitantes diariamente</strong>
                </h3>
                <p className="checks1">
                    <img className="icone" src={icone} alt="icone"/> 99,9% de diponibilidade: seu site sempre no ar
                    <br></br>
                </p>   
                <p className="checks2"> 
                    <img className="icone" src={icone} alt="icone"/> Suporte 24h, todos os dias
                </p>
                <p className="checks3">
                    <img className="icone" src={icone} alt="icone"/> Painel de Controle cPanel
                </p>
                <img className="imagem"src={flecha} alt="flecha"/>
            </div>
            <p className="anos"> Quero pagar a cada: </p>
            
            <div className="botoes">    
                <button className="ano" onClick={() => this.setState({ period: "triennially" })}>3 anos</button>
                <button className="ano" onClick={() => this.setState({ period: "annually" })}>1 ano</button>
                <button className="ano" onClick={() => this.setState({ period: "monthly" })}>1 mês</button>
            </div>        
        </div>
        );
    }


