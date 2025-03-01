document.getElementById("btn-history").addEventListener("click",
    function(event){
        event.preventDefault();
        const comment = document.getElementById("comments");
        comment.innerHTML = "";
    }
)