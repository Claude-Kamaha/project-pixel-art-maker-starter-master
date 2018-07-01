// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



    function makeGrid(row,column) {
$('tr').remove();
for(let i = 1;i<=row;i++){
    $('#pixelCanvas').append('<tr></tr>');
    for(let j = 1;j<=column;j++){
     $('tr:last').append('<td></td>');
     $('td').attr("class","cells");
    
}
}
$('.cells').click(function () {
    const color = $('#colorPicker').val();
   
    if ($(this).attr('style')){

        $(this).removeAttr('style');}
    else{
        $(this).attr("style","background-color:" +color);
    }

} );

}
$(document).ready(function(){
$('#sizePicker').submit(function(event){
    event.preventDefault();
    const height = $('#inputHeight').val();
     const width =$('#inputWeight').val();
    
   makeGrid(height,width);
    });

});

 

