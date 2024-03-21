const table = document.getElementById("data");

function fetchData(callback) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => {
      callback(res);
    });
}

function render(result) {
  let tableHTML = "";
  result.forEach((data) => {
    tableHTML += `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.username}</td>
                <td>${data.email}</td>
                <td>
                  ${data.address.street},
                  ${data.address.suite}, 
                  ${data.address.city}
                 </td>
                <td>${data.company.name}</td>
                <td>${data.phone}</td>
                <td>${data.website}</td>
              </tr>`;
  });
  return tableHTML;
}

fetchData(function (result) {
  table.innerHTML = render(result);
});
