const getData = () => {
  fetch("https://date.nager.at/api/v3/publicholidays/2017/AT", {
    method: "GET",
  })
    .then((data) => data.json())
    .then((response) => {
      console.log(response);
      populateData(response);
    })
    .catch((er) => console.error(er));
};

const populateData = (response) => {
  let tbody = document.getElementById("tbody");
  for (let i = 0; i < response.length; i++) {
    let tr = document.createElement("tr");
    let date = document.createElement("td");
    date.textContent = response[i].date;
    date.classList.add("p-4", "bg-secondary", "bg-opacity-25", "fw-semibold");
    tr.appendChild(date);

    let name = document.createElement("td");
    name.textContent = response[i].name;
    name.classList.add("p-4", "bg-success", "bg-opacity-25", "fw-semibold");
    tr.appendChild(name);

    let localName = document.createElement("td");
    localName.textContent = response[i].localName;
    localName.classList.add("p-4", "bg-info", "bg-opacity-25", "fw-semibold");
    tr.appendChild(localName);

    let countryCode = document.createElement("td");
    countryCode.textContent = response[i].countryCode;
    countryCode.classList.add(
      "p-4",
      "bg-warning",
      "bg-opacity-25",
      "fw-semibold"
    );
    tr.appendChild(countryCode);

    tbody.appendChild(tr);
  }
};
getData();
