function sendEmail(e) {
  e.preventDefault();
  const params = {
    name: document.getElementById("name").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ks81605";
  const templateID = "template_39p6krl";

  emailjs
    .send(serviceID, templateID, params)
    .then((response) => {
      alert("✅ Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);

      document.querySelector("form").reset();
    })
    .catch((error) => {
      alert("❌ Message failed to send. Try again!");
      console.error("FAILED...", error);
    });
}
