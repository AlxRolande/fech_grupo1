
const DATA_URL = "json/data.json"; 

const container = document.getElementById("container"); 


function showData(data) {
  const studentArray = data.students;
  for (const student of studentArray) {
    container.innerHTML += `<p>${student.name} ${student.lastname}</p>`;
  }
}

fetch(DATA_URL)
  .then(response => response.json()) 
  .then(data => {
    showData(data); 
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });