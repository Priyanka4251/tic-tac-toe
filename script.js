let turn = "X"
let isgameover= false;
/////function to change the turn////////////////
const changeTurn = ()=>{
    return turn=== "X"? "0":"X"
}

////////////////////function to check the winner/////////////////
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],   
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "-won 🤩"
            isgameover = true;
            document.querySelector("img").style.display= "inline-block";
        }
    })

}


////////////////main logic///////////////////////
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn=changeTurn();
            checkWin();
            if(isgameover == false){
                document.getElementsByClassName("info")[0].innerText = `Turn for ${turn}`;
            }
            
        }
    })
})
////////////////////reset/////////////////////////////////////
let reset = document.querySelector("#reset");
reset.addEventListener("click",() =>{
    let boxtext= document.querySelectorAll(".boxtext")
    Array.from(boxtext).forEach(element => {
        element.innerText="";
    });
    turn= "X";
    isgameover = false;
    document.querySelector(".info").innerText = `Turn for ${turn}`
    document.querySelector("img").style.display= "none"
})