const gameDirections=()=>{
    let direction=document.querySelector('.directionDiv')
direction.innerHTML=" click the buttons at the bottom to begin!";
}
const playerValue=()=>{
    let pointsValue=document.querySelector('.playerInitialValues')
    pointsValue.innerHTML=" the original player life points are "+Player1.hull+ "points!";

}
const fireValue=()=>{
    let fireValue=document.querySelector('.playerInitialValues')
    fireValue.innerHTML=" the original fire power for player 1 is"+Player1.firePower+ "points!";
    
}
const alienFirePower=()=>{
    let alienPointsValue=document.querySelector('.playerInitialValues')
    alienPointsValue.innerHTML="the original fire power for your alien is"+alien1.firepower+"points"
}


// random number function Math.floor(Math.random() * (max - min) + min)//

console.log("hi");
//lets begin with an object that stores the values



const Player1 = {hull:20,
     firePower:5,
      accuracy:7};

// start of the first alien you face in round1//

//lets define a random number function//
const generateRandom = (min, max) => {
    let random = Math.floor(Math.random() * (max - min) + min);
    return random;
  };
let alien1 ={
    
    hull: generateRandom(3, 6),
  firepower: generateRandom(1, 4),
  accuracy: generateRandom(6, 8), 
  name:"here ya go" 
    }  

    let alien2 ={
    
        hull: generateRandom(3, 6),
      firepower: generateRandom(1, 4),
      accuracy: generateRandom(6, 8), 
      name:"tokyo" 
        }  


        let alien3 ={
    
            hull: generateRandom(3, 6),
          firepower: generateRandom(1, 4),
          accuracy: generateRandom(6, 8),  
          name:"blah blah"
            } 
            
            let alien4 ={
    
                hull: generateRandom(3, 6),
              firepower: generateRandom(1, 4),
              accuracy: generateRandom(6, 8),
              name: "dracarys"  
                } 
                
                let alien5 ={
    
                    hull: generateRandom(3, 6),
                  firepower: generateRandom(1, 4),
                  accuracy: generateRandom(6, 8),
                  name: "haha"  
                    }
                    let alien6 ={
    
                        hull: generateRandom(3, 6),
                      firepower: generateRandom(1, 4),
                      accuracy: generateRandom(6, 8),  
                      name:"hello"
                        }     


let  alienArray=[alien1,alien2,alien3,alien4,alien5,alien6];
let counter=0;
let currentAlien=alienArray[counter]
console.log(currentAlien)

let isHitOne=false;

const alienAttack=()=>{
    let newHull=(Player1.hull-currentAlien.firepower)
    Player1.hull=newHull

    if(currentAlien.accuracy>=7){
        isHitOne=true;
        if(isHitOne=true){
          
            alert("thats a confirmed hit! on uss!")
            alert("your health left is" + newHull + " points!");
            alert("your health has dropped from the attack!"+newHull+"points!")
          if(newHull<=0){
            console.log("Darn you are defeated")
          }
        }
    }
    else{
        console.log("You have evaded the lasers")
        console.log("your health left is" + newHull + " points!");
    }
    // while (Player1.hull > 0) {
    //     alienAttack();
    //   }
    if(Player1.hull<=0){

    
    alert("uss has been defeated!")
    location.reload();
    }
    else{
        playerAttack();
    }
}
isHitTwo=false
console.log(isHitTwo,"hit 2 variable")
const playerAttack=()=>{
    if(Player1.accuracy>=7){
        isHitTwo=true;
    }
    else{
        console.log("the aliens have dodged the attack")
        
    }    

console.log(isHitTwo,"ishittwo")
if(counter>5){
    alert('player wins')
    location.reload()
}
    
       else if(isHitTwo===true){
            newAlienHull=(currentAlien.hull-Player1.firePower)
            console.log("thats a confirmed hit! on the aliens")
            console.log(`this `+currentAlien.name+ ` has `+newAlienHull+" hitpoints left")
        }    
            if(newAlienHull<=0){
                console.log(currentAlien)
              console.log("you have won")
              if(counter<5){
                counter++
              }
              selectAlien(); 
              console.log(counter,"this is the counter");
            //   window.alert("the aliens hitpoints are now "+newAlienHull+"congrats, victory!")
            }
        
   
    

}
 //functions are switched//
const isHeroAlive=()=>{
  playerAttack()
    if (Player1.hull>0) {
        playerAttack()
        console.log("keep on fighting?")
      } else {
        console.log("You have been defeated")
        alert("the uss has been defeated!")
        location.reload()
      }



}

 
// isHeroAlive();




const isAlienAlive=()=>{
  alienAttack()
  if(Player1.hull<=0){
    console.log("the aliens have defeated the uss")
  }
  else{
    console.log("the aliens are still attacking")
  }
}



const selectAlien=()=>{
    currentAlien=alienArray[counter]
}

const retreatOption=()=>{
    alert("You have retreated the game is now over")
    location.reload()

}
              


    


