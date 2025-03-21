document.addEventListener("DOMContentLoaded", function () {
    const river = document.querySelector(".river");
    const quackSound = document.getElementById("quack-sound");

    function createDuck() {
        const duck = document.createElement("img");
        duck.src = "Duck.png";
        duck.classList.add("duck");

       
        const riverHeight = river.clientHeight;
        const minBottom = 20;
        const maxBottom = riverHeight - 70;
        const randomBottom = Math.random() * (maxBottom - minBottom) + minBottom;

        duck.style.bottom = `${randomBottom}px`;
        duck.style.left = "-100px"; 

        
        duck.addEventListener("click", () => {
            quackSound.currentTime = 0;
            quackSound.play();
        });

        river.appendChild(duck);

        
        duck.style.animation = "float 2s ease-in-out infinite, moveRight 15s linear infinite";

       
        setTimeout(() => {
            duck.remove();
        }, 15000); 
    }

    
    setInterval(createDuck, 5000);
});
