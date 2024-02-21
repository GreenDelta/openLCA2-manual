// Show the details content when printing
function showDetailsForPrint() {
  var detailsElements = document.querySelectorAll("details");
  detailsElements.forEach(function(details) {
    details.setAttribute("open", "");
  });
}

// Run the function when the page is being printed
window.addEventListener("beforeprint", showDetailsForPrint);
