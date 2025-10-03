function playJoke() {
            const audio = document.getElementById("rickrolled");
            const quoteBox = document.getElementById("quote-box");
            
            audio.play();
            quoteBox.innerText = "rick rolado - thyrogi";

            audio.onended = () => {
            randomQuote();
            }
        }
        
        function randomQuote() {
            const quotes = [
                "nois dá o cu porra - thyrogi",
                "*inserir frase legal aqui* - thyrogi",
                "os predadores de perereca venceram - thyrogi",
                "e mais uma vez, a homofobia vence – thyrogi",
                "pqq todo mundo que eu amo é pedófilo :( - thyrogi",
                "só pq ta certo n quer dizer q ta errado - thyrogi",
                "PEGA NO MEU EGOISTA! - thyrogi",
                "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA - thyrogi",
                "eita - thyrogi"
            ];
        
            const theQuote = quotes[Math.floor(Math.random() * quotes.length)];
        
            document.getElementById("quote-box").innerText = theQuote;

            if (theQuote === "rick rolado - thyrogi") {
                
            }
        }
        randomQuote();
        // Prevent quote change if song is playing
        document.getElementById("quote-box").onclick = function() {
            const audio = document.getElementById("rickrolled");
            // If audio is not playing, allow quote change
            if (audio.paused) {
                randomQuote();
            }
        };