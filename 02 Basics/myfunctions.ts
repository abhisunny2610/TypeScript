function addTwo(num: number){
    return num + 2
}

// addTwo("5")
addTwo(5)

function getUpper (val: string){
    return val.toUpperCase()
}

// getUpper(4)
getUpper("abhishek")


function signUpUser(name: string, email: string, password: string){

}

signUpUser("abhishek", "abhishek@gmail.com", "12345678")

const loginUser = (email: string, password: string, name: string = "abhishek") => {}

loginUser("abhishek@gmail.com", "12345678")


// add a specfic data types of return
function getName(name: string): string{
    return name
}

getName("Hello, abhihsek 👋")


/*
function getValue(myVal: number): boolean{
    if(myVal> 5){
        return true
    }

    return "200 ok"
}

*/

const heros = ["thor", "spiderman", "ironman"]

heros.map((hero): string => {
    return `hero is ${hero}`
} )

export {}