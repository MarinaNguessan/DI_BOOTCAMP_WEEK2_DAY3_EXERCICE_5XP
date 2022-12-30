//EXERCICE 1

/* Partie 1 */
const people = ["Greg", "Mary", "Devon", "James"];

/* suppression de greg*/

people.shift();
console.log(people);


/* remplacement de "James" par "Jason" */

    for (let i = 0; i < people.length; i++) {
        if (people[i] === 'James') {
            people[i] = 'Jason';
        }
    }
    console.log(people); // affiche ["Mary", "Devon", "Jason"]



/* ajout de votre nom à la fin du peopletableau.*/

    people.push("Marina")
    console.log(people)

/* Écrivez le code qui console.logs l'index de Mary */

let index1 = people.indexOf('Mary');
console.log(index1);

/* Écrivez du code pour faire une copie du people tableau à l'aide de la slice méthode */
let peopleCopy = people.slice(1,3)
console.log(peopleCopy)

/* Écrivez le code qui donne l'index de "Foo". Pourquoi renvoie-t-il -1 ? */

const indexFoo = people.indexOf('Foo');

console.log(indexFoo); // -1

/* Créez une variable appelée last dont la valeur est le dernier élément du tableau */

let last = people[people.length -1]

console.log(last)


/*Partie 2 */

/*1. À l'aide d'une boucle, parcourez le people tableau et console.log chaque personne.*/
    /*premiere methode */
    for(let i = 0; i < people.length; i++) {
        console.log(people[i]);
    }

    /*premiere methode */

    for(const person of people){
        console.log(person)
    }

/* À l'aide d'une boucle, parcourez le peopletableau et quittez la boucle après avoir console.log "Jason" */
    /*a. Indice : jetez un œil à l' breakénoncé de la leçon.*/

/*premiere methode */

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === 'Jason') {
    break;
    }
}

/* deuxieme methode */

for (const person of people) {
    console.log(person);
    if (person === 'Jason') {
    break;
    }
}


//Exercice 2 : Vos Couleurs Préférées 

/*. Créez un tableau appelé colors où la valeur est une liste de vos cinq couleurs préférées.*/

const colors = ["rouge", "bleu", "vert", "jaune", "orange"]

/* Bouclez à travers le tableau et pendant que vous bouclez console.log une chaîne comme ceci : "Mon choix n°1 est bleu", "Mon choix n°2 est rouge" ect… */

for (let i = 0; i < colors.length; i++) {
    console.log(`Mon choix n°${i + 1} est ${colors[i]}`);
}


/* changez-le en console.log "Mon 1er choix", "Mon 2ème choix", "Mon 3ème choix", en choisissant le suffixe correct pour chaque numéro.*/

const suffixes = ['er', 'ème', 'ème', 'ème','ème'];

for (let i = 0; i < colors.length; i++) {
    console.log(`Mon ${i + 1}${suffixes[i]} choix est ${colors[i]}`);
}

// Exercice 3 : Répéter La Question 

/*1.Demander à l'utilisateur un numéro.*/
    /*a. Astuce : Vérifiez le type de données que vous recevez à partir de l'invite (c.-à-d. Utilisez la typeofméthode)*/
let nbr = prompt("Veuillez entrer un nombre svp")

console.log(typeof(nbr));

/*2.Tant que le nombre est inférieur à 10, continuez à demander à l'utilisateur un nouveau numéro.*/
    /* b. Astuce : Quelle whileboucle est la plus pertinente pour cette situation ? */

while (parseInt(n) < 10) {
    n = prompt('Veuillez entrer un numéro supérieur à 10 : ');
}


// Exercice 4 : Gestion Du Bâtiment

/* 1.Copiez et collez l'objet ci-dessus dans votre fichier Javascript.*/

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

/* 2.Console.log le nombre d'étages du bâtiment.*/

console.log(building['numberOfFloors']);

/*3. Console.log combien d'appartements sont aux étages 1 et 3.*/

const firstFloorApts = building['numberOfAptByFloor']['firstFloor'];
const thirdFloorApts = building['numberOfAptByFloor']['thirdFloor'];
console.log(firstFloorApts +thirdFloorApts);

/*4. Console.log le nom du deuxième locataire et le nombre de pièces qu'il possède dans son appartement.*/


const secondTenantName = building.nameOfTenants[1];
const secondTenantRooms = building.numberOfRoomsAndRent[secondTenantName.toLowerCase()][0];
console.log(`${secondTenantName} a ${secondTenantRooms} chambres dans leur appartement.`)

//5. Vérifiez si la somme du loyer de Sarah et de David est supérieure au loyer de Dan. Si c'est le cas, augmentez le loyer de Dan à 1200.

const sarahRent = building['numberOfRoomsAndRent']['sarah'][1];
const davidRent = building['numberOfRoomsAndRent']['david'][1];
const danRent = building['numberOfRoomsAndRent']['dan'][1];
if (sarahRent + davidRent > danRent) {
    let newdanrent = building['numberOfRoomsAndRent']['dan'][1] = 1200
    console.log(`le loyer de dan est à ${newdanrent} maintenant`)
}


 //Exercice 5 : Famille


/* 1.Créez un objet appelé famille avec quelques paires clé-valeur.*/

const family = {
    mother: "Konate",
    father: "Mamadou",
    children: ["Alice", "Bob"],
    address: "123 Main Street",
    phoneNumber: "555-555-5555"
}

console.log("2.A l' aide d'une for in boucle, console.log les clés de l'objet.")

for (let k in family){
    console.log(k) //les cles
}

console.log("3.À l' aide d'une for inboucle, console.log les valeurs de l'objet.")

for(let k in family){
    console.log(family[k]) // les valeurs
}


// Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

const sentence = [];
for (const key in details) {
    sentence.push(`${key} ${details[key]}`);
}
console.log(sentence.join(' '));


// Exercise 7 : Secret Group

/*1. Un groupe d'amis a décidé de créer une société secrète. Le nom de la société sera la première lettre de chacun de leurs noms triés par ordre alphabétique.*/
    /*a. Indice : une chaîne est un tableau de lettres */

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

/* Trier les noms par ordre alphabétique */
const sortedNames = names.sort();

/* Extraire la première lettre de chaque nom */
const initials = sortedNames.map(name => name[0]);

/* Concaténer les initiales en une seule chaîne */
const societyName = initials.join('');

/*2. Console.log le nom de leur société secrète. La sortie doit être "ABJKPS" */
console.log(societyName);

