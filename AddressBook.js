window.addEventListener('DOMContentLoaded', (event) =>{
    const name = document.querySelector('#name');
    const nameErr = document.querySelector('.name-err');
    output.textContent = salary.value;
    salary.addEventListener('input',function () {
        output.textContent = name.value; 
    });
});
function hello(event)
{
    event.preventDefault();
    let NameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    let name = document.getElementById('name').value;

    if(NameRegex.test(name))
     {
        localStorage.setItem("name",name);
        alert("Hello, "+ localStorage.getItem("name"));
     }else
     {
        alert("Enter valid name");
        document.getElementById("name-err").innerHTML ="Min 3 chars & first letter capital!"
    }
    function check(event)
{
    event.preventDefault();
    let NameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    let name = document.getElementById('name').value;

    if(!NameRegex.test(name))
    document.getElementById("name-err").innerHTML ="Min 3 chars & first letter capital!"
   else
   document.getElementById("name-err").innerHTML =""
}
 document.getElementById('formContent')
    .addEventListener('add',hello);
}