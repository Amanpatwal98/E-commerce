

export const ADD = (item) => {
    return {
        type: "ADD",
        payload: item
    }
}

// remove iteams
export const REMOVE = (item) => {
    return {
        type: "REMOVE",
        payload: item
    }
}

// remove individual iteam

export const INCREASE = (item) => {
    return {
        type: "INCREASE",
        payload: item
    }
}

export const DECREASE = (item) => {
    return {
        type: "DECREASE",
        payload: item
    }
}



export const Add=(state)=>{
  return{
    type:"ADD",
    payload:state
  }
}