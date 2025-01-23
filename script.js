const duckContainer = document.getElementById('duck-container');
const quackSound = document.getElementById('quack-sound');

// Base64 Duck Image
const duckImage = "Duck.png";

// Create Ducks Continuously
function createDuck() {
  const duck = document.createElement('div');
  duck.className = 'duck';
  duck.style.backgroundImage = `url('${duckImage}')`;
  duck.style.top = `${Math.random() * 80}%`; // Random position on the river
  duckContainer.appendChild(duck);

  // Play quack sound
  quackSound.currentTime = 0;
  quackSound.play();

  // Remove duck after it finishes animation
  setTimeout(() => {
    duck.remove();
  }, 10000); // Matches the swim animation duration
}

// Add Ducks Every Few Seconds
setInterval(createDuck, 2000);
