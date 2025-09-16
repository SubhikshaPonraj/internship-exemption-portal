// When "Book a Slot" button is clicked, open the modal
document.getElementById('book-slot-btn').addEventListener('click', function() {
  document.getElementById('slot-modal').style.display = 'flex';
});

// When "Book Now" is clicked, close the modal
document.getElementById('book-now-btn').addEventListener('click', function() {
  document.getElementById('slot-modal').style.display = 'none';
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