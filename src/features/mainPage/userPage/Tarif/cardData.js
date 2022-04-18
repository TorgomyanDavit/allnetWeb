import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { setTarifId, showThanks } from "../../mainPageSlice"
import { buyTarif } from "../../postRequest"


export default function CardDate() {
    const state = useSelector((state) => state.mainPage)
    const {tarifTypeID,radioId} = state.checkTarifData
    const [cardNumber,setCardNumber] = useState("")
    const [errorCard,seterrorCard] = useState("")
    const [month,setMonth] = useState("")
    const [year,setYear] = useState("")
    const [CVCValue,setCVC] = useState("")
    const [nameHolder,setNameHolder] = useState("")
    const dispatch = useDispatch()


    console.log(state.paymentPage);

console.log(state.paymentPage[tarifTypeID].tariff_count[radioId].id);

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
                    <input className="inputCArd"  placeholder="Enter card number" value={cardNumber} onChange={(e) => {
                        console.log(!isNaN(e.target.value),e.target.value.length);
                        if(!isNaN(e.target.value) && e.target.value.length <= 16) { setCardNumber(e.target.value) }
                    }} />
                    <span className="error" style={{display:errorCard ? "block" : "none"}}>length number is not true</span>
                </div>

                <div className="popupInputMain">

                    <div className="entherCardNumber">
                        <span className="cardTitleFontSize">expiration date</span>
                        <input className="inputCArd" placeholder="Month" value={month} onChange={(e) => {
                            if(!isNaN(e.target.value) && e.target.value.length <= 2) { setMonth(e.target.value) }
                        }}/>
                        <span className="error" style={{display:errorCard ? "block" : "none"}}>length number is not true</span>
                    </div>

                    <div className="entherCardNumber">
                        <input className="inputCArd" placeholder="Year" value={year} onChange={(e) => {
                            if(!isNaN(e.target.value) && e.target.value.length <= 2) { setYear(e.target.value) }
                        }}/>
                        <span className="error" style={{display:errorCard ? "block" : "none"}}>length number is not true</span>
                    </div>

                    <div className="entherCardNumber">
                        <span className="cardTitleFontSize">CVV / CVC</span>
                        <input className="inputCArd" value={CVCValue} onChange={(e) => {
                            if(!isNaN(e.target.value)) { setCVC(e.target.value) }
                        }}/>
                        <span className="error" style={{display:errorCard ? "block" : "none"}}>length number is not true</span>
                    </div>

                </div>

                <div className="entherCardNumber">
                    <span className="cardTitleFontSize">Card holder name</span>
                    <input className="inputCArd" type="text" placeholder="Enter card holder name" value={nameHolder} onChange={(e) => {
                        setNameHolder(e.target.value)
                    }}/>
                    <span className="error" style={{display:errorCard ? "block" : "none"}}>length number is not true</span>
                </div>
                <button className="makePaymentButton" onClick={() => {
                    dispatch(buyTarif({
                        path:state.server,
                        token:sessionStorage.getItem("authenticated"),
                        body:{
                            card_no:cardNumber,
                            expiry_month:month,
                            expiry_year:year,
                            cvv:CVCValue,
                            tariff_count_id:radioId,
                            tariff_type_id:state.paymentPage[tarifTypeID].tariff_count[radioId].id
                        },
                    }))
                  
                }}>Make payment</button>
            </div>
        </section>
    )
}