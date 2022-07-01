function changeColor(elemento){
 var color = document.getElementById(elemento);
    switch (elemento){
        case 'a1':
            color.style.color = "#82508a";
            color.style.textDecoration = "underline #82508a";
            document.getElementById('a2').style.color= "#bcb2bc";
            document.getElementById('a3').style.color= "#bcb2bc";
            document.getElementById('a4').style.color= "#bcb2bc";
            document.getElementById('a2').style.textDecoration = "none";
            document.getElementById('a3').style.textDecoration = "none";
            document.getElementById('a4').style.textDecoration = "none";
            break;
        case 'a2':
            color.style.color = "#82508a";
            color.style.textDecoration = "underline #82508a";
            document.getElementById('a1').style.color= "#bcb2bc";
            document.getElementById('a3').style.color= "#bcb2bc";
            document.getElementById('a4').style.color= "#bcb2bc";
            document.getElementById('a1').style.textDecoration = "none";
            document.getElementById('a3').style.textDecoration = "none";
            document.getElementById('a4').style.textDecoration = "none";
            break;
        case 'a3':
            color.style.color = "#82508a";
            color.style.textDecoration = "underline #82508a";
            document.getElementById('a1').style.color= "#bcb2bc";
            document.getElementById('a2').style.color= "#bcb2bc";
            document.getElementById('a4').style.color= "#bcb2bc";
            document.getElementById('a1').style.textDecoration = "none";
            document.getElementById('a2').style.textDecoration = "none";
            document.getElementById('a4').style.textDecoration = "none";
            break;
        case 'a4':
            color.style.color = "#82508a";
            color.style.textDecoration = "underline #82508a";
            document.getElementById('a2').style.color= "#bcb2bc";
            document.getElementById('a3').style.color= "#bcb2bc";
            document.getElementById('a1').style.color= "#bcb2bc";
            document.getElementById('a2').style.textDecoration = "none";
            document.getElementById('a3').style.textDecoration = "none";
            document.getElementById('a1').style.textDecoration = "none";
            break;
        
    }

}