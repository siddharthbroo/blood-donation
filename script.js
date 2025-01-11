// Function to check blood compatibility
function checkCompatibility() {
    const bloodGroup = document.getElementById("bloodGroup").value.toUpperCase();
    const compatibilityMap = {
      A: ["A", "AB"],
      B: ["B", "AB"],
      AB: ["AB"],
      O: ["A", "B", "AB", "O"],
    };
  
    const result = document.getElementById("result");
    if (compatibilityMap[bloodGroup]) {
      result.innerHTML = `<strong>Compatible Groups:</strong> ${compatibilityMap[bloodGroup].join(", ")}`;
      result.style.color = "green";
    } else {
      result.innerHTML = `<strong>Error:</strong> Invalid blood group entered.`;
      result.style.color = "red";
    }
  }
  
  // Function to scroll to a specific section
  function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }

// Initialize AOS with repeated animations
AOS.init({
  duration: 1200, // Animation duration in milliseconds
  easing: 'ease-out', // Easing function for the animation
  once: false, // Animation will trigger every time the element is in the viewport
  mirror: true, // Ensure animations trigger when scrolling back up
});

function donateAction() {
  alert("Redirecting to donation page...");
}


  