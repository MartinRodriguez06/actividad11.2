document.getElementById('registroForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const url = 'https://jsonplaceholder.typicode.com/users';
    const data = {
      Nombre: document.getElementById('nombre').value,
      Apellido: document.getElementById('apellido').value,
      FechaNacimiento: document.getElementById('fechaNacimiento').value,
    };

    fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Respuesta del servidor:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
