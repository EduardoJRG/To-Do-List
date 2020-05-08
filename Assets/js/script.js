//Check of specific to dos by clicking
$(`ul`).on(`click`, `li` ,function (){
  $(this).toggleClass(`completed`)
})
  
//click on X to delete to do
$(`ul`).on(`click`, `span`, function(event){
  event.stopPropagation()
  $(this).parent().fadeOut(500, function () {
    $(this).remove()
  })
})

//add to do clicking enter
$(`input:text`).keypress(function(event){
  if ( event.which === 13 ){
    var toDoText =  $(this).val()
    $(this).val('')
    $(`ul`).append('<li> <span>'+ '<i class="fas fa-trash-alt"></i> ' + '</span>' + toDoText +'</li>')
  }
})

//toggle input
$(`.fa-plus`).click(function () {
  $(`input:text`).fadeToggle()
})