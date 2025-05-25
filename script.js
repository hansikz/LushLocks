function startQuiz() {
  document.getElementById("quizModal").style.display = "flex";
}

function showHairType() {
  const gender = document.getElementById("gender").value;
  if (gender) {
    document.getElementById("hairTypeSection").style.display = "block";
    document.getElementById("hairConcernSection").style.display = "block";
    document.getElementById("nextBtn").style.display = "inline-block";
  }
}

function showRecommendation() {
  const gender = document.getElementById("gender").value;
  const hairType = document.getElementById("hairType").value;
  const hairConcern = document.getElementById("hairConcern").value;

  let recommendation = "";

  if (gender === "Male") {
    if (hairConcern === "Hair Fall") {
      recommendation = "Use Lushlocks Hair Fall Control Oil & Biotin Gummies for Men 💪";
    } else if (hairConcern === "Dandruff") {
      recommendation = "Try Lushlocks Anti-Dandruff Herbal Shampoo for Him 🌿";
    } else {
      recommendation = "Go for Lushlocks Groom & Shine Kit for Men ✨";
    }
  } else if (gender === "Female") {
    if (hairType === "Curly" && hairConcern === "Frizz") {
      recommendation = "Use Lushlocks Curl Care Serum & Deep Nourish Mask 🌸";
    } else if (hairConcern === "Hair Fall") {
      recommendation = "Try Lushlocks Ayurvedic Scalp Oil + Hair Rescue Capsules 🌿";
    } else {
      recommendation = "Go for Lushlocks Shine & Repair Kit ✨";
    }
  } else {
    recommendation = "Please select your details to get a plan!";
  }

  document.getElementById("result").innerHTML = `<h3>${recommendation}</h3>`;
  document.getElementById("quizModal").style.display = "none";
}
