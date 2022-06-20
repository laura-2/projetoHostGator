import React from "react";
import Plano from "./components/plano";
import Estrutura from "./components/estrutura";
import "./App.css";
import axios from "axios";

const baseURL = "https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io/prices";
var period = "monthly";

const changePeriod = (per) => {
  console.log('clicado');
  period = per;
}

export default function App() {
  const [products, setProducts] = React.useState(null);
  const planos = [
    "Plano P",
    "Plano M",
    "Plano Turbo"
  ]



  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data.shared.products);
      console.log(response.data.shared.products);
    });
  }, []);

  if (!products) return null;

  return (
    <div> 
      <Estrutura changePeriod={changePeriod} /> 
    <div className="cards">
      {Object.keys(products).map((k) => {
        if(!planos.includes(products[k].name)) return null;
        return(
          <div className="card-block">
            <Plano product={products[k]} period={period}/>
          </div>
        )
      })}
    </div>
    </div>
  );
}
 
