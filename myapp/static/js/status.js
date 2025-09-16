document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-container input');
    const sortSelect = document.querySelector('.table-controls select');
    const tableRows = document.querySelectorAll('tbody tr');
    const logoutButton = document.querySelector(".logout");

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const filter = searchInput.value.toLowerCase();
            tableRows.forEach(row => {
                const rowText = row.innerText.toLowerCase();
                row.style.display = rowText.includes(filter) ? '' : 'none';
            });
        });
    }

    // Sorting functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const sortOption = sortSelect.value;
            const tableBody = document.querySelector('tbody');
            const rowsArray = Array.from(tableRows);

            if (sortOption === 'Newest') {
                rowsArray.sort((a, b) => new Date(b.cells[3].innerText) - new Date(a.cells[3].innerText));
            } else if (sortOption === 'Oldest') {
                rowsArray.sort((a, b) => new Date(a.cells[3].innerText) - new Date(b.cells[3].innerText));
            }

            rowsArray.forEach(row => tableBody.appendChild(row));
        });
    }

    // Navigation functions
    function navigateTo(url) {
        window.location.href = url; 
    }

    window.gotoInternship = () => navigateTo("/internship-tracker/");
    window.gotoInternshipRev = () => navigateTo("/review/");
    window.gotoInternshipRep = () => navigateTo("/internship-report/");
    window.gotoInternshipStatus = () => navigateTo("/status/");

    // Logout button functionality
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            navigateTo("/login/");
        });
    }
});
