function loadData(){
    var request = new XMLHttpRequest();
    var data;
    var dataType = "Json";
    var url = "http://localhost:8080/activities"
    request.open("GET",url);
    request.send();
    request.onload = function () {
        data = dataType.parse(this.response);
    }
    console.log(data);
}

loadData();
