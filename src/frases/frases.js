const frasesFamosas = [
  {
		autor: "Steve Jobs",
		frase: "Estoy convencido de que por lo menos la mitad de lo que separa a los emprendedores exitosos de los que no lo son es mera perseverancia"
	},
	{
		autor: "Charles Caleb Colton",
		frase: "La riqueza, después de todo, es algo relativo, ya que el que tiene poco y quiere menos es más rico que el que tiene más y quiere aún más"
	},
	{
		autor: "Anaïs Nin",
		frase: "No puedes salvar a las personas, puedes simplemente amarlas"
	},
	{
		autor: "Coronel Sanders",
		frase: "El modo de dar una vez en el clavo, es dar cien veces en la herradura"
	},
	{
		autor: "Eleanor Roosevelt",
		frase: "El que pierde dinero, pierde mucho; el que pierde un amigo; pierde aún más; el que pierde fe, lo pierde todo"
	},
	{
		autor: "Donald Trump",
		frase: "Mantenga la visión de la globalidad mientras atiende los detalles cotidianos"
	},
	{
		autor: "Theodore Roosevelt",
		frase: "Haz lo que puedas, con lo que tengas, donde estés"
	},
	{
		autor: "Mark Cuban",
		frase: "No importa cuántas veces falles, sólo debes de estar en lo correcto una vez. Entonces todos te llamarán un éxito de la noche a la mañana y te dirán lo afortunado que eres"
	},
	{
		autor: "Alexander Graham Bell",
		frase: "Nunca vayas por el camino trazado, porque conduce hacia donde otros ya han estado"
	},
	{
		autor: "Ray Kroc",
		frase: "Si no te gusta tomar riesgos, debes salir corriendo del negocio"
	},
	{
		autor: "Thomas Edison",
		frase: "El éxito es 1% inspiración y 99% transpiración"
	},
	{
		autor: "Grace Coddington",
		frase: "Mantén siempre tus ojos abiertos, Siempre observando. Porque cualquier cosa que veas puede inspirarte"
	},
	{
		autor: "Chris Grosser",
		frase: "Las oportunidades no ocurren, se crean"
	},
	{
		autor: "Warren Buffett",
		frase: "Compra solo algo con lo que seas feliz si el mercado cierra 10 años"
	},
	{
		autor: "Abraham Lincoln",
		frase: "No puedes escapar de la responsabilidad de mañana evadiéndola hoy",
	},
	{
		autor: "Sean O’Casey",
		frase: "El dinero no te hace feliz, pero relaja los nervios",
	},
	{
		autor: "Mahatma Gandi",
		frase: "Realmente soy un soñador práctico; mis sueños no son bagatelas en el aire. Lo que yo quiero es convertir mis sueños en realidad",
	},
	{
		autor: "Phil Libin",
		frase: "Hay muchas malas razones para empezar una empresa. Pero sólo hay una buena razón y creo que sabes cuál es: para cambiar el mundo",
	},
	{
		autor: "Larry Page",
		frase: "Siempre da más de lo que esperan de ti",
	},
	{
		autor: "Mark Zuckerberg",
		frase: "Muévete rápido y rompe objetos. Si no estás rompiendo cosas, no te estás moviendo lo suficientemente rápido",
	},
	{
		autor: "Eleanor Roosevelt",
		frase: "El futuro pertenece a quienes creen en la belleza de sus sueños",
	},
	{
		autor: "Martin Luther King",
		frase: "Da tu primer paso con fe, no es necesario que veas toda la escalera completa, sólo da tu primer paso",
	},
	{
		autor: "Ralph Waldo Emerson",
		frase: "El dinero cuesta mucho a menudo",
	},
	{
		autor: "Winston Churchill",
		frase: "Un optimista ve una oportunidad en toda calamidad, un pesimista ve una calamidad en toda oportunidad",
	},
	{
		autor: "Confucio",
		frase: "Nuestra gloria más grande no consiste en no haberse caído nunca, sino en haberse levantado después de cada caída",
	},
	{
		autor: "Warren Buffett",
		frase: "La cosa más importante que debes hacer si estás dentro de un hoyo es dejar de cavar",
	},
	{
		autor: "Gary Vaynerchuk",
		frase: "Odio cómo piensa la gente con el “vaso medio vacío” cuando en realidad su vaso está casi lleno. Estoy agradecido cuando tengo una gota más en el vaso porque sé exactamente qué hacer con ella",
	},
	{
		autor: "Theodore Roosevelt",
		frase: "Es duro fracasar, pero es todavía peor no haber intentado nunca triunfar",
	},
	{
		autor: "Mark Zuckerberg",
		frase: "La gente puede ser muy inteligente o tener habilidades que son aplicables, pero si no creen en ello, entonces no van a trabajar realmente duro"
	},
	{
		autor: "Thomas Edison",
		frase: "Nuestra mayor debilidad es rendirse, la única manera de tener éxito es intentarlo siempre una vez más"
	},
	{
		autor: "Thomas Jefferson",
		frase: "Me he dado cuenta de que cuanto más trabajo, más suerte tengo"
	},
	{
		autor: "J. Paul Getty",
		frase: "Compra cuando todo el mundo este vendiendo y guarda dinero cuando todos los demás están comprando. No se trata de un slogan. Es la esencia de las inversiones exitosas"
	},
	{
		autor: "Thomas Edison",
		frase: "No hay sustituto para el trabajo duro"
	},
	{
		autor: "Thomas Edison",
		frase: "La mayoría de la gente pierde las oportunidades porque se viste normal y parece trabajo"
	},
	{
		autor: "Larry Page",
		frase: "Creo que es más fácil avanzar en sueños mega-ambiciosos"
	},
	{
		autor: "Henry Ford",
		frase: "Hay una regla para el empresario y es: hacer los productos con la mayor calidad posible al menor coste y pagando unos sueldos lo más altos posibles"
	},
	{
		autor: "Charles T. Lee",
		frase: "Compartir las ideas sin procesarlas puede conducirnos al engaño de pensar que en realidad estamos haciendo algo, cuando en realidad no estamos haciendo nada"
	},
	{
		autor: "T.T. Munger",
		frase: "El hábito del ahorro es una educación; fomenta cada virtud, enseña autocontrol, cultiva el sentido del orden, entrena la previsión y amplia la mente"
	},
	{
		autor: "Coco Chanel",
		frase: "No gastes tu tiempo golpeando una pared, esperando transformarla en una puerta"
	},
	{
		autor: "David Feherty",
		frase: "Cómo tratas con el fracaso determina cómo consigues el éxito"
	},
	{
		autor: "Donald Trump",
		frase: "La experiencia me enseñó que las mejores inversiones son las que uno no hace"
	},
	{
		autor: "Donald Trump",
		frase: "Observa, escucha y aprende. No puedes saberlo todo. Todo el que piensa que lo sabe todo está destinado a la mediocridad"
	},
	{
		autor: "Brian Tracy",
		frase: "Intenta lo imposible para mejorar tu trabajo"
	},
	{
		autor: "Walt Disney",
		frase: "Si puedes soñarlo puedes hacerlo, recuerda que todo esto comenzó con un ratón"
	},
	{
		autor: "Albert Einstein",
		frase: "Solo hay dos formas de vivir tu vida. Una es pensar que nada es un milagro. La otra es pensar que todo es un milagro"
	},
	{
		autor: "Seth Godin",
		frase: "Si te asusta, podría ser una buena cosa por intentar"
	},
	{
		autor: "Sean Parker",
		frase: "Definitivamente quería ganar mi libertad. Pero la principal motivación no fue hacer dinero, sino causar un impacto"
	},
	{
		autor: "Mark Twain",
		frase: "La falta de dinero es la raíz de todo mal"
	},
	{
		autor: "Richard Branson",
		frase: "Sólo se puede vivir una vez. Y no quiero perder ni un minuto de mi vida"
	},
	{
		autor: "Antoine de Saint Exupery",
		frase: "El hombre se descubre cuando se mide contra un obstáculo"
	},
	{
		autor: "Henry Ford",
		frase: "El fracaso es sólo la oportunidad de comenzar de nuevo de forma más inteligente"
	},
	{
		autor: "Henry Ford",
		frase: "Un negocio absolutamente dedicado al servicio sólo tendrá una preocupación sobre las ganancias: serán demasiado grandes"
	},
	{
		autor: "Elon Musk",
		frase: "A alguna gente no le gusta el cambio, pero necesitas abrazarlo si la alternativa es el desastre"
	},
	{
		autor: "Marsha Sinetar",
		frase: "Haz lo que ama y el dinero llegará"
	},
	{
		autor: "Nikos Kazantzakis",
		frase: "Para triunfar, primero debemos creer que podemos"
	},
	{
		autor: "Bill Gates",
		frase: "El éxito es un pésimo profesor. Seduce a la gente inteligente para que piense que no puede perder"
	},
	{
		autor: "Nana Koribi Yaoki",
		frase: "Si caes siete veces, levántate ocho"
	},
	{
		autor: "Bill Gates",
		frase: "Cuando tienes dinero, solo tú recuerdas quien eres. Pero cuando no tienes dinero, todo el mundo olvida quien eres. Así es la vida"
	},
	{
		autor: "Alan Key",
		frase: "El mejor modo de predecir el futuro es inventándolo"
	},
	{
		autor: "Henry Ford",
		frase: "Tanto si piensas que puedes, como si piensas que no puedes, estás en lo cierto"
	},
	{
		autor: "Conrad Hilton",
		frase: "El éxito está conectado con la acción. La gente exitosa se mantiene en movimiento. Cometen errores pero nunca se dan por vencido"
	},
	{
		autor: "Mark Twain",
		frase: "Si tuviéramos que hablar más que escuchar, tendríamos dos bocas y solamente una oreja"
	},
	{
		autor: "Mark Zuckerberg",
		frase: "El riesgo más grande es no tomar ninguno. En un mundo que está cambiando tan rápido, la única estrategia que está garantizada a fracasar es no tomar riesgos"
	},
	{
		autor: "Yoda",
		frase: "Hacer o no hacer. No sirve intentar, sólo hacer"
	},
	{
		autor: "Spike Milligan",
		frase: "El dinero no puede comprar amigos, pero puedes conseguir una nueva clase de enemigos"
	},
	{
		autor: "Shahir Zag",
		frase: "Tú serás exitoso porque la mayoría de personas son perezosas"
	},
	{
		autor: "Anónimo",
		frase: "Haz algo que te asuste cada día"
	},
	{
		autor: "Paul Rand",
		frase: "No trates de ser original, sólo trata de ser bueno"
	},
	{
		autor: "Zig Ziglar",
		frase: "Tú eres una persona de éxito cuando tienes algunas de las cosas que el dinero puede comprar y todas las cosas que el dinero no puede comprar"
	},
	{
		autor: "Dalai Lama",
		frase: "Solo existen dos días del año en el que no se puede hacer nada. Uno se llama ayer y otro mañana. Por lo tanto hoy es el día ideal para amar, crecer, hacer, y principalmente vivir"
	},
	{
		autor: "Dale Carnegie",
		frase: "El miedo no existe en otro lugar excepto en la mente",
	},
	{
		autor: "Mahatma Gandi",
		frase: "Un cobarde es incapaz de mostrar amor; hacerlo está reservado para los valientes",
	},
	{
		autor: "Bertolt Brecht",
		frase: "Hay hombres que luchan un día y son buenos. Hay otros que luchan un año y son mejores. Hay quienes luchan muchos años y son muy buenos. Pero los hay que luchan toda la vida. Esos son los imprescindibles",
	},
	{
		autor: "Bob Marley",
		frase: "El dinero no puede comprar vida",
	},
	{
		autor: "Ayn Rand",
		frase: "El dinero es una herramienta. Te llevará a donde desees, pero no te reemplazará como conductor",
	},
	{
		autor: "Biz Stone",
		frase: "El tiempo, la perseverancia y diez años de intentos eventualmente te hará ver como un éxito de la noche a la mañana",
	},
	{
		autor: "Brian Tracy",
		frase: "El optimismo es la cualidad más asociada con el éxito y la felicidad",
	},
	{
		autor: "Woody Allen",
		frase: "Me tomó 20 años tener éxito de la noche a la mañana",
	},
	{
		autor: "Howard Schultz",
		frase: "Arriesgarte más de lo que los otros piensan es seguro. Soñar más de lo que los otros piensan es práctico",
	},
	{
		autor: "Carlos Ruiz Zafón",
		frase: "Ganar dinero en si mismo no es difícil. Lo difícil es ganarlo haciendo algo a lo que merezca la pena dedicar la vida",
	},
	{
		autor: "Noah Everett",
		frase: "No te preocupes por el financiamiento si no lo necesitas. Hoy es más económico que nunca iniciar un negocio",
	},
	{
		autor: "Enzo Ferrari",
		frase: "En las ideas es en donde reside nuestra fuerza y tanto mejor si las sostenemos con obstinación",
	},
	{
		autor: "Napoleon Hill",
		frase: "Ten en mente que tu propósito y tu plan para lograrlo puede ser modificado de vez en cuando…lo importante es que comprendas el significado de trabajar siempre con un objetivo en mente y con un plan bien estructurado",
	},
	{
		autor: "Jeff Bezos",
		frase: "Si duplicas el número de experimentos que haces por año, vas a duplicar tu ingenio",
	},
	{
		autor: "Tony Hsieh",
		frase: "Deja de perseguir el dinero y empieza a perseguir la pasión",
	},
	{
		autor: "Epíteto",
		frase: "La riqueza no consiste en tener grandes posesiones, sino en tener pocas necesidades",
	},
	{
		autor: "John Maxwell",
		frase: "Algunas veces se gana, algunas veces se aprende",
	},
	{
		autor: "Ray Kroc",
		frase: "Solo eres tan bueno como la gente que contratas"
	},
	{
		autor: "Jeff Bezos",
		frase: "La inteligencia es un don, la amabilidad es una elección"
	},
	{
		autor: "Ingvar Kamprad",
		frase: "La simplicidad y el sentido común deberían ser la base de la planificación y la dirección estratégica"
	},
	{
		autor: "Winston Churchill",
		frase: "El éxito es aprender a ir de fracaso en fracaso sin desesperarse"
	},
	{
		autor: "Warren Buffett",
		frase: "Precio es lo que pagas, valor es lo que recibes"
	},
	{
		autor: "Thomas Jefferson",
		frase: "Nunca gastes tu dinero antes de tenerlo"
	},
	{
		autor: "G. K. Chesterton",
		frase: "Le debo mi éxito a haber escuchado con respeto a los mejores consejos, y luego desaparecer y hacer exactamente lo contrario"
	},
	{
		autor: "Henry Ford",
		frase: "Un negocio que no hace más que dinero es un negocio pobre"
	},
	{
		autor: "Larry Ellison",
		frase: "Cuando se innova, tienes que estar preparado para que la gente te diga que estas loco"
	},
	{
		autor: "Joel A. Barker",
		frase: "Aquellos que dicen que algo no puede hacerse, suelen ser interrumpidos por otros que lo están haciendo"
	},
	{
		autor: "Henry Ford",
		frase: "Los que renuncian son más numerosos que los que fracasan"
	},
	{
		autor: "Groucho Marx",
		frase: "Mientras que el dinero no puede comprar felicidad, te permite elegir tu propia forma de desgracia"
	},
	{
		autor: "Helen Keller",
		frase: "El carácter no puede ser desarrollado en la facilidad y la tranquilidad. Sólo a través de la experiencia de prueba y error del sufrimiento puede el alma ser fortalecida, la ambición ser inspirada y alcanzado, finalmente, el éxito."
	},
	{
			autor: "Albert Einstein",
			frase: "La vida es peligrosa, no por los que hacen el mal, sino por los que se sientan a ver lo que pasa."
	},
	{
			autor: "Thomas Alva Edison",
			frase: "Las personas no son recordadas por el número de veces que fracasan, sino por el número de veces que tienen éxito."
	},
	{
			autor: "Carlos Slim",
			frase: "Cada persona forja su propio destino."
	},
	{
			autor: "John Rampton",
			frase: "Puedes decirle cualquier cosa a la gente, pero la forma en la que lo dices determinara cómo reaccionarán."
	},
	{
			autor: "Elon Musk",
			frase: "Creo que es posible que la gente normal elija ser extraordinaria."
	},
	{
			autor: "George Patton",
			frase: "El éxito es qué tan alto rebotas después de que tocaste fondo."
	},
	{
			autor: "Carlos Slim",
			frase: "La competición te hace mejor, siempre, siempre te hace mejor, incluso si el competidor gana."
	},
	{
			autor: "Albus Dumbledore",
			frase: "Adormecer el dolor por un rato te hará sentirlo luego con más intensidad."
	},
	{
			autor: "Michael John Bobak",
			frase: "Todo el progreso se lleva a cabo fuera de la zona de confort."
	},
	{
			autor: "Goethe",
			frase: "Vale más hacer la cosa más insignificante del mundo, que estar media hora sin hacer nada."
	},
	{
			autor: "Enzo Ferrari",
			frase: "Nunca agaches la cabeza, mira siempre bien alto ganes o pierdas."
	},
	{
			autor: "Donald Trump",
			frase: "Aquel que se cree que sabe todo está cerrándose puertas."
	},
	{
			autor: "Thomas Edison",
			frase: "No he fracasado. He encontrado 10 mil formas que no funcionan."
	},
	{
			autor: "Sam Walton",
			frase: "Los líderes sobresalientes salen de su camino para fomentar la autoestima de su personal. Si la gente cree en ellos mismos, es increíble lo que pueden conseguir."
	},
	{
			autor: "Martin Luther King Jr.",
			frase: "Si no puedes volar, corre, si no puedes correr, camina, si no puedes caminar, gatea. Sin importar lo que hagas, sigue avanzado hacia adelante."
	},
	{
		autor: "Warren Buffett",
	  frase: "Regla número 1: nunca pierdas dinero. Regla número 2: nunca olvides la regla número 1"  
	},  
	{
		autor: "Pablo Picasso",
	  frase: "Me gustaría vivir como un hombre pobre con mucho dinero"  
	},  
	{
		autor: "Séneca",
	  frase: "No es el hombre que tiene poco, sino el que ansía más el que es pobre"  
	},  
	{
		autor: "Tony Robbins",
	  frase: "Lo que realmente da forma a nuestra vida es el significado que damos a las cosas"  
	},  
	{
		autor: "Elon Musk",    
		frase: "La persistencia es muy importante. No debes renunciar al menos que te veas obligado a renunciar"  
	},  
	{
		 autor: "Margaret Walker",
	  frase: "Los amigos y las buenas maneras te llevarán donde el dinero no puede"
	},
	{
		autor: "Mark Zuckerberg",
	  frase: "Si sólo trabajas en cosas que te gusten y te apasionen, no deberías tener un plan maestro para ver cómo resulta todo"  
	},  
	{
		autor: "Voltaire",
	  frase: "No pienses que el dinero lo hace todo o acabarás haciéndolo todo por el dinero"  
	},  
	{
		autor: "Larry Page",
	  frase: "Cuando un sueño aparezca ¡agárralo!"
	},  
	{
		autor: "Henry Ford",
	  frase: "El fracaso es una gran oportunidad para empezar otra vez con más inteligencia"  
	},  
	{
		autor: "Thomas Edison",    
		frase: "Para inventar, necesitas una buena imaginación y una pila de basura"  
	},  
	{   
		autor: "Will Smith",    
		frase: "El dinero y el éxito no cambian a la gente; simplemente amplifican lo que ya hay"  
	},  
	{   
		autor: "Oscar Wilde",    
		frase: "Solo hay una clase en la comunidad que piensa más en el dinero que el rico, y es el pobre"  
	},
	{
		autor: "Mark Twain",
		frase: "Dentro de 20 años estarás más decepcionado por las cosas que no hiciste que por las que hiciste. Así que suelta amarras, navega lejos de puertos seguros, atrapa los vientos favorables en tus velas. Explora. Sueña"
	},
	{
		autor: "Henry Ford",
		frase: "Nada es particularmente difícil si lo divides en pequeños trabajos"
	},
	{
		autor: "Donald Trump",
		frase: "Un pequeño esfuerzo es el mejor sustituto de las excusas"
	},
	{
		autor: "Cristobal Colón",
		frase: "Nunca se puede cruzar el océano hasta que se tenga el coraje de perder de vista la costa"
	},
	{
		autor: "Jim Rohn",
		frase: "La educación formal te dará para vivir; la autoeducación te dará una fortuna"
	},
	{
		autor: "Warren Buffet",
		frase: "Toma 20 años crear una reputación y cinco minutos arruinarla. Si piensas de esa manera, harás las cosas diferente"
	},
	{
		autor: "P.T. Barnum",
		frase: "El dinero es un amo terrible pero un excelente siervo"
	},
	{
		autor: "Warren Buffett",
		frase: "Alguien se sienta hoy en la sombra de un árbol que plantó hace mucho tiempo"
	},
	{
		autor: "Thomas Edison",
		frase: "Nuestra mayor debilidad radica en renunciar. La forma más segura de tener éxito es siempre intentarlo una vez más"
	},
	{
		autor: "Françoise Sagan",
		frase: "Puede que el dinero no compre la felicidad, pero prefiero llorar en un jaguar que en un autobús"
	},
	{
    autor: "Sam Walton",
    frase: "Celebra tu éxito. Encuentra algo de humor en tus fracasos."
  },
  {
    autor: "Walt Disney",
    frase: "Una persona debe fijar sus objetivos cuanto antes y dedicar toda su energía y talento a ellos."
  },
  {
    autor: "Robert Kiyosaki",
    frase: "No dejes que el miedo de perder sea mayor que la emoción de ganar."
  },
  {
    autor: "Ronald Reagan",
    frase: "El dinero no puede comprar la felicidad, pero seguro que te conseguirá una mejor clase de recuerdos."
  },
  {
    autor: "Besa Kosova",
    frase: "El dinero no compra la felicidad, pero alivia el estrés."
  },
  {
    autor: "Confucio",
    frase: "Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida."
  },
  {
    autor: "Warren Buffett",
    frase: "Nunca intento hacer dinero en el mercado de valores. Compro con la asunción de que podrían cerrar al día siguiente y reabrir en 10 años."
  },
  {
    autor: "Ingvar Kamprad",
    frase: "Solo aquellos que están dormidos no cometen errores."
  },
  {
    autor: "Albert Einstein",
    frase: "No todo lo que se puede contar cuenta y no todo lo que cuenta se puede contar."
  },
  {
    autor: "Enzo Ferrari",
    frase: "La voluntad obstinada de perseguir una ambición propia es verdaderamente una fuerza que puede hacer superar obstáculos."
  },
  {
    autor: "Estée Lauder",
    frase: "Nunca he soñado con el éxito. Siempre he trabajado para conseguirlo."
  },
  {
    autor: "Ingvar Kamprad",
    frase: "El tiempo es tu recurso más importante. Puedes hacer tanto en diez minutos. Diez minutos, una vez pasados, se fueron para siempre. Diez minutos no son solo una sexta parte de una hora. Divide tu vida en unidades de diez minutos y desperdicia las mínimas posibles en actividades sin sentido."
  },
  {
    autor: "Jim Rohn",
    frase: "Si realmente quieres hacer algo, encontrarás una manera. Si no, encontrarás una excusa."
  },
  {
    autor: "Larry Page",
    frase: "No necesitas tener una empresa de 100 personas para desarrollar esa idea."
  },
  {
    autor: "Franklin D. Roosevelt",
    frase: "Siempre que te pregunten si puedes hacer un trabajo, contesta que sí y ponte enseguida a aprender cómo se hace."
  },
	{
    autor: "Howard Schultz",
    frase:
      "Hay momentos en nuestras vidas en los que tenemos que reunir el valor para tomar ciertas decisiones que por alguna razón, van contra nuestro sentido común pero que han sido aconsejadas por sabias personas en las que confiamos. Decidimos seguir adelante, a pesar de los riesgos y de ir contra el raciocinio, porque creemos que el camino que han escogido los demás es el correcto y lo mejor que se puede hacer.",
  },
  {
    autor: "Richard Branson",
    frase:
      "¿Mi más grande motivación? Seguir retándome a mí mismo. Veo la vida como una larga educación universitaria que nunca tuve- todos los días estoy aprendiendo algo nuevo.",
  },
  {
    autor: "Mary Kay Ash",
    frase: "Caemos para tener éxito.",
  },
  {
    autor: "Theodore Roosevelt",
    frase:
      "Ningún hombre debería recibir un dólar al menos que ese dólar haya sido ganado justamente.",
  },
  {
    autor: "Larry Ellison",
    frase:
      "Internet debe ser un medio de comunicación entre los pueblos que contribuya a la paz mundial y que el principal objetivo de la alta tecnología es mejorar el nivel de vida de las personas.",
  },
  {
    autor: "Timothy Ferris",
    frase:
      "Para la mayoría de las cosas importantes, el tiempo siempre es una lata. ¿Esperas un buen momento para renunciar a tu trabajo? Las estrellas nunca se alinearán y los semáforos nunca se pondrán en verde al mismo tiempo. El universo no conspira en tu contra, pero tampoco se sale de su camino para acomodar las cosas. Las condiciones nunca son perfectas. “Algún día” es una enfermedad que llevará tus sueños a la tumba. Las listas de pros y contras son igual de malas. Si es importante para ti y quieres hacerlo “eventualmente”, sólo hazlo y corrige el curso sobre la marcha.",
  },
  {
    autor: "Albert Einstein",
    frase:
      "No trates de convertirte en un hombre de éxito sino en un hombre de valores.",
  },
  {
    autor: "Elon Musk",
    frase: "El primer paso es establecer que algo es posible; entonces la probabilidad ocurrirá.",
  },
	{
    autor: "Tennessee Williams",
    frase: "Puedes ser joven sin dinero, pero no puedes ser viejo sin el"
  },
  {
    autor: "Will Rogers",
    frase: "Demasiadas personas gastan el dinero que ganaron para comprar cosas que no quieren, para impresionar a gente que no les gusta"
  },
  {
    autor: "Robert Kiyosaki",
    frase: "Hay una diferencia entre ser pobre y estar quebrado. Uno puede estar quebrado temporalmente, uno es pobre para toda la vida"
  },
  {
    autor: "Jeff Bezos",
    frase: "Cuando tengas 80 años, y en un momento tranquilo de reflexión, narrando sólo para ti la versión más personal de tu historia de vida, el relato que será más conciso y significativo será la serie de elecciones que hayas hecho. Al final, somos nuestras elecciones"
  },
  {
    autor: "Earl Nightingale",
    frase: "Nunca abandones un sueño por el tiempo que te puede tomar. De igual forma, el tiempo pasará"
  },
  {
    autor: "Robert Arnott",
    frase: "En la inversión, lo que es cómodo es raramente rentable"
  },
  {
    autor: "Malcolm Forbes",
    frase: "Cuando dejas de soñar dejas de vivir"
  },
  {
    autor: "Beverly Sills",
    frase: "Puedes estar decepcionado si fracasas, pero estás acabado si no lo intentas"
  },
  {
    autor: "Xavier Gabriel",
    frase: "Fracasar no es perder, es no haberlo intentado"
  },
  {
    autor: "Billie Jean King",
    frase: "Un campeón tiene miedo de perder. Los demás tienen miedo de ganar"
  },
  {
    autor: "Albert Einstein",
    frase: "Una persona que nunca cometió un error, nunca intentó algo nuevo"
  },
  {
    autor: "Anónimo",
    frase: "Cuando tenía dinero, todos me llamaban hermano"
  },
  {
    autor: "Sam Walton",
    frase: "La forma en que los jefes tratan a los empleados es exactamente cómo los empleados tratarán a los clientes"
  },
  {
    autor: "George Lorimer",
    frase: "Esta bien tener dinero y las cosas que el dinero puede comprar, pero esta bien también comprobar de vez en cuando que no has perdido las cosas que el dinero no puede comprar"
  },
  {
    autor: "Reid Hoffman",
    frase: "Si no te avergüenza la primera versión de tu producto, lo lanzaste muy tarde"
  },
  {
    autor: "Anónimo",
    frase: "La zona de confort es un lugar maravilloso, pero nada crece allí"
  },
	{
		autor: "James Allen",
		frase: "Te convertirás en alguien tan pequeño como el deseo que te controle, y en algo tan grande como sea tu aspiración dominante"
	},
	{
		autor: "Walt Disney",
		frase: "Mickey Mouse apareció salió de mi mente en una libreta de dibujo, en un tren de Manhattan a Hollywood, en un momento en que la empresa de mi hermano Roy y mía estaba en el punto más bajo y el desastre parecía a la vuelta de la esquina"
	},
	{
		autor: "Jay Z",
		frase: "No tengo miedo de morir, tengo miedo de no intentarlo"
	},
	{
		autor: "Dave Ramsey",
		frase: "Debes ganar control sobre tu dinero o la falta del mismo te controlará 	a ti"
	},
	{
		autor: "Phil Knight",
		frase: "No importa a cuantas personas ofendas, siempre que tu mensaje llegue a 	tus consumidores. Les digo a los que no quieren ofender a nadie: Vas a pasar 	tiempos muy, muy difíciles intentando obtener una publicidad con significado"
	},
	{
		autor: "Anthony Robbins",
		frase: "Hay un motor poderoso dentro de cada ser humano que, una vez liberado, 	puede hacer realidad cualquier visión, sueño o deseo"
	},
	{
		autor: "Nolan Bushnell",
		frase: "El ingrediente más importante es levantarte y hacer algo. Es así de 	simple. Muchas personas tienen ideas, pero solo algunas deciden hacer algo 	respecto hoy. No mañana. No la siguiente semana. Sino hoy. El verdadero 	emprendedor actúa en lugar de soñar"
	},
	{
		autor: "Ralph Waldo Emerson",
		frase: "La confianza en sí mismo es el primer secreto del éxito"
	},
	{
		autor: "Steve Jobs",
		frase: "El recordar que estaré muerto pronto es la herramienta más importante 	que he encontrado para ayudarme a tomar las grandes decisiones en la vida. 	Porque casi todo — todas las expectativas externas, todo el orgullo, todo 	temor a la vergüenza o al fracaso— todas estas cosas simplemente desaparecen 	al enfrentar la muerte, dejando sólo lo que es verdaderamente importante. 	Recordar que uno va a morir es la mejor manera que conozco para evitar la 	trampa de pensar que hay algo por perder. Ya se está indefenso. No hay razón 	alguna para no seguir los consejos del corazón"
	},
	{
		autor: "Larry Page",
		frase: "Debes hacer cosas que realmente sean importantes, pero también debes 	divertirte, porque sino, no tendrás éxito"
	},
	{
		autor: "Warren Buffett",
		frase: "Te contaré el secreto para hacerte rico en Wall Street. Se codicioso 	cuando otros sean miedosos y se temeroso cuando otros sean codiciosos"
	},
	{
		autor: "Oscar Wilde",
		frase: "Cuando era joven, pensaba que el dinero era lo más importante en la 	vida. Ahora que soy mayor, sé que lo es"
	},
	{
    autor: "Walt Disney",
    frase: "Todos tus sueños pueden hacerse realidad si tienes el coraje de perseguirlos"
  },
  {
    autor: "Franklin D. Roosevelt",
    frase: "La felicidad no es la mera posesión de dinero; reside en la alegría del logro, en la emoción del esfuerzo creativo"
  },
  {
    autor: "Peter Drucker",
    frase: "El emprendimiento no es ni ciencia ni arte, es una práctica"
  },
  {
    autor: "Neil Barringham",
    frase: "La grama es más verde donde la riegas con agua"
  },
  {
    autor: "Tim Ferris",
    frase: "Piensa en grande y no escuches a quienes te dicen que no puedes hacerlo. La vida es muy corta para pensar en pequeño"
  },
  {
    autor: "Amancio Ortega",
    frase: "El crecimiento constante es el mejor mecanismo de supervivencia"
  },
  {
    autor: "Mike Ditka",
    frase: "Nunca serás un perdedor hasta que dejes de intentarlo"
  },
  {
    autor: "Thomas Edison",
    frase: "Las grandes ideas se originan en los músculos"
  },
  {
    autor: "Mark Zuckerberg",
    frase: "Construir una gran misión y un negocio van de la mano. Es verdad que la primera cosa que me entusiasma sobre lo que estamos haciendo es la misión, pero también creo, desde un principio, que hemos tenido un sano entendimiento de que tenemos que hacer ambos"
  },
  {
    autor: "Película Grandpa",
    frase: "Un verdadero perdedor es alguien que tiene tanto miedo a no ganar que no lo intenta"
  },
  {
    autor: "Benjamin Franklin",
    frase: "El tiempo es dinero"
  },
  {
    autor: "Ray Kroc",
    frase: "Si solo trabajas por dinero, nunca lo conseguirás, pero si amas lo que haces y siempre pones primero al cliente, el éxito será tuyo"
  },
  {
    autor: "Ray Kroc",
    frase: "La calidad de un líder se refleja en las normas que establece para si mismo"
  },
  {
    autor: "Warren Buffett",
    frase: "El riesgo viene de no saber lo que estás haciendo"
  },
  {
    autor: "Albert Einstein",
    frase: "Si buscas resultados distintos, no hagas siempre lo mismo"
  },
	{
		autor: "Lao-Tsé", 
		frase: "La travesía de mil millas comienza con un paso" 
	},
  { autor: "Franklin D. Roosevelt",
		frase: "El único límite a nuestros logros de mañana está en nuestras dudas de hoy" 
	},
  { autor: "Mahatma Gandi",
		frase: "Si quieres cambiar al mundo, cámbiate a ti mismo"
	},
  { autor: "Robert F. Kennedy",
		frase: "Solo aquellos que se atreven a tener grandes fracasos terminan consiguiendo grandes éxitos"
	},
  { autor: "Albert Einstein",
		frase: "Si quieres vivir una vida feliz, átala a una meta no a una persona u objeto"
	},
  { autor: "Gary Vaynerchuck",
		frase: "Por favor piensa en tu legado, porque lo estás escribiendo todos los días"
	},
  { autor: "Anónimo",
		frase: "Toma en serio tus sueños"
	},
  { autor: "Larry Ellison",
		frase: "El objetivo principal de una empresa es ganar dinero. La función primordial del Gobierno es tomar una gran parte de ese dinero y darla a los demás"
	},
  { autor: "Robert Kiyosaki",
		frase: "No es cuanto dinero ganas, sino cuando dinero ahorras, cuanto trabaja para ti y para cuantas generaciones tendrás"
	},
  { autor: "Rosa Nouchette Carey",
		frase: "Hazlo con pasión, o no lo hagas"
	},
  { autor: "Anónimo",
		frase: "La medida real de tu riqueza es cuando vales si pierdes todo tu dinero"
	},
  { autor: "Andrew Hendrixson",
		frase: "Todo aquel que haya hecho algo importante en la vida, fue disciplinado"
	},
  { autor: "John Lennon",
		frase: "La vida es lo que ocurre mientras estamos ocupados haciendo planes"
	},
  { autor: "Mary Kay Ash",
		frase: "Tenemos que tener una meta, un propósito en nuestras vidas. Si no sabes a donde estas apuntando, no tienes una meta"
	},
  { autor: "Anónimo",
		frase: "Algunas personas sueñan con el éxito, mientras otras se despiertan y trabajan para lograrlo"
	},
  { autor: "Steve Jobs",
		frase: "Las personas que están lo suficientemente locas como para pensar que pueden cambiar el mundo… son quienes lo cambian"
	},
  { autor: "Benjamin E. Mays",
		frase: "La tragedia en la vida no consiste en no alcanzar tus metas. La tragedia en la vida es no tener metas que alcanzar"
	},
  { autor: "William Feather",
		frase: "La riqueza fluye de la energía y de las ideas"
	},
  { autor: "Proverbio chino",
		frase: "El fracaso más grande es nunca haberlo intentado"
	},
  { autor: "Benjamin Franklin",
		frase: "Una inversión en conocimiento paga el mejor interés"
	},
  { autor: "Zig Ziglar",
		frase: "El pensamiento positivo te dejará hacer todo mejor que el negativo"
	},
  { autor: "Donald Trump",
		frase: "Si vas a pensar de todas formas, piensa en grande"
	},
	{
		autor: "Jonathan Swift",
		frase: "Una persona inteligente debería tener dinero en su cabeza, no en su corazón"
	},
	{
		autor: "Robert Kiyosaki",
		frase: "En los momentos de crisis solo la imaginación es más importante que el conocimiento"
	},
	{
		autor: "Zig Ziglar",
		frase: "No es lo que tu tienes, sino como usas lo que tienes lo que marca la diferencia"
	},
	{
		autor: "Steve Jobs",
		frase: "Sé un punto de referencia de calidad. Algunas personas no están acostumbradas a un ambiente donde la excelencia es aceptada"
	},
	{
		autor: "Mahatma Gandhi",
		frase: "Casi todo lo que realice será insignificante, pero es muy importante que lo haga"
	},
	{
		autor: "Albert Einstein",
		frase: "Nunca consideres el estudio como una obligación, sino como una oportunidad para penetrar en el bello y maravilloso mundo del saber"
	},
	{
		autor: "Steve Jobs",
		frase: "Tu tiempo es limitado, así que no lo desperdicies viviendo la vida de alguien más. No te dejes atrapar por el dogma, que es vivir con los resultados de los pensamientos de otras personas. No dejes que el ruido de las opiniones de otros ahogue tu voz interior. Y lo más importante: ten el coraje de seguir a tu corazón e intuición. De algún modo ellos ya saben lo que realmente quieres ser. Todo lo demás es secundario"
	},
	{
		autor: "Guy Kawasaki",
		frase: "Una buena idea es un 10% de implementación y de trabajo, el otro 90% es suerte"
	},
	{
		autor: "Anónimo",
		frase: "El arte no esta en ganar dinero, sino en mantenerlo"
	},
	{
		autor: "Bill Gates",
		frase: "Está bien celebrar el éxito pero es más importante prestar atención a las lecciones del fracaso"
	},
	{
		autor: "Mark Zuckerberg",
		frase: "Mi meta nunca fue sólo crear una empresa. Mucha gente malinterpreta eso, como si no me importaran las ganancias o el beneficio o cualquiera de esas cosas. Pero el no ser sólo otra empresa significa para mi construir algo que realmente genere un gran cambio"
	},
	{
		autor: "Confucio",
		frase: "No importa qué tan lento vayas mientras no te detengas"
	},
	{
		autor: "Víctor Hugo",
		frase: "El éxito no se logra sólo con cualidades especiales. Es sobre todo un trabajo de constancia, de método y de organización"
	},
	{
		autor: "Richard Branson",
		frase: "No te averguenzes de tus fracasos, aprende de ellos y comienza de nuevo"
	},
	{
		autor: "Sam Walton",
		frase: "Solo hay un jefe. El cliente. Y él puede despedir a cualquiera en la compañía, desde el presidente hasta el último empleado, simplemente gastándose su dinero en otra parte"
	},
	{
		autor: "Larry Page",
		frase: "Si estuviésemos motivados por el dinero, hubiésemos vendido Google y estaríamos en la playa"
	},
	{
		autor: "Simon Sinek",
		frase: "Sueña en grande. Comienza en pequeño. Pero sobretodo, comienza"
	},
	{
		autor: "Michael Jordan",
		frase: "He perdido más de nueve mil oportunidades en mi carrera. He perdido casi 300 juegos. Me han confiado 26 veces el tiro ganador y he fallado. He fracasado una y otra vez en mi vida y por eso he tenido éxito"
	},
	{
		autor: "Jhon D. Rockefeller",
		frase: "No tengas miedo de renunciar a lo bueno, para perseguir lo grandioso"
	},
	{
		autor: "Kobe Bryant",
		frase: "Si tienes miedo de fallar, seguramente fallarás"
	},
	{
		autor: "Dale Carnegie",
		frase: "Recuerda, hoy es el mañana acerca del cual te preocupabas ayer"
	},
	{
		autor: "Henry Ford",
		frase: "Pensar es el trabajo más difícil que existe. Quizá esa sea la razón por la que haya tan pocas personas que lo practiquen"
	},
	{
		autor: "Hellen Keller",
		frase: "¿Por que contentarnos con vivir a rastras cuando sentimos el anhelo de volar?"
	},
	{
		autor: "Hellen Keller",
		frase: "Ningún pesimista ha descubierto nunca el secreto de las estrellas, o navegado hacia una tierra sin descubrir, o abierto una nueva esperanza en el corazón humano"
	},
	{
		autor: "Mary Kay Ash",
		frase: "Puedes tener cualquier cosa de este mundo que quieras, si lo quieres lo suficiente como para pagar su precio"
	},
	{
		autor: "Johann Wolfgang von Goethe",
		frase: "Mucha gente no cuida su dinero hasta que casi lo gastan y otros hacen lo mismo con su tiempo"
	},
	{
		autor: "Albert Schweitzer",
		frase: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito. Si amas lo que estas haciendo serás exitoso"
	},
	{
		autor: "Robin Sharma",
		frase: "No puedes vivir 75 veces el mismo año y luego llamarlo vida"
	},
	{
		autor: "Phil Knight",
		frase: "Tienes que saber lo que va a pasar si quieres seguir estando un paso por delante"
	},
	{
		autor: "Mary Kay Ash",
		frase: "No te limites a ti mismo. Muchas personas se limitan a lo que piensan que pueden hacer. Puedes ir tan lejos como tu mente te permita. Puedes conseguir lo que creas, recuérdalo"
	},
	{
		autor: "Donald Trump",
		frase: "La experiencia me ha enseñado unas cuantas cosas. Una es escuchar mi intuición, no importa como suene las cosas en un papel. La segunda es que por lo general eres mejor haciendo lo que sabes. Y la tercera es que tu mejor inversión puede ser aquella que no haces"
	},
	{
		autor: "Pep Guardiola",
		frase: "Lo que te hace crecer es la derrota, el error"
	},
	{
		autor: "M.Scott Peck",
		frase: "Hasta que no te valores a ti mismo no valoraras tu tiempo. Y hasta que no valores tu tiempo no harás nada con él"
	},
	{
		autor: "Jason Fried",
		frase: "No tiene nada de malo ser pequeño. Puedes hacer grandes cosas con un equipo así"
	},
	{
		autor: "Matt Mullenweg",
		frase: "No tengo grandes ideas. A veces tengo pequeñas ideas que parecen funcionar"
	},
	{
		autor: "Oprah Winfrey",
		frase: "Cada vez que defines en lo que quieres creer, eres el primero en escucharlo. Es un mensaje a ti y a los demás sobre lo que piensas que es posible. No pongas un techo sobre ti mismo"
	},
	{
		autor: "Tom Kelley",
		frase: "Fracasa seguido para que puedas tener éxito pronto"
	},
	{
		autor: "Steve Jobs",
		frase: "Mis cosas favoritas de la vida no cuestan dinero. Esta claro que el recurso más preciado que tenemos es el tiempo"
	},
	{
		autor: "Anónimo",
		frase: "Sentir rabia es como tomar veneno y esperar que muera la otra persona"
	},
	{
		autor: "Barack Obama",
		frase: "El dinero no es la única respuesta, pero marca una diferencia"
	},
	{
		autor: "Herman Melville",
		frase: "Es mejor fracasar siendo original que tener éxito imitando"
	},
	{
		autor: "Bill Gates",
		frase: "Mi ambición ha sido siempre hacer realizables los sueños"
	},
	{
		autor: "Napoleon Hill",
		frase: "El hombre que hace más de lo que se le paga, pronto ganará más de lo que hace"
	},
	{
		autor: "Zig Ziglar",
		frase: "Si puedes soñarlo, puedes lograrlo"
	},
	{
		autor: "Billie Jean King",
		frase: "Los campeones se mantienen jugando hasta que lo hacen bien"
	},
	{
		autor: "Albert Einstein",
		frase: "Para que cualquier cosa suceda, primero hay que hacer algo"
	},
	{
		autor: "Herbert Bayard Swope",
		frase: "No puedo darte una fórmula segura para el éxito, pero puedo darte una fórmula segura para el fracaso: Intenta complacer a todos, todo el tiempo"
	},
	{
		autor: "Benjamin Franklin",
		frase: "Rico no es el que tiene riqueza, sino el que la disfruta"
	},
	{
		autor: "Dale Carnegie",
		frase: "Es posible ganar más amigos en dos meses interesándonos por los demás que en dos años tratando que los demás se interesen por nosotros"
	},
	{
		autor: "Seth Godin",
		frase: "En vez de pensar cuando serán tus próximas vacaciones deberías construir una vida de la cual no quieras escapar"
	},
	{
		autor: "Carlos Slim",
		frase: "Cuando hay una crisis, es cuando algunos están interesados en salir y nosotros estamos interesados en entrar"
	},
	{
		autor: "Jim Rohn",
		frase: "Si no estás dispuesto a arriesgar lo inusual, tendrás que acostumbrarte a lo ordinario"
	},
	{
		autor: "Henry David Thoreau",
		frase: "La riqueza es la habilidad para experimentar totalmente la vida"
	},
	{
		autor: "T. Harv Eker",
		frase: "Deja de esperar a que sea viernes, que sea verano, o que alguien te ame de por vida. La felicidad se alcanza cuando dejas de esperar y aprovechas al máximo el presente"
	},
	{
		autor: "John D. Rockefeller Jr.",
		frase: "Siempre intenté convertir cada desastre en una oportunidad"
	},
	{
		autor: "Fred Shero",
		frase: "El éxito no es el resultado de una combustión espontánea. Tú tienes que encenderte primero"
	},
	{
		autor: "David Brinkley",
		frase: "Un hombre exitoso es aquel capaz de construir fundaciones firmes con los ladrillos que le tiraron otros"
	},
	{
		autor: "Ray Goforth",
		frase: "Hay dos tipos de personas que te van a decir que tú no puedes aportar una diferencia a este mundo: aquellos que tienen miedo de intentarlo y aquellos que tienen miedo que seas tú el que tenga éxito"
	},
	{
		autor: "Napoleón",
		frase: "Si quieres que algo sea hecho, nombra un responsable. Si quieres que algo se demore eternamente, nombra una comisión"
	},
	{
		autor: "Larry Page",
		frase: "Casi no fundo Google porque estaba preocupado por el riesgo y por dejar mi programa de Doctorado"
	},
	{
		autor: "Albert Einstein",
		frase: "La creatividad es la inteligencia divirtiéndose"
	},
	{
		autor: "Henry Ford",
		frase: "Si el dinero es tu esperanza para la independencia, nunca la tendrás. La única seguridad real que un hombre tendrá en este mundo es una reserva de conocimiento, experiencia y habilidad"
	},
	{
		autor: "Coco Chanel",
		frase: "Hay gente que tiene dinero y hay gente que es rica"
	},
	{
		autor: "Jeff Bezos",
		frase: "Hay dos tipos de empresas: las que trabajan para tratar de cobrar más, y las que trabajan para cobrar menos. Nosotros seremos de la segunda clase"
	},
	{
		autor: "Wayne Dyer",
		frase: "Eres responsable por los pensamientos que albergas en tu mente en cualquier momento. Tienes la capacidad de pensar lo que desees. Así que inclusive todas tus actitudes y comportamientos negativos y autodestructivos se han originado en la manera que has elegido pensar"
	},
	{
		autor: "Alvin Toffler",
		frase: "El cambio no solamente es necesario en la vida, es la vida en sí misma"
	},
	{
		autor: "Wayne Dyer",
		frase: "Cualquier cosa que quieras, la puedes alcanzar si vas a por ello"
	},
	{
		autor: "Napoleón",
		frase: "Un líder es un negociador de esperanzas"
	},
	{
		autor: "Walt Disney",
		frase: "No duermas para descansar, duerme para soñar. Porque los sueños están para cumplirse"
	},
	{
		autor: "Proverbio chino",
		frase: "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora"
	},
	{
		autor: "Richard Branson",
		frase: "Un negocio es simplemente una idea para mejorar la vida de otras personas"
	},
	{
		autor: "Henry Ford",
		frase: "No es el empleador el que paga el salario. Los empleadores solo manejan el dinero. Es el cliente el que paga el salario"
	},
	{
		autor: "Mark Twain",
		frase: "Mantente alejado de aquellas personas que tratan de menospreciar tus ambiciones. Las personas pequeñas siempre lo hacen, pero los verdaderamente grandes hacen sentirte que tú también puedes ser grande"
	},
	{
		autor: "Mahatma Gandhi",
		frase: "Sé el cambio que quieres ver en el mundo"
	},
	{
		autor: "Kim Garst",
		frase: "Si no valoras tu tiempo, tampoco lo harán otros. Deja de regalar tu tiempo y talento. Valora lo que sabes y comienza a cobrar por ello"
	},
	{
		autor: "David Ogilvy",
		frase: "En el mundo moderno de los negocios, es inútil ser un pensador creativo y original a menos que también vendas lo que creas"
	},
	{
		autor: "Abraham Lincoln",
		frase: "Destruyo mis enemigos cuando los convierto en mis amigos"
	},
	{
		autor: "James Madison",
		frase: "La circulación de confianza es mejor que la circulación de dinero"
	},
	{
		autor: "Russell Simmons",
		frase: "He sido bendecido de encontrar gente más inteligente que yo; ellos me ayudan a ejecutar la visión que tengo"
	},
	{
		autor: "Howard Ruff",
		frase: "No estaba lloviendo cuando Noé construyó su arca"
	},
	{
		autor: "Maya Angelou",
		frase: "Solo puedes realizarte completamente en algo que amas. Que tu meta no sea ganar dinero. En su lugar, persigue cosas que ames hacer y hazlas tan bien que la gente no pueda quitar sus ojos de ti"
	},
	{
		autor: "Dwight E. Eisenhower",
		frase: "En las batallas te das cuenta que los planes son inservibles, pero hacer planes indispensable"
	},
	{
		autor: "Enzo Ferrari",
		frase: "Ningún hombre será el mejor si no tiene fuego en la sangre"
	},
	{
		autor: "Jeff Bezos",
		frase: "Uno de los grandes errores que comete la gente es tratar de forzar su interés. Tú no eliges tus pasiones; tus pasiones te eligen a ti"
	},
	{
		autor: "Gabriel García Márquez",
		frase: "No, no soy rico. Soy un hombre pobre con dinero, lo que no es lo mismo"
	},
	{
		autor: "Vicki Robin",
		frase: "Si vives para tenerlo todo, lo que tienes nunca es suficiente"
	},
	{
		autor: "Richard Branson",
		frase: "Si no sueñas, no vas a lograr nada"
	},
	{
		autor: "Ray Kroc",
		frase: "Es fácil tener principios cuando eres rico. Lo más importante es tener principios cuando eres pobre"
	},
	{
		autor: "Carlos Slim",
		frase: "Si estas en los negocios, necesitas entender el ambiente. Necesitas tener una visión del futuro y necesitas conocer el pasado"
	},
	{
		autor: "Confucio",
		frase: "Exígete mucho a ti mismo y espera poco de los demás, así te ahorrarás disgustos"
	},
	{
		autor: "Wess Roberts",
		frase: "Cualquiera que no este cometiendo errores es que no está intentándolo lo suficiente"
	},
	{
		autor: "Ziad K. Abdelnour",
		frase: "No te disculpes por tener altos estándares. Las personas que realmente quieren estar en tu vida alcanzarán este nivel"
	},
	{
		autor: "Babe Ruth",
		frase: "Es difícil derrotar a una persona que nunca se rinde"
	},
	{
		autor: "Oprah Winfrey",
		frase: "Tú sabes que estás en el camino del éxito si estás dispuesto a hacer tu trabajo aun cuando no te paguen"
	},
	{
		autor: "Woody Allen",
		frase: "El 80% del éxito se basa simplemente en insistir"
	},
	{
		autor: "Soichiro Honda",
		frase: "El valor de la vida puede ser medido por las veces en las que tu alma ha estado muy agitada"
	},
	{
		autor: "Phil Knight",
		frase: "No basta con hacer productos buenos. Tienes que hacer que la gente se entere de lo que estás haciendo"
	},
	{
		autor: "Jim Rohn",
		frase: "El dinero normalmente se atrae, no se persigue"
	},
	{
		autor: "George Bernard Shaw",
		frase: "Solo triunfa en el mundo quien se levanta y busca a las circunstancias y las crea si no las encuentra"
	},
	{
		autor: "Richard Branson",
		frase: "El valiente puede no vivir para siempre, pero el cauteloso no vive en absoluto"
	},
	{
		autor: "Donald Trump",
		frase: "Solo trabajo con los mejores, no se trata de las mejores hojas de vida sino de la actitud correcta"
	},
	{
		autor: "Sam Walton",
		frase: "Las altas expectativas son la clave de todo"
	},
	{
		autor: "Henry Ford",
		frase: "Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento"
	},
	{
		autor: "Erich Fromm",
		frase: "El que tiene mucho no es rico, sino el que da mucho"
	},
	{
		autor: "Colin Powell",
		frase: "No hay secretos para el éxito. Este se alcanza preparándose, trabajando arduamente y aprendiendo del fracaso"
	},
	{
		autor: "Anónimo",
		frase: "Si el plan no funciona, cámbialo, pero nunca cambies tu objetivo"
	},
	{
		autor: "Napoleón",
		frase: "Lo imposible es el fantasma de los tímidos y el refugio de los cobardes"
	},
	{
		autor: "Guy Kawasaki",
		frase: "Las ideas son fáciles, implementarlas es lo difícil"
	},
	{
		autor: "Elon Musk",
		frase: "Presta atención al feedback negativo y solicítalo, particularmente de los amigos. Difícilmente alguien hace eso y es de mucha ayuda"
	},
	{
		autor: "Robert Kiyosaki",
		frase: "El fracaso derrota a los perdedores e inspira a los ganadores"
	},
	{
		autor: "Seth Godin",
		frase: "Los medios quieren éxitos de la noche a la mañana. Ignóralos. Ignora también a los inversionistas que quieren tácticas probadas y resultados instantáneos y previsibles. Escucha en cambio a tus clientes, a tu propia visión y haz algo que dure mucho tiempo."
	},
	{
		autor: "Michael Gerber",
		frase: "Un emprendedor ve oportunidades allá donde otros solo ven problemas."
	},
	{
		autor: "Jeff Bezos",
		frase: "Es necesario anticipar un cierto grado de fracaso."
	},
	{
		autor: "Bill Gates",
		frase: "La vida no es justa, acostúmbrate a ello."
	},
	{
		autor: "Walt Disney",
		frase: "El dinero es algo que entiendo vagamente y pienso en él sólo cuando no lo tengo para financiar mis proyectos."
	},
	{
		autor: "Henry Ford",
		frase: "Son muchas las manos y los corazones que contribuyen al éxito de una persona."
	},
	{
		autor: "Phil Knight",
		frase: "Respeta las reglas del juego, pero sé feroz."
	},
	{
		autor: "Vidal Sassoon",
		frase: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario."
	},
	{
		autor: "Walt Disney",
		frase: "La forma de empezar es dejar de hablar y empezar a hacerlo."
	},
	{
		autor: "Colin Davis",
		frase: "El camino hacia el éxito y el camino hacia el fracaso son muy parecidos. Solo los diferencia el final."
	},
	{
		autor: "Tolstoi",
		frase: "El secreto de la felicidad no es hacer siempre lo que se quiere sino querer siempre lo que se hace."
	},
	{
		autor: "Mary Kay Ash",
		frase: "El peor problema de contaminación que encaramos hoy en día es la negatividad."
	},
	{
		autor: "Thich Nhat Hanh",
		frase: "No hay camino a la felicidad. La felicidad es el camino."
	},
	{
		autor: "George Bernard Shaw",
		frase: "La imaginación es el principio de la creación. Imaginamos lo que queremos, creamos un profundo deseo por aquello que imaginamos y finalmente, creamos aquello que hemos deseado"
	},
	{
		autor: "Henry David Thoreau",
		frase: "Si uno avanza confiadamente en la dirección de sus sueños y deseos para llevar la vida que ha imaginado, se encontrará con un éxito inesperado"
	},
	{
		autor: "Lucio Anneo Séneca",
		frase: "No nos atrevemos a muchas cosas porque son difíciles, pero son difíciles porque no nos atrevemos a hacerlas"
	},
	{
		autor: "Goethe",
		frase: "Todo aquello que puedas o sueñes hacer, comiénzalo. La audacia contiene en si misma genio, poder y magia"
	},
	{
		autor: "Nathan W. Morris",
		frase: "Cada vez que pides prestado dinero, estas robando dinero a tu futuro"
	},
	{
		autor: "Henry David Thoreau",
		frase: "El éxito llega normalmente a quienes están demasiado ocupados para buscarlo"
	},
	{
		autor: "Enzo Ferrari",
		frase: "Nunca me he tenido por ingeniero o inventor, solamente me considero un promotor y agitador de ideas"
	},
	{
		autor: "Bruce Lee",
		frase: "El guerrero exitoso es un hombre común, con un foco similar al de un laser"
	},
	{
		autor: "Vince Lombardi",
		frase: "El precio del éxito es trabajar duro y la determinación de que, sin importar si perdiste o ganaste, diste lo mejor de ti mismo en el proyecto"
	},
	{
		autor: "Scott Belsky",
		frase: "No es sobre las ideas. Sino sobre hacer que éstas se vuelvan realidad"
	},
	{
		autor: "Somerset Maugham",
		frase: "Lo más curioso acerca del juego de la vida es que cuando nos rehusamos a conformarnos con segundos lugares y decidimos salir tras lo mejor de lo mejor, generalmente lo obtenemos"
	},
	{
		autor: "Marc Benioff",
		frase: "El secreto para contratar a los mejores es este: busca personas que quieran cambiar el mundo"
	},
	{
		autor: "Bill Gates",
		frase: "Tus clientes más infelices son tu fuente de aprendizaje más grande"
	},
	{
		autor: "Aristóteles",
		frase: "El placer en el trabajo lleva a la perfección de la obra"
	},
	{
		autor: "Christopher Reeve",
		frase: "Muchos de nuestros sueños parecen al principio imposibles, luego pueden parecer improbables, y luego, cuando nos comprometemos firmemente, se vuelven inevitables"
	},
	{
		autor: "Sanjeev Saxena",
		frase: "Si no sabes qué hacer con tu vida, haz algo que salve vidas. El mundo está lleno de gente con necesidades, sé parte de su vida y llena esa necesidad"
	},
	{
		autor: "Howard Schultz",
		frase: "Crece con disciplina. Balancea tu intuición con rigor. Innova alrededor del núcleo. No aceptes el status quo. Encuentra nuevas formas de ver. Nunca esperes la bala de plata. Ensucia tus manos. Escucha con empatía y comunica con transparencia"
	}
]

export default frasesFamosas;