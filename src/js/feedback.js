import { setConstants, setFormFields, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter("feedback");
setConstants();
setFormFields();

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedback-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const formData = new FormData(form);

        // Store form values in a plain object
        const feedbackData = {
            userName: formData.get("userName"),
            reviewDate: formData.get("reviewDate"),
            starRating: formData.get("starRating"),
            favFeature: formData.get("favFeature"),
            writtenReview: formData.get("writtenReview"),
            feedback: formData.get("feedback"),
        };

        // Store it in localStorage
        localStorage.setItem("latestFeedback", JSON.stringify(feedbackData));

        // Count number of submissions
        let numVisits = Number(localStorage.getItem("numVisits")) || 0;
        localStorage.setItem("numVisits", numVisits + 1);

        // Redirect to the success page
        window.location.href = "success.html";
    });
});