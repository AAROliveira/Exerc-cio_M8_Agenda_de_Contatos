document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    addContact(name, phone, email);
    this.reset();
});

function addContact(name, phone, email) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
    `;
    document.querySelector('#contactTable tbody').appendChild(newRow);
}
