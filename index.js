document.addEventListener("DOMContentLoaded", () => {
    const ramens = [
        { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://www.marionskitchen.com/wp-content/uploads/2019/05/Shoyu-Ramen3-1200x1500.jpg", rating: 5, comment: "Delicious!" },
        { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://inquiringchef.com/wp-content/uploads/2022/11/Easy-Miso-Ramen_square-0723.jpg", rating: 4, comment: "Very flavorful!" },
        { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://www.seriouseats.com/thmb/IBikLAGkkP2QVaF3vLIk_LeNqHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rich-and-creamy-tonkotsu-ramen-broth-from-scratch-recipe-Diana-Chistruga-hero-6d318fadcca64cc9ac3e1c40fc7682fb.JPG", rating: 3, comment: "Rich broth!" }
    ];
    
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenDetail = document.getElementById("ramen-detail");
    const ramenActions = document.getElementById("ramen-actions");
    const form = document.getElementById("new-ramen-form");
    
    function displayRamens() {
        ramens.forEach(ramen => {
            const img = document.createElement("img");
            img.src = ramen.image;
            img.alt = ramen.name;
            img.addEventListener("click", () => showRamenDetails(ramen));
            ramenMenu.appendChild(img);
        });
    }
    
    function showRamenDetails(ramen) {
        document.getElementById("ramen-image").src = ramen.image;
        document.getElementById("ramen-name").textContent = ramen.name;
        document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
        document.getElementById("ramen-rating").textContent = ramen.rating;
        document.getElementById("ramen-comment").textContent = ramen.comment;
        
        ramenActions.innerHTML = ""; // Clear previous buttons
        
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editRamen(ramen));
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteRamen(ramen));
        
        ramenActions.appendChild(editButton);
        ramenActions.appendChild(deleteButton);
    }
    
    function editRamen(ramen) {
        document.getElementById("name").value = ramen.name;
        document.getElementById("restaurant").value = ramen.restaurant;
        document.getElementById("image").value = ramen.image;
        document.getElementById("rating").value = ramen.rating;
        document.getElementById("comment").value = ramen.comment;
    }
    
    function deleteRamen(ramen) {
        const index = ramens.findIndex(r => r.id === ramen.id);
        if (index !== -1) {
            ramens.splice(index, 1);
            ramenMenu.innerHTML = "";
            displayRamens();
            ramenDetail.innerHTML = "";
        }
    }
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value
        };
        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
    
    displayRamens();
});
