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
            copyState = {...state, cardsData: [...action.cardsData]}
            copyState.cardsData.forEach((el) => {
                el.img = []
                el.currentImg = 0
            })
            return copyState
        case setCurrentImg:
            copyState = {...state, currentImg: action.currentImg}
            return copyState
        case setImgForCards:
            copyState = {...state}
            action.imgUrlData = action.imgUrlData.slice(0, (copyState.cardsData.length * 4))
            copyState.imgUrlData = action.imgUrlData
            for (let i = 0; i < copyState.cardsData.length; i++) {
                copyState.cardsData[i].img = action.imgUrlData.slice(i * 4, (i + 1) * 4).map((el) => el.urls.small)
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
export let getCards = () => async (dispatch) => {
    let response = await Api.Cards.getCards()
    dispatch(setCardsData(response.data))
}

export let getImgForCards = (count) => async (dispatch) => {
    let imgUrlData = new Array()
    for (let i = 0; i < (Math.ceil((count * 4) / 30)); i++) {
        let response = await Api.Cards.getImg(i + 1)
        imgUrlData = [...imgUrlData, ...response.data.results]
        if (imgUrlData.length >= count * 4) {
            dispatch(setImgForCardsSucsess(imgUrlData))
        }
    }
}
window.AdsDefaulState = AdsDefaulState