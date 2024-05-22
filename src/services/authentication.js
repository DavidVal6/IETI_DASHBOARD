const API_URL = "http://localhost:8080";

async function login(data_json){
    try {
        const response = await fetch(API_URL + '/api/auth/Authenticate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data_json),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);
    } catch (error){
        alert('Ha ocurrido un error inesperado');
        console.log(`Error: ${error.message}`);
    }
}

export { login };