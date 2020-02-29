// add any JS code here
var todoArray = [];

class Todolist {
    constructor (title, due, rank, desc) {
        this.title = title;
        this.due = due;
        this.rank = rank;
        this.desc = desc;
    }
};

$('#saveList').click( function(){

    let title = $('#title').val();
    let due = $('#date').val();
    let rank = $('#rank').val();
    let desc = $('#desc').val();

    var list = new Todolist(title, due, rank, desc);

    todoArray.push(list);

    let arraySize = todoArray.length;

    $('#saveListCount').html(arraySize);

});

$('#polulateList').click( displayList );

function displayList() {
    
    $('#listContainer').html("");

    var container = '';

    todoArray.forEach( (list, key) => {

        container =  `<li><button class="done" data="${key}">Done</button>`;

            for( const item in list ) {                
                container += `${item} = ${list[item]} | `;            
            }  
        container += `</li>` 

        $('#listContainer').append(container); 

    });
}



$('#listContainer').on('click', '.done', function(){
    var delByIndex = this.getAttribute('data');

    if(todoArray.length === 1) {
        todoArray = [];
    } else {    
        var removed = todoArray.splice(delByIndex, delByIndex);
        console.log(removed);
    }
    
    displayList();
    $('#saveListCount').html(todoArray.length);
    
});


$('#clearList').click ( function () {
    todoArray = [];
    $('#listContainer').html("");
    $('#saveListCount').html(todoArray.length);
});