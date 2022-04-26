import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setTarifId, showThanks } from "../../mainPageSlice"
import { buyTarif } from "../../postRequest"


export default function CardDate() {
    const state = useSelector((state) => state.mainPage)
    const {tarifTypeID,radioId} = state.checkTarifData
    const [cardNumber,setCardNumber] = useState("")
    const [errorCard,seterrorCard] = useState(false)
    const [month,setMonth] = useState("")
    const [year,setYear] = useState("")
    const [CVCValue,setCVC] = useState("")
    const [nameHolder,setNameHolder] = useState("")
    const dispatch = useDispatch()


    if(errorCard) {
        setTimeout(() => {
            seterrorCard(false)
        },3000)
    }



    // let dateObj = new Date(Date.now())
    // let monthi = dateObj.getUTCMonth() + 1; //months from 1-12
    // var day = dateObj.getUTCDate();
    // var yeari = dateObj.getUTCFullYear();
    // console.log(day + "/" + monthi + "/" + "" + yeari );

    // let dateObj = new Date(Date.now())

    // dateObj.toISOString().split('T')[0];

    // setTimeout(() => {
    // console.log(new Date(y).toJSON());
    // },5000)
    
    return (
        <section className="cardSection">
            <div className="formCredit">
                <p className="titleCard">
                    <span className="titleCardtITLE">Pay buy credit card</span>
                    <Link to="/userPage/userChannel" className="closePopupButton" onClick={() => {
                        dispatch(setTarifId())
                        dispatch(showThanks())
                        document.body.style.overflow = 'unset';
                    }}><img src="/mainPageImages/closeiCON.svg" alt="closeIcon"/></Link>
                </p>

                <div className="entherCardNumber">
                    <span className="cardTitleFontSize">Pay buy credit card</span>
                    <input className={`inputCArd ${errorCard === "CardNumberError" ? "borderRed" : ""}`}  placeholder="Enter card number" value={cardNumber} onChange={(e) => {
                        if(!isNaN(e.target.value) && e.target.value.length <= 16) { setCardNumber(e.target.value) }
                    }} />
                    {/* <span className="error" style={{display:errorCard === "CardNumberError" ? "block" : "none"}}>length number is not true</span> */}
                </div>

                <div className="popupInputMain">

                    <div className="entherCardNumber">
                        <span className="cardTitleFontSize">expiration date</span>
                        <input className={`inputCArd ${errorCard === "MonthError" ? "borderRed" : ""}`} placeholder="Month" value={month} onChange={(e) => {
                            if(!isNaN(e.target.value) && e.target.value.length <= 2) { setMonth(e.target.value) }
                        }}/>
                        {/* <span className="error" style={{display:errorCard === "MonthError" ? "block" : "none"}}>length number is not true</span> */}
                    </div>

                    <div className="entherCardNumber">
                        <input className={`inputCArd ${errorCard === "yearError" ? "borderRed" : ""}`} placeholder="Year" value={year} onChange={(e) => {
                            if(!isNaN(e.target.value) && e.target.value.length <= 2) { setYear(e.target.value) }
                        }}/>
                        {/* <span className="error" style={{display:errorCard === "yearError" ? "block" : "none"}}>length number is not true</span> */}
                    </div>

                    <div className="entherCardNumber">
                        <span className="cardTitleFontSize">CVV / CVC</span>
                        <input className={`inputCArd ${errorCard === "CVCValueError" ? "borderRed" : ""}`} value={CVCValue} onChange={(e) => {
                            if(!isNaN(e.target.value)) { setCVC(e.target.value) }
                        }}/>
                        {/* <span className="error" style={{display:errorCard === "CVCValueError" ? "block" : "none"}}>length number is not true</span> */}
                    </div>

                </div>

                <div className="entherCardNumber">
                    <span className="cardTitleFontSize">Card holder name</span>
                    <input className={`inputCArd ${errorCard === "cardName" ? "borderRed" : ""}`} type="text" placeholder="Enter card holder name" value={nameHolder} onChange={(e) => {
                        setNameHolder(e.target.value)
                    }}/>
                    {/* <span className="error" style={{display:errorCard ? "block" : "none"}}>length number is not true</span> */}
                </div>
                <button className="makePaymentButton" onClick={() => {
                    if(  cardNumber.length < 16 ) {seterrorCard("CardNumberError")} else 
                    if(  month.length < 2 ) {seterrorCard("MonthError")} else 
                    if(  year.length < 2 ) {seterrorCard("yearError")} else 
                    if(  CVCValue.length < 2 ) {seterrorCard("CVCValueError")} else
                    if( nameHolder.length === "") {seterrorCard("cardName")} else {
                        dispatch(buyTarif({
                            path:state.server,
                            token:sessionStorage.getItem("authenticated"),
                            body:{
                                card_no:cardNumber,
                                expiry_month:month,
                                expiry_year:year,
                                cvv:CVCValue,
                                tariff_count_id:state.paymentPage[tarifTypeID].tariff_count[radioId].id,  
                                tariff_type_id:state.paymentPage[tarifTypeID].id,
                            },
                        }))
                    }
                }}>Make payment</button>
            </div>
        </section>
    )
}



// {/* to="/userPage/userHome" */}
// <Link to={(location) => "/"}  className="makePaymentButton" onClick={() => {
//     dispatch(buyTarif({
//         path:state.server,
//         token:sessionStorage.getItem("authenticated"),
//         body:{
//             card_no:cardNumber,
//             expiry_month:month,
//             expiry_year:year,
//             cvv:CVCValue,
//             tariff_count_id:state.paymentPage[tarifTypeID].tariff_count[radioId].id,  
//             tariff_type_id:state.paymentPage[tarifTypeID].id,
//         },
//     }));
//     dispatch(showThanks())
//     document.body.style.overflow = 'unset';
// }}>Make payment</Link>