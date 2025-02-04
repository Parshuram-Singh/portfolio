// Function to shuffle the list items
function shuffleList() {
    const list = document.querySelector('.tech-list');
    const items = Array.from(list.children);
    
    // Randomize the order of the items
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      list.appendChild(items[j]);
    }
  }
  
  // Call the function to shuffle the items
  shuffleList();
  