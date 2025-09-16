alert("JS is linked correctly!");

document.querySelectorAll('.approve').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Internship Approved');
    });
});

document.querySelectorAll('.reject').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Internship Rejected');
    });
});

function gotoInternship() {
    console.log("Redirecting to Internship Tracker Approval");
    window.location.href = "{% url 'tracker_approval' %}";
}

function gotoInternshipRep() {
    window.location.href = "{% url 'report_approval' %}";
}

function gotoInternshipRev() {
    window.location.href = "{% url 'mark_evaluation' %}";
}