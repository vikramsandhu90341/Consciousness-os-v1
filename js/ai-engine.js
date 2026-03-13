async function runAI(){

const prompt=document.getElementById("prompt").value;

const res=await fetch("https://openrouter.ai/api/v1/chat/completions",{

method:"POST",

headers:{
"Authorization":"Bearer YOUR_API_KEY",
"Content-Type":"application/json"
},

body:JSON.stringify({

model:"deepseek/deepseek-chat",

messages:[
{role:"user",content:prompt}
]

})

});

const data=await res.json();

document.getElementById("output").innerText=data.choices[0].message.content;

}
