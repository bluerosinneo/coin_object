(function(){
    window.onload = function(){
        // console.log("hey");

        let containerElement = document.querySelector("#container");
        // console.log(containerElement);

        const coin = {
            state: 0,
            flip: function() {
                this.state = (Math.random() > 0.55) ? 1 : 0 // weighted coin
                // console.log(this.state);
            },
            toString: function() {
                // 2. Return the string "Heads" or "Tails", depending on whether
                //    "this.state" is 0 or 1.
                return (this.state === 1) ? "Heads" : "Tails";
            },
            toHTML: function() {
                const image = document.createElement('img');
                if(this.state === 1){
                    image.src = "assets/img/head.jpg";
                    image.alt = "head";
                }
                else if(this.state === 0){
                    image.src = "assets/img/tail.jpg";
                    image.alt = "tail";
                }
                image.style.height = "75px";
                image.style.width = "75px";
                // console.log(image);
                // 3. Set the properties of this image element to show either face-up
                //    or face-down, depending on whether this.state is 0 or 1.
                return image;
            }
        };

        coin.flip();
        coin.toHTML();

        function display20Flips() {
            const results = [];
            for(let i = 0; i < 20; i++){
                coin.flip();
                let newSpan = document.createElement('span');
                results.push(coin.toString());
                newSpan.innerHTML = " " + results[i] + " ";
                //console.log(newSpan);
                containerElement.appendChild(newSpan);
            }

            // containerElement
            // 4. Use a loop to flip the coin 20 times, each time displaying the result 
            // of the flip as a string on the page.  After your loop completes, return an array with 
            // the result of each flip.
            return results;

        }

        display20Flips();

        function display20Images() {
            const results = [];
            for(let i = 0; i < 20; i++){
                coin.flip();
                let theImg = coin.toHTML();
                results.push(theImg);
                //console.log(newSpan);
                containerElement.appendChild(theImg);
            }
            // 5. Use a loop to flip the coin 20 times, and display the results of each 
            // flip as an image on the page.  After your loop completes, return an array with result 
            // of each flip.
            return results;
        }

        display20Images();


    };
})();

