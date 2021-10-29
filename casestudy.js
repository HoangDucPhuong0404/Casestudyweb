function showtime() {
    var date = new Date();
    var h = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM"
    if (h == 0){
        h = 12;
    }
    if (h> 12 ){
        h = h-12;
        session ="PM";
    }
    h = (h < 10)? "0"+ h  : h;
    minute = (minute< 10)? "0"+ minute :minute;
    second = (second < 10)? "0"+second : second;
    var time  = h + ":" + minute + ":"+ second + session;
    document.getElementById("Myclockdisplay").innerText=time;
    setTimeout(showtime, 1000);
    // console.log(time)
    // document.getElementById("Myclockdisplay").textContent=time;
    // setTimeout(showtime,1000);
}
showtime();
function addthing() {
   var textbox =document.getElementById("textbox").value ;console.log(textbox)
    if(textbox == "restaurant" || textbox == 1 || textbox =="nha hang" || textbox =="nha hang new york"){
        window.open('https://bfplny.com/', '_blank');
    }
    if (textbox == "bridge" || textbox == 2 || textbox == "cau o new york" ){
        window.open( 'https://www.tripadvisor.com/', '_blank');
      }
      if(textbox == "booking hotel" || textbox == 3 || textbox == "hotel" || textbox == "khach san"){
        window.open( 'https://www.nyc.com/', '_blank');
      }
      if(textbox == "skyscrapper" || textbox == 4 || textbox == "nha choc troi" || textbox == "famous skyscrapper"){
        window.open( 'https://www.skyscrapercenter.com/', '_blank');
      }
    else {
        alert("Nhập số từ 1 - 4 để tìm kiếm");
    }
 
}