function calculateTotal() {
    // Get marks from input fields
    const mark1 = parseInt(document.getElementById("mark1").value) || 0;
    const mark2 = parseInt(document.getElementById("mark2").value) || 0;
    const mark3 = parseInt(document.getElementById("mark3").value) || 0;
    const mark4 = parseInt(document.getElementById("mark4").value) || 0;
    const mark5 = parseInt(document.getElementById("mark5").value) || 0;

    // Calculate total
    const total = mark1 + mark2 + mark3 + mark4 + mark5;

    // Display total
    document.getElementById("totalMark").textContent = total;

}
function gotoInternship(){
    window.location.href="tracker_approval.html";
}
function gotoInternshipRev(){
    window.location.href="mark_evaluation.html";
}
function gotoInternshipRep(){
    window.location.href="report_approval.html";
}

