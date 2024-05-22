const API_URL = "http://localhost:8080";
const TOKEN = localStorage.getItem('token');

async function getAllPlantations() {
    try{
        const response = await fetch(API_URL + '/api/plant', {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + TOKEN
            }
            });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error){
        console.log(`Error: ${error.message}`);
    }
}

async function getPlantById(id) {
    try{
        const response = await fetch(API_URL + '/api/plant/' + id, {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + TOKEN
            }
            });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error){
        console.log(`Error: ${error.message}`);
    }
}

export { getAllPlantations, getPlantById };