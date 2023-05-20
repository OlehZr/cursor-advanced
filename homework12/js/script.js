const buttons = document.querySelectorAll('button');

buttons.forEach((el, index) => {
    el.addEventListener('click', () => {
        document.querySelector('.container').innerHTML = "";
        return getUserInfo(index + 1);
    });
});

function renderUser({name, email, address}){
    const userTemplate = `
    <div class = "user">
        <ul class = "user-title">
        <li>Name: ${name.firstname.charAt(0).toUpperCase() + name.firstname.slice(1)} ${name.lastname.charAt(0).toUpperCase() + name.lastname.slice(1)}</li>
        <li>Email: ${email}</li>
        <li>City: ${address.city.charAt(0).toUpperCase() + address.city.slice(1)}</li>
        <li>Street: ${address.street.charAt(0).toUpperCase() + address.street.slice(1)}</li>
        <li>Number: ${address.number}</li>
        </ul>
    </div>
    `;
    document.querySelector('.container').innerHTML += userTemplate;
};

async function getUserInfo(id){
    await fetch(`https://fakestoreapi.com/users/${id}`)
    .then((res) => res.json())
    .then((user) => renderUser(user));
};

// function getUsers(){
//     fetch("https://fakestoreapi.com/users")
//         .then((res) => {
//         return res.json();
//         })
//         .then((users) => {
//             users.forEach(user => {
//             renderUser(user);
//         });
//     });
// }

// getUsers();