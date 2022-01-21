const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("btn-login");

const start =()=> {
    loginButton.addEventListener("click", event => {
        let userNameStr = username.value;
        let userPasswordStr = password.value;
        login(userNameStr, userPasswordStr);
    })

}
start();


let userData = [
    {username:"beka", password:"123"},
    {username:"nina", password:"geniosia"},
    {username:"nina", password:"chicho"},
]

// const { username, password } = userData[i]


const login = (name, pass) => {
    let isUser = false;
    for (let i = 0; i < userData.length; i++) {
    if (userData[i].username === name && userData[i].password === pass) {
        isUser = true;
        break;
    }
    }
    if(isUser){
        console.log("Welcome!")
    }else{
        console.log("Not Found!")
    }
}




const signUp = (name, pass) => {
    const newUser = {username : name, password : pass}
    userData.push(newUser);
}
