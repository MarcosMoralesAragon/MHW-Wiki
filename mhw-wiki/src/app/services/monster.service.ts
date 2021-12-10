import { Injectable } from '@angular/core';
import { Monstruo } from '../models/monstruo';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

    monstruos : Monstruo[] = [{
        id : 0,
        nombre : "Anjanath",
        descripcion : "El Anjanath se asemeja al Deviljho,pues ambos están basados en un tiranosaurio. Su piel es rosada, y la parte superior de su cuerpo está cubierto de un plumaje oscuro. Su boca está armada con grandes colmillos que sobresalen desde la mandíbula inferior, y su nariz puede inflarse como un globo para poder captar mejor los olores. Cuando se enfurece, puede extender dos velas espinosas sobre su lomo para intimidar a sus enemigos.El Anjanath es uno de los depredadores que domina el Bosque Primigenio, donde rivaliza con Rathalos, y también puede encontrarse en el Yermo de Agujas. Se alimenta principalmente de Aptonoth, a los que caza usando su agudo olfato. El Anjanath marca su territorio dejando su saliva pegajosa sobre árboles y rocas para mantener a los intrusos a raya.El Anjanath puede atacar con sus enormes fauces, arremetiendo con su cuerpo o dando coletazos, no obstante, cuando se enfurece es capaz de utilizar fuego para atacar.De forma similar al Glavenus, un órgano en su garganta le permite imbuir su boca en llamas, pudiendo luego expulsar llamaradas para atacar o dar mordiscos",
        stats : [0,3,2,2,1,2,2,2,1,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Anjanath.webp",
        imagen: "../../assets/img/monsters/monster-big/Anjanath.webp"
    },{
        id : 1,
        nombre : "Barroth",
        descripcion : "Semejante a un gran dinosaurio, el Barroth posee una espesa concha de color marrón anaranjado cuando no está recubierto de barro. Sus garras son toscas y gruesas y sus patas son anchas para no hundirse en el barro. Su característica más destacable es su gran cresta craneal en forma de pala, llamada corona, sus fosas nasales están encima y le permiten respirar cuando está enterrado.El Barroth habita en los Llanos Arenosos, pasando la mayor parte del tiempo en los barrizales, y atacará a cualquier intruso que perturbe su territorio. El Barroth es insectívoro, se alimenta de los Altaroth que encuentra al derribar sus hormigueros",
        stats: [2,2,0,2,1,3,2,3,3,1],
        icono: "../../assets/img/monsters/monster-icon/Icono_Barroth.webp",
        imagen: "../../assets/img/monsters/monster-big/Barroth.webp"
    },{
        id : 2,
        nombre : "Bazelgeuse",
        descripcion : "El Bazelgeuse es un monstruo dotado de alas de gran envergadura parecidas a las de un avión y caracterizado por su lomo cubierto de enormes escamas en mosaico. Su cabeza de color oscuro es relativamente pequeña y su hocico es achatado, mientras que su cola acaba en una especie de aguijón. Su rasgo principal son las numerosas escamas en forma de racimo que cuelgan de su garganta y su cola, y que funcionan como granadas que estallan al caer al suelo, mientras que las escamas de su garganta también toman una forma parecida a la melena de un león. De vez en cuando, estas escamas se tornan naranjas y sus venas brillan de color rojo.Este Wyvern Volador invasivo puede encontrarse a lo largo de todo el Nuevo Mundo. Muy territorial, atacará a cualquier cosa, monstruo o cazador, que encuentre en su territorio. Es conocido por cazar lanzando escamas explosivas mientras sobrevuela a su presa.La coraza superior del Bazelgeuse es especialmente dura para protegerlo de impactos al embestir contra sus enemigos desde tierra o desde el aire. Su principal habilidad es la de soltar escamas explosivas que se incrustan en la tierra, volviéndose minas que detonan al acercarse. Sus escamas están compuestas por una mezcla de fluidos corporales y cuando la bestia se enfurece se vuelven más inestables, explotando justo tras caer",
        stats :[0,1,3,2,2,2,2,2,1,1],
        icono: "../../assets/img/monsters/monster-icon/Icono_Bazelgeuse.webp",
        imagen: "../../assets/img/monsters/monster-big/Bazelgeuse.webp"
    },{
        id: 3,
        nombre : "Deviljho",
        descripcion : "El Deviljho se asemeja a un gigantesco tiranosaurio, con poderosas patas traseras y patas delanteras diminutas. Su piel es de color verdoso, con varias filas de escamas amarillas recorriendo su cuerpo. Posee un cuerpo robusto y una cola ancha, y una cabeza bastante pequeña cuyas fauces está armadas de dientes que crecen hasta en la barbilla.El Deviljho es un monstruo nómada que vaga por todas partes y puede aparecer en cualquier lugar. Su metabolismo elevado le obliga a estar constantemente en busca de presas, y su apetito puede llegar a provocar la extinción de especies enteras. El Deviljho es muy agresivo e intentará devorar a cualquier criatura que encuentre",
        stats : [2,2,3,1,3,2,2,2,2,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Deviljho.webp",
        imagen: "../../assets/img/monsters/monster-big/Deviljho.webp"
    },{
        id : 4,
        nombre : "Diablos",
        descripcion : "Es un robusto wyvern de gran tamaño, de color marrón claro, cubierto con unas conchas muy densas, duras y pesadas. Sus alas están más adaptadas a excavar que a volar, con unas fuertes garras. Su característica más notable son los dos grandes cuernos retorcidos de su cabeza, que se parecen mucho a los cuernos de un toro, aunque a veces les puede faltar uno, además poseen dos grandes colmillos y un pequeño collarín dentado. Su cola termina en una pesada maza.Junto con su pariente Monoblos, los Diablos son conocidos por ser Wyverns extremadamente agresivos que atacan a cualquier criatura que traspase su territorio. Habitan únicamente en las zonas arenosas de los desiertos, donde se alimentan de cactus.",
        stats : [0,2,1,3,1,2,2,3,2,1],
        icono: "../../assets/img/monsters/monster-icon/Icono_Diablos.webp",
        imagen: "../../assets/img/monsters/monster-big/Diablos.webp"
    },{
        id : 5,
        nombre : "Dodogama",
        descripcion : "El Dodogama se asemeja a un lagarto de gran tamaño. Su parte delantera es azul, tornándose naranja en patas traseras y cola. Sus patas delanteras son gruesas y escamas puntiagudas recorren su lomo. Su principal rasgo es su gigantesca mandíbula inferior donde almacena las rocas que consume, además de tener una barriga prominente. Posee ojos amarillos y redondos que le dan una mirada simplona.El Dodogama habita en el Lecho de los Ancianos, donde se dedica a consumir rocas y cristales. El Dodogama mezcla estos materiales con su saliva, volviéndolas proyectiles explosivos que lanza a posibles amenazas",
        stats : [0,2,3,2,1,2,3,1,2,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Dodogama.webp",
        imagen: "../../assets/img/monsters/monster-big/Dodogama.webp"
    },{
        id : 6,
        nombre : "Gran girros",
        descripcion : "El Gran Girros es muy similar a un Girros, pero mucho mayor. Se trata de un wyvern cuadrúpedo con un cuerpo robusto cubierto de escamas azul oscuro. Su cabeza, similar a la de un víbora, posee dos llamativas marcas de color amarillo y ojos rojos. La capucha de su cuello puede abrirse revelando una especie de agallas rojizas. De su boca sobresalen dos enormes colmillos que infligen parálisis.El Gran Girros lidera los grupos de Girros del Valle Putrefacto, se mueve a menudo acompañado de dos compañeros y está constantemente en busca de cualquier cosa que pueda devorar. Al igual que el Jagras, parte de la comida que consume luego es regurgitada para el consumo de otros miembros de su manada.El Gran Girros es un monstruo agresivo que atacará utilizando sus poderosas fauces armadas con colmillos paralizantes. También es capaz de dar órdenes a los Girros para que ataquen de forma coordinada",
        stats : [2,3,0,2,1,2,3,1,3,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Gran_Girros.webp",
        imagen: "../../assets/img/monsters/monster-big/Gran_Girros.webp"
    },{
        id : 7,
        nombre : "Gran Jagras",
        descripcion : "El Gran Jagras es mucho más grande que los Jagras, con patas más robustas, grandes garras, y el lomo cubierto de largas espinas. Es también bastante más rechoncho, y posee un gran saco en la garganta, de manera parecida a un sapo. Su boca se puede abrir enormemente para así engullir a sus presas enteras.Es uno de los grandes depredadores del Bosque Primigenio, Lidera la manada de Jagras. Por lo general suele ser un monstruo tranquilo y no atacara a menos de que sea provocado. Se sabe que regurgitan parte de lo que haya comido, para alimentar a los Jagras. Cuando es amenazado puede atacar utilizando sus patas, dando mordiscos y coletazos; pero tras haber engullido a una presa, atacara utilizando su gran peso contra su agresor",
        stats : [3,0,2,2,1,3,3,3,3,3],
        icono: "../../assets/img/monsters/monster-icon/Icono_Gran_Jagras.webp",
        imagen: "../../assets/img/monsters/monster-big/Gran_Jagras.webp"
    },{
        id : 8,
        nombre : "Jyuratodus",
        descripcion : "El Jyuratodus es muy similar en apariencia al Lavasioth, teniendo básicamente su mismo aspecto, salvo que el Jyuratodus posee una cabeza similar a un tiburón y posee un pequeño orificio al lado de sus ojos, ademas está cubierto de barro en vez de lava y sus escamas son de color marrón en la parte superior y en la inferior son de un crema claro, mientras que sus aletas son amarillentas.El Jyuratodus domina los lodazales del Yermo de Agujas. No es un monstruo particularmente agresivo, pero no dudará en atacar a los intrusos que perturben su territorio. Está especialmente adaptado para nadar por el fango y moverse por las numerosas corrientes de fango que cruzan el lugar, utilizando su habilidad de excavar y moverse bajo el fango para sorprender a presas incautas. Es capaz de almacenar barro para luego escupirlo a sus presas y dificultar sus movimientos",
        stats : [1,2,2,1,1,2,1,2,1,3],
        icono: "../../assets/img/monsters/monster-icon/Icono_Jyuratodus.webp",
        imagen: "../../assets/img/monsters/monster-big/Jyuratodus.webp"
    },{
        id : 9,
        nombre : "Kulu ya ku",
        descripcion : "Su apariencia recuerda en parte a los Dromes de otras regiones, pero la forma de su cabeza recuerda a la de un Dodo. Su cuerpo está cubierto de escamas de color arena, pero posee una cresta en la cabeza y fuertes patas delanteras con plumas de tonos rojos.El Kulu-Ya-Ku utiliza sus patas delanteras para desenterrar y agarrar objetos con los que protegerse y atacar, pudiendo lanzar desde rocas a jarrones antiguos. Este monstruo es conocido por su astucia, pues se escabulle en los nidos de grandes wyverns para robarles los huevos, que luego carga hasta su guarida para comerlos con tranquilidad. A diferencia de otros monstruos similares, es un monstruo solitario",
        stats : [2,3,2,2,2,2,2,2,2,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Kulu-Ya-Ku.webp",
        imagen: "../../assets/img/monsters/monster-big/Kulu-Ya-Ku.webp"
    },{
        id : 10,
        nombre : "Legiana",
        descripcion : "El Legiana es un wyvern de gran tamaño con un cuerpo ligero. Sus escamas son de color amarillo claro por abajo y azul por encima, con marcas negras en forma de cruz en las alas. Las alas del Legiana son muy grandes, como una mariposa, y le otorgan una gran capacidad de vuelo. Posee una especie de antenas en su cabeza que puede extender como velas, su cola alargada también posee dos grandes aletas que puede ocultar cuando se mueve por el suelo. Sus patas traseras están armadas con garras afiladas como espadas.El Legiana es el depredador dominante de los Altiplanos Coralinos, utilizando sus enormes alas puede surcar el cielo aprovechando las corrientes de aire. Se alimenta de monstruos pequeños como Raphinos que caza en pleno vuelo, y a veces tiene disputas territoriales con otros monstruos como Paolumu. Se sabe que es capaz de utilizar hielo para matar a sus presas. Se cree que migran entre los Altiplanos Coralinos y el Arroyo de Escarcha",
        stats : [2,1,3,0,1,3,2,2,2,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Legiana.webp",
        imagen: "../../assets/img/monsters/monster-big/Legiana.webp"
    },{
        id : 11,
        nombre : "Odogaron",
        descripcion : "El Odogaron es un monstruo cuadrúpedo con un cuerpo similar al de un lobo, pero sin pelo. También podría recordar a un Gorgonópsido, un grupo terápsidos prehistóricos. Su piel roja y tensa hace parecer que tiene sus músculos expuestos. Su cabeza es grande, con fauces armadas con grandes colmillos. Tanto sus patas delanteras como traseras poseen dos filas de garras, una normal y otra que se mantiene contraída, pero que puede extender a voluntad. Su cola es ancha y está cubierta de escamas blancas.El Odogaron es uno de los depredadores dominantes del Valle Putrefacto y está siempre en busca de alimento, ya sean monstruos vivos o carroña. Se sabe que una vez adquirida una presa, la arrastrará hasta su nido con sus fauces para devorarla con tranquilidad. En ocasiones se le ha visto subir hasta los Altiplanos Coralinos en busca de presas que cazar a veces se le a visto traer legianas muertas para comer",
        stats : [1,1,2,3,0,1,2,3,2,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Odogaron.webp",
        imagen: "../../assets/img/monsters/monster-big/Odogaron.webp"
    },{
        id : 12,
        nombre : "Paolumu",
        descripcion : "El Paolumu se asemeja a un murciélago cubierto de pelaje blanco. Su cabeza es rosada y posee dos grandes orejas redondeadas como un ratón. Es capaz de absorber aire para hinchar su cuello como una pelota. Sus alas terminan en puntas circulares similares a las del Pukei-Pukei. Su cola es larga y aplanada como un castor y no posee pelaje. Tanto sus patas traseras como su cola están cubiertas de una gruesa piel marrón.El Paolumu habita en los Altiplanos Coralinos, donde se alimenta de los huevos que liberan los corales terrestres para reproducirse. Gracias a su saco aéreo único es capaz de utilizar las corrientes de aire para flotar como un globo. Frente amenazas, se hinchará para parecer más grande y disparará fuertes ráfagas de aire concentrado o crear pequeños tornados. También al estar inflado puede desplazarse de un lado a otro rápidamente, expulsando aire, así como aplastar con su dura cola",
        stats : [3,0,2,1,1,2,2,2,3,3],
        icono: "../../assets/img/monsters/monster-icon/Icono_Paolumu.webp",
        imagen: "../../assets/img/monsters/monster-big/Paolumu.webp"
    },{
        id : 13,
        nombre : "Pukei-Pukei",
        descripcion : "El Pukei-Pukei posee una estructura corporal similar a otros wyverns como Khezu o Gypceros. Su cuerpo está cubierto de escamas verdosas, formando una melena de plumas en su cuello. Su cabeza es redondeada y muy similar a la de un camaleón, aparte, también posee una lengua muy ancha y flexible que puede utilizar para atacar. Sus alas poseen patrones circulares en las puntas, mientras que su cola es como un tubo y puede expulsar gases pestilentes por ella.El Pukei-Pukei es un extraño habitante del Bosque Primigenio. Aunque se conoce poco sobre sus hábitos, se sabe que utiliza su larga lengua para alcanzar los frutos y bayas de los que se alimenta, su dieta única le otorga un veneno que se almacena en su saliva y su cola, pudiendo usarlo para defenderse frente a amenazas; es por ello por lo que vive en las profundidades del bosque,donde crecen dichas bayas. El Pukei-Pukei acosa e intimida a monstruos más pequeños, pero cuando son más grandes que él, las tornas cambian y huye para evitar enfrentamientos",
        stats : [2,0,3,2,1,1,3,3,2,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Pukei-Pukei.webp",
        imagen: "../../assets/img/monsters/monster-big/Pukei-Pukei.webp"
    },{
        id : 14,
        nombre : "Radobaan",
        descripcion : "El Radobaan es un pariente cercano del Uragaan, por lo que su aspecto es similar. Al no haber minerales en su entorno, utiliza distintos huesos para cubrir su cuerpo. Su lomo está cubierto de huesos alargados, mientras que su mandíbula está cubierta de vértebras espinosas. Posee partes del cráneo de un Diablos sobre las patas traseras y un trozo de hueso como máscara sobre uno de sus ojos. El resto de su cuerpo es de un color negro.El Radobaan habita en el Valle Putrefacto, donde se alimenta de la gran cantidad de huesos que se encuentra aquí. Aparte de como alimento, estos huesos también juegan un papel fundamental como forma de defensa y de ataque para el Radobaan, protegiéndole de atacantes con huesos afilados y sirviendo como proyectiles contra amenazas",
        stats : [1,1,1,2,3,2,1,2,3,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Radobaan.webp",
        imagen: "../../assets/img/monsters/monster-big/Radobaan.webp"
    },{
        id : 15,
        nombre : "Rathalos",
        descripcion : "El Rathalos posee la estructura típica de un wyvern. Sus escamas son de color rojo con partes negras y vientre claro, sus grandes alas poseen varias púas y en la membrana alar posee unas marcas características. Su cola acabada en un aguijón posee una maza con púas donde almacena veneno, pero son sus garras las que lo inyectan. Su cabeza es maciza y posee un morro ganchudo, orejas puntiagudas y ojos azules.El Rathalos puede encontrarse comúnmente en zonas templadas, pantanos y volcanes. Suele anidar en bosques o zonas tranquilas junto a la Rathian, que es su contraparte. Gracias a sus poderosas alas posee una gran capacidad de vuelo y prefiere atacar desde el aire, asestando el golpe mortal con sus garras venenosas",
        stats : [0,1,2,1,3,1,2,2,1,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Rathalos.webp",
        imagen: "../../assets/img/monsters/monster-big/Rathalos.webp"
    },{
        id : 16,
        nombre : "Rathian",
        descripcion : "La Rathian posee la estructura corporal típica de un Wyvern, con dos grandes alas con pinchos y patrones característicos.Tambien posee una larga cola terminada en unos pinchos venenosos. Sus escamas y duras placas óseas son de color verde-marrón apagado. Su barbilla y orejas son puntiagudas y posee una especie de pelos venenosos sobre su lomo y alas. Sus patas son potentes y están armadas con fuertes garras, y sus ojos son rojos.La Rathian suele encontrarse junto al Rathalos en zonas templadas para anidar. También puede encontrarse con frecuencia en junglas y desiertos. A diferencia del Rathalos, prefiere combatir en tierra por sus fuertes patas.La Rathian ataque principalmente con embestidas y coletazos. En tierra puede lanzar hasta tres bolas de fuego seguidas o crear una gran explosión de fuego, además es capaz de dar una mortal para envenenar con la cola y puede ejecutarlo tanto en tierra como en aire. Mientras vuela también puede caer en picado para realizar un barrido con sus garras",
        stats : [0,1,2,1,3,1,2,2,1,3],
        icono: "../../assets/img/monsters/monster-icon/Icono_Rathian.webp",
        imagen: "../../assets/img/monsters/monster-big/Rathian.webp"
    },{
        id : 17,
        nombre : "Tobi Kadachi",
        descripcion : "El Tobi-Kadachi es un wyvern cuadrúpedo cubierto de escamas grises azuladas. A pesar de tener un cuerpo similar al del lobo, su cabeza es como la de una serpiente, con ojos rojos y pequeños cuernos sobre éstos. Sus patas están armadas con garras en forma de garfio, mientras que su lomo posee pelaje blanco que se eriza cuando se carga con electricidad estática. Su cola posee grandes escamas que forman una especie de abanico, y también posee una membrana para planear como el Kecha Wacha.El Tobi-Kadachi habita en las zonas arboladas del Bosque Primigenio. Utiliza sus garras en forma de gancho para aferrarse a los árboles y sus membranas para planear entre ellos. Debido a la fricción generada al moverse entre los árboles, puede acumular electricidad estática en su cuerpo que luego puede liberar contra sus atacantes. Se trata de un depredador muy ágil y astuto que utiliza movimientos rápidos y certeros para acabar con sus presas",
        stats : [2,3,0,2,1,3,2,2,2,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Tobi-Kadachi.webp",
        imagen: "../../assets/img/monsters/monster-big/Tobi-Kadachi.webp"
    },{
        id : 18,
        nombre : "Tzitzi-ya-ku",
        descripcion : "El Tzitzi-Ya-Ku se asemeja a un terópodo como el Kulu-Ya-Ku, cubierto con escamas azules. Posee fuertes patas traseras con grandes garras y patas delanteras con dedos alargados. Sobre su cabeza posee dos antenas que se extiende a modo de abanico, revelando una colorida cresta naranja.El Tzitzi-Ya-Ku puede encontrarse merodeando por el Altiplanos Coralinos. Ya que no es capaz de volar, habita en las zonas bajas. Puede atacar arremetiendo con sus patas, de forma similar al Gran Maccao, dar patadas laterales; además su cresta fotosensible le permite crear potentes destellos con los que aturde a sus presas",
        stats : [2,2,3,3,2,2,2,2,2,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Tzitzi-Ya-Ku.webp",
        imagen: "../../assets/img/monsters/monster-big/Tzitzi-Ya-Ku.webp"
    },{
        id : 19,
        nombre : "Nergigante",
        descripcion : "El Nergigante posee un cuerpo robusto cubierto de escamas negras y numerosas púas. Su apariencia es similar a la de un demonio o una gárgola, y posee grandes cuernos retorcidos sobre su cabeza. Sus poderosas patas delanteras están cubiertas de escamas afiladas y asestan fuertes golpes, mientras que sus grandes alas similares a las de un murciélago le permiten volar con agilidad.Cada década el Nergigante viaja al Nuevo Mundo en la Migración de los Ancianos. La razón de esto es porque este monstruo depreda otros Dragones Ancianos, y es por ello que perseguía al Zorah Magdaros. Se sabe que es un monstruo increíblemente agresivo que atacará a cualquier criatura que vea.La habilidad principal del Nergigante es la de regenerar partes rotas para volverlas más fuertes de manera temporal, cubriéndolas de numerosas púas que vuelven sus ataques muy peligrosos. El Nergigante utiliza principalmente sus poderosas patas delanteras y sus cuernos para acabar con sus enemigos",
        stats : [1,1,3,1,2,2,2,2,2,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Nergigante.webp",
        imagen: "../../assets/img/monsters/monster-big/Nergigante.webp"
    },{
        id : 20,
        nombre : "Teostra",
        descripcion : "Posee la estructura de un dragón, con cuatro patas armadas con fuertes garras y dos grandes alas. Su caparazón es de tonos rojizos y amarillos. Al igual que lunastra se asemeja a un gran león, con una gran melena roja y grandes colmillos. En la cabeza posee dos grandes cuernos y su cola termina en un mechón de pelo rojo.El Teostra habita normalmente en zonas volcánicas, pero puede desplazarse a muchos otros lugares como pantanos, desiertos e incluso poblaciones humanas. Esto sumado a su gran agresividad lo convierte en una de las primeras preocupaciones del Gremio",
        stats : [0,3,1,3,1,2,1,1,1,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Teostra.webp",
        imagen: "../../assets/img/monsters/monster-big/Teostra.webp"
    },{
        id : 21,
        nombre : "Vaal Hazak",
        descripcion : "Su estructura corporal es similar a la de otros dragones como Kushala Daora o Teostra. Sus escamas son de color verde apagado, con numerosas espinas negras, pero la mayor parte de su cuerpo está cubierta por numerosos cadáveres en descomposición que le dan un tono marrón rojizo. Su rasgo más extraño es su boca, pues su mandíbula inferior está dividida en dos partes sin unir, cada una armada con numerosos colmillos. Aunque sus ojos son rojos, posee dos marcas de color amarillo brillante en la cabeza. Su cola está armada con espinas curvas como garfios, al igual que las garras en sus patas y alas.El Vaal Hazak es un misterioso Dragón Anciano encontrado en lo más profundo del Valle Putrefacto, donde se alimenta de criaturas que hayan sido infectadas por el efluvio. Se sabe que este monstruo tiene control sobre el efluvio, pudiendo envolverse en una nube tóxica y expulsarlo en forma de rayo o como una onda. También es capaz de recuperar salud absorbiendo la energía vital de monstruos infectados por el efluvio",
        stats : [3,0,1,2,3,1,1,1,2,2],
        icono: "../../assets/img/monsters/monster-icon/Icono_Vaal_Hazak.webp",
        imagen: "../../assets/img/monsters/monster-big/Vaal_Hazak.webp"
    },{
        id : 22,
        nombre : "Xeno jiiva",
        descripcion : "El Xeno'jiiva es un gigantesco dragón anciano cuadrúpedo cubierto de escamas de color azul claro, emanando un brillo azulado por sus patas, cola, cabeza y alas, y una luz roja en el pecho. Sus alas son gigantescas y similares a las de una mariposa, mientras que sus patas alargadas terminan en garras como manos.Su cabeza es extraña, con dos grandes cuernos que poseen círculos que brillan de color naranja, pareciendo ojos. Su cola alargada termina en forma de pequeñas aletas azules, al igual que en sus alas, patas y cabeza.Este monstruo era completamente desconocido por el Gremio. Ha sido hallado en la Confluencia de Destinos, donde se acumula toda la bioenergía que fluye por el Nuevo Mundo. Se cree que este monstruo es la razón por la que los Dragones Ancianos migran al continente, pues utiliza su energía vital para incubarse y obtener su poder.Xeno'jiiva es un monstruo ultraagresivo que ataca principalmente mediante proyectiles de bioenergía y ataques físicos como golpes de cuerpo y cargas. Cuando se enfurece, las partes que concentran energía (cabeza, patas delanteras y cola) causan explosiones al golpear con ellas, y también es capaz de disparar lásers que funden el suelo, dañando a los cazadores",
        stats : [2,2,2,2,2,3,0,1,2,1],
        icono: "../../assets/img/monsters/monster-icon/Icono_Xeno-jiiva.webp",
        imagen: "../../assets/img/monsters/monster-big/Xeno-jiiva.webp"
    }]

    cualVer:number = 0 

    constructor() { }

    getMonstruos(){
        return this.monstruos
    }
    establecerCualVer(idCualVer : number){
        this.cualVer = idCualVer
    }
    eleccionCualVer(){
        return this.cualVer
    }
}
