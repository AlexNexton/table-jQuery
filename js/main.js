//java Script is going be put here :)
function getData(cb) { //cb stands for call back

    var xhr = new XMLHttpRequest(); // a built in object that allows us to consume API's
    //give us the method to open -send-close- connections

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");

    xhr.send();

    xhr.onreadystatechange = function () {
        //console.log(this.readyState); shows the states 1,2,3,4
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); //fourth video


        }
    };

}

getData(function (data) {
    console.log(data);
});






/*setTimeout(function(){ // waits for the states to be called until is stores the result in data
    console.log(data);
}, 500); */

/* xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
            document.getElementById("data").innerHTML = this.responseText; //first video
    }
}; */

/*xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
          console.log(JSON.parse(this.responseText)); //third video
    }
}; */

/*function setData(jsonData){
    data = jsonData;
}*/