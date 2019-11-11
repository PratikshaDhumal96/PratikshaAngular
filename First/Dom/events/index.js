let names=[
    {
        os:'android',
        ver :5.0
    },
    {
        os:'ios',
        ver:11,
    },
    {
        os:'mango',
        ver:5
    },
    {
        os:'rim',
        ver:3
    }

]
   
// console.log(document);


let table=document.getElementById('tabOs')
console.log(table);



names.forEach(os=>{
    let row=document.createElement('tr')

    let tdOs=document.createElement('td')
    tdOs.innerHTML=os.os
    row.appendChild(tdOs)

    let tdVer=document.createElement('td')
    tdVer.innerHTML=os.ver
    row.appendChild(tdVer)

    table.appencChild(row)

    // console.log(os);
})






















