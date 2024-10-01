// Exercici 1

const estudiant = {
    nom: 'Joan',
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
};

function ex1() {
    const nom = estudiant.nom;
    const edat = estudiant.edat;
    const notaMates= estudiant.notes.matematiques;

    const pEx1 = document.getElementById("ex1");
    pEx1.innerHTML = nom + " té " + edat + " anys i ha tret un " + notaMates + " a matemàtiques. ";

    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.onclick = function() {
        pEx1.innerHTML = "";
        btnEliminar.remove();
    }

    pEx1.appendChild(btnEliminar);
}

// Exercici 2

const coordenades = [12, 5, 8];

function ex2() {
    const coo1 = coordenades[0];
    const coo2 = coordenades[1];
    const coo3 = coordenades[2];

    const pEx2 = document.getElementById("ex2");
    pEx2.innerHTML = "Les coordenades són x=" + coo1 + ", y=" + coo2 + ", z=" + coo3 + ". ";

    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.onclick = function() {
        pEx2.innerHTML = "";
        btnEliminar.remove();
    }

    pEx2.appendChild(btnEliminar);
}

// Exercici 3

const preus = [100, 200, 300, 400];

function ex3() {
    const preus10 = preus.map(preus => Math.round(preus * 1.1));

    const pEx3 = document.getElementById("ex3");
    pEx3.innerHTML = "Els nous preus són: " + preus10.join(", ") + ". ";

    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.onclick = function() {
        pEx3.innerHTML = "";
        btnEliminar.remove();
    }

    pEx3.appendChild(btnEliminar);
}

// Exercici 4

const edats = [16, 21, 18, 24, 12, 30];

function ex4() {
    const edatsMajors18 = edats.filter(edat => edat > 18);

    const pEx4 = document.getElementById("ex4");
    pEx4.innerHTML = "Les edats majors de 18 són: " + edatsMajors18.join(", ") + ". ";

    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.onclick = function() {
        pEx4.innerHTML = "";
        btnEliminar.remove();
    }

    pEx4.appendChild(btnEliminar);
}

// Exercici 5

const notes = [7, 9, 5, 10, 8];

function ex5() {
    const sumaNotes = notes.reduce((accumulador, nota) => accumulador + nota, 0);

    const mitjanaNotes = sumaNotes / notes.length;

    const pEx5 = document.getElementById("ex5");
    pEx5.innerHTML = "La mitjana de les notes és " + mitjanaNotes + ". ";

    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.onclick = function() {
        pEx5.innerHTML = "";
        btnEliminar.remove();
    }

    pEx5.appendChild(btnEliminar);
}

// Exercici 6

function producte(nom, preu, quantitat) {
    const preuDescomptat = preu * 0.95;

    const producte = {
        nom: nom,
        preu: preuDescomptat,
        quantitat: quantitat
    }

    return producte;
}

function ex6() {
    const nom = prompt("Nom del producte:");
    const preu = parseFloat(prompt("Preu del producte"));
    const quantitat = parseInt(prompt("Quantitat del producte:"));

    const nouProducte = producte(nom, preu, quantitat);

    const pEx6 = document.getElementById("ex6");
    pEx6.innerHTML = JSON.stringify(nouProducte, null, 2) + ". ";

    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.onclick = function() {
        pEx6.innerHTML = "";
        btnEliminar.remove();
    }

    pEx6.appendChild(btnEliminar);
}

// Exercici 7

const cotxe = {
    marca: 'Tesla',
    model: 'Model S',
    preu: 80000
};

cotxe.any = 2023;

function ex7() {
    const marca = cotxe.marca;
    const model = cotxe.model;
    const preu = cotxe.preu;
    const any = cotxe.any;

    const pEx7 = document.getElementById("ex7");
    pEx7.innerHTML = "Marca: " + marca + ", Model: " + model + ", Preu: " + preu + "€, Any: " + any + ". ";

    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.onclick = function() {
        pEx7.innerHTML = "";
        btnEliminar.remove();
    }

    pEx7.appendChild(btnEliminar);
}