(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
      var n="";
      answer.innerHTML = "<h1>Loading</h1>";
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        for (var i = 0; i < array.length; i++){
        n += "UserId:"+JSON.stringify(array[i].userId)+"</br>"+"Id:"+JSON.stringify(array[i].id)+"</br>"+"Title:"+JSON.stringify(array[i].title)+"</br>"+"Bfody:"+JSON.stringify(array[i].body)+"<hr>" ;
        }
        answer.innerHTML = n;
      })
  })

  cw2.addEventListener("click", function () {
    var n="";
      answer.innerHTML = "<h1>Loading</h1>";
      fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(body => {
        n += "UserId:"+JSON.stringify(body.userId)+"</br>"+"Id:"+JSON.stringify(body.id)+"</br>"+"Title:"+JSON.stringify(body.title)+"</br>"+"Bfody:"+JSON.stringify(body.body)+"<hr>" ;
        
        answer.innerHTML = n;
      })
  })

  cw3.addEventListener("click", function () {
    //TODO implement it
  })

})();
