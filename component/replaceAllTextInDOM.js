let docAll = document.querySelectorAll("p, h1, h2, h3, h4 ,h5, span");
console.log("docAll  :", docAll);

[...docAll].map(txt => txt.innerText = txt.innerText.replace(/[eE]/g,"😛"));
// [...docAll].map(txt => txt.innerText = txt.innerText.replace(/[aA]/g,"👍"));
[...docAll].map(txt => txt.innerText = txt.innerText.replace(/[oO]/g,"😗"));