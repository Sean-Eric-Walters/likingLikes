var counts=[0,0,0];


function add1(i){
    var myElem = document.getElementById("count"+i)
    counts[i]++
    myElem.innerText=counts[i]

    // console.log(myElem)
}


