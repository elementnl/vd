document.getElementById("penguin").addEventListener("click", function() {
    var message = document.getElementById("message");
    var noteContent = document.querySelector(".note-content");

    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
        anime({
            targets: '#message',
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInOutQuad',
            begin: function() {
                message.style.display = 'block';
            },
            complete: function() {
                setTimeout(function() {
                    noteContent.classList.remove("hidden");
                    anime({
                        targets: '.note-content',
                        opacity: [0, 1],
                        duration: 500,
                        easing: 'easeInOutQuad',
                        begin: function() {
                            noteContent.style.display = 'block';
                        }
                    });
                }, 2000); // Wait for 2 seconds before showing the rest of the note
            }
        });
    } else {
        // Hide the note content immediately without waiting
        noteContent.classList.add("hidden");
        noteContent.style.display = 'none';

        // Then hide the main message with animation
        anime({
            targets: '#message',
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInOutQuad',
            complete: function() {
                message.classList.add("hidden");
                message.style.display = 'none';
            }
        });
    }
});

document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("penguin").querySelector("img").src = "https://static.vecteezy.com/system/resources/previews/001/877/031/original/cute-cartoon-happy-penguin-vector.jpg";
});

// "No" button event listeners for hover
var originalPenguinImg = "https://www.iconarchive.com/download/i141855/iconarchive/cute-animal/Cute-Penguin.1024.png"; // Original image
var sadPenguinImg = "https://i.pinimg.com/originals/28/d5/fb/28d5fb9f7aa8614c2c22fc59acbefe8d.png"; // Sad penguin image

document.getElementById("noBtn").addEventListener("mouseenter", function() {
    document.getElementById("penguin").querySelector("img").src = sadPenguinImg;
    this.style.transform = "translateX(90px)"; // Move button to the side
    this.style.transition = "transform 0.3s ease-in-out";
});

document.getElementById("noBtn").addEventListener("mouseleave", function() {
    document.getElementById("penguin").querySelector("img").src = originalPenguinImg;
    this.style.transform = "translateX(0px)"; // Move button back
});
