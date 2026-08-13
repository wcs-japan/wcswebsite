const emailCard = document.getElementById("email-card");
const emailText = document.getElementById("email-text");
const toast = document.getElementById("toast");

const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-btn");
const successPopup = document.getElementById("success-popup");
const closeSuccessPopup = document.getElementById("close-success-popup");
const formError = document.getElementById("form-error");

emailCard.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(emailText.textContent.trim());

    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  } catch {
    toast.textContent = "コピーできませんでした";
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  formError.textContent = "";

  submitButton.disabled = true;
  submitButton.innerHTML =
    '送信中... <i class="fa-solid fa-spinner fa-spin"></i>';

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(
      "https://formspree.io/f/xljrnyay",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      contactForm.reset();
      successPopup.classList.add("show");
    } else {
      const data = await response.json();

      if (data.errors) {
        formError.textContent = data.errors
          .map((error) => error.message)
          .join(", ");
      } else {
        formError.textContent =
          "送信できませんでした。もう一度お試しください。";
      }
    }
  } catch {
    formError.textContent =
      "通信エラーが発生しました。もう一度お試しください。";
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML =
      '送信 <i class="fa-solid fa-paper-plane"></i>';
  }
});

closeSuccessPopup.addEventListener("click", () => {
  successPopup.classList.remove("show");
});

successPopup.addEventListener("click", (event) => {
  if (event.target === successPopup) {
    successPopup.classList.remove("show");
  }
});