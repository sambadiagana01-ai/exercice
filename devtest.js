// Tableau d'utilisateur 
const users = [
    {prenom:'Samba' , nom:'Diagana' , statut: 0, age: 12, role:'admin'},
    {prenom:'Fallou' , nom:'Cisse' , statut: 0, age: 13, role:'admin'},
    {prenom:'Adama' , nom:'Faye' , statut: 0, age: 42, role:'user'},
    {prenom:'Dior' , nom:'Sylla' , statut: 0, age: 32, role:'user'},
    {prenom:'Babacar' , nom:'Seck' , statut: 0, age: 17, role:'user'}
];

//Créer une fonction flécher nommer getadmins qui prend en parametre le tableau  et retourne un tableau contenant
//  tous les utilisateurs ayant le role admin
//Faites l'appel de la fonction pour afficher le resultat.

const getadmins = (users) =>{ 
   return users.filter(users => users.role === 'admin')

};
console.log(getadmins(users));

let user = {prenom:'Cheikh' , nom:'Diao' , statut: 0, age: 12, role:'admin'}
// Recuperer le prenom, le nom et role de l'utilisateur et de les afficher

let Pnom = user.prenom;
let nom1 = user.nom;
let role1 = user.role;
console.log(Pnom,nom1,role1);

// Destructuration
const {prenom,nom,role} = user;
console.log(prenom,nom,role);

//utilisation de Map

let usermap = users.map(({prenom,role}) => {
    return { 
        p:prenom,
        r:role
    }
});
console.log(usermap);

/*
    TP a Faire
    -Destructuration  
    Recuperer le 1er utilisateur et le mettre dans une variable appelée user1, le 3 dans user3
    et on ignore le 2em

    -SPREAD OPERATOR
    creation d'un autre tableau appelé ekip contenant tous les données du premier tableau plus un nouvel utilisateur a
    la fin sans utiliser push
    Modifier le statut du 2em utilisateur du tableau users
*/

console.log("1. Destructuration");

// 1. Destructuration : user1 = 1er, user3 = 3e (on saute le 2e avec une virgule)
const [user1, , user3] = users;
console.log(user1, user3);

// 2. Spread : copier users + ajouter un nouvel utilisateur à la fin
const ekip = [...users, {prenom:'Awa', nom:'Ndiaye', statut: 0, age: 25, role:'user'}];
console.log(ekip);

// 3. Modifier le statut du 2e utilisateur
users[1].statut = 1;
console.log(users);




