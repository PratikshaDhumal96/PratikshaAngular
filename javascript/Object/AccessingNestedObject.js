var myStorage={
    "car":{
            "inside": {
            "glove box":"maps",
            "passenger seat":"crumbs",
                  },
            "outside": {
                "trunk":"jack",
            }
    }
};

var ContentOfglovebox=myStorage.car.inside["glove box"];

console.log(ContentOfglovebox);