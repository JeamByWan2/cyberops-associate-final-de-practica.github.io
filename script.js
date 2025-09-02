// ===========================================
// Lógica para los Pareos (Matching)
// ===========================================

const matchingsData = [
    {
        "title": "Relacionar los puestos con las posiciones que ocupan los miembros del personal del SOC.",
        "pairs": [
            {
                "question": "Experto en la materia, nivel 3",
                "answer": "Participa en la búsqueda de amenazas potenciales e implementa herramientas de detección de amenazas"
            },
            {
                "question": "Encargado de la respuesta ante los incidentes, nivel 2",
                "answer": "Funciona como el punto de contacto para la organización más grande"
            },
            {
                "question": "Analista especializado en alertas, nivel 1",
                "answer": "Monitorea las alertas entrantes y verifica que se haya producido un incidente real"
            }
        ]
    },
    {
        "title": "Un router ha recibido un paquete destinado a red que se encuentra en la tabla de routing. ¿Qué pasos realiza el router para enviar este paquete a su camino? Haga coincidir el paso con la tarea respectiva realizada por el router.",
        "pairs": [
            {
                "question": "Paso 1",
                "answer": "Desencapsula el encabezado (header) y el pie de página (trailer) de la trama de Capa 2 para exponer el paquete de Capa 3"
            },
            {
                "question": "Paso 2",
                "answer": "Examina la dirección IP de destino del paquete IP para encontrar la mejor ruta en la tabla de routing (enrutamiento)."
            },
            {
                "question": "Paso 3",
                "answer": "Encapsula el paquete de Capa 3 en una nueva trama de Capa 2 y reenvía la trama por la interfaz de salida"
            }
        ]
    },
    {
        "title": "Una la técnica de prueba de seguridad de red con cómo se utiliza para probar la seguridad de red. No se utilizan todas las opciones.",
        "pairs": [
            {
                "question": "Prueba de penetración",
                "answer": "Se utiliza para determinar las posibles consecuencias de ataques exitosos a la red"
            },
            {
                "question": "Análisis de vulnerabilidad",
                "answer": "Se utiliza para encontrar puntos débiles y configuraciones erróneas en los sistemas de red"
            },
            {
                "question": "Análisis de red",
                "answer": "Se utiliza para detectar recursos disponibles en la red"
            }
        ]
    },
    {
        "title": "Una el concepto de seguridad con la descripción.",
        "pairs": [
            {
                "question": "Ataque",
                "answer": "Un mecanismo utilizado para comprometer a un recurso"
            },
            {
                "question": "Amenaza",
                "answer": "Un peligro potencial para un recurso"
            },
            {
                "question": "Vulnerabilidad",
                "answer": "Un punto débil en un sistema"
            },
            {
                "question": "Riesgo",
                "answer": "La posibilidad de consecuencias no deseadas"
            }
        ]
    },
    {
        "title": "Una la descripción con el enfoque antimalware.",
        "pairs": [
            {
                "question": "Se reconocen características generales compartidas por diversos tipos de malware",
                "answer": "Con base heurística"
            },
            {
                "question": "Se reconocen diversas características de archivos de malware conocidos",
                "answer": "Con base en actores"
            },
            {
                "question": "Se analizan actividades sospechosas",
                "answer": "Con base en comportamientos"
            }
        ]
    },
    {
        "title": "Coloque la prioridad de la recolección de pruebas de la más volátil a la menos volátil según lo definido por las pautas del IETF.",
        "pairs": [
            {
                "question": "Registros de memoria, memorias caché",
                "answer": "1. (más volátil)"
            },
            {
                "question": "Tabla de routing, caché de ARP, tabla de procesos, estadísticas del núcleo, memoria RAM",
                "answer": "2."
            },
            {
                "question": "Sistemas de archivos temporales",
                "answer": "3."
            },
            {
                "question": "Medios no volátiles, fijos y extraíbles",
                "answer": "4."
            },
            {
                "question": "Registros remotos y datos de monitoreo",
                "answer": "5."
            },
            {
                "question": "Topologías e interconexiones físicas",
                "answer": "6."
            },
            {
                "question": "Medios de archivo, cintas u otras copias de seguridad",
                "answer": "7. (menos volátil)"
            }
        ]
    },
    {
        "title": "Una los pasos con las acciones involucradas cuando un host interno con la dirección IP 192.168.10.10 intenta enviar un paquete a un servidor externo en la dirección IP 209.165.200.254 a través de un router R1 que ejecuta NAT dinámica.",
        "pairs": [
            {
                "question": "Paso 1",
                "answer": "El R1 revisa la configuración de NAT para determinar si se debe traducir este paquete."
            },
            {
                "question": "Paso 2",
                "answer": "Si no hay ninguna entrada de traducción para esta dirección IP, el R1 determina que se debe traducir la dirección de origen 192.168.10.10."
            },
            {
                "question": "Paso 3",
                "answer": "El R1 selecciona una dirección global disponible del conjunto de direcciones dinámicas."
            },
            {
                "question": "Paso 4",
                "answer": "El R1 reemplaza la dirección 192.168.10.10 por una dirección global interna traducida."
            },
            {
                "question": "Paso 5",
                "answer": "El R1 traduce la dirección IP en los paquetes de 209.65.200.254 a 192.168.10.10."
            }
        ]
    }
];

const matchingListWrapper = document.getElementById('matching-list-wrapper');
const matchingCheckButton = document.getElementById('matching-check-button');
const matchingShowAnswersButton = document.getElementById('matching-show-answers-button');
const matchingFeedback = document.getElementById('matching-feedback');

// Función para barajar un array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderMatchings() {
    matchingListWrapper.innerHTML = '';
    matchingsData.forEach((matchingSet) => {
        const setDiv = document.createElement('div');
        setDiv.classList.add('matching-set');
        
        const title = document.createElement('h3');
        title.textContent = matchingSet.title;
        setDiv.appendChild(title);

        if (matchingSet.imageUrl) {
            const image = document.createElement('img');
            image.src = matchingSet.imageUrl;
            image.alt = matchingSet.title;
            image.classList.add('matching-image');
            setDiv.appendChild(image);
        }

        const shuffledQuestions = shuffleArray([...matchingSet.pairs]);
        const shuffledAnswers = shuffleArray([...matchingSet.pairs]);

        shuffledQuestions.forEach((pair) => {
            const matchingItem = document.createElement('div');
            matchingItem.classList.add('matching-item');
            
            const questionText = document.createElement('p');
            questionText.textContent = pair.question;
            matchingItem.appendChild(questionText);

            const selectList = document.createElement('select');
            selectList.classList.add('matching-dropdown');
            selectList.setAttribute('data-question-text', pair.question);

            const defaultOption = document.createElement('option');
            defaultOption.textContent = "Selecciona una opción";
            defaultOption.value = "";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            selectList.appendChild(defaultOption);

            shuffledAnswers.forEach(answerPair => {
                const option = document.createElement('option');
                option.textContent = answerPair.answer;
                option.value = answerPair.answer;
                selectList.appendChild(option);
            });
            
            matchingItem.appendChild(selectList);
            setDiv.appendChild(matchingItem);
        });

        matchingListWrapper.appendChild(setDiv);
    });
}

function checkMatchings() {
    let allCorrect = true;
    const allDropdowns = document.querySelectorAll('.matching-dropdown');
    let answeredCount = 0;

    allDropdowns.forEach(dropdown => {
        const selectedAnswer = dropdown.value;
        const questionText = dropdown.getAttribute('data-question-text');
        
        dropdown.classList.remove('correct', 'incorrect');

        if (selectedAnswer) {
            answeredCount++;

            // Encuentra el conjunto de pareos al que pertenece este dropdown
            const parentSet = dropdown.closest('.matching-set');
            const setIndex = Array.from(matchingListWrapper.children).indexOf(parentSet);
            const currentMatchingSet = matchingsData[setIndex];

            // Busca la respuesta correcta dentro de ese conjunto específico
            const correctPair = currentMatchingSet.pairs.find(p => p.question === questionText);
            
            if (correctPair && correctPair.answer === selectedAnswer) {
                dropdown.classList.add('correct');
            } else {
                dropdown.classList.add('incorrect');
                allCorrect = false;
            }
        }
    });

    if (answeredCount === allDropdowns.length) {
        if (allCorrect) {
            matchingFeedback.textContent = "¡Todos los pareos son correctos!";
            matchingFeedback.style.color = "green";
        } else {
            matchingFeedback.textContent = "Hay pareos incorrectos. Inténtalo de nuevo.";
            matchingFeedback.style.color = "red";
        }
    } else {
        matchingFeedback.textContent = `Faltan ${allDropdowns.length - answeredCount} pareo(s) por completar.`;
        matchingFeedback.style.color = "orange";
    }
}

function showCorrectAnswers() {
    const allDropdowns = document.querySelectorAll('.matching-dropdown');
    allDropdowns.forEach(dropdown => {
        const questionText = dropdown.getAttribute('data-question-text');

        // Encuentra el conjunto de pareos al que pertenece este dropdown
        const parentSet = dropdown.closest('.matching-set');
        const setIndex = Array.from(matchingListWrapper.children).indexOf(parentSet);
        const currentMatchingSet = matchingsData[setIndex];

        // Busca la respuesta correcta dentro de ese conjunto específico
        const correctPair = currentMatchingSet.pairs.find(p => p.question === questionText);

        if (correctPair) {
            dropdown.value = correctPair.answer;
            dropdown.classList.add('correct');
        }
        dropdown.disabled = true; // Deshabilita los dropdowns después de mostrar las respuestas
    });
    // Deshabilita los botones para evitar re-intentos en el estado de "mostrar respuestas"
    matchingCheckButton.disabled = true;
    matchingShowAnswersButton.disabled = true;
    matchingFeedback.textContent = "Respuestas correctas mostradas.";
    matchingFeedback.style.color = "green";
}

// Event Listeners
matchingCheckButton.addEventListener('click', checkMatchings);
matchingShowAnswersButton.addEventListener('click', showCorrectAnswers);

// Llama a la función al cargar la página
window.addEventListener('load', renderMatchings);


const questions = [

  {
    "question": "¿Cómo puede utilizarse un sistema de administración de información y eventos de seguridad (SIEM) en un SOC para que ayude al personal a luchar contra las amenazas de seguridad?",
    "options": [
      "Mediante la aplicación dinámica de reglas de firewall.",
      "Mediante la integración de todos los dispositivos de seguridad y las aplicaciones en una organización.",
      "Mediante el análisis de datos de registro en tiempo real.",
      "Mediante la combinación de datos de múltiples tecnologías."
    ],
    "correct": [3]
  },
  {
    "question": "¿Qué afirmación describe el estado de las cuentas de administrador y de invitado después de que un usuario instala la versión de escritorio de Windows en una computadora nueva?",
    "options": [
      "De forma predeterminada, la cuenta de administrador está habilitada, pero la cuenta de invitado está deshabilitada.",
      "De forma predeterminada, están deshabilitadas las cuentas de administrador y de invitado.",
      "De forma predeterminada, están habilitadas las cuentas de administrador y de invitado.",
      "De forma predeterminada, la cuenta de invitado está habilitada, pero la cuenta de administrador está deshabilitada."
    ],
    "correct": [1]
  },
  {
    "question": "¿Cuales dos acciones se pueden realizar al configurar Windows Firewall?",
    "options": [
      "Abrir manualmente los puertos que son necesarios para aplicaciones específicas.",
      "Habilitar la autenticación de direcciones MAC.",
      "Permitir que otro software de Firewall controle el acceso.",
      "Realizar una reversión (rollback).",
      "Activar la detección de puertos."
    ],
    "correct": [0, 4]
  },
  {
    "question": "¿Cuál es el propósito de introducir el comando nslookup cisco.com en una computadora con Windows?",
    "options": [
      "Descubrir el tiempo de transmisión necesario para llegar al servidor Cisco.",
      "Conectarse al servidor Cisco.",
      "Probar si el servidor Cisco es accesible.",
      "Comprobar si el servicio DNS se está ejecutando."
    ],
    "correct": [3]
  },
  {
    "question": "¿Cuáles son tres ventajas de usar enlaces simbólicos en lugar de enlaces rígidos en Linux?",
    "options": [
      "Pueden establecer el enlace a un archivo en un sistema de archivos diferente.",
      "Pueden mostrar la ubicación del archivo original.",
      "Pueden comprimirse.",
      "Pueden establecer el enlace a un directorio.",
      "Pueden cifrarse.",
      "Los enlaces simbólicos se pueden exportar."
    ],
    "correct": [0, 1, 3]
  },
  {
    "question": "Observe la salida arrojada por el comando y responda: ¿qué permiso o permisos de archivo han sido asignados al grupo de usuarios «otro>> para el archivo data.txt?",
    "imageURL": "images/imagen01.png",
    "options": [
      "Lectura, escritura, ejecución",
      "Lectura",
      "Acceso completo",
      "Lectura, escritura"
    ],
    "correct": [1]
  },
  {
    "question": "¿Qué es Internet?",
    "options": [
      "Proporciona acceso a la red a los dispositivos móviles.",
      "Es una red basada en la tecnología Ethernet.",
      "Es una red privada para una organización con conexiones LAN y WAN.",
      "Proporciona conexiones a través de las redes globales interconectadas."
    ],
    "correct": [3]
  },
  {
    "question": "¿En qué capa OSI se agrega una dirección IP de origen a una PDU durante el proceso de encapsulación?",
    "options": [
      "Capa de aplicación",
      "Capa de enlace de datos",
      "Capa de transporte",
      "Capa de red"
    ],
    "correct": [3]
  },
  {
    "question": "¿Qué dos protocolos están asociados con la capa de transporte?",
    "options": [
      "UDP",
      "PPP",
      "IP",
      "ICMP",
      "TCP"
    ],
    "correct": [0, 4]
  },
  {
    "question": "Si el gateway predeterminado se configura de forma incorrecta en el host, ¿qué consecuencias tiene esto en las comunicaciones?",
    "options": [
      "El host puede comunicarse con otros hosts en la red local, pero no puede comunicarse con hosts en redes remotas.",
      "El host puede comunicarse con otros hosts en redes remotas, pero no puede comunicarse con los hosts en la red local.",
      "El host no puede comunicarse en la red local.",
      "No tiene consecuencias en las comunicaciones."
    ],
    "correct": [0]
  },
  {
    "question": "Cuando un protocolo sin conexión está en uso en una capa inferior del modelo OSI, ¿cómo se detectan y se retransmiten, si es necesario, los datos faltantes?",
    "options": [
      "Los protocolos IP de la capa de red administran las sesiones de comunicación si no están disponibles los servicios de transporte orientados a la conexión.",
      "El proceso de distribución de servicio mínimo garantiza que todos los paquetes se envíen y se reciban.",
      "Los protocolos de capa superior orientados a la conexión hacen un seguimiento de los datos recibidos y pueden solicitar la retransmisión desde los protocolos de capa superior del host emisor.",
      "Se utilizan acuses de recibo sin conexión para solicitar la retransmisión."
    ],
    "correct": [2]
  },
  {
    "question": "¿Cuál de las siguientes es la notación de duración de prefijo para la máscara de subred 255.255.255.224?",
    "options": [
      "/25",
      "/26",
      "/28",
      "/27"
    ],
    "correct": [3]
  },
  {
    "question": "¿Cuáles son dos mensajes ICMPv6 que no están presentes en ICMP para IPv4?",
    "options": [
      "Confirmación de host",
      "Destino inalcanzable",
      "Tiempo excedido",
      "Solicitud de vecino",
      "Anuncio de router",
      "Redirección de ruta"
    ],
    "correct": [3, 4]
  },
  {
    "question": "¿Qué protocolo utiliza el comando traceroute para enviar y recibir solicitudes y respuestas de eco?",
    "options": [
      "SNMP",
      "TCP",
      "ICMP",
      "Telnet"
    ],
    "correct": [2]
  },
  {
    "question": "¿Cuáles dos tipos de mensajes son utilizados en lugar de ARP para la resolución de direcciones IPV6?",
    "options": [
      "Echo reply",
      "Solicitud de vecino",
      "Solicitud Echo",
      "Difusión",
      "Difusión por proximidad",
      "Anuncio de vecino"
    ],
    "correct": [1, 5]
  },
  {
    "question": "¿Cuáles son dos problemas que pueden ser causados por un gran número de mensajes de solicitud y respuesta ARP?",
    "options": [
      "La solicitud ARP se envía como un broadcast e inundará toda la subred.",
      "La red puede sobrecargarse porque los mensajes de respuesta ARP tienen una carga útil muy grande debido a la dirección MAC de 48 bits y la dirección IP de 32 bits que contienen.",
      "Todos los mensajes de solicitud ARP deben ser procesados por todos los nodos de la red local.",
      "Los switches se sobrecargan porque concentran todo el tráfico de las subredes conectadas.",
      "Un gran número de mensajes de solicitud y respuesta ARP puede ralentizar el proceso de switching, lo que lleva al switch a realizar muchos cambios en su tabla MAC."
    ],
    "correct": [0, 2]
  },
  {
    "question": "¿Cuál es el mecanismo TCP que se utiliza para evitar la congestión?",
    "options": [
      "Ventana deslizante",
      "Protocolo de enlace de dos vías",
      "Protocolo de enlace de tres vías",
      "Par de sockets"
    ],
    "correct": [0]
  },
  {
    "question": "¿Qué tipo de herramienta de monitoreo de red guarda tramas de red en archivos PCAP?",
    "options": [
      "NetFlow",
      "SIEM",
      "SNMP",
      "Wireshark"
    ],
    "correct": [3]
  },
  {
    "question": "¿Qué tipo de mensaje es enviado por un cliente DHCPv4 solicitando una dirección IP?",
    "options": [
      "DHCPOFFER unicast message",
      "DHCPDISCOVER unicast message",
      "DHCPACK unicast message",
      "DHCPDISCOVER broadcast message"
    ],
    "correct": [3]
  },
  {
    "question": "¿Cuál de las siguientes opciones corresponde a una característica de DNS?",
    "options": [
      "DNS se basa en una topologia hub-and-spoke con servidores centralizados.",
      "Todos los servidores DNS deben mantener asignaciones para toda la estructura DNS.",
      "Los servidores DNS pueden almacenar en caché las consultas recientes para reducir el tráfico de consultas DNS.",
      "Los servidores DNS están programados para eliminar solicitudes de traducciones de nombres que no están dentro de su zona."
    ],
    "correct": [2]
  },
  {
    "question": "¿Cuáles son dos diferencias entre HTTP y HTTP/2?",
    "options": [
      "HTTP/2 utiliza multiplexación para admitir múltiples flujos y mejorar la eficiencia.",
      "HTTP tiene un formato de encabezado diferente al que tiene HTTP/2.",
      "HTTP/2 utiliza códigos de estado diferentes que HTTP para mejorar el rendimiento.",
      "HTTP/2 emite solicitudes utilizando un formato de texto, mientras que HTTP utiliza comandos binarios.",
      "HTTP/2 utiliza un encabezado comprimido para reducir los requisitos de ancho de banda."
    ],
    "correct": [0, 4]
  },
  {
    "question": "¿Cuál es el propósito de CSMA/CA?",
    "options": [
      "Evitar colisiones",
      "Filtrar el tráfico",
      "Evitar bucles",
      "Aislar el tráfico"
    ],
    "correct": [0]
  },
  {
    "question": "¿Cuáles son dos características compartidas del IDS y del IPS?",
    "options": [
      "Ambas tienen un impacto mínimo en el rendimiento de la red.",
      "Ambos dependen de un dispositivo de red adicional para responder al tráfico malicioso.",
      "Ambos usan firmas para detectar tráfico malintencionado.",
      "Ambos analizan copias del tráfico de red.",
      "Ambos se implementan como sensores."
    ],
    "correct": [2, 4]
  },
  {
    "question": "¿Cuál enunciado describe una política de seguridad típica para una configuración de Firewall de zona desmilitarizada (Demilitarized zone DMZ)?",
    "options": [
      "El tráfico de retorno desde el interior asociado con el tráfico que se origina desde el exterior tiene permitido atravesar desde la interfaz interna hasta la interfaz externa.",
      "El tráfico que se origina desde la interfaz externa tiene permitido atravesar el Firewall hasta la interfaz interna con pocas restricciones o ninguna.",
      "El tráfico de retorno desde el exterior asociado con el tráfico que se origina desde el interior tiene permitido atravesar desde la interfaz externa a la interfaz DMZ.",
      "El tráfico que se origina desde la interfaz interna generalmente se bloquea de forma total o de forma muy selectiva a la interfaz externa.",
      "El tráfico que se origina desde la interfaz DMZ es selectivamente permitido a la interfaz externa."
    ],
    "correct": [4]
  },
  {
    "question": "En un intento de evitar ataques de red, los ciber-analistas comparten atributos identificables únicos de ataques conocidos con sus colegas. ¿Qué tres tipos de atributos o indicadores de compromiso son de ayuda para compartir?",
    "options": [
      "Direcciones IP de servidores de ataque",
      "Nombres netbios de firewalls comprometidos",
      "Cambios realizados en el software del sistema final",
      "ID de sistemas comprometidos",
      "Características de archivos de malware",
      "BIOS de sistemas atacantes"
    ],
    "correct": [0, 2, 4]
  },
  {
    "question": "¿Qué dos afirmaciones describen los ataques de acceso?",
    "options": [
      "Los ataques de contraseña se pueden implementar mediante métodos de ataque de fuerza bruta, caballos de Troya o analizadores de protocolos de paquetes.",
      "Los ataques de confianza suelen implicar el uso de una computadora portátil como punto de acceso dudoso para que capture y copie todo el tráfico de red en una ubicación pública, como un punto de acceso inalámbrico.",
      "Los ataques de redireccionamiento de puertos utilizan una tarjeta de adaptador de red en modo promiscuo para capturar todos los paquetes de red que se envían a través de una LAN.",
      "Los ataques de desbordamiento del búfer escriben una cantidad de datos que supera la capacidad de la memoria de búfer asignada con el fin de sobrescribir datos válidos o de explotar sistemas para ejecutar código malicioso.",
      "Para detectar servicios de escucha, los ataques de escaneo de puertos exploran un rango de números de puerto TCP o UDP en un host."
    ],
    "correct": [0, 3]
  },
  {
    "question": "Tras recibir quejas de los usuarios, un técnico identifica que el servidor Web de la universidad funciona muy lentamente. Al revisar el servidor, descubre una cantidad inusualmente elevada de solicitudes de TCP provenientes de varias ubicaciones en Internet. ¿Cuál es el origen del problema?",
    "options": [
      "Hay un ataque de reproducción en curso.",
      "Hay un ataque de DDoS en curso.",
      "El ancho de banda no es suficiente para conectarse al servidor.",
      "El servidor está infectado con un virus."
    ],
    "correct": [1]
  },
  {
    "question": "¿Qué herramienta de monitoreo de red pertenece a la categoría de analizadores de protocolo de red?",
    "options": [
      "SPAN",
      "SIEM",
      "SNMP",
      "Wireshark"
    ],
    "correct": [3]
  },
  {
    "question": "¿Qué dos herramientas de monitoreo capturan el tráfico de red y lo reenvían a dispositivos de monitoreo de la red?",
    "options": [
      "SNMP",
      "Punto de acceso de prueba de la red",
      "Wireshark",
      "SPAN",
      "SIEM"
    ],
    "correct": [1, 3]
  },
  {
    "question": "¿Qué tipo de mensaje ICMP pueden utilizar los atacantes para realizar ataques de reconocimiento y escaneo de redes?",
    "options": [
      "ICMP router discovery",
      "ICMP redirects",
      "ICMP mask reply",
      "ICMP unreachable"
    ],
    "correct": [3]
  },
  {
    "question": "Una enorme cantidad de paquetes con direcciones IP de origen no válidas solicitan una conexión en la red. El servidor intenta responder de manera afanosa, lo que da como resultado que se ignoran las solicitudes válidas. ¿Qué tipo de ataque se produjo?",
    "options": [
      "Secuestro de sesiones TCP (TCP session hijacking)",
      "Saturación de UDP (UDP flood)",
      "Restablecimiento TCP (TCP reset)",
      "Saturación SYN de TCP (TCP SYN flood)."
    ],
    "correct": [3]
  },
  {
    "question": "¿Cuál es el objetivo más común del envenenamiento de la optimización para motor de búsqueda (SEO)?",
    "options": [
      "Construir un botnet de zombies.",
      "Sobrecargar un dispositivo de red con paquetes maliciosos.",
      "Aumentar el tráfico web a sitios maliciosos.",
      "Engañar a una persona para que instale malware o divulgue información personal."
    ],
    "correct": [2]
  },
  {
    "question": "Un atacante está redirigiendo el tráfico a una puerta de enlace predeterminada falsa en un intento de interceptar el tráfico de datos de una red conmutada. ¿Qué tipo de ataque es este?",
    "options": [
      "Túnel de DNS",
      "Envenenamiento del caché de ARP",
      "Suplantación de identidad de DHCP",
      "Inundación SYN a TCP"
    ],
    "correct": [2]
  },
  {
    "question": "¿Qué sección de una política de seguridad se utiliza para especificar que solo las personas autorizadas deben tener acceso a datos empresariales?",
    "options": [
      "Política de identificación y autenticación",
      "Política de uso aceptable",
      "Política de acceso a Internet",
      "Declaración de autoridad",
      "Declaración del alcance",
      "Política de acceso al campus"
    ],
    "correct": [0]
  },
  {
    "question": "Un especialista en seguridad de la red recibe la tarea de implementar una medida de seguridad que monitorea el estado de los archivos críticos en el centro de datos y envía una alerta inmediata si se modifica alguno de ellos. ¿Qué aspecto de las comunicaciones seguras aborda esta medida de seguridad?",
    "options": [
      "Integridad de los datos",
      "Autenticación de origen",
      "Confidencialidad de los datos",
      "Imposibilidad de negación"
    ],
    "correct": [0]
  },
  {
    "question": "Un administrador de red está configurando un servidor AAA para administrar la autenticación TACACS+. ¿Cuáles son dos atributos de la autenticación TACACS+?",
    "options": [
      "Puerto TCP 40",
      "Puerto UDP 1645",
      "Un único proceso de autenticación y autorización",
      "Procesos separados de autenticación y autorización",
      "Encriptación para todas las comunicaciones",
      "Encriptación sólo para la contraseña de un usuario"
    ],
    "correct": [3, 4]
  },
  {
    "question": "¿Qué tres algoritmos están diseñados para generar y comprobar firmas digitales? (Elija tres opciones.)",
    "options": [
      "DSA",
      "ECDSA",
      "IKE",
      "AES",
      "RSA",
      "3DES"
    ],
    "correct": [0, 1, 4]
  },
  {
    "question": "¿Cuáles son los dos componentes importantes de una infraestructura de clave pública (PKI) utilizados en seguridad de la red? (Elija dos opciones.)",
    "options": [
      "Certificados digitales",
      "Algoritmos de cifrado simétrico",
      "Sistema de prevención de intrusión",
      "Generación de claves precompartidas",
      "Autoridad de certificación",
    ],
    "correct": [0, 4]
  },
  {
    "question": "¿Qué afirmación describe el enfoque para la detección de intrusiones basada en anomalías?",
    "options": [
      "Compara el comportamiento de un host con una línea de base establecida para identificar posibles intrusiones.",
      "Compara las operaciones de una host con una política de seguridad bien definida.",
      "Compara las firmas del tráfico entrante con una base de datos de intrusiones conocidas.",
      "Compara el archivo de definición antivirus con un repositorio basado en la nube para determinar las actualizaciones más recientes.",
    ],
    "correct": [0]
  },
  {
    "question": "¿Cuáles son las tres métricas de impacto incluidas en el Grupo de métricas base de CVSS 3.0? (Elija tres opciones.)",
    "options": [
      "Confidencialidad",
      "Ataque",
      "Nivel de corrección",
      "Disponibilidad",
      "Vector de ataque",
      "Integridad"
    ],
    "correct": [0, 3, 5]
  },
  {
    "question": "Un administrador de red está creando un perfil de red para generar una línea de base de red. ¿Qué está incluido en el elemento de espacio para recursos críticos?",
    "options": [
      "Las direcciones IP o la ubicación lógica de los sistemas o datos esenciales",
      "La lista de procesos de TCP o UDP que están disponibles para aceptar datos",
      "Los daemons y puertos TCP y UDP que pueden estar abiertos en el servidor",
      "El tiempo transcurrido desde que se establece el flujo de datos y su finalización"
    ],
    "correct": [0]
  },
  {
    "question": "¿Cómo podrían los profesionales de TI corporativos hacer frente a las amenazas cibernéticas basadas en DNS?",
    "options": [
      "Usar dispositivos IPS/IDS para analizar el tráfico corporativo interno.",
      "Limitar la cantidad de navegadores o de pestañas del navegador abiertos al mismo tiempo.",
      "Supervisar los registros de servidor proxy DNS y buscar consultas DNS poco comunes.",
      "Limitar la cantidad de consultas DNS permitidas dentro de la organización."
    ],
    "correct": [2]
  },
  {
    "question": "¿De qué manera HTTPS dificulta el monitoreo de la seguridad de la red?",
    "options": [
      "HTTPS puede utilizarse para infiltrar consultas de DNS.",
      "HTTPS no puede proteger a los visitantes de un sitio web proporcionado por la compañía.",
      "HTTPS agrega complejidad a los paquetes capturados.",
      "El tráfico del navegador web se dirige a servidores infectados."
    ],
    "correct": [2]
  },
  {
    "question": "¿Qué dos elementos forman el valor PRI en un mensaje de syslog? (Elija dos opciones.)",
    "options": [
      "Encabezado",
      "Recurso",
      "Nombre del host",
      "Marca de hora",
      "Gravedad"
    ],
    "correct": [1, 4]
  },
  {
    "question": "¿Cuáles tres piezas de información se encuentran en los datos de sesión (session data)? (Escoja tres opciones.)",
    "options": [
      "Direcciones IP de origen y de destino",
      "Direcciones MAC de origen y de destino",
      "Número de puertos de origen y destino",
      "Nombre de usuario",
      "Protocolo de transporte de Capa 4",
      "Dirección IP de la puerta de enlace por defecto (default gateway)"
    ],
    "correct": [0, 2, 4]
  },
  {
    "question": "¿Qué indica una clasificación de alerta de seguridad «negativo verdadero»?",
    "options": [
      "Los sistemas de seguridad implementados no detectan ataques.",
      "El tráfico normal se ignora correctamente y no se se emiten alertas erróneas.",
      "Una alerta se emite incorrectamente y no indica un incidente de seguridad real.",
      "Se corrobora que una alerta es un incidente de seguridad real."
    ],
    "correct": [1]
  },
  {
    "question": "Consultar la ilustración. ¿Qué campo en la ventana de la aplicación Sguil indica la prioridad de un evento o de una conjunto de eventos correlacionados?",
    "imageURL": "images/imagen02.jpg",
    "options": [
      "CNT",
      "ST",
      "Pr",
      "AlertID"
    ],
    "correct": [1]
  },
  {
    "question": "¿Cuales dos tipos de tráfico de red provienen de protocolos que generan mucho tráfico rutinario? (Elija dos opciones.)",
    "options": [
      "Tráfico SSL",
      "Tráfico de actualizaciones de routing (enrutamiento)",
      "Tráfico de alertas de auditoría de seguridad de Windows (Windows security auditing)",
      "Tráfico STP",
      "Tráfico IPsec"
    ],
    "correct": [1, 3]
  },
  {
    "question": "¿Cómo se asigna el ID de evento en Sguil?",
    "options": [
      "Sólo al primer evento se le asigna un ID único de la serie de eventos correlacionados.",
      "A todos los eventos de la serie de eventos correlacionados se les asigna el mismo ID de evento.",
      "A todos los eventos de la serie de eventos correlacionados se les asigna el mismo ID de grupo de eventos.",
      "A cada evento de la serie de eventos correlacionados se le asigna un ID (identificador) único."
    ],
    "correct": [3]
  },
  {
    "question": "¿Qué hará el actor de una amenaza para crear una puerta trasera a un objetivo comprometido según el modelo de cadena de eliminación cibernética?",
    "options": [
      "Agregar servicios y claves de ejecución automática.",
      "Abrir un canal de comunicación de dos vías a la infraestructura de CnC.",
      "Recopilar y exfiltrar datos.",
      "Conseguir una herramienta automatizada para aplicar la carga útil del malware."
    ],
    "correct": [0]
  },
  {
    "question": "¿Qué actividad realiza normalmente el actor responsable de una amenaza en la fase de instalación de la cadena de eliminación cibernética?",
    "options": [
      "Conseguir una herramienta automatizada para aplicar la carga útil del malware.",
      "Abrir un canal de comunicación de dos vías a la infraestructura de CnC.",
      "Instalar una shell web en el servidor web objetivo para acceso persistente.",
      "Reunir direcciones de correo electrónico de cuentas de usuario."
    ],
    "correct": [2]
  },
  {
    "question": "¿Cuál es la responsabilidad del departamento de Recursos Humanos al ocuparse de un incidente de seguridad?",
    "options": [
      "Revisar las políticas, los planes y los procedimientos relacionados con incidentes para infracciones a pautas locales o federales.",
      "Adoptar medidas disciplinarias si un incidente es causado por un empleado.",
      "Coordinar la respuesta antes los incidentes con otras partes interesadas y minimizar el daño causado por el incidente.",
      "Tomar medidas para minimizar la efectividad del ataque y preservar la evidencia."
    ],
    "correct": [1]
  },
  {
    "question": "Los usuarios informan que no se puede tener acceso a un archivo de la base de datos del servidor principal. El administrador de una base de datos verifica el problema y advierte que el archivo de base de datos ahora está cifrado. La organización recibe un correo electrónico de amenaza en el que se exige un pago a cambio de descifrar el archivo de base de datos. ¿Qué tipo de ataque ha experimentado la organización?",
    "options": [
      "Ataque DoS",
      "Caballo de Troya",
      "Ataque man-in-the-middle",
      "Ransomware"
    ],
    "correct": [3]
  },
  {
    "question": "¿Qué dos tipos de información personal pueden ser vendidos en la web oscura por los ciberdelincuentes? (Escoja dos opciones.)",
    "options": [
      "Nombre de una mascota",
      "Ciudad de residencia",
      "Dirección",
      "Nombre de un banco",
      "Fotos de Facebook"
    ],
    "correct": [2, 4]
  },
  {
    "question": "¿Por qué se prefiere el uso de DHCP en redes grandes?",
    "options": [
      "Los hosts de las redes grandes necesitan más parámetros de configuración de asignación de direcciones IP que los hosts de las redes pequeñas.",
      "Evita que se compartan archivos que tienen derechos de autor.",
      "Es una forma más eficaz de administrar direcciones IP que la asignación de direcciones estáticas.",
      "Las redes grandes envían más solicitudes de resolución de dominio a dirección IP que las redes pequeñas.",
      "DHCP usa un protocolo de capa de transporte confiable."
    ],
    "correct": [2]
  },
  {
    "question": "¿Qué fase del ciclo de vida de la respuesta ante los incidentes de NIST incluye el monitoreo continuo por parte del CSIRT para identificar y validar un incidente con rapidez?",
    "options": [
      "Preparación",
      "Contención, erradicación y recuperación",
      "Detección y análisis",
      "Actividades posteriores al incidente"
    ],
    "correct": [2]
  },
  {
    "question": "Consulte la ilustración. Un analista especializado en ciberseguridad está viendo paquetes capturados que se reenviaron al switch S1. ¿Qué dispositivo tiene la dirección MAC d8:cb:8a:5c:d5:8a?",
    "imageURL": "images/imagen03.jpg",
    "options": [
      "PC-A",
      "Servidor web",
      "Router ISP",
      "Servidor DNS",
      "Router DG"
    ],
    "correct": [0]
  },
  {
    "question": "Cuando se ocupa de una amenaza de seguridad y utiliza el modelo de cadena de eliminación cibernética, ¿qué dos enfoques puede utilizar una organización para bloquear posibles ataques en un sistema? (Elija dos opciones.)",
    "options": [
      "Realizar un análisis de malware completo.",
      "Realizar escaneo de vulnerabilidades y pruebas de penetración de forma periódica.",
      "Desarrollar detecciones para el comportamiento de componentes conocidos para diseñar armas.",
      "Reunir archivos de registro web y de correo electrónico para una reconstrucción forense.",
      "Capacitar a los desarrolladores web sobre cómo asegurar códigos."
    ],
    "correct": [1, 4]
  },
  {
    "question": "¿Qué tipo de evidencia respalda una afirmación basada en evidencia obtenida previamente?",
    "options": [
      "Evidencia directa",
      "Evidencia confirmatoria",
      "La mejor evidencia",
      "Evidencia indirecta"
    ],
    "correct": [
      1
    ]
  },
  {
    "question": "Después de la contención, ¿cuál es el primer paso para erradicar un ataque?",
    "options": [
      "Aplicar parche para todas las vulnerabilidades.",
      "Celebrar reuniones para abordar los conocimientos adquiridos.",
      "Identificar todos los hosts que necesitan corrección.",
      "Cambiar todas las contraseñas."
    ],
    "correct": [
      2
    ]
  },
  {
    "question": "¿Cuál es el objetivo de un ataque en la fase de instalación de la cadena de eliminación cibernética?",
    "options": [
      "Establecer el comando y control (CnC) con el sistema objetivo.",
      "Crear una puerta trasera al sistema objetivo para poder acceder a él en el futuro.",
      "Utilizar la información de la fase de reconocimiento para desarrollar un arma contra el objetivo.",
      "Quebrar la vulnerabilidad y obtener el control del objetivo."
    ],
    "correct": [
      1
    ]
  }
  
];

// Inicializar el cuestionario
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');
let userAnswers = questions.map(() => new Set()); // Respuestas del usuario como conjuntos para manejar selecciones múltiples

// Estado inicial: deshabilitar el botón de resultados
submitButton.disabled = true;

// Crear mensaje indicativo dinámico
const messageElement = document.createElement('p');
messageElement.id = 'message';
messageElement.style.textAlign = 'center';
messageElement.style.fontWeight = 'bold';
messageElement.style.color = '#ff0000';
messageElement.textContent = `Responde todas las preguntas para ver los resultados.`;
quizContainer.appendChild(messageElement);

// console.log(questions.length)

// Renderizar las preguntas
questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    // Crea y añade el texto de la pregunta
    const questionText = document.createElement('p');
    questionText.textContent = q.question;
    questionDiv.appendChild(questionText);

    // Si existe una URL de imagen, la crea y la añade
    if (q.imageURL) {
        const questionImage = document.createElement('img');
        questionImage.src = q.imageURL;
        questionImage.alt = "Ilustración de la pregunta";
        questionImage.classList.add('question-image'); 
        questionDiv.appendChild(questionImage);
    }

    // A partir de aquí, el código es el mismo para las opciones
    q.options.forEach((option, i) => {
        const optionButton = document.createElement('div');
        optionButton.classList.add('option');
        optionButton.textContent = option;

        // Evento para manejar la selección de opciones
        optionButton.addEventListener('click', () => {
            // Si es una pregunta con múltiples respuestas correctas
            if (q.correct.length > 1) {
                if (userAnswers[index].has(i)) {
                    userAnswers[index].delete(i); // Desmarcar si ya está seleccionada
                    optionButton.classList.remove('selected');
                } else {
                    userAnswers[index].add(i); // Marcar como seleccionada
                    optionButton.classList.add('selected');
                }
            } else {
                // Pregunta con una única respuesta correcta
                const allOptions = questionDiv.querySelectorAll('.option');
                allOptions.forEach(opt => {
                    opt.classList.remove('disabled');
                    opt.style.pointerEvents = 'auto';
                });
                userAnswers[index] = new Set([i]);
            }

            // Deshabilitar pregunta si todas las opciones están seleccionadas (para preguntas múltiples)
            if (userAnswers[index].size === q.correct.length || q.correct.length === 1) {
                const allOptions = questionDiv.querySelectorAll('.option');
                allOptions.forEach(opt => {
                    opt.classList.add('disabled');
                    opt.style.pointerEvents = 'none';
                });

                // Resaltar respuestas correctas e incorrectas
                allOptions.forEach((opt, j) => {
                    if (q.correct.includes(j)) {
                        opt.classList.remove('selected');
                        opt.classList.add('correct'); // Verde
                    } else if (userAnswers[index].has(j)) {
                        opt.classList.remove('selected');
                        opt.classList.add('incorrect'); // Rojo
                    }
                });

                // Mostrar retroalimentación
                const feedback = document.createElement('p');
                feedback.classList.add('feedback');

                const isCorrect = [...userAnswers[index]].every(
                    selected => q.correct.includes(selected)
                ) && userAnswers[index].size === q.correct.length;

                if (isCorrect) {
                    feedback.textContent = "¡Correcto!";
                    feedback.classList.add('feedback-correct');
                } else {
                    feedback.textContent = "¡Incorrecto!";
                    feedback.classList.add('feedback-incorrect');
                }
                questionDiv.appendChild(feedback);

                // Actualizar estado del botón "Ver resultados"
                checkIfAllAnswered();
            }
        });

        questionDiv.appendChild(optionButton);
    });

    quizContainer.appendChild(questionDiv);
});

// Validar si todas las preguntas fueron respondidas
function checkIfAllAnswered() {
    const allAnswered = userAnswers.every(
        (answer, index) => answer.size > 0 || (questions[index].correct.length === 1 && answer.size === 1)
    );

    if (allAnswered) {
        submitButton.disabled = false;
        messageElement.textContent = "¡Ya puedes ver los resultados!";
        messageElement.style.color = "#28a745"; // Verde
    } else {
        submitButton.disabled = true;
        const unanswered = userAnswers.filter(answer => answer.size === 0).length;
        messageElement.textContent = `Faltan ${unanswered} pregunta(s) por responder.`;
        messageElement.style.color = "#ff0000"; // Rojo
    }
}

// Mostrar los resultados al hacer clic en el botón
submitButton.addEventListener('click', () => {
    let score = 0;

    // Calcular el puntaje solo con respuestas correctas
    userAnswers.forEach((answer, index) => {
        const isCorrect = [...answer].every(selected => questions[index].correct.includes(selected)) &&
                          answer.size === questions[index].correct.length;

        if (isCorrect) {
            score++;
        }
    });

    scoreElement.textContent = `Tu puntaje es: ${score} de ${questions.length}`;
});

