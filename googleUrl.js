const url = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=834462328952-hmjbsvstqalrd8tqcfmtbvbu9gpvedr2.apps.googleusercontent.com&scope=openid%20profile&redirect_uri=http://localhost:500";

const createGoogleUrl = function (client_id, scope, redirect_uri) {
    return `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`;
}



const client_id = "834462328952-hmjbsvstqalrd8tqcfmtbvbu9gpvedr2.apps.googleusercontent.com";
const scope = "openid profile email";
const redirect_uri = "http://localhost:500";

const googleUrl = createGoogleUrl(client_id, scope, redirect_uri);

module.exports = encodeURI(googleUrl);