import React from "react";
import s from "./Ads.module.css"
import {compose} from "redux";
import {connect} from "react-redux";
import {getCards, getImgForCards, setCurrentImgSucsess} from "../redux/AdsReducer";
import {NavLink} from "react-router-dom";
import likeImg from "../like.svg"
import compareImg from "../sravnit.svg"
import deliveryImg from "../znachokdostavki.svg"
import dealImg from "../znachoksdelki.svg"
import deliveryImgHover from "../znachokdostavkihover.svg"
import dealImgHover from "../znachoksdelkihover.svg"
import likeImgHover from "../likeHover.svg"
import compareImgHover from "../sravnitHover.svg"

class Ads extends React.Component {
    componentDidMount() {
        console.log("Mount")
        this.props.getCards()
        setTimeout(() => {
            if (!this.props.imgUrlData.length) {
                console.log("Делаю запрос")
                this.props.getImgForCards(this.props.cardsData.length)
            }
        }, 300)
    }

    state = {
        currentImg: this.props.currentImg,
        currentImgForMassive: this.props.cardsData.forEach(el => {
            let res
            res += el.currentImg
        }),
        limitationСardsField: this.props.cardsData.slice(0, 16).map(el =>
            <div className={!el.seen ? `${s.item}` : `${s.item} ${s.itemSeen}`}>
                <div className={s.itemImgBox}>
                    <p className={s.textItemHasBeenSeen}>Просмотрено</p>
                    <span className={`${s.swapImg} ${s.firstImg}`}>
                        <input type="radio"  onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+0}`)
                            el.currentImg = 0
                        }} name={"switchImg"} id={el.id + 0}/>
                        <label className={el.currentImg ==0? `${s.swapImgLabel} ${s.firstImg}`:`${s.swapImgLabel}`} htmlFor={el.id + 0}></label>
                    </span>
                    <span className={`${s.swapImg} ${s.second}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+1}`)
                            el.currentImg = 1
                        }} name={"switchImg"} id={el.id + 1}/>
                        <label className={`${s.swapImgLabel} ${s.second}`} htmlFor={el.id + 1}></label>
                    </span>
                    <span className={`${s.swapImg} ${s.third}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+2}`)
                            el.currentImg = 2
                        }} name={"switchImg"} id={el.id + 2}/>
                        <label className={`${s.swapImgLabel} ${s.third}`} htmlFor={el.id + 2}></label>
                    </span>
                    <span className={`${s.swapImg} ${s.four}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+3}`)
                            el.currentImg = 3
                        }} name={"switchImg"} id={el.id + 3}/>
                        <label className={`${s.swapImgLabel} ${s.four}`} htmlFor={el.id + 3}></label>
                    </span>

                    <img src={`${el.img[el.currentImg]}`} ref={this.itemImg} className={s.itemImg} alt=""/>
                    <img src={compareImg} onMouseOver={(e) => {
                        e.currentTarget.src = `${compareImgHover}`
                    }} className={s.likeImg} onMouseOut={(e) => {
                        e.currentTarget.src = `${compareImg}`
                    }} className={s.compareImg} alt=""/>
                    <img src={likeImg} onMouseOver={(e) => {
                        e.currentTarget.src = `${likeImgHover}`
                    }} className={s.likeImg} onMouseOut={(e) => {
                        e.currentTarget.src = `${likeImg}`
                    }} alt=""/>
                </div>
                <div className={s.itemInfo}>
                    <div className={s.itemRow1}>
                                    <span className={s.oldPrice}>
                                        <span>{el.oldPrice}</span>
                                    </span>
                        <span className={s.ImgBox}>
                                        <span className={s.deliveryImg}>
                                            <img className={s.deliveryImg} onMouseOver={(e) => {
                                                e.currentTarget.src = `${deliveryImgHover}`
                                            }} onMouseOut={(e) => {
                                                e.currentTarget.src = `${deliveryImg}`
                                            }} src={deliveryImg} alt=""/>
                                        </span>
                                        <span className={s.dealImg}>
                                            <img onMouseOver={(e) => {
                                                e.currentTarget.src = `${dealImgHover}`
                                            }} onMouseOut={(e) => {
                                                e.currentTarget.src = `${dealImg}`
                                            }} src={dealImg} alt=""/>
                                        </span>
                                    </span>
                    </div>
                    <div className={s.itemRow2}>{el.price}</div>
                    <div className={s.itemRow3}>{el.title}</div>
                    <div className={s.itemRow4}><span className={s.city}>{el.locality}</span><span
                        className={s.date}>
                                {`${el.date}`.slice(0,2) +"."+ `${el.date}`.slice(2,4) +"."+ `${el.date}`.slice(4,6) +", "+
                                `${el.date}`.slice(6,8) +"."+ `${el.date}`.slice(8,10)}</span>
                    </div>
                </div>
            </div>
        ),
        СardsField: this.props.cardsData.map(el =>
            <div className={!el.seen ? `${s.item}` : `${s.item} ${s.itemSeen}`}>
                <div className={s.itemImgBox}>
                    <p className={s.textItemHasBeenSeen}>Просмотрено</p>
                    <span className={`${s.swapImg} ${s.firstImg}`}>
                        <input type="radio"  onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+0}`)
                            el.currentImg = 0
                        }} name={"switchImg"} id={el.id + 0}/>
                        <label className={el.currentImg ==0? `${s.swapImgLabel} ${s.firstImg}`:`${s.swapImgLabel}`} htmlFor={el.id + 0}></label>
                    </span>
                    <span className={`${s.swapImg} ${s.second}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+1}`)
                            el.currentImg = 1
                        }} name={"switchImg"} id={el.id + 1}/>
                        <label className={`${s.swapImgLabel} ${s.second}`} htmlFor={el.id + 1}></label>
                    </span>
                    <span className={`${s.swapImg} ${s.third}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+2}`)
                            el.currentImg = 2
                        }} name={"switchImg"} id={el.id + 2}/>
                        <label className={`${s.swapImgLabel} ${s.third}`} htmlFor={el.id + 2}></label>
                    </span>
                    <span className={`${s.swapImg} ${s.four}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+3}`)
                            el.currentImg = 3
                        }} name={"switchImg"} id={el.id + 3}/>
                        <label className={`${s.swapImgLabel} ${s.four}`} htmlFor={el.id + 3}></label>
                    </span>

                    <img src={`${el.img[el.currentImg]}`} ref={this.itemImg} className={s.itemImg} alt=""/>
                    <img src={compareImg} onMouseOver={(e) => {
                        e.currentTarget.src = `${compareImgHover}`
                    }} className={s.likeImg} onMouseOut={(e) => {
                        e.currentTarget.src = `${compareImg}`
                    }} className={s.compareImg} alt=""/>
                    <img src={likeImg} onMouseOver={(e) => {
                        e.currentTarget.src = `${likeImgHover}`
                    }} className={s.likeImg} onMouseOut={(e) => {
                        e.currentTarget.src = `${likeImg}`
                    }} alt=""/>
                </div>
                <div className={s.itemInfo}>
                    <div className={s.itemRow1}>
                                    <span className={s.oldPrice}>
                                        <span>{el.oldPrice}</span>
                                    </span>
                        <span className={s.ImgBox}>
                                        <span className={s.deliveryImg}>
                                            <img className={s.deliveryImg} onMouseOver={(e) => {
                                                e.currentTarget.src = `${deliveryImgHover}`
                                            }} onMouseOut={(e) => {
                                                e.currentTarget.src = `${deliveryImg}`
                                            }} src={deliveryImg} alt=""/>
                                        </span>
                                        <span className={s.dealImg}>
                                            <img onMouseOver={(e) => {
                                                e.currentTarget.src = `${dealImgHover}`
                                            }} onMouseOut={(e) => {
                                                e.currentTarget.src = `${dealImg}`
                                            }} src={dealImg} alt=""/>
                                        </span>
                                    </span>
                    </div>
                    <div className={s.itemRow2}>{el.price}</div>
                    <div className={s.itemRow3}>{el.title}</div>
                    <div className={s.itemRow4}><span className={s.city}>{el.locality}</span><span
                        className={s.date}>
                                {`${el.date}`.slice(0,2) +"."+ `${el.date}`.slice(2,4) +"."+ `${el.date}`.slice(4,6) +", "+
                                `${el.date}`.slice(6,8) +"."+ `${el.date}`.slice(8,10)}</span>
                    </div>
                </div>
            </div>
        )
    }
    itemImg = React.createRef()

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("UPDATE")
        console.log(this.state)
        console.log(this.state.currentImgForMassive)
        if (this.state.СardsField.length != this.props.cardsData.length || prevProps.imgUrlData.length != this.props.imgUrlData.length || prevProps.currentImg != this.props.currentImg) {
            this.setState({
                limitationСardsField: this.props.cardsData.slice(0, 16).map(el =>
                    <div className={!el.seen ? `${s.item}` : `${s.item} ${s.itemSeen}`}>
                        <div className={s.itemImgBox}>
                            <p className={s.textItemHasBeenSeen}>Просмотрено</p>
                            <span className={`${s.swapImg} ${s.firstImg}`}>
                        <input type="radio"  onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+0}`)
                            el.currentImg = 0
                        }} name={"switchImg"} id={el.id + 0}/>
                        <label className={el.currentImg ==0? `${s.swapImgLabel} ${s.firstImg}`:`${s.swapImgLabel}`} htmlFor={el.id + 0}></label>
                    </span>
                            <span className={`${s.swapImg} ${s.second}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+1}`)
                            el.currentImg = 1
                        }} name={"switchImg"} id={el.id + 1}/>
                        <label className={`${s.swapImgLabel} ${s.second}`} htmlFor={el.id + 1}></label>
                    </span>
                            <span className={`${s.swapImg} ${s.third}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+2}`)
                            el.currentImg = 2
                        }} name={"switchImg"} id={el.id + 2}/>
                        <label className={`${s.swapImgLabel} ${s.third}`} htmlFor={el.id + 2}></label>
                    </span>
                            <span className={`${s.swapImg} ${s.four}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+3}`)
                            el.currentImg = 3
                        }} name={"switchImg"} id={el.id + 3}/>
                        <label className={`${s.swapImgLabel} ${s.four}`} htmlFor={el.id + 3}></label>
                    </span>

                            <img src={`${el.img[el.currentImg]}`} ref={this.itemImg} className={s.itemImg} alt=""/>
                            <img src={compareImg} onMouseOver={(e) => {
                                e.currentTarget.src = `${compareImgHover}`
                            }} className={s.likeImg} onMouseOut={(e) => {
                                e.currentTarget.src = `${compareImg}`
                            }} className={s.compareImg} alt=""/>
                            <img src={likeImg} onMouseOver={(e) => {
                                e.currentTarget.src = `${likeImgHover}`
                            }} className={s.likeImg} onMouseOut={(e) => {
                                e.currentTarget.src = `${likeImg}`
                            }} alt=""/>
                        </div>
                        <div className={s.itemInfo}>
                            <div className={s.itemRow1}>
                                    <span className={s.oldPrice}>
                                        <span>{el.oldPrice}</span>
                                    </span>
                                <span className={s.ImgBox}>
                                        <span className={s.deliveryImg}>
                                            <img className={s.deliveryImg} onMouseOver={(e) => {
                                                e.currentTarget.src = `${deliveryImgHover}`
                                            }} onMouseOut={(e) => {
                                                e.currentTarget.src = `${deliveryImg}`
                                            }} src={deliveryImg} alt=""/>
                                        </span>
                                        <span className={s.dealImg}>
                                            <img onMouseOver={(e) => {
                                                e.currentTarget.src = `${dealImgHover}`
                                            }} onMouseOut={(e) => {
                                                e.currentTarget.src = `${dealImg}`
                                            }} src={dealImg} alt=""/>
                                        </span>
                                    </span>
                            </div>
                            <div className={s.itemRow2}>{el.price}</div>
                            <div className={s.itemRow3}>{el.title}</div>
                            <div className={s.itemRow4}><span className={s.city}>{el.locality}</span><span
                                className={s.date}>
                                {`${el.date}`.slice(0,2) +"."+ `${el.date}`.slice(2,4) +"."+ `${el.date}`.slice(4,6) +", "+
                                `${el.date}`.slice(6,8) +"."+ `${el.date}`.slice(8,10)}</span>
                            </div>
                        </div>
                    </div>
                ),
                СardsField: this.props.cardsData.map(el =>
                    <div className={!el.seen ? `${s.item}` : `${s.item} ${s.itemSeen}`}>
                        <div className={s.itemImgBox}>
                            <p className={s.textItemHasBeenSeen}>Просмотрено</p>
                            <span className={`${s.swapImg} ${s.firstImg}`}>
                        <input type="radio"  onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+0}`)
                            el.currentImg = 0
                        }} name={"switchImg"} id={el.id + 0}/>
                        <label className={el.currentImg ==0? `${s.swapImgLabel} ${s.firstImg}`:`${s.swapImgLabel}`} htmlFor={el.id + 0}></label>
                    </span>
                            <span className={`${s.swapImg} ${s.second}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+1}`)
                            el.currentImg = 1
                        }} name={"switchImg"} id={el.id + 1}/>
                        <label className={`${s.swapImgLabel} ${s.second}`} htmlFor={el.id + 1}></label>
                    </span>
                            <span className={`${s.swapImg} ${s.third}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+2}`)
                            el.currentImg = 2
                        }} name={"switchImg"} id={el.id + 2}/>
                        <label className={`${s.swapImgLabel} ${s.third}`} htmlFor={el.id + 2}></label>
                    </span>
                            <span className={`${s.swapImg} ${s.four}`}>
                        <input type="radio" onClick={() => {
                            console.log(`${el.id}`)
                            this.props.setCurrentImgSucsess(`${el.id+3}`)
                            el.currentImg = 3
                        }} name={"switchImg"} id={el.id + 3}/>
                        <label className={`${s.swapImgLabel} ${s.four}`} htmlFor={el.id + 3}></label>
                    </span>

                            <img src={`${el.img[el.currentImg]}`} ref={this.itemImg} className={s.itemImg} alt=""/>
                            <img src={compareImg} onMouseOver={(e) => {
                                e.currentTarget.src = `${compareImgHover}`
                            }} className={s.likeImg} onMouseOut={(e) => {
                                e.currentTarget.src = `${compareImg}`
                            }} className={s.compareImg} alt=""/>
                            <img src={likeImg} onMouseOver={(e) => {
                                e.currentTarget.src = `${likeImgHover}`
                            }} className={s.likeImg} onMouseOut={(e) => {
                                e.currentTarget.src = `${likeImg}`
                            }} alt=""/>
                        </div>
                        <div className={s.itemInfo}>
                            <div className={s.itemRow1}>
                                    <span className={s.oldPrice}>
                                        <span>{el.oldPrice}</span>
                                    </span>
                                <span className={s.ImgBox}>
                                        <span className={s.deliveryImg}>
                                            <img className={s.deliveryImg} onMouseOver={(e) => {
                                                e.currentTarget.src = `${deliveryImgHover}`
                                            }} onMouseOut={(e) => {
                                                e.currentTarget.src = `${deliveryImg}`
                                            }} src={deliveryImg} alt=""/>
                                        </span>
                                        <span className={s.dealImg}>
                                            <img onMouseOver={(e) => {
                                                e.currentTarget.src = `${dealImgHover}`
                                            }} onMouseOut={(e) => {
                                                e.currentTarget.src = `${dealImg}`
                                            }} src={dealImg} alt=""/>
                                        </span>
                                    </span>
                            </div>
                            <div className={s.itemRow2}>{el.price}</div>
                            <div className={s.itemRow3}>{el.title}</div>
                            <div className={s.itemRow4}><span className={s.city}>{el.locality}</span><span
                                className={s.date}>
                                {`${el.date}`.slice(0,2) +"."+ `${el.date}`.slice(2,4) +"."+ `${el.date}`.slice(4,6) +", "+
                                `${el.date}`.slice(6,8) +"."+ `${el.date}`.slice(8,10)}</span>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        console.log(this.state)

        return (
            <div className={s.AdsPage}>
                <div className={s.wrapper}>
                    {this.state.showAll ? this.state.СardsField : this.state.limitationСardsField}
                </div>
                <input type={"checkbox"} id={"showAllCards"} onClick={(e) => {
                    this.setState({
                        showAll: true
                    })
                }} className={s.showAllCardsBtn}/>
                <label htmlFor="showAllCards" className={s.showAllCardsLabel}>Показать ещё</label>
            </div>
        )

    }
}

let mapStateToProps = state => {
    return {
        cardsData: state.Ads.cardsData,
        imgUrlData: state.Ads.imgUrlData,
        currentImg: state.Ads.currentImg
    }
}
export default compose(
    connect(mapStateToProps, {getCards, getImgForCards, setCurrentImgSucsess})
)(Ads)