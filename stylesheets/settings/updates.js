function load_updatelist(){
    var output = document.getElementById("set_upd_list");
    var list = updatelist_musik.content;
    var content = "";
    for(i=0;i<list.length;i++){
        content += 
        "<div>"
            +"<h4>"+ list[i].id +" : "+ list[i].title +" "+ list[i].name +"</h4>"
            +"<p>"+ list[i].description +"</p>"
        +"</div>";
    }
    output.innerHTML = content;
}