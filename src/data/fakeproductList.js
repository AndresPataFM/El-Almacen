const prodList = [
    {name:"Antipulgas Gato", id:"001", type:"Medicinal", price:"450", stock:"32", description:"Antipulgas felino Frontline Plus",},
    {name:"Antipulgas Perro", id:"002", type:"Medicinal", price:"450", stock:"28", description:"Antipulgas Canino Frontline Plus",},
    {name:"Antiparasitario", id:"003", type:"Medicinal", price:"370", stock:"15", description:"Antiparasitario interno Oral Paraqueños",},
    {name:"Alimento Gato Joven", id:"004", type:"Medicinal", price:"4530", stock:"18", description:"Alimento para gatos Kitten de Royal Canin",},
    {name:"Alimento Gato Adulto", id:"005", type:"Alimento", price:"3900", stock:"27", description:"Alimento para gatos adultos Royal Canin Active Life",},
    {name:"Alimento Gato Edad Avanzada", id:"006", type:"Alimento", price:"4620", stock:"15", description:"Alimento para gatos de edad avanzada Royal Canin Mature Consult Stage 1",},
    {name:"Alimento Perro Joven", id:"007", type:"Alimento", price:"4450", stock:"22", description:"Alimento para perros jóvenes de tamaño mediano Royal Canin Puppy Medium.",},
    {name:"Alimento Perro Adulto", id:"008", type:"Alimento", price:"3780", stock:"24", description:"Alimento para perros adultos de tamaño mediano Royal Canin Adult Medium.",},
    {name:"Alimento Perro Edad Avanzada", id:"009", type:"Alimento", price:"4370", stock:"11", description:"Alimento para perros de edad avanzada de tamaño mediano Royal Canin Adgeing",},
    {name:"Juguete de Ratón", id:"010", type:"Juguete", price:"170", stock:"10", description:"Un juguete de ratón de plastico y tela hipoalergénicos",},
    {name:"Hueso Comestible", id:"011", type:"Alimento", price:"450", stock:"7", description:"12(Doce) unidades de huesos comestibles de cuero para perros",},
    {name:"Pelota", id:"012", type:"Juguete", price:"210", stock:"9", description:"Pelota plástica hipoalergénica chillona de mascotas (díametro de 12 cm)",},
]
export default prodList

// ---- Descripcion de como usar la database para que no este en el App.js
//Database
// import {collection, getDocs } from "firebase/firestore";
// import { db } from './data/firebase';
//   useEffect(()=>{
//     //Se declara funcion asincrona para poder usar una await
//     const getFromFirebase = async () => {
//       //trae copia de la referencia de la base de datos
//       //Query trae la tabla items
//       const queryTable = collection(db, "items")
//       /* Para buscar solo 1 objeto, es necesario importar query y where de "firebase/firestore"
//       const queryOneObject = query(queryTable, where("id", "==", "001"))
//       */
//       //getDocs trae la documentacion del query, getDoc trae solo 1, hay que importarlos desde "firebase/firestore"
//       // hay que importar doc
//       // const docRef = doc(db, "tabla", "key")
//       // const snapshop
//       const snapshot = await getDocs(queryTable)
//       //Los datos de la colleccion los obtengo con ".data()", para recorrerlo hay que usar forEach, porque el objeto de firebase no se puede recorrer con map
//       snapshot.forEach(doc => {
//         console.log(doc.data())
//       })
//     }
//     getFromFirebase()
//   }, [])