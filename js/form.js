//------------------------------------
//FORM FIREBASE
//------------------------------------
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBQg0_yyu_RLiVslUxqDyzsQlArT3RVEFE",
  authDomain: "form-contact-cbf79.firebaseapp.com",
  databaseURL: "https://form-contact-cbf79.firebaseio.com",
  projectId: "form-contact-cbf79",
  storageBucket: "form-contact-cbf79.appspot.com",
  messagingSenderId: "1060572197327"
};
firebase.initializeApp(config);
// Initialize Firebase

const form = document.getElementById('contactForm'); // Obtenemos la referencia al formulario

    if(form){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
      form.addEventListener('submit', contactForm); // Al momento de enviar el formulario, ejecuta la función "contactform"
    }

    function contactForm(event) {
      event.preventDefault(); // Prevenimos el comportamiento por defecto de un formulario (Enviar por URL los parametros)
      const name = document.getElementById('name'); // Obtenemos la referencia a cada uno de nuestros elementos del formulario
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const message = document.getElementById("menssage");
      const data = {
        'name': name.value,
        'email': email.value,
        'phone': phone.value,
        'message': message.value
      }; // Creamos un objecto con todos los elementos de nuestro formulario.
      saveContactForm(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
      form.reset(); // borramos todos los campos. 
    }

  function saveContactForm(data) {
    firebase.database().ref('contact').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
      .then(function(){
         // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
      })
      .catch(function(){
        // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
      });
  };
