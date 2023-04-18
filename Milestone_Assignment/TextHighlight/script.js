



function highlight () {
    let myParagraph = document.getElementById("myPara");
    let words = myParagraph.textContent.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 8 ) {
          // create a new span element to wrap the word
          const span = document.createElement('span');
          span.textContent = words[i];
        
          // replace the word with the span element
          words[i] = span.outerHTML;
        }
      }
    
      // join the words back together and update the paragraph HTML
      myParagraph.innerHTML = words.join(' ');
    }

highlight() ;