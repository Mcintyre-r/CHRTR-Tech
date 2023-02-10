function rewardCalculator (amount) {
    let floorAmount = Math.floor(amount)
    let rewardpoints = 0
    if(floorAmount > 100) rewardpoints = (((floorAmount-100)*2)+50) 
    else if (floorAmount < 101 && floorAmount > 50) rewardpoints = (floorAmount-50)
  
    return rewardpoints
  }

export default rewardCalculator