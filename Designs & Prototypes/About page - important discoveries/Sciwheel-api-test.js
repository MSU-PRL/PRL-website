const fetch = require("node-fetch");

// Try importing project, sorting by tags, then for each reference, getting comments/notes

const fetchAPI = () =>{
  fetch('https://sciwheel.com/extapi/work/references/notes', {
  method: 'Get',
  headers: {'Authorization': 'Bearer 3E6D88C2CB9D47494DE94FFF891FB9E7',
  }
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

fetchAPI()
