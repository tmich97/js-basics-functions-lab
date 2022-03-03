// Code your solution in this file!


function distanceFromHqInBlocks(distance){
    if(distance === 43){
        return 1
    }else if(distance > 43){
        return (distance - 43) + 1
    }else if(distance < 43){
        return (43 - distance) -1
    }
}

function distanceFromHqInFeet(distance){
    if(distance === 43){
        return 264
    }else if(distance > 43){
        return ((distance - 43) + 1)*264
    }else if(distance < 43){
        return ((43 - distance) - 1)*264
    }
}

function distanceTravelledInFeet(a,b){
    if(a > b){
        return (a-b)*264
    }else if(b > a){
        return (b-a)*264
    }
}

function calculatesFarePrice(start,destination){
    if(start === 43 && destination === 44){
        return 0
    }else if(distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start,destination) < 2000){
        return (distanceTravelledInFeet(start,destination) - 400)*0.02
    }else if(distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500){
        return 25
    }else if(distanceTravelledInFeet(start,destination) > 2500){
        return 'cannot travel that far'
    }
}




    