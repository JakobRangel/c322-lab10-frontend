const mode = 1;

const host_local = "http://localhost:8080";
const host_remote = "https://ducks-service-latest-ms4r.onrender.com";

function getHost() {
    return (mode == 0) ? host_local : host_remote;
}

let configuration = {loggedIn: false, hosts: getHost(), token: ""};