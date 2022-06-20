import "./planos.css";
import planoP from '../img/planoP.svg';
import i from '../img/i.svg';
import React, { useState } from 'react';


const Plano =({product}) => {
  const [period, setPeriod] = useState("monthly")
    return (
      <div>  
        <div className="posicao">
          <div className="planos">
                <img src={planoP} alt="planoP"/>
                <h3 className="nome">{product.name}</h3>
                  <div>
                    <div>
                      <p className="riscado"><strike>R$ {(product.cycle[period].priceRenew).replace(".",",")}</strike>
                      <strong>R$ {(product.cycle[period].priceOrder).replace(".", ",")}</strong></p>
                    </div>
                    <p>
                      equivale a
                      <br></br> 
                      <strong className="plano">R$ {((product.cycle[period].priceOrder/product.cycle[period].months).toFixed([2])).replace(".", ",")}</strong>
                      /mês*
                    </p>
                  </div>
                  <button className="botao">
                    Contrate Agora
                  </button>
                  <p><strong className="dominio">1 ano de Domínio Grátis </strong><img className="i" src={i} alt="i"/></p>
                  <p className="economize">economize R$ {((product.cycle[period].priceOrder*0.4).toFixed([2])).replace(".",",")} <strong className="off"> 40% OFF</strong></p>
                  <div className="sites">
                    Para 1 site
                  </div>  
                  <li className="li">
                    <li><strong>100 GB</strong> de Armazenamento</li>
                    <li>Contas de E-mail <strong>Ilimitadas</strong></li>
                    <li>Criador de Sites <strong>Grátis</strong></li>
                    <li>Certificado SSL <strong>Grátis</strong> (https)</li>
                  </li>
          </div>
        </div>
      </div>    
  );
}
export default Plano;

