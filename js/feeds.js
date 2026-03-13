async function loadWorld(){

const rss="https://nitter.net/ReutersWorld/rss";

const url="https://api.rss2json.com/v1/api.json?rss_url="+rss;

const res=await fetch(url);

const data=await res.json();

render(data);

}

async function loadScience(){

const rss="https://nitter.net/nature/rss";

const url="https://api.rss2json.com/v1/api.json?rss_url="+rss;

const res=await fetch(url);

const data=await res.json();

render(data);

}

function render(data){

let html="";

data.items.slice(0,10).forEach(a=>{

html+=`<p><a href="${a.link}" target="_blank">${a.title}</a></p>`;

});

document.getElementById("feed").innerHTML=html;

}
