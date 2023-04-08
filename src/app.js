//  var voceCmoprouOsprodutos = new Promise(function (resolve, reject) {
//      setTimeout(function () {
//          var products = ['Camisa', 'Sapato', 'Calça']
//      resolve('Deu ruim')
//      }, 3000)
//     })

//  voceCmoprouOsprodutos.then(function(products) {
//      console.log(products)
//     }).catch(function(error) {
//      console.log(error)
//  })

                    // Utilizando Axios//
//  var button = document.querySelector('#app button')

//   button.addEventListener('click', function () {
//       axios.get('https://api.github.com/users')
//       .then(function (response) {
//           console.log(response.data[0].login)
//       })
//       .catch(function (error) {
//           console.log(error)
//       }).finally(function () {
//           console.log('Pesquisa finalizada.')
//       })
//   })

                //  Formatando CEP//
 var submitButton = document.querySelector('#app form button')
 var zipCodeField = document.querySelector('#app form input')
 var content = document.querySelector('#app main')

 submitButton.addEventListener('click', run)

 function run (event) {
     event.preventDefault()

     var zipCode = zipCodeField.value

     zipCode = zipCode.replace(' ', '')
     zipCode = zipCode.replace('.', '')
     zipCode = zipCode.trim()

     axios
      .get('https://viacep.com.br/ws/' + zipCode + '/json')
      .then(function (response) {
         if (response.data.erro) {
             throw new Error('CEP inválido')
         }

         content.innerHTML = ''
         createLine(response.data.logradouro)
         createLine(response.data.localidade + '/' + response.data.uf)
         createLine(response.data.bairro)
     })
     .catch(function (error) {
         content.innerHTML = ''
         console.log(error)
         createLine('Ops, algo deu errado!')
     })
 }

 function createLine(text) {
     var line = document.createElement('p')
         var text = document.createTextNode(text)

         line.appendChild(text)
         content.appendChild(line)
 }