function getRequest(url){
    var request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    return request.responseText;
}

function createLine(activity){
    let row = document.createElement("tr"); 
    let tdName = document.createElement("td"); 
    let tdSubject = document.createElement("td"); 
    let tdDate = document.createElement("td");
    tdName.innerHTML = activity.name;
    tdSubject.innerHTML = activity.subject;
    tdDate.innerHTML = activity.data;

    row.appendChild(tdName);
    row.appendChild(tdSubject);
    row.appendChild(tdDate);

    return row; 
}

function main(){
    let url = "https://activity-calendar-restapi.herokuapp.com/activities";
    let data = getRequest(url);
    let activities = JSON.parse(data);
    let table = document.getElementById("table");
    document.onload
    activities.forEach(element => {
        let row = createLine(element);
        table.appendChild(row);
    });
}
