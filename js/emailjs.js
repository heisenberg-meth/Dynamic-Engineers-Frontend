const forms = document.querySelectorAll(".needs-validation");

forms.forEach(function (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity()) {
      sendEmail(form); // pass the form element
    }

    form.classList.add("was-validated");
  });
});

function sendEmail(form) {
  const params = {
    name: document.getElementById("name").value.trim(),
    mobile: document.getElementById("mobile").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  const serviceID = "service_ks81605";
  const templateID = "template_39p6krl";

  emailjs
    .send(serviceID, templateID, params)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("✅ Message sent successfully!");
      form.reset();
      form.classList.remove("was-validated");
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("❌ Message failed to send. Try again!");
    });
}
