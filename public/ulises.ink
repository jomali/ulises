# title: Ulises
# author: J. Francisco Lisaso

VAR money = 250

-> ElPacto

/** Functions */

=== function abs(value) ===
{
    - value < 0:
        ~ return -value
    - else:
        ~ return value
}

=== function modifyMoney(amount) ===
<strong>Has {amount < 0: perdido|ganado} {abs(amount)} talentos.</strong>
~ money += amount
~ return true

/** Contents */

=== ElPacto ===
Los cincuenta duros.

La furgoneta está aparcada en las afueras del pueblo, junto a un edificio de ladrillos con todas sus ventanas rotas. Pasan varios minutos de las dos de la madrugada. La noche no tiene luna y la oscuridad es espesa. Viscosa. No se oye nada más que los susurros intranquilos de tus compañeros y las instrucciones cortantes pero en voz queda de vuestros guías.

Cincuenta duros, repite, tendiéndote una mano.

* [—Eran diez talentos] -> ElPacto.a
* [Dar el dinero # 50] -> ElPacto.b

= a
Habíamos quedado… el trato eran diez talentos.

Bueno, el trato <i>ahora</i> son cincuenta talentos. Si quieres subir, pagas. Si no, te das la vuelta y te vuelves por donde has venido.

Miras a tu espalda, en dirección al pueblo que duerme a un centenar de metros. Y más allá. Hacia la vida que dejas atrás, sepultada tras la caída de la noche oscura.

Sabes perfectamente que ahora mismo no puedes regresar allí, por mucho que lo desearas.

* [Dar el dinero # 50] -> ElPacto.c

= b
Este no era el trato, pero poco importa. No es que puedas darte la vuelta y volver por donde has venido. Aunque desearas hacerlo. Simplemente no puedes.

Y ellos lo saben perfectamente.

Al menos la oscuridad te permite no ver su sonrisa cuando le entregas el dinero.

~ modifyMoney(-50)

* [Subir a la furgoneta] -> DespedidaDeLosFeacios

= c
Le das el dinero que te pide y subes a la furgoneta.

~ modifyMoney(-50)

* [Os ponéis en marcha] -> DespedidaDeLosFeacios



=== DespedidaDeLosFeacios ===
@cleanScreen
Durante horas viajáis hacinados en la parte de atrás de la furgoneta, atravesando carreteras mal asfaltadas y caminos de tierra apenas transitados. En total sois once personas, y otros tantos que acompañan en un segundo vehículo. Hombres y mujeres de mirada recelosa y largos silencios.

Finalmente las furgonetas se detienen y tenéis ocasión de bajar y estirar las piernas.

El paisaje que os rodea es una desolación de piedra y de arena y de polvo. Un árbol raquítico, a lo lejos, como único accidente.

* [—¿Dónde estamos?]

- ¿Por qué hemos parado? ¿Dónde estamos?

Uno de vuestros guías se os acerca y os dice que se está acabando la gasolina. Si queréis continuar tenéis que pagar para que vayamos a por más.

Posiblemente se trate de una farsa. Pero estáis en medio de ninguna parte.

El sol abrasador sobre vuestras cabezas.

Asustados, tus compañeros ceden a la extorsión y pagan.

Tú, te señala. Y te das cuenta de que se trata del mismo tipo con el que hablaste en el pueblo. <i>Cincuenta</i> duros.

* [—Ya te di todo lo que tenía] -> DespedidaDeLosFeacios.b
* [—Solo me queda esto # 10] -> DespedidaDeLosFeacios.c
* [Dar el dinero # 50] -> DespedidaDeLosFeacios.d

= b
Ya te di antes todo lo q- un puñetazo salvaje interrumpe tu mentira y te hace caer al suelo.

No tenemos todo el día. El dinero.

* [—Solo me queda esto # 10] -> DespedidaDeLosFeacios.e
* [Ceder a la extorsión # 50] -> DespedidaDeLosFeacios.d

= c
Solo… esto es todo lo que tengo, mientes, ofreciéndole diez talentos.

El hombre te mira fijamente a los ojos durante unos segundos. Pero al cabo coge el dinero de tu mano y se vuelve con sus compañeros.

~ modifyMoney(-10)

* [Respirar hondo] -> DespedidaDeLosFeacios.f

= d
Luchando por contener la rabia pagas lo que se te exige.

~ modifyMoney(-50)

* [Continuar] -> DespedidaDeLosFeacios.f

= e
Con el sabor de la sangre en la boca y lágrimas en los ojos, le ofreces diez talentos.

Esto… esto es todo lo que tengo.

El hombre te lanza de nuevo al suelo de una patada, ante la mirada aterrorizada de los demás. Nadie se atreve a mover un músculo mientras te arranca la camisa, destrozándola. Te arranca después los pantalones y vacía los contenidos de los bolsillos en el suelo. Y coge todo el dinero que encuentra dentro de tu cartera.

Tienes suerte, en cualquier caso. Consigues conservar a salvo los últimos billetes escondidos bajo la suela interior de los zapatos.

~ modifyMoney(-100)

* [Secarte las lágrimas] -> DespedidaDeLosFeacios.f

= f
Y, sin más, se suben a los dos vehículos y parten, abandonándoos allí.

No piensan regresar.

Alguien asegura que conoce el camino, que estáis a apenas unos días de la frontera. Que podéis llegar andando.

Todavía dudáis durante algunos minutos, indecisos, pero nadie es capaz de proponer una idea mejor.

* [Así que echáis a andar] -> MendigandoEntrePretendientes



=== MendigandoEntrePretendientes ===
@cleanScreen
Camináis lentamente pero a ritmo constante sobre el terreno irregular. Ignoráis dónde os encontráis exactamente, pero confiáis en la promesa de que la frontera queda en algún lugar, no demasiado lejos, hacia el norte. Así que esa es la dirección que seguís.

Piedras y polvo hasta donde alcanza la vista.

Siempre hacia el norte.

Un calor que agrieta los labios y seca la garganta.

* [Seguir andando. Al norte]

-
// * [Examinar los cadáveres] -> END
@cleanScreen
Una de las personas que encabezan la marcha da la voz. Han visto algo.

Al ir acercándoos al lugar, el silencio que os lleva acompañando durante todo el viaje va ganando peso. Hasta hacerse atronador.

Semienterrados en la arena descubrís los cadáveres de dos personas.

Una misma sombra cruza vuestras caras. Un mismo pensamiento común, compartido: este puede ser el destino que nos aguarde a todos nosotros.

* [Seguir andando] -> ElPalacioDeAlcinoo



=== ElPalacioDeAlcinoo ===
@cleanScreen
Pasáis la noche resguardados en unas casas de barro. Refugio de algún grupo de pastores nómadas. Tumbados en el suelo, pegados unos a los otros en el espacio reducido. Sin poder siquiera estirar las piernas. Duermes profundamente.

Los rayos del sol te despiertan temprano en la mañana. Alguien saca algo de comida y agua de una mochila y se ofrece a compartirla con los demás. Siempre y cuando le paguéis por ello.

* [Pagar por el desayuno # 10]
* [Ponerse en camino] -> DescensoAlHades

-
Abrís unas latas de comida envasada. Os repartís un poco de pan duro.

Os ponéis en camino.

~ modifyMoney(-10)

* [Al norte] -> DescensoAlHades



=== LasSirenas ===
// TODO
Una humareda de polvo en el horizonte. Por culpa del cansancio y del calor aún tardáis un momento en comprender loque ocurre; una furgoneta se acerca a vosotros. ¡Estáis salvados!

No tardáis en descubrir el error. El vehículo se detiene a unos diez metros de donde os encontráis y salen tres tuaregs de aspecto hosco, portando fusiles de asalto. Os exigen la comida y el agua que os queda. Uno de tus compañeros se opone. Sin inmutarse le disparan en el estómago antes de huir con vuestras últimas provisiones.

* [Continuar] -> DescensoAlHades



=== DescensoAlHades ===
@cleanScreen
Camináis en fila india bajo un sol inclemente, semidesnudos, hostigados a cada paso por la sed y el hambre.

No todo el mundo es capaz de resistirlo. Tres cuerpos se desploman inconscientes en la arena.

Los demás seguís caminando.

* [Al norte] -> Itaca



=== LaUltimaCena ===
// TODO
Dos dromedarios yacían muertos. Nunca en mi vida había sido tan cierto aquello de que la necesidad agudiza el ingenio; gracias a ellos nuestra esperanza encontraba una tregua ante tanto desasosiego. Uno de los integrantes del grupo tenía una navaja con la que rajamos el estómago de ambos animales para conseguir agua. También aprovechamos sus cuerpos y pelaje para entrar en calor en medio de la fría noche desértica. Alrededor de ellos fuimos ocupando los diversos huecos que quedaban y así conseguimos conciliar el sueño.
-> END



=== Itaca ===
@cleanScreen
La travesía por el desierto llega a su fin de un modo abrupto y casi por sorpresa. Lo conseguisteis, estáis aquí, pero nadie lo celebra. No todavía.

Tres vallas dan forma física a la línea imaginaria que separa los dos países. Tres vallas que no dejan indiferente a nadie. Tres vallas que imponen y encogen el estómago hasta hacerle a uno vomitar y uno vomita aunque no sea más que bilis porque ya no queda otra cosa que expulsar. Uno vomita porque sabe que en esas tres vallas se han perdido innumerables vidas.

<i>Cada vez que se traza una frontera alguien se queda fuera.</i>

Únicamente hay dos formas de cruzar al otro lado. Pagando un salvoconducto en el control fronterizo, si tienes dinero. O arriesgándote e intentar el salto.

Una suerte asentamiento improvisado y caótico, con varios cientos de tiendas, se ha levantado de vuestro lado de la frontera para todos aquellos que no pueden pagar el soborno y están tratando de decidirse entre arriesgarlo todo o rendirse y emprender el camino de vuelta.

- (frente_a_la_valla)
* [Comprar pase al otro lado # 200] -> END
* [Observar control fronterizo] -> Itaca.control_fronterizo
* [Buscar un lugar en el campamento] -> Itaca.campamento

= control_fronterizo
Tres aberturas atraviesan las tres vallas. Y entre ellas se levanta el control fronterizo.

Guardias con uniforme militar y armados con rifles automáticos.

Furgones blindados.

Torres de observación.

Alambrada de espino y barreras cortando el paso al tráfico.

-> Itaca.frente_a_la_valla

= campamento
El campamento está conformado por precarias tiendas construidas con cartones y plásticos. La gente anda y duerme entre montones de desperdicios. Restos de comida. Letrinas improvisadas. Llanto enérgico de los niños pequeños. Llanto apagado de los adultos.

Absolutamente agotado buscas tu propio trozo de suelo entre la basura.

Siempre bajo la presencia desafiante de las vallas coronadas por las concertinas.

* [Cerrar los ojos]

-
@cleanScreen
Despiertas sobresaltado por una cacofonía de gritos.

Hay hombres y mujeres corriendo a tu alrededor. Intentas incorporarte y sacudirte el sueño de los ojos mientras observas a una muchedumbre que se ha arremolinado a los pies de la primera de las vallas. Y aunque los estás viendo con tus propios ojos, aún tardas un instante en comprender lo que ocurre.

Están saltando. Decenas de ellos. Están saltando.

Si vas a intentarlo tiene que ser ahora.

// TODO - dar alternativa de emprender el camino de vuelta
* [Saltar la valla]

-
Corres y trepas y gritas junto a los demás. Completamente embotado por la adrenalina y por el terror. El estallido de disparos cerca. Focos de luz cegadora. Tú corres y trepas y gritas.

Y de pronto notas un golpe terrible en las rodillas y caes rodando en el suelo. Alguien se abalanza sobre ti y te inmovilizan por la fuerza.

No te resistes. No intentas zafarte. Ya no gritas.

No tienes más fuerzas.

* [Cerrar los ojos]

-
@cleanScreen
Una celda oscura.

Hedor a orina y a sudor.

Otros cuerpos compartiendo contigo el reducido espacio.

* [Cerrar los ojos]

-
Los alaridos de alguien, en alguna parte, amortiguados por las paredes.

* [Cerrar los ojos]

-
@cleanScreen
Un guarda te saca de la celda y te conduce a solas por un estrecho pasillo. Aterrorizado piensas en el dinero que te queda, escondido bajo la suela del zapato. Quizá… quizá sea suficiente para salir de aquí.

Quizá.

* [Comprar documentación # 200] -> END
* [Sobornar al guardia # {money}] -> Itaca.soborno
* [Seguirlo en silencio] -> Itaca.seguir_indicaciones

= soborno
Tengo dinero. Puedo pagar.

Apenas eres capaz de articular la frase, pero el guardia cambia el paso y os hace apartaros a un lado. Te estudia un momento, comprueba que no hay nadie más a la vista, y finalmente asiente y te asegura ser capaz de ayudarte a salir del lío en el que te has metido.

Le das todo el dinero que te queda.

Él asiente con la cabeza y señala hacia el final del pasillo.

Sin correr. La última puerta, a la derecha.

~ modifyMoney(-money)

* [Seguir sus indicaciones] -> Itaca.seguir_indicaciones

= seguir_indicaciones
@cleanScreen
Quítate la ropa.

Te encuentras en una habitación con cuatro hombres vestidos con uniforme de soldado. El que da la orden se arremanga la camisa y se coloca un guante negro de látex.

Lloras de miedo y de rabia y de impotencia. Y obedeces.

* [Comprar documentación # 200] -> END
* [Cerrar los ojos # money]

-
@cleanScreen
De nuevo en la celda.

Uno de tus compañeros te abraza y llora contigo en silencio.

{ money > 0: 
    ~ modifyMoney(-money)
}

* [Cerrar los ojos]

-
@cleanScreen
Os suben en un furgón blindado.

Apenas distingues el paisaje tras las ventanillas por culpa de la inflamación de la cara, pero sí alcanzas a ver la sombra de las tres horribles vallas. Y los restos desperdigados del campamento, ahora destruido y abandonado.

Conducen solo unos pocos kilómetros antes de detener el vehículo. Os sacan del furgón sin siquiera dirigiros la palabra. Arrancan y se marchan y vosotros os quedáis aquí, solos, en el desierto.

* [Emprender el camino de vuelta]

-
¿Qué otra cosa puedes hacer?

Echas a andar.

-> END
