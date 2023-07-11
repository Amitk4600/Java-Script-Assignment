async function multipleResquest(){
  const [data1,data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((reponse) => reponse.json()),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((reponse1) => reponse1.json()),

  ])
   const combinedData = {
    todo: data1,
    post:data2
   }
};

multipleResquest().then((data) => console.log(data));