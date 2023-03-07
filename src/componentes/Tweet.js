import React, {useState, useEffect} from 'react';
import imgPerfil from '../img/img-perfil.jpg';
import moment from 'moment';
import 'moment/locale/es';
import frasesFamosas from '../frases/frases';


const Tweet = () => {
	//Se establese la fecha del dia actual con moment.js
	const fechaHoy = moment();
	//Se establece el numero de dia actual de 1 a 365 del año
	const diaDelAnio = fechaHoy.dayOfYear();
	
	//Estados para frase, autor de la frase, y la hora aleactoria
	const [frase, setFrase] = useState('');
	const [autor, setAutor] = useState('');
	const [horaAleatoria, setHoraAleatoria] = useState('');
	
	//Uso de un hook para actualizar la frase cada dia que pase del año
	useEffect(() => {
		frasesFamosas.map((fraseFamosa, i) => {
			//Se compara el numero de frase en las frases del arreglo importado con el dia del año, si coinciden se actualiza el estado
			if (i === diaDelAnio) {
				setFrase(fraseFamosa.frase);
				setAutor(fraseFamosa.autor);
				return i;
			}
		});
	}, [diaDelAnio]);
	

	//Se establece una hora aleatoria, para luego pasarce dentro del componente
	const horaAzar = fechaHoy
  .hour(Math.floor(Math.random() * 24)) // Valor aleatorio entre 0 y 23 para las horas
  .minute(Math.floor(Math.random() * 60)) // Valor aleatorio entre 0 y 59 para los minutos
  .second(Math.floor(Math.random() * 60));
	
	//Con el uso del hook, cada que se actualize el componente la hora va a cambiar aleatoriamente
	useEffect(()=>{
		setHoraAleatoria(horaAzar.format('hh:mm'));
	},[]);
	

	//Se establece que se quiere trabajar las fechas en idioma español
	fechaHoy.locale('es');
	//Se le da formato a la fecha que tendra el tweet
	const fechaActual = fechaHoy.format('ddd D, YYYY');
	


  return(
    <div className='contenedor-body-tweet'>
			<div className='contenedor-head'>
				<img className='img-perfil' src={imgPerfil} alt='FraseDelAhora'/>
				<div className='contenedor-name-user'>
					<p className='name-tweet'>Frase del ahora</p>
					<p className='user-tweet'>@FraseDelAhora</p>
				</div>
			</div>
			<div className='contenedor-tweet'>
				<p className='tweet'>"{frase}"</p>
				<p className='autor'>- {autor}</p>
				<p className='footer-tweet'>{horaAleatoria} a.m  {fechaActual} • <span>Twitter for iPhone</span></p>
			</div>
		</div>
  );
}

export default Tweet;