$(document).ready(() => {
  const erender = (imagen_url, nom_arte, desc, precio) => {
    const htmlContent = `
      <div class="cart-card">
        <div class="card-img">
          <img src="sources/IMG/${imagen_url}" alt="">
        </div>
        <div class="card-details">
          <div class="card-title">
            <p>${nom_arte}</p>
          </div>
          <div class="card-text">
            <p>${desc}</p>
            <div class="card-price">Precio: $<span class="vals">${precio}</span></div>
          </div>
        </div>
      </div>
    `;
    return htmlContent;
  };

  // Define the fetch requests as promises
  const profilePromise = fetch("http://127.0.0.1:8000/profile/", {
    method: 'POST',
    headers: {
      'Authorization': `Token ${localStorage.getItem("open")}`
    }
  }).then(response => response.json());

  const carritoPromise = fetch("http://127.0.0.1:8000/carrito/", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());

  const artePromise = fetch("http://127.0.0.1:8000/arte/", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json());

  // Use Promise.all to handle all fetch promises
  Promise.all([profilePromise, carritoPromise, artePromise])
    .then(([profileData, carritoData, arteData]) => {
      let art = null;

      // Find the correct art object based on the profile data
      carritoData.forEach(element => {
        if (profileData.id === element.usuario) {
          art = element;
        }
      });

      // Ensure that art.arte is defined and is an array
      if (art && Array.isArray(arteData)) {
        arteData.forEach(element => {
          if (art.arte === element.id) {
            $("#cart-products").append(erender(element.imagen_url, element.nom_arte, element.desc, element.precio));
          }
        });
      }

      // Calculate and display the total price
      const valores = document.getElementsByClassName("vals");
      const valoresSum = () => {
        let sum = 0;
        Array.from(valores).forEach(element => {
          sum += parseInt(element.textContent, 10);
        });
        return sum;
      };

      $("#counter").text($("#cart-products").children().length);
      $('#price').text(valoresSum());
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
});
