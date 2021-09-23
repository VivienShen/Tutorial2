document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
    displayMeme()
}



//Asynchronous 
async function displayMeme() { 
    try {
        const response = await
        fetch("https://api.imgflip.com/get_memes");
        const jsonResponse = await response.json();
        //required
        console.log(jsonResponse);
        const meme = jsonResponse.data.memes[3];

        const image = document.createElement("img");
        image.src = meme.url;
        image.alt = meme.name;
        image.width = 200;

        const memeContainer = document.querySelector("#meme");
        memeContainer.appendChild(image);
    } catch (error) {
        console.log("Promise failed", error);
    }
}
//in new terminal write "git init"
//git config --global user.email vivienshen88@gmail.com
//git config --global user.name VivienShen
//git remote add origin https://github.com/VivienShen/Tutorial2.git
//git add .
//git commit -m ""
//git push --set-upstream origin master
//git branch renameName master
//git checkout masterCopied

//How to merge two branches?
//git pull from original branch
//switch to the second branch
//git merge master
//select incoming change