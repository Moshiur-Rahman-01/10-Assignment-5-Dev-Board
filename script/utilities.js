function increaseValue(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    document.getElementById(id).innerHTML = convertedValue+1;

}

function decreaseValue(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    document.getElementById(id).innerHTML = convertedValue - 1;
}

function disableButton(id){
    const disabled = document.getElementById(id).disabled = true;
}

function commentsAdd(title,id){
    const comment = document.getElementById(id);
    const t = document.getElementById(title).innerText;
    const p = document.createElement("p");
    p.innerHTML = `
        <p class="bg-indigo-50 p-2 rounded-lg">You have Complete The Task ${t} at 12:48:15 PM</p>
    `
    comment.appendChild(p);
}

function endAlert(id){
    const value = document.getElementById("decrease").innerText;
    const convertedValue = parseInt(value)
    if(convertedValue === 0){
        alert("congrates!!! You have completed all the current task");
    }
}