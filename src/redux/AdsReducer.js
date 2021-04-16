import {Api} from "../dal/api";

let setCards = "SET_CARDS"
let setImgForCards = "SET_IMG_FOR_CARDS"
let setCurrentImg = "SET_CURRENT_IMG"

let AdsDefaulState = {
    cardsData: [],
    imgUrlData: [],
    currentImg: 0
}

export const AdsReducer = (state = AdsDefaulState, action) => {
    let copyState;
    switch (action.type) {
        case setCards:
            copyState = {
                ...state,
                cardsData: [...action.cardsData],
            }
            copyState.cardsData.forEach((el)=>{
                el.img=[]
                el.currentImg = 0
            })
            return copyState
        case setCurrentImg:
            copyState = {
                ...state,
                currentImg: action.currentImg
            }
            return copyState
        case setImgForCards:
            copyState = {
                ...state
            }
            action.imgUrlData = action.imgUrlData.slice(0, (copyState.cardsData.length * 4))
            copyState.imgUrlData = action.imgUrlData
            console.log(action.imgUrlData)
            for (let i = 0; i < copyState.cardsData.length; i++) {
                if(i == 0){
                    copyState.cardsData[i].img = action.imgUrlData.slice(0,4).map((el)=>el.urls.small)

                }else if(i == 1){
                    copyState.cardsData[i].img = action.imgUrlData.slice(4,8).map((el)=>el.urls.small)
                }
                else {
                    copyState.cardsData[i].img = action.imgUrlData.slice(i*4,(i+1)*4).map((el)=>el.urls.small)
                }

            }
            return copyState
    }
    return state
}

export let setCardsData = (cardsData) => ({
    type: setCards,
    cardsData
})
export let setImgForCardsSucsess = (imgUrlData) => ({
    type: setImgForCards,
    imgUrlData
})
export let setCurrentImgSucsess = (currentImg) => ({
    type: setCurrentImg,
    currentImg
})
export let getCards = () => {
    return (dispatch) => {
        Api.Cards.getCards()
            .then(response => {
                    dispatch(setCardsData(response.data))
                    console.log(response)
                }
            )


    }
}
export let getImgForCards = (count) => {
    return (dispatch) => {
        let imgUrlData = new Array()
        for (let i = 0; i < (Math.ceil(93 / 30) * 4); i++) {
            Api.Cards.getImg(i + 1).then(response => {
                console.log(response)
                imgUrlData = [...imgUrlData, ...response.data.results]
                console.log(imgUrlData)
                if (imgUrlData.length >= count * 4) {
                    dispatch(setImgForCardsSucsess(imgUrlData))
                }

            })
        }
    }
}
window.AdsDefaulState = AdsDefaulState


