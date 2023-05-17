import React,{useEffect, useState} from "react";
import './Dropdown.css';

function App() {

    //😔🤩🫡
    const[data,setData] = useState(0)
    const[emoji,setEmoji] = useState('😔')
    
    useEffect(()=>{
        if(data == 0){
            setEmoji("😔")
        }else if(data == 50){
            setEmoji("🫡")
        }else if(data == 100){
            setEmoji("🤩")
        }
    },[data])
  
  return (
    
    <div className="btn-group" style={{width:'100%'}}>
  <button type="button" className="btn btn-danger dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
  ¿Con que frecuencia desea conocer sobre las distintas promociones y nuevo
contenido que ofrece la empresa?
  </button>

    <div className="dropdown-menu p-4 text-body-secondary" style={{width: '100%', backgroundColor: '#F87878',margin: '0 auto',textAlign: 'center'}}>
      <p>
            Acepta recibir de vez en cuando nuestros mensajes y materiales de promoción, 
        por correo postal, correo electrónico o cualquier otro formulario de contacto que 
        nos proporciones (incluido tu número de teléfono para llamadas o mensajes de 
        texto). Si no deseas recibir dichos materiales o avisos de promociones, simplemente
        avísanos en cualquier momento.  
       

      </p>
                <label htmlFor="temp"> Selecciona la frecuencia en la que deseas recibir nuestros mensajes:</label><br />
                <div style={{fontSize: '70px'}} >{emoji}</div>   
                
                <input type='range' style={{ width:'40%',margin: 'auto'}} className={data>50?'heigh':'less'} list="markers"  min={0} max={100} step={50} value={data} onChange={(e)=>setData(e.target.value)} id="temp" name="temp" />

                            <datalist className="datalist" id="markers" >
                                
                                <option  className="option"  value="0" label="Poco"/>
                                <option  className="option" value="50" label="Moderado"/>
                                <option  className="option" value="100" label="Frecuente"/>
                                                         
                            </datalist>
    </div>

    </div>
  );
  }

export default App;