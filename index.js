var pop_bg=document.getElementById("pop-bg")
var pop=document.getElementById("pop")

var add_btn=document.getElementById("new-btn")
add_btn.addEventListener("click",function(){
    pop_bg.style.display="block"
    pop.style.display="block"
})
var con=document.getElementById("container")

var p_title=document.getElementById("p-title")
var p_content=document.getElementById("p-content")
var p_desc=document.getElementById("p-desc")

function abortfun1(event){
    event.preventDefault()
    var newdiv=document.createElement("div")
    newdiv.setAttribute("class","note")
newdiv.innerHTML=`<h4>Title:</h4> <p>${p_title.value}</p>
                 <h4>Content:</h4> <p>${p_content.value}</p>
                 <h4>Description:</h4> <p>${p_desc.value}</p>
                 <button class="div-btn" id="div-btn1" onclick="rem(event)">Remove</button>
                 <button class="div-btn" id="div-btn2" onclick="abortfun1(event)">Duplicate</button>`

    pop_bg.style.display="none"
    pop.style.display="none"
    con.append(newdiv)
}
function abortfun2(event){
    pop_bg.style.display="none"
    pop.style.display="none"
    event.preventDefault()
}

function rem(event){
    console.log(event)
    event.target.parentElement.remove()
}



