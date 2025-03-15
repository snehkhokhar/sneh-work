setInterval(()=>{
    let e = new Date()
    date.innerHTML = e;
    let g = e.getMinutes()
    min.innerHTML = g;
    let f = e.getSeconds()
    sec.innerHTML = f;
    let d = e.getHours()
    d = d % 12;
    d = d ? d : 12;
    hour.innerHTML = d;
},1000)