import { useDispatch } from "react-redux"
import { closeLetter } from "../mainPageSlice"




export default function Letter() {
    const dispatch = useDispatch()
    return (
        <section className="LetterMain">
            <div className="LetterChild">
                <button className="closeReceiveLetter" onClick={() => {
                    dispatch(closeLetter())
                }}></button>
                <p className="Letter"></p>
                <p className="textGood">We received your letter</p>
            </div>
        </section>
    )
}