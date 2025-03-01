const currentDate = new Date();
const formattedDate = currentDate.toDateString();
const cDate = document.getElementById("currentDate");
cDate.innerHTML = formattedDate;
