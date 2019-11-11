var MyDogObj={
    "name":"Teddy",
    "Height":2.5,
    "color":"white",
  };
  
  delete MyDogObj.tales;

  console.log(MyDogObj);
  
  var OurDog={
      "name":"Quincy",
      "legs":3,
      "tails":2,
      "friends":[],
  };
 delete OurDog['bark'];
  
  console.log(OurDog);
  