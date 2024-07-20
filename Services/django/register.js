$(document).ready(()=>{
  $('#register').on('submit', function(event) {
    event.preventDefault();
  });
  $("#reg-btn")

  $("#reg-btn").click(()=>{
    var email = $('#email').val();
    var name = $('#name').val();
    var lastname = $('#lastname').val();
    var password = $('#password').val();
    var valPass = $('#valPass').val();
    fetch("http://127.0.0.1:8000/register/",{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        "nom":`${email}`,
        "ap_pat":`${lastname}`,
        "email":`${email}`,
        "password":`${password}`,
        "desc":`${"default user"}`,
        "pfp":"ninguna",
        "is_staff":false
      })
    })
    .then(response => {
      // Verifica si la respuesta fue exitosa
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Convierte la respuesta a JSON
    })
    .catch(error => {
        // Maneja cualquier error
        console.error(error)
        alert("Hubo un fallo en la creacion del usuario")
    })
  })
})