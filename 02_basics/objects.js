// singleton

//object literals

const JsUser ={
    "full Name" :" saurabh Kumar",

    name :"saurabh ",
    age:20,
    location: "dhanbad", 
    email:"saurabh@google.com",
    isLoogedIn: false,
    lastLoginDays : ["monday","sunday"]
    
}

console.log(JsUser.email)

console.log(JsUser["full Name"])

JsUser.email = "saurabh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = " saurabh@microsoft.com " 