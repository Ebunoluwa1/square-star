// handle contact form
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const submitButton = e.target.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    const formData = new FormData(e.target);
    const jsonData = Object.fromEntries(formData.entries());

    const response = await fetch("https://formspree.io/f/myzewjkv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData),
    });

    if (response.ok) {
      showMessage("✅ Message sent successfully!", "success");
      e.target.reset();
    } else {
      showMessage("❌ Failed to send message. Please try again.", "error");
    }
  } catch (error) {
    showMessage(
      "❌ An error occurred. Please check your internet connection.",
      "error"
    );
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
  }
};

const showMessage = (message, type) => {
  const messageBox = document.getElementById("messageBox");
  messageBox.textContent = message;
  messageBox.className = `text-center p-3 rounded-md ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`;
  messageBox.style.display = "block";

  setTimeout(() => {
    messageBox.style.display = "none";
  }, 5000);
};
// lastly-
    document
      .getElementById("contactForm")
      .addEventListener("submit", handleSubmit);

