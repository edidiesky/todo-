// this is the selectors section of the project
var input = document.querySelector('.input')
var plus = document.querySelector('#plus')
var todolist = document.querySelector('.todolist')


// this represent the listeners section of the project
plus.addEventListener("click", inputo)

// to delete the created list
$('.todolist').on('click', '.delbtn', deletefun )

// to add toggle the list by marking it 
$('.todolist').on('click', '.mbtn', markfun)

// this rep the function section of the project


	function inputo(e) {
	// body...
	e.preventDefault()
	var cardiv = document.createElement("div")
	cardiv.classList.add("divclass")


	var carli = document.createElement('li')
	carli.innerText = input.value;
	carli.classList.add('liclass');
	cardiv.appendChild(carli);

	var markbtn = document.createElement('button')
	markbtn.innerHTML = "<i class='fa fa-thumbs-up' aria-hidden='true'></i>";
	markbtn.classList.add("mbtn")
	cardiv.appendChild(markbtn)


	var delbtn = document.createElement('button')
	delbtn.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>"
	delbtn.classList.add("delbtn")
	cardiv.appendChild(delbtn);



	// at this i need to append the div into the ul
	todolist.appendChild(cardiv);
	input.value = "";
}

function deletefun(argument) {
	$(this).parent().fadeOut(560, function function_name(argument) {
		$(this).remove()
	})
}


function markfun(event) {
	event.stopPropagation()
	$(this).parent().toggleClass('mark')
}



