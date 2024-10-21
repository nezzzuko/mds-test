function submitForm(event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = {
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    phonenumber: document.getElementById("phonenumber").value,
  };

  fetch("https://submit-form.com/IWRX9qmqS", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error(
          "Network response was not ok: " + response.statusText
        );
      }
      return response.json();
    })
    .then(function (data) {
      showModal();
      document.getElementById("form").reset(); // Reset the form
    })
    .catch(function (error) {
      console.error(
        "There was a problem with the fetch operation:",
        error
      );
      alert("Submission failed: " + error.message);
    });
}

function showModal() {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  modal.style.display = "block"; // Show the modal
  modalContent.classList.remove("fade-out"); // Ensure it's fully visible

  // Automatically hide after 2 seconds
  setTimeout(() => {
    modalContent.classList.add("fade-out"); // Start fading out
    // After fade out duration, hide the modal completely
    setTimeout(() => {
      modal.style.display = "none";
    }, 500); // Match this duration with the CSS transition duration
  }, 2000); // Keep modal visible for 2 seconds
}