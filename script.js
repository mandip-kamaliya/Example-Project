let clock=document.getElementById("clock");

function showtime(){
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    let session="AM";
    if(h==0){
        h=12;
        
    }
    if(h>12){
        h=h-12;
        session="PM";
    }
    let Hours=(h<10)?"0" + h :h;
    let Minutes=(m<10)?"0" + m:m;
    let Seconds=(s<10)?"0" + s:s;
    
    let curenttime = Hours+":"+Minutes+":"+Seconds+""+":"+
    session;
    document.getElementById("clock").innerHTML=curenttime;
    setInterval(showtime,1000);
}
showtime();