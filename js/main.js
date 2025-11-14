function addFamousQuote() {
    var citas = [];
    citas.push("El eslabón más débil de la ciberseguridad es el ser humano.");
    citas.push("Un ordenador seguro es un ordenador apagado.");
    citas.push("Sólo hay dos tipos de empresas: las que han sido pirateadas y las que aún no saben que lo han sido.");
    citas.push("En la era digital, los datos son el nuevo petróleo.");
    citas.push("Internet es la escena del crimen del siglo XXI.");
    citas.push("Los hackers solo necesitan tener suerte una vez.");
    citas.push("Las batallas ya no se libran solo en tierra, mar o aire, sino en la red.");

    document.getElementById("famous-quote").innerHTML = '<span>⚠️</span>' +  (citas[Math.floor(Math.random() * citas.length)]);
}

function addTerms() {

    var article = document.createElement("article");

    var terms = {
        "Hacker": "Persona con conocimientos avanzados en informática, dedicado a encontrar vulnerabilidades, rompiendo los límites de la programación en sistemas informáticos para acceder a ellos.",
        "APT": "Grupo de hackers que amenaza de forma prolongada y sigilosa a un objetivo con el fin de robar datos o espiar. Suelen estar vinculados con gobiernos debido a los recursos casi ilimitados que poseen.",
        "Ransomware": "Software malicioso que encripta los datos de los sistemas, con el fin de extorsionar a una empresa o individuo a pagar una suma de dinero a cambio de descifrar los datos.",
        "Exploit": "Programa diseñado para aprovechar una vulnerabilidad en un sistema informático para causar un comportamiento no deseado, como obtener acceso al sistema o extraer información sensible.",
        "0day": "Vulnerabilidad en un software o sistema que es desconocida por el fabricante y para la cuál no existe un parche disponible, los desarolladores han tenido 0 días para corregir el problema.",
        "Criptomoneda": "Divisa digital, descentralizada que no están controladas por ningun banco central y no requiere de intermediarios ni identificación personal lo que lo convierte en un sistema que mejora la privacidad y el anonimato.",
        "Malware": "Software malicioso diseñado para dañar, interrumpir u obtener acceso no autorizado a sistemas informátios.",
        "Gusano": "Software malicioso diseñado para autoreplicarse y propagarse de forma independiente a través de la red, explotando vulnerabilidades de seguridad.",
        "Ingeniería Social": "Técnicas de manipulación psicológica que los hackers utilizan para obtener información confidencial u acceso a sistemas explotando el factor humano, como la confianza.",
        "Supply-Chain Attack": "Ciberataque que se dirige a un eslabón débil de la cadena de suministro de una empresa. El atacante no ataca directamente a la organización objetivo, sino a través de la confianza que esta tiene con sus socios comerciales para distribuir malware, robar datos confidenciales o tomar el control de sus sistemas."
    }

    for (const [key, value] of Object.entries(terms)) {

        var dl = document.createElement("dl");
        var dt = document.createElement("dt");
        var dd = document.createElement("dd");
        dt.textContent = key;
        dd.textContent = value;

        dl.appendChild(dt);
        dl.appendChild(dd);
        article.appendChild(dl)

    }

    var termsSection = document.getElementById("terms");
    termsSection.appendChild(article);
    var def = document.createElement("p");
    def.setAttribute("id", "definition");
    termsSection.appendChild(def);
}

function removeTermColor() {
    var terms = document.querySelectorAll("#terms dt");
    for(var i = 0; i < terms.length; i++) {
        if(terms[i].classList.contains("accent-color")) {
            terms[i].classList.remove("accent-color");
        }
    }
}

function addTermEventListener() {
    var terms = document.querySelectorAll("#terms dt");

    for(var i=0; i<terms.length; i++) {
        terms[i].addEventListener("click", function(e) {
            var term = e.target.textContent;
            
            if(term == lastTermClicked) {
                e.currentTarget.classList.remove("accent-color"); 
                document.getElementById("definition").textContent = "";
                lastTermClicked = null;
            } else {
                removeTermColor();
                e.currentTarget.classList.add("accent-color");
                document.getElementById("definition").textContent = e.target.nextElementSibling.textContent;
                lastTermClicked = term;
            }
                
        });
    }
}
    
var lastTermClicked = undefined;
addFamousQuote();
addTerms();
addTermEventListener();
