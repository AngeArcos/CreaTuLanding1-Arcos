
const products = [ 
    {
        id: "C1",
        name: "Curso autismo",
        description: "para estudiantes",
        price: 50000,
        stock: 10,
        image: "/img/dirigido-a-kine.jpg", 
        category: "cursos"
    },
    {
        id: "C2",
        name: "Curso deficit atenconal",
        description: "para profesionales",
        price: 40000,
        stock: 10,
        image: "/img/nuestros-espacios-foto2.jpg", //Primero añado la barra, esto asume que estamos parados sobre la carpeta public. Vamos a añadir la etiqueta img a "items.jsx"
        category: "cursos"
    },
    {
        id: "C3",
        name: "Curso integración sensorial",
        description: "para estudiantes y profesionales",
        price: 30000,
        stock: 10,
        image: "/img/nuestros-espacios-foto3.jpg", 
        category: "cursos"
    },
    {
        id: "G1",
        name: "Guia para padres",
        description: "Para padres de niños con autismo",
        price: 10000,
        stock: 15,
        image: "/img/dirigido-a-kine.jpg",
        category: "Guias"
    },
    {
        id: "G2",
        name: "Guia para profesores",
        description: "Para profesores de niños con altas capacidades",
        price: 5000,
        stock: 15,
        image: "/img/nuestros-espacios-foto2.jpg", 
        category: "Guias"
    },
    {
        id: "A1",
        name: "Asesoría de casos",
        description: "Evaluación y análisis de casos",
        price: 20000,
        stock: 3,
        image: "/img/dirigido-a-kine.jpg", 
        category: "Asesorias"
    },
    {
        id: "A2",
        name: "Asesoría práctica",
        description: "para profesionales",
        price: 80000,
        stock: 4,
        image: "/img/nuestros-espacios-foto2.jpg", 
        category: "Asesorias"
    }
]

const getProducts = () => { 
    return new Promise ( (resolve, reject)=> { 
        setTimeout(()=>{ 
            resolve(products)
        }, 2000 )
         
    })
}
//Aqui arriba la tengo ejecutada localmente, ahora

//Tenemos que exportarla e importarla en itemListContainer para luego utilizarla. 
//Hacemos un export nombrado porque puede que cree mas nombres
export { getProducts }