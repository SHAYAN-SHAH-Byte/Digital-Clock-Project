//references

let hour = document.getElementById('hour');
let minute = document.getElementById('min');
let second = document.getElementById('sec');




setInterval(()=>{
    let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

h = h % 12;
h = h ? h : 12;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
}, 1000);