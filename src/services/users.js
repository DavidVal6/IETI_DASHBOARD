const API_URL = "http://localhost:8080";
const TOKEN = localStorage.getItem('token');

async function getAllUsers() {
    try{
        const response = await fetch(API_URL + '/api/user', {
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

async function createUser(user_json) {
    try{
        const response = await fetch(API_URL + '/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + TOKEN
            },
            body: JSON.stringify(user_json)
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

async function getUserById(id) {
    try{
        const response = await fetch(API_URL + '/api/user/' + id, {
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

async function updateUser(id, user_json) {
    try{
        const response = await fetch(API_URL + '/api/user/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + TOKEN
            },
            body: JSON.stringify(user_json)
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

async function deleteUserById(id) {
    try{
        const response = await fetch(API_URL + '/api/user/' + id, {
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

export { getAllUsers, getUserById, createUser, updateUser, deleteUserById };