const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            token: null,
            isLoggedIn: false,
            isRegistered: false,
            message: null,
            email: null
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            toggleRegistered: () => {
                const hasSignedUp = getStore().isRegistered;
                setStore({
                    isRegistered: ! hasSignedUp
                });
            },
            toggleLogged: () => {
                const isLogged = getStore().isLoggedIn;
                setStore({
                    isLoggedIn: ! isLogged
                })
            },
            login: async (email, password) => {

                const options = {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(
                        {"email": email, "password": password}
                    )
                }
                try {
                    const response = await fetch('https://3001-4geeksacade-reactflaskh-hw40hsn3xuc.ws-eu54.gitpod.io/api/token', options)
                    if (response.status !== 200) {
                        alert("There has been some error");
                        return false;
                    }
                    const data = await response.json();
                    console.log("This came from the backend", data);
                    sessionStorage.setItem("token", data.access_token);
                    setStore({isLoggedIn: true, token: data.access_token})
                    return true;

                } catch (err) {
                    console.error("There was an error on the Token creation", err)
                }

            },
            syncTokenFromSessionStore: () => {
                const token = sessionStorage.getItem("token");
                console.log("Application just loaded, synching the session storage token")
                if (token && token != "" && token != undefined) 
                    setStore({isLoggedIn: true, token: token})
            },
            logout: () => {
                sessionStorage.removeItem("token");
                console.log("The user is logging out")
                setStore({isLoggedIn: false, token: null})

            },
            getMessage: async () => {
                const store = getStore();
                const options = {
                    headers: {
                        "Authorization": "Bearer " + store.token
                    }
                }
                try { // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/private", options)
                    const data = await resp.json()
                    setStore({message: data.message, email: data.email})
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error)
                }
            }
        }
    };
}
export default getState;
