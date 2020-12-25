function billsclick(val){
    console.log(val)
    document.getElementById("output1").value=document.getElementById("output1").value+=val;

}
function clearbill(){
    document.getElementById("output1").value=""
}
function plusbi(){
    var text=document.getElementById("output1").value
    var result=eval(text)
    console.log(result)
    document.getElementById("total").value=result
}
function cleargra(){
    document.getElementById("output1").value=""
}