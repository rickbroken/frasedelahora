import React, {useState, useEffect} from 'react';
import imgPerfil from '../img/img-perfil.jpg';
import moment from 'moment';
import frasesFamosas from '../frases/frases';


const Tweet = () => {
	const fechaHoy = moment();
	const diaDelAnio = fechaHoy.dayOfYear();
	
	const [frase, setFrase] = useState('');
	const [autor, setAutor] = useState('');
	const [horaAleatoria, setHoraAleatoria] = useState('');
	
	
	useEffect(() => {
		frasesFamosas.map((fraseFamosa, i) => {
			if (i === diaDelAnio) {
				setFrase(fraseFamosa.frase);
				setAutor(fraseFamosa.autor);
				return i;
			}
		});
	}, [diaDelAnio]);

	const horaAzar = fechaHoy
  .hour(Math.floor(Math.random() * 24)) // Valor aleatorio entre 0 y 23 para las horas
  .minute(Math.floor(Math.random() * 60)) // Valor aleatorio entre 0 y 59 para los minutos
  .second(Math.floor(Math.random() * 60));

	useEffect(()=>{
		setHoraAleatoria(horaAzar.format('hh:mm'));
	},[]);

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
				<p className='footer-tweet'>{horaAleatoria} a.m.  Mier 7,2023 • <span>Twitter for iPhone</span></p>
			</div>
		</div>
  );
}

export default Tweet;