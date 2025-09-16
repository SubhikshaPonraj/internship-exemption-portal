document.querySelector("form").addEventListener("submit", function(event) {
    const student = document.getElementById("student").value;
    const industry = document.getElementById("industry").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const duration = document.getElementById("duration").value;
    const iqacVerification = document.getElementById("iqac-verification").value;

    if (!student || !industry || !startDate || !endDate || !duration || !iqacVerification) {
        alert("Please fill all required fields.");
        event.preventDefault();
    }
});

// function gotoInternship(){
//     window.location.href = "{% url 'internship_tracker' %}";
// }

// function gotoInternshipRev(){
//     window.location.href = "{% url 'review' %}";
// }

// function gotoInternshipRep(){
//     window.location.href = "{% url 'internship_report' %}";
// }

// function gotoInternshipStatus(){
//     window.location.href = "{% url 'status' %}"; 
// }

// function logout() {
//     window.location.href = "{% url 'login' %}";
// }

// document.querySelector(".logout").addEventListener("click", function(){
//     logout();
// });
