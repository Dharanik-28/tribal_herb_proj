
function showToast(message){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=message;t.style.display='block';
  setTimeout(()=>t.style.display='none',2200);
}
function goRegister(){window.location.href='registration.html'}
function searchPlants(){
  const el=document.getElementById('siteSearch')||document.getElementById('heroSearch');
  const q=el?el.value.trim():'';
  if(q){window.location.href='plants.html?search='+encodeURIComponent(q);}
}
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.login-btn').forEach(b=>b.addEventListener('click',goRegister));
  const btn=document.getElementById('searchBtn');
  if(btn)btn.addEventListener('click',searchPlants);
  const input=document.getElementById('heroSearch');
  if(input)input.addEventListener('keydown',e=>{if(e.key==='Enter')searchPlants()});
});
// PUT YOUR PERENUAL API KEY HERE
  const API_KEY = "sk-Mfih6ab760ac517d320025";

  async function searchPlant() {

    const plantName =
      document.getElementById("plantInput").value.trim();

    const result =
      document.getElementById("result");

    if (!plantName) {
      result.innerHTML =
        "<p>Please enter a plant name.</p>";
      return;
    }

    result.innerHTML =
      "<p>Loading...</p>";

    try {

      const url =
        `https://perenual.com/api/v2/species-list` +
        `?key=${"sk-Mfih6ab760ac517d320025"}` +
        `&q=${encodeURIComponent(plantName)}`;

      const response = await fetch(url);

      const data = await response.json();

      console.log(data);

      if (!response.ok) {
        throw new Error(
          data.message || "API request failed"
        );
      }

      if (!data.data || data.data.length === 0) {

        result.innerHTML =
          `<p>No plant found for "${plantName}".</p>`;

        return;
      }

      result.innerHTML = "";

      data.data.forEach(plant => {

        const image =
          plant.default_image?.regular_url ||
          plant.default_image?.original_url ||
          "";

        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

          ${
            image
              ? `<img src="${image}" alt="${plant.common_name || "Plant"}">`
              : ""
          }

          <h2>
            🌿 ${plant.common_name || "Unknown"}
          </h2>

          <p>
            <strong>Scientific Name:</strong>
            ${plant.scientific_name?.[0] || "N/A"}
          </p>

          <p>
            <strong>Family:</strong>
            ${plant.family || "N/A"}
          </p>

          <p>
            <strong>Origin:</strong>
            ${plant.origin?.join(", ") || "N/A"}
          </p>

          <p>
            <strong>Type:</strong>
            ${plant.type || "N/A"}
          </p>

          <p>
            <strong>Cycle:</strong>
            ${plant.cycle || "N/A"}
          </p>

        `;

        result.appendChild(card);

      });

    } catch (error) {

      console.error(error);

      result.innerHTML = `
        <p class="error">
          ❌ ${error.message}
        </p>
      `;
    }
  }
