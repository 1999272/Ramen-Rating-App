const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg", rating: 4, comment: "Rich and savory." }
  ];

  function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramenMenu.innerHTML = ''; // Clear any existing ramen images
  
    ramens.forEach(ramen => {
      const ramenImage = document.createElement('img');
      ramenImage.src = `images/${ramen.image}`;
      ramenImage.alt = ramen.name;
      ramenImage.classList.add('ramen-image');
      ramenImage.dataset.id = ramen.id;
  
      ramenImage.addEventListener('click', handleClick);
  
      ramenMenu.appendChild(ramenImage);
    });
  }

  function handleClick(event) {
    const ramenId = event.target.dataset.id;
    const ramen = ramens.find(r => r.id == ramenId);
  
    document.getElementById('ramen-name').textContent = `Name: ${ramen.name}`;
    document.getElementById('ramen-restaurant').textContent = `Restaurant: ${ramen.restaurant}`;
    document.getElementById('ramen-rating').textContent = `Rating: ${ramen.rating}`;
    document.getElementById('ramen-comment').textContent = `Comment: ${ramen.comment}`;
  }

  function addSubmitListener() {
    const form = document.getElementById('ramen-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const restaurant = document.getElementById('restaurant').value;
      const rating = document.getElementById('rating').value;
      const comment = document.getElementById('comment').value;
      const image = document.getElementById('image').value;
  
      const newRamen = {
        id: ramens.length + 1,
        name: name,
        restaurant: restaurant,
        image: image,
        rating: rating,
        comment: comment
      };
  
      ramens.push(newRamen);
      displayRamens();
  
      // Reset form
      form.reset();
    });
  }

  function main() {
    displayRamens();
    addSubmitListener();
  }
  
  document.addEventListener('DOMContentLoaded', main);

  