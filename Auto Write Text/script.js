const text = "There was a California dude going through a desert. He was wearing shorts, sunglasses, a towel and listening to music on his walkman. He was having a good time. Suddenly he sees a caravan approaching. He stops the Arabs and ask them cheerfully: 'Hey dudes how far is the sea?' They look at each other and answered: 'Two thousand miles!' And he says: Wow what a cool beach!!!" 

let index = 0;

function writeText(){
    document.body.innerText = text.slice(0, index)

    index++;


    if (index > text.lenght - 1) {
        index = 0;
    }
}

setInterval(writeText,100);