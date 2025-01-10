var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;
var maxAttempts = 5;
var images = ['image1.png', 'image2.png', 'image3.png','image4.png','image5.png']; 
var currentImageIndex = 0;

document.getElementById('btn').addEventListener('click', function() {
    if (attempts >= maxAttempts) {
        display('Game over! You have used all your attempts. The number was ' + randomNumber);
        randomNumber=Math.floor(Math.random() * 100) + 1;
        return;
    }

    var guess = parseInt(document.getElementById('guess').value);
    attempts++;
    
    if (guess === randomNumber) {
        display('Congratulations! You have guessed the number correctly in ' + attempts + ' attempts');
        updateImage();
        randomNumber=Math.floor(Math.random() * 100) + 1;
    } else if (guess > randomNumber) {
        display('Your guess is too high');
    } else {
        display('Your guess is too low');
    }
});

function display(msg) {
    document.getElementById('result').textContent = msg;
}

function updateImage() {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        document.getElementById('image').src = images[currentImageIndex];
    } else {
        display('You have completed all images!');
    }
}