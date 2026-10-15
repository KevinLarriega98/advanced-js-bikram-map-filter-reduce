//RESUELVE LOS EJERCICIOS AQUI

/** Map */

// 1.
const numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados() {
    return numbers.map(numero => numero ** numero);
}

// 2.
let foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

const result2 = foodList.map((comida) => {
    if (comida === "Pizza") {
        return `Como soy de Italia, amo comer ${comida}`;
    }

    if (comida === "Ramen") {
        return `Como soy de Japón, amo comer ${comida}`;
    }

    if (comida === "Paella") {
        return `Como soy de Valencia, amo comer ${comida}`;
    }

    return `Aunque no como carne, el ${comida} es sabroso`;
});

// 3.
const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

const result3 = staff.map(persona => {
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies.join(" y ")}`;
});

/** Filter */

// 4.
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter(numero => numero % 2 !== 0);

// 5.
const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

const result5 = foodList2
    .filter(comida => comida.isVeggie)
    .map(comida => {
        if (comida.name === "Tofu burguer") {
            return `Que rica ${comida.name} me voy a comer!`;
        }

        return `Que rico ${comida.name} me voy a comer!`;
    });

// 6.

const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

const result6 = inventory
    .filter(producto => producto.price > 300)
    .map(producto => producto.name);

/** Reduce */

// 7.
const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((acumulador, numero) => {
    return acumulador * numero;
}, 1);

// 8.
const sentenceElements = [
    "Me",
    "llamo",
    "Kevin",
    "y",
    "quiero",
    "sentir",
    "la",
    "fuerza",
    "con",
    "javascript",
];

const result8 = sentenceElements.reduce((frase, palabra) => {
    return frase + " " + palabra;
});

// 9.
const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

const result9 = books
    .filter(book => book.category === 'code')
    .reduce((total, book) => total + book.price, 0);