async function fetchData (){
    const reponse = await
    fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data  = await reponse.json();
    console.log(data);
}
fetchData();