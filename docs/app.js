function loadData(){
    var request = new XMLHttpRequest();
    var data;
    request.open("GET","https://filipebrener.github.io/Activity-Calendar-JSON/activities.json");
    request.send();
    request.onload = function () {
        data = dataType.parse(this.response);
    }
    console.log(data);
}

loadData();
