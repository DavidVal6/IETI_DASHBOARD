const API_URL = "http://localhost:8080";
const TOKEN = localStorage.getItem('token');

async function getAllPlantations() {
    try{
        const response = await fetch(API_URL + '/api/plantations', {
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

async function getPlantationById(id) {
    try{
        const response = await fetch(API_URL + '/api/plantations/' + id, {
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

async function createPlantation(plantation_json) {
    try{
        const response = await fetch(API_URL + '/api/plantations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + TOKEN
            },
            body: JSON.stringify(plantation_json)
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

async function updatePlantation(id, plantation_json) {
    try{
        const response = await fetch(API_URL + '/api/plantations/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + TOKEN
            },
            body: JSON.stringify(plantation_json)
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

async function deletePlantationById(id) {
    try{
        const response = await fetch(API_URL + '/api/plantations/' + id, {
            method: 'DELETE',
            headers: {
                'Authorization' : 'Bearer ' + TOKEN
            }
            });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return true;
    } catch (error){
        console.log(`Error: ${error.message}`);
        return false;
    }
}

export { getAllPlantations, getPlantationById, createPlantation, updatePlantation, deletePlantationById};