const cities = ["Delhi", "Mumbai", "Ranchi", "Bangalore", "Chennai", "Kolkata"];

const input = document.getElementById("cityInput");
const dropdown = document.getElementById("dropdownList");

input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    dropdown.innerHTML = "";

    if(value === ""){
        dropdown.classList.add("hidden");
        return;
    }

    const filtered = cities.filter(city =>
        city.toLowerCase().includes(value)
    );

    if(filtered.length === 0){
        dropdown.classList.add("hidden");
        return;
    }

    filtered.forEach(city => {
        const li = document.createElement("li");
        li.textContent = city;

        li.addEventListener("click", () => {
            input.value = city;
            dropdown.classList.add("hidden");
            // yahan API call ya function call kar sakte ho
        });

        dropdown.appendChild(li);
    });

    dropdown.classList.remove("hidden");
});
