import React, {useState} from 'react';
import './App.css';
import Tweet from './componentes/Tweet';
import { Icon } from '@iconify/react';
import html2canvas from 'html2canvas';

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

  function handleDownloadClick() {
    // Selecciona el div que quieres capturar
    const element = document.getElementById('App');
  
    // Usa la función html2canvas para generar la imagen
    html2canvas(element).then(canvas => {
      // Crea un enlace para descargar la imagen
      const link = document.createElement('a');
      link.download = 'captura-de-pantalla.png';
  
      // Convierte el canvas en un blob y establece el enlace
      canvas.toBlob(blob => {
        link.href = URL.createObjectURL(blob);
  
        // Haz clic en el enlace para descargar la imagen
        link.click();
      });
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
