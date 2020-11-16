function ajax(){

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){

        if(this.readyState==4 && this.status==200){

            var response = JSON.parse(this.responseText);
            var list = response.grocery;
            console.log(list);
            
            var table=document.getElementById('table-body')
            for(var i=0;i<list.length;i++){
                var row = `<tr>
                                 <td>${list[i].serialno}</td>
                                 <td>${list[i].name}</td>
                                 <td>${list[i].quantity}</td>
                                 <td>${list[i].unit}</td>
                                 <td>${list[i].department}</td>
                                 <td>${list[i].notes}</td>
                           </tr>`
                table.innerHTML += row

            }
            
        }
        document.getElementById("demo").innerHTML=output;
       
    }

    xhttp.open("GET","grocerylist.json",true);
    xhttp.send();
}
