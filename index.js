<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple HTML Document</title>
    <style>
       body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
        background: url('data:image/jpeg;base64,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') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 100vh; 
       
       
    }

    .container {
        text-align: center;
/*         padding-top: 200px; */
        
    }

    .text-container {
        display: inline-block;
        position: relative;
        font-size: 30px;
        color: #fff;
        overflow: hidden; /* Hide overflow to simulate typing effect */
        white-space: nowrap; /* Ensure text stays on one line */
    }

    .typed-text {
        display: inline-block;
        white-space: nowrap; /* Ensure text stays on one line */
        overflow: hidden; /* Hide overflow to simulate typing effect */
        border-right: 2px solid #333; /* Border for cursor effect */
    }

    .cursor {
        display: inline-block;
        width: 2px;
        background-color: #333;
        margin-left: 2px;
        animation: blink-caret 0.75s step-end infinite;
    }

    @keyframes blink-caret {
        50% {
            background-color: transparent;
        }
    }
    </style>
</head>
<body>

<header>
    <h1>Welcome to My Website</h1>
</header>

<div class="container">
    <div class="text-container">
        <span id="typed-text" class="typed-text"></span><span class="cursor"></span>
    </div>
</div>

<footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
</footer>

</body>
<script>
     const textElement = document.getElementById('typed-text');
    const text = 'I am devil of my world'; // Text to be typed out
    const speed = 100; // Speed of typing in milliseconds

    let index = 0;
    let wordIndex = 0;
    let isTyping = true;
    const words = text.split(' ');

    function typeWord() {
        if (index < words[wordIndex].length) {
            textElement.textContent += words[wordIndex][index];
            index++;
            setTimeout(typeWord, speed);
        } else {
            if (wordIndex < words.length - 1) {
                textElement.textContent += ' '; // Add space between words
                index = 0;
                wordIndex++;
                setTimeout(typeWord, speed);
            } else {
                isTyping = false; // End typing animation
            }
        }
    }

    typeWord();
</script>
</html>
