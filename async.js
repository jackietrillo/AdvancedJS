async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const {
        id = data[1]['id'],
        name = data[1]['name'],
        username = data[1]['username'],
        email = data[1]['email'],
        address = data[1]['address']
    } = data
    console.log(id)
    console.log(name)
    console.log(email)
    console.log(username)
    console.log(address)
}

 getData();