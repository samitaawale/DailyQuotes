var arrayOfQuotes=[
    {
        "author":"JIm Rohn",
        "quote":"Beware of what you become in pursuit of what you want."
    },
    {
        "author":"Katherine Stream",
        "quote":"The purpose of our lives is to be happy."
    },
    {
        "author":"Invictus Ray",
        "quote":"Life is what happens when you’re busy making other plans."
    },
    {
        "author":"Kate ",
        "quote":"You only live once, but if you do it right, once is enough."
    },
    {
        "author":"Steve Jobs ",
        "quote":"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking."
    },
     
    {
        "author":"Babe Ruth ",
        "quote":"Never let the fear of striking out keep you from playing the game."
    }
]

function randomSelector(arrayLength){
    return Math.floor(Math.random()*arrayLength);
}

function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML='"' + arrayOfQuotes[randomNumber].quote +'"';
    document.getElementById("authorOutput").innerHTML= "-" + arrayOfQuotes[randomNumber].author;


}



