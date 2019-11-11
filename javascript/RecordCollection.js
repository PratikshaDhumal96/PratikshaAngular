var collection={
    "2548":{
        "album":"Slippery when wet",
        "artist":"Bon Jovi",
        "tracks":[
            "Let it Rock",
            "You Give Love a Bad Name",
        ]
    },
   "2468": {
    "album":"1999",
    "artist":"Prince",
    "tracks":[
        "1999",
        "Little red Corvette",
    ]
    },
    "1245": {
        "artist":"Robber palmet",
        "tracks":[ ]
        },
        "5439": {
            "album":"Abba Gold"
        
            },
};

// keep a copy of the collection for tests.
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id,prop,value){
if (value === ""){
    delete collection[id][prop];
}else if (prop==="tracks"){
    collection[id][prop]=collection[id][prop] || [];
    collection[id][prop].push(value);
}else{
    collection[id][prop]=value;
}

    return collection;
}

console.log(updateRecords(5439,"artist","Abba"));

