const t=document.querySelector("button[data-start]");console.log(t);const o=document.querySelector("button[data-stop]");console.log(o);const e=document.querySelector("body");console.log(e),t.addEventListener("click",(function(t){timerId=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),o.addEventListener("click",(function(t){clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.d40bfb30.js.map
