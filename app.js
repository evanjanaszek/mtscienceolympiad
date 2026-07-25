let auth0Client;


async function initAuth0() {

    auth0Client = await createAuth0Client({

        domain: "mtscienceolympiad.us.auth0.com",

        clientId: "hXhgBXIi9VbPGeJQ968X3EO31SWPfly1",

        authorizationParams: {
            redirect_uri: window.location.origin
        }

    });


    document
    .getElementById("login")
    .onclick = async () => {

        await auth0Client.loginWithRedirect();

    };


}


initAuth0();
