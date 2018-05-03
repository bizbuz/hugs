

function AddClick(event)
{
	console.log("I'm in AddClick");
	$.ajax({url: 'api/addItem', type: 'GET', 
		data: {"name":"milk","quantity":"1","upcCode":"","note":"","marked":false,"imageURL":""}}).

      then (function(result){
        console.log("Did addItem");
       
      });
}

function EditClick(event)
{
	console.log("I'm in EditClick");
	$.ajax({url: 'api/editItem', type: 'GET', 
		data: {"name":"milk","quantity":"2","upcCode":"","note":"","marked":false,"imageURL":""}}).

      then (function(result){
        console.log("Did editItem");
       
      }).
      catch()
      {
      	console.log("There was an error");
      	
      };
}

function DeleteClick(event)
{
	console.log("I'm in DeleteClick");
	$.ajax({url: 'api/deleteItem', type: 'GET', 
		data: {"name":"milk","quantity":"2","upcCode":"","note":"","marked":false,"imageURL":""}}).

      then (function(result){
        console.log("Did deleteItem");
       
      });

}


// A $( document ).ready() block.
$( document ).ready(function() {

    console.log( "ready!" );

    /**************************************************
    *             Button Click Listeners              *
    ***************************************************/             

   
	$('#AddButton').click(AddClick);
	$('#EditButton').click(EditClick);
	$('#DeleteButton').click(DeleteClick);
});