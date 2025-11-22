const workers = [];
const experiences = [];
const btnAdd = document.getElementById("add_Worker");
const formContainer = document.getElementById("work-form");
const btnCancel = document.getElementById("cancel");
const btnAddSubmit = document.getElementById("creat");
const imgInput = document.getElementById("worker-image");
const imgPreview = document.getElementById("preview");

// Show Form
btnAdd.addEventListener("click", () => {
  formContainer.style.display = "flex";
});

// Hide Form
btnCancel.addEventListener("click", () => {
  formContainer.style.display = "none";
  formContainer.querySelector("form").reset();
  imgPreview.src = "img/iconParDefault.jpg";
});

// Submit
btnAddSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#work-name").value.trim();
  const roleInput = document.querySelector("#Role").value.trim();
  const imgUrl = document.querySelector("#worker-image").value.trim();
  const teleInput = document.querySelector("#tele").value.trim();
  const emailInput = document.querySelector("#email").value.trim();

  // Experience
  const company = document.getElementById("Company").value.trim();
  const expRole = document.getElementById("expRole").value.trim();
  const fromDate = document.getElementById("From").value.trim();
  const toDate = document.getElementById("to").value.trim();

  // Experiences objet
  const experiences = {
    company: company,
    role: expRole,
    from: fromDate,
    to: toDate,
  };

  //Regex
  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const teleRegex = /^(?:\+212|0)[6-7]\d{8}$/;

  //Validation
  if (!nameRegex.test(nameInput)) {
    alert("Le nom doit uniquement des lettres !");
    return;
  }
  if (!emailRegex.test(emailInput)) {
    alert("Email invalide !");
    return;
  }

  if (imgUrl && !imgRegex.test(imgUrl)) {
    alert("URL d'image invalide !");
    return;
  }
  if (!teleRegex.test(teleInput)) {
    alert("Telephone invalide !");
    return;
  }

  if (!roleInput) {
    alert("Veuillez choisse un rôle !");
    return;
  }

  if (!company || !expRole || !fromDate || !toDate) {
    alert("Veuillez remplir une expérience !");
    return;
  }

  if (fromDate > toDate) {
    alert("Date error: La date de début doit être avant la date de fin !");
    return;
  }

  // Worker (objet)
  const worker = {
    id: Date.now(),
    nameWorker: nameInput,
    RoleWorker: roleInput,
    photoWorker: imgUrl || "img/iconParDefault.jpg",
    teleWorker: teleInput,
    emailWorker: emailInput,
    experience: experiences,
  };

  workers.push(worker);
  formContainer.querySelector("form").reset();
  imgPreview.src = "img/iconParDefault.jpg";
  formContainer.style.display = "none";
  addInBar();
});

//Affichage aside bar
function addInBar() {
  const asideBar = document.getElementById("workerId");
  asideBar.innerHTML = "";

  workers.forEach((wr) => {
    const workerDiv = document.createElement("div");
    workerDiv.setAttribute("id", wr.id);
    workerDiv.classList.add("workerBar");
    workerDiv.innerHTML = `
    <img src="${wr.photoWorker}" alt="Photo" style="width:40px; height:40px; border-radius:50%;">
      <div>
      <div><strong>${wr.nameWorker}</strong></div>
      <div>${wr.RoleWorker}</div>
      </div>
    `;
    asideBar.appendChild(workerDiv);
  });
}

imgInput.addEventListener("input", function () {
  if (imgInput.value.trim() !== "") {
    imgPreview.src = imgInput.value;
  } else {
    imgPreview.src = "img/iconParDefault.jpg"
  }
})

// Add Experience
const experienceContainer = document.getElementById("experience-row");
const btnAddExperience = document.getElementById("add-experience");
const templateDiv = document.createElement("div");
templateDiv.classList.add("experience-row");

let id = 1;
btnAddExperience.addEventListener("click", () => {
  const newExp = templateDiv.cloneNode();
  id++;
  newExp.innerHTML = `
        <label class="form__label">Experience:</label>
                    <div class="experience-row">
                        <label for="Company">Company :</label>
                        <input type="text" id="Company" class="experience-title input" placeholder="Title / Company"
                            required>
                        <label for="expRole">Role :</label>
                        <input type="text" id="expRole" class="experience-role input" placeholder="Reseption"
                            required>
                        <label for="From">From :</label>
                        <input type="date" id="From" class="experience-start" required>
                        <label for="to">To :</label>
                        <input type="date" id="to" class="experience-end" required>
                    </div>
    <button type="button" class="remove-experience  remove-experience-${id}">X</button>
    `;
  experienceContainer.appendChild(newExp);
  const rmbtn = document.querySelector(".remove-experience-" + id);
  // Remove button
  rmbtn.addEventListener("click", () => {
    newExp.remove();
  });
});
const detail = document.querySelectorAll(".add_Worker");

detail.addEventListener("click", (e) => {
  e.preventDefault;
})