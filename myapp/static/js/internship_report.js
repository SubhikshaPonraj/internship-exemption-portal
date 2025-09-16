document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const fileInputs = document.querySelectorAll('input[type="file"]');
    const submitButton = document.querySelector('button[type="submit"]');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Basic validation for required fields
      const requiredFields = form.querySelectorAll('input[required], select[required]');
      let valid = true;
  
      requiredFields.forEach(field => {
        if (!field.value) {
          field.classList.add('error');
          valid = false;
        } else {
          field.classList.remove('error');
        }
      });
  
      if (!valid) {
        alert('Please fill out all required fields.');
        return;
      }
  
      // File inputs validation (if needed)
      fileInputs.forEach(input => {
        if (input.files.length === 0) {
          alert(`Please upload the file: ${input.previousElementSibling.innerText}`);
          valid = false;
        }
      });
  
      if (!valid) return;
  
      // Simulate form submission (in a real scenario, this would involve form data submission via fetch or form post)
      alert('Form submitted successfully!');
    });
  
    // Functionality to display selected file names
    fileInputs.forEach(input => {
      input.addEventListener('change', function () {
        if (this.files.length > 0) {
          this.nextElementSibling.textContent = this.files[0].name;
        }
      });
    });
  });
  function gotoInternship(){
    window.location.href="internship_tracker.html";
}
function gotoInternshipRev(){
    window.location.href="review.html";
}
function gotoInternshipRep(){
    window.location.href="internship_report.html";
}
function gotoInternshipStatus(){
  window.location.href="status.html"; 
}
document.querySelector(".logout").addEventListener("click",function(){
  window.location.href='login.html';
})