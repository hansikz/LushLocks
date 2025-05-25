const hairCareDatabase = {
  routines: {
    male: {
      normal: {
        damaged: {
          washFrequency: "Every 3 days",
          hairMask: "Twice a week",
          conditioner: "Smoothing conditioner",
          serum: "Frizz control serum"
        },
        splitEnds: {
          washFrequency: "Every 3 days",
          hairMask: "Once a week",
          conditioner: "Split-end repair conditioner",
          serum: "Repair serum"
        },
        dandruff: {
          washFrequency: "Every 2 days",
          hairMask: "Once a week",
          conditioner: "Anti-dandruff conditioner",
          serum: "Scalp nourishing serum"
        },
        thinning: {
          washFrequency: "Every 3 days",
          hairMask: "Once a week",
          conditioner: "Volumizing conditioner",
          serum: "Thickening serum"
        },
        lackShine: {
          washFrequency: "Every 3 days",
          hairMask: "Once a week",
          conditioner: "Shine enhancing conditioner",
          serum: "Gloss serum"
        },
        breakage: {
          washFrequency: "Every 3 days",
          hairMask: "Twice a week",
          conditioner: "Strengthening conditioner",
          serum: "Anti-breakage serum"
        }
      },
      oily: {/* Similar structure, you can fill */}
      dry: {/* ... */},
      curly: {/* ... */},
      straight: {/* ... */},
      wavy: {/* ... */}
    },
    female: {
      normal: {
        damaged: {
          washFrequency: "Every 3 days",
          hairMask: "Twice a week",
          conditioner: "Smoothing conditioner",
          serum: "Frizz control serum"
        },
        splitEnds: {
          washFrequency: "Every 3 days",
          hairMask: "Once a week",
          conditioner: "Split-end repair conditioner",
          serum: "Repair serum"
        },
        dandruff: {
          washFrequency: "Every 2 days",
          hairMask: "Once a week",
          conditioner: "Anti-dandruff conditioner",
          serum: "Scalp nourishing serum"
        },
        thinning: {
          washFrequency: "Every 3 days",
          hairMask: "Once a week",
          conditioner: "Volumizing conditioner",
          serum: "Thickening serum"
        },
        lackShine: {
          washFrequency: "Every 3 days",
          hairMask: "Once a week",
          conditioner: "Shine enhancing conditioner",
          serum: "Gloss serum"
        },
        breakage: {
          washFrequency: "Every 3 days",
          hairMask: "Twice a week",
          conditioner: "Strengthening conditioner",
          serum: "Anti-breakage serum"
        }
      },
      oily: {/* Similar structure, you can fill */}
      dry: {/* ... */},
      curly: {/* ... */},
      straight: {/* ... */},
      wavy: {/* ... */}
    }
  },
  products: {
    shampoo: [
      { name: "Herbal Shine Shampoo", link: "https://example.com/herbal-shine-shampoo" },
      { name: "Moisture Boost Shampoo", link: "https://example.com/moisture-boost-shampoo" },
      { name: "Anti-Dandruff Shampoo", link: "https://example.com/anti-dandruff-shampoo" },
      { name: "Volume Lift Shampoo", link: "https://example.com/volume-lift-shampoo" },
      { name: "Repair & Strengthen Shampoo", link: "https://example.com/repair-strengthen-shampoo" }
    ],
    conditioner: [
      { name: "Nourishing Conditioner", link: "https://example.com/nourishing-conditioner" },
      { name: "Frizz Control Conditioner", link: "https://example.com/frizz-control-conditioner" },
      { name: "Hydrating Conditioner", link: "https://example.com/hydrating-conditioner" },
      { name: "Split-End Repair Conditioner", link: "https://example.com/split-end-repair-conditioner" },
      { name: "Volume Boost Conditioner", link: "https://example.com/volume-boost-conditioner" }
    ],
    serum: [
      { name: "Anti-Frizz Serum", link: "https://example.com/anti-frizz-serum" },
      { name: "Hair Growth Serum", link: "https://example.com/hair-growth-serum" },
      { name: "Repair Serum", link: "https://example.com/repair-serum" },
      { name: "Gloss Enhancer Serum", link: "https://example.com/gloss-enhancer-serum" },
      { name: "Scalp Nourishing Serum", link: "https://example.com/scalp-nourishing-serum" }
    ],
    hairMask: [
      { name: "Deep Repair Hair Mask", link: "https://example.com/deep-repair-hair-mask" },
      { name: "Hydrating Hair Mask", link: "https://example.com/hydrating-hair-mask" },
      { name: "Anti-Dandruff Hair Mask", link: "https://example.com/anti-dandruff-hair-mask" },
      { name: "Frizz Control Hair Mask", link: "https://example.com/frizz-control-hair-mask" },
      { name: "Strengthening Hair Mask", link: "https://example.com/strengthening-hair-mask" }
    ]
  },
  tips: [
    "Avoid excessive heat styling to prevent damage.",
    "Use a wide-tooth comb to detangle wet hair gently.",
    "Trim your split ends every 6 weeks to maintain hair health.",
    "Use sulfate-free shampoos for a gentler cleanse.",
    "Don't wash your hair with very hot water; lukewarm is better.",
    "Apply hair masks once or twice a week for deep nourishment.",
    "Protect your hair from harsh sun exposure by wearing hats or using UV sprays.",
    "Stay hydrated to keep your hair healthy from within.",
    "Eat a balanced diet rich in vitamins and minerals for hair growth.",
    "Avoid tight hairstyles that stress your hair roots.",
    "Rinse hair thoroughly to remove all shampoo and conditioner residues.",
    "Use silk or satin pillowcases to reduce hair breakage during sleep.",
    "Massage your scalp regularly to improve blood circulation.",
    "Limit chemical treatments like coloring or perming.",
    "Avoid brushing hair when wet to prevent breakage.",
    "Use natural oils like coconut or argan oil for extra moisture.",
    "Don't overwash oily hair; it can strip natural oils and cause more oiliness.",
    "Try to reduce stress as it can lead to hair loss.",
    "Switch your hair part occasionally to avoid tension in the same spots.",
    "Use a clarifying shampoo once a month to remove buildup."
  ]
};

function getSelectedConcerns() {
  const checkboxes = document.querySelectorAll('input[name="concerns"]:checked');
  return Array.from(checkboxes).map(cb => cb.value);
}

function limitConcerns() {
  const checkboxes = document.querySelectorAll('input[name="concerns"]');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const selected = getSelectedConcerns();
      if (selected.length > 4) {
        cb.checked = false;
        alert("You can select up to 4 concerns only.");
      }
    });
  });
}

function getRoutine(gender, hairType, concerns) {
  const routines = hairCareDatabase.routines;
  const genderData = routines[gender];
  if (!genderData) return null;
  const hairTypeData = genderData[hairType];
  if (!hairTypeData) return null;

  let combinedRoutine = {
    washFrequency: new Set(),
    hairMask: new Set(),
    conditioner: new Set(),
    serum: new Set()
  };

  concerns.forEach(concern => {
    if (hairTypeData[concern]) {
      combinedRoutine.washFrequency.add(hairTypeData[concern].washFrequency);
      combinedRoutine.hairMask.add(hairTypeData[concern].hairMask);
      combinedRoutine.conditioner.add(hairTypeData[concern].conditioner);
      combinedRoutine.serum.add(hairTypeData[concern].serum);
    }
  });

  // If no concerns matched, fallback to default for hair type (use "damaged" as default)
  if (combinedRoutine.washFrequency.size === 0) {
    const defaultRoutine = hairTypeData["damaged"] || {};
    if (defaultRoutine.washFrequency) combinedRoutine.washFrequency.add(defaultRoutine.washFrequency);
    if (defaultRoutine.hairMask) combinedRoutine.hairMask.add(defaultRoutine.hairMask);
    if (defaultRoutine.conditioner) combinedRoutine.conditioner.add(defaultRoutine.conditioner);
    if (defaultRoutine.serum) combinedRoutine.serum.add(defaultRoutine.serum);
  }

  return {
    washFrequency: Array.from(combinedRoutine.washFrequency).join(", "),
    hairMask: Array.from(combinedRoutine.hairMask).join(", "),
    conditioner: Array.from(combinedRoutine.conditioner).join(", "),
    serum: Array.from(combinedRoutine.serum).join(", ")
  };
}

function showProductsSection(show) {
  // No additional UI needed as it is just radio, handled in main function
}

function displayProducts(showLinks) {
  const productTypes = ["shampoo", "conditioner", "serum", "hairMask"];
  let html = `<h3 class="section-title">Top Recommended Products</h3>`;

  productTypes.forEach(type => {
    html += `<h4>${type.charAt(0).toUpperCase() + type.slice(1)}</h4><ul>`;
    hairCareDatabase.products[type].forEach(product => {
      if (showLinks) {
        html += `<li><a href="${product.link}" target="_blank" rel="noopener">${product.name}</a></li>`;
      } else {
        html += `<li>${product.name}</li>`;
      }
    });
    html += `</ul>`;
  });

  return html;
}

function displayProTip() {
  const tips = hairCareDatabase.tips;
  const randomIndex = Math.floor(Math.random() * tips.length);
  return `<h3 class="section-title">PRO HAIR CARE TIP FROM US</h3><p>${tips[randomIndex]}</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
  limitConcerns();

  const form = document.getElementById("lushlocks-form");
  const result = document.getElementById("result");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const gender = form.gender.value;
    const hairType = form.hairType.value;
    const concerns = getSelectedConcerns();
    const showProducts = form.showProducts.value;

    if (!gender || !hairType) {
      alert("Please select gender and hair type.");
      return;
    }
    if (concerns.length === 0) {
      alert("Please select at least one hair concern.");
      return;
    }

    const routine = getRoutine(gender, hairType, concerns);

    if (!routine) {
      result.style.display = "block";
      result.innerHTML = "<p>Sorry, we couldn't find a routine for your selections.</p>";
      return;
    }

    let html = `<h2>Your Personalized Hair Care Routine</h2>
      <p><strong>Wash Frequency:</strong> ${routine.washFrequency}</p>
      <p><strong>Hair Mask:</strong> ${routine.hairMask}</p>
      <p><strong>Conditioner:</strong> ${routine.conditioner}</p>
      <p><strong>Serum:</strong> ${routine.serum}</p>`;

    if (showProducts === "yes") {
      html += displayProducts(true);
    }

    html += displayProTip();

    result.style.display = "block";
    result.innerHTML = html;

    window.scrollTo({
      top: result.offsetTop,
      behavior: "smooth"
    });
  });
});
