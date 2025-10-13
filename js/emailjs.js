function sendemail() {
  let params = {
    name: document.querySelector("#name"),
    mobile: document.querySelector("#mobile"),
    mobile: document.querySelector("#email"),
    message: document.querySelector("#message"),
  };
  emailjs.send("service_ks81605", "template_39p6krl", params).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}
