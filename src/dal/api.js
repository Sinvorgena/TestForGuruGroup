import * as axios from "axios";


const instanse = axios.create({
    baseURL: "https://6075786f0baf7c0017fa64ce.mockapi.io/products"
})


export const Api = {
    Cards: {
        getCards() {
            return instanse.get(``)
        },
        getImg(page){
            return axios.get(`https://api.unsplash.com/search/photos?per_page=30&page=${page}&query=flat&client_id=RtqGDPtKbP8aX0Ujn_cR_Vp8EBGXaT0v1zaazNr8YF4`)
        }
    }
}





