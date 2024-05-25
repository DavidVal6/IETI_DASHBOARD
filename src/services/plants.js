const API_URL = "http://localhost:8080";
const TOKEN = localStorage.getItem('token');

async function getAllPlants() {
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

async function createPlant(plant_json) {
    try{
        const response = await fetch(API_URL + '/api/plant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + TOKEN
            },
            body: JSON.stringify(plant_json)
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

async function updatePlant(id, plant_json) {
    try{
        const response = await fetch(API_URL + '/api/plant/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + TOKEN
            },
            body: JSON.stringify(plant_json)
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

async function deletePlantById(id) {
    try{
        const response = await fetch(API_URL + '/api/plant/' + id, {
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

export { getAllPlants, getPlantById, createPlant, updatePlant, deletePlantById };