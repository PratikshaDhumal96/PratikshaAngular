

var contacts = [
    {
        "firstName":"Akira",
        "lastName":"Lane",
        "number":"4578968742",
        "likes":["Pizza","Coding","Brownie points"]
    },

    {
        "firstName":"Harry",
        "lastName":"Potter",
        "number":"8745968712",
        "likes":["Hogwarts","Magic","Hagrid"]
    },

    {
        "firstName":"Sherlocks",
        "lastName":"Holmes",
        "number":"4578968742",
        "likes":["Intriguing Cases","Violine"]
    },

    {
        "firstName":"Kristian",
        "lastName":"Vos",
        "number":"796453217",
        "likes":["Javascript","Gaming","Foxes"]
    }

];

function lookUpProfile(name,prop){
    for(var i=0; i<contacts.length; i++){
     if(contacts[i].firstName===name){
       return contacts[i][prop] || "No Such Property";
     }   
return "No match contact";
    }
}

var data=lookUpProfile("Akira","likes");  //[ 'Pizza', 'Coding', 'Brownie points' ]

console.log(data);