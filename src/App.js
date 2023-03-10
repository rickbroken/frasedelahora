import React, {useState} from 'react';
import './App.css';
import Tweet from './componentes/Tweet';
import { Icon } from '@iconify/react';
import domToImage from 'dom-to-image';
import moment from 'moment';

function App() {

  const [tema, setTema] = useState('');
  const [temaButton, setTemaButton] = useState('');

  const handleTema = () => {
    if(tema === ''){
      setTema('dia');
      setTemaButton('dia')
    } else if (tema === 'dia'){
      setTema('');
      setTemaButton('');
    }
  }

  const fechaHoy = moment();
  const fechaFormateada = fechaHoy.format('DD-MM-YYYY');
  function handleDownloadClick() {
    // Selecciona el div que quieres capturar
    const element = document.getElementById('App');
  
    // Define las opciones de configuración para la función domToImage
    const options = {
      style: {
        'image-rendering': 'pixelated',
      },
    };
  
    // Usa la función domToImage para generar la imagen con las opciones de configuración
    domToImage.toBlob(element, options)
      .then(blob => {
        // Crea un enlace para descargar la imagen
        const link = document.createElement('a');
        link.download = `FraseDelAhora ${fechaFormateada}.png`;
  
        // Establece el enlace y haz clic en él para descargar la imagen
        link.href = URL.createObjectURL(blob);
        link.click();
      });
  }

  return (
    <>
      <div className= {`main ${tema}`} id="App">
        <div className="App" >
          <Tweet />
        </div>
      </div>
      <div className={`${temaButton}`}>
        <button className='setTema' onClick={handleTema}><Icon icon="mdi:sun-moon-stars" color="gray" width="26" /></button>
        <button className='setCaptura' onClick={handleDownloadClick}><Icon icon="tabler:photo-down" width="25" color="gray"/></button>
      </div>
    </>
  );
}

export default App;
