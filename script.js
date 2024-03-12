const table = document.getElementById("data");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((res) => {
    table.innerHTML = render(res);
  });

function render(result) {
  let table = "";
  result.forEach((data) => {
    table += `<tr>
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
  return table;
}
