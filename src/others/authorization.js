let options = {
    method: 'GET',
    headers: {
        'Authorization': 'Token <hash>'
    }
}

const response = await fetch('myapi.com/movies', options) // Promises

fetch("myapi.com/movies", options).then(response => {
    if (response.statues === 403) 
        alert(`You don't have permission`)
})

/**
 * First time creating a token
 */
POST / token // para crear un nuevo token desde el backend pidiendolo desde el front

const opts={
    method: 'POST',
    body: JSON.stringify({
        email: "asdf@gmail.com",
        password: "asdfasdf"
    })
}

fetch('/token', opts)

/**
 * For LOGIN
 * ? Challenges for authentication
 * 1. Creating a token.
 * 2. Storing that token.
 * 3. Requesting a token from the backend.
 */

/**
 * Install -> flask-JWT-Extended
 */
