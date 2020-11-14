function module4(names){
    for (var prop in names ){
        if (names[prop][0].toLowerCase()=== 'j'){
            console.log("Goodbye " +names[prop] )
        }
        else {
            console.log("Hello " +names[prop] )
        }
    }
 }

 names=["Pratik","Animal","Jason","JAyesh"]
 module4(names)
