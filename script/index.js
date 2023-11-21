var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});


let form = document.getElementById("form");
let formChild = form.querySelectorAll("input");
let submitForm = document.getElementById("submit_form");






submitForm.addEventListener('submit', function(event){
    event.preventDefault();

    
    const form = event.target;
    const formFields = form.elements;
    const data = {
        name: formFields.name.value,
        email: formFields.email.value,
        messenger: formFields.messenger.value,
        number: formFields.tel.value,
        place1: formFields.InKorea.value,
		place2: formFields.NotInKorea.value
    }
    sendForm(data);
});



    
     async function sendForm(data) {
        try{
     const response = await fetch ( 'https://7o6etacopp.api.quickmocker.com/ahhhhffddhh##', {
         method: 'POST',
         headers: {'Content-type' : 'application/json'},
         body: JSON.stringify(data)
     });
     const result = await response.json();
       
        document.getElementById('text').innerText = "Ваша завка в обработке. Мы свяжемся с вами в ближайшее время.";
    } catch(error) {
        document.getElementById('message').innerText = 'Данные введены неверно!';
    }
	alert('jjj')
}

for (let i = 0; i<formChild.length; i++){
    formChild[i].addEventListener("input", function(event){
        if(document.getElementById('message').innerText) {
            document.getElementById('message').innerText = null;
        }
       
    })
}


