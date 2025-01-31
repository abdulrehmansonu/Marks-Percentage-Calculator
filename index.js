//alert("hi sonu")
//alert(07)
//alert(true)
//alert(false)


//a = prompt("Enter your name")
//alert(a)
//document.write(a)





//function abc() {
  //  let obtMarks = prompt ("Enter your obt");
    //let tmMarks = prompt ("Enter your tm")
   // let res = obtMarks / tmMarks* 100
    //document.write(res)
   // console.log(res)
//}
//abc()
//abc()



// Today Class

function getPerc() {
    let name = prompt("Enter Your Name")
    let obtMarks = document.getElementById ("obt1").value;
    let tmMarks = document.getElementById ("tm1").value;

    res = obtMarks/tmMarks * 100
    alert("Dear "+name+ "you have got it " + res + "%")
    document.write("Dear "+name + "you have got it " + res + "%")
    console.log("dear" + name + "you have got it" +res + "%")
}
