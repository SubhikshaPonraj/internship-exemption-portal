// Add event listeners to APPROVE and REJECT buttons
document.addEventListener('DOMContentLoaded', () => {
    // Get all APPROVE buttons
    const approveButtons = document.querySelectorAll('.approve-btn');
    approveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            handleApproval(row);
        });
    });

    // Get all REJECT buttons
    const rejectButtons = document.querySelectorAll('.reject-btn');
    rejectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            handleRejection(row);
        });
    });
});

// Function to handle approval
function handleApproval(row) {
    // Here you can perform any action like sending data to the server or updating the UI
    const studentName = row.querySelector('td:nth-child(2)').innerText;
    alert(`${studentName} has been approved.`);
    
    // Change the row background color to indicate approval (optional)
    row.style.backgroundColor = '#d4edda';
}

// Function to handle rejection
function handleRejection(row) {
    // Here you can perform any action like sending data to the server or updating the UI
    const studentName = row.querySelector('td:nth-child(2)').innerText;
    alert(`${studentName} has been rejected.`);
    
    // Change the row background color to indicate rejection (optional)
    row.style.backgroundColor = '#f8d7da';
}
function gotoInternship(){
    window.location.href="tracker_approval.html";
}
function gotoInternshipRev(){
    window.location.href="mark_evaluation.html";
}
