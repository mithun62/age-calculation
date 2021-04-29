var btn  =document.querySelector("button")




//showing result
var showYear=document.querySelector(".showYear")
var showMonth=document.querySelector(".showMonth")
var showDay=document.querySelector(".showDay")



// create date
var date=new Date()
var presentY=date.getFullYear()
var month=date.getMonth()
var presentM=Number(month)+1
var presentD=date.getDate()

 
 
 

btn.addEventListener("click",function(){

var date =parseInt(document.querySelector(".date").value)
var month=parseInt(document.querySelector(".month").value)
var year=parseInt(document.querySelector(".year").value)
  
  
  
  
  showYear.innerHTML=Math.abs(presentY-year)+" year"
  showMonth.innerHTML=Math.abs(presentM-month)+" month"
  showDay.innerHTML=Math.abs(presentD-date)+" day"
  
})



