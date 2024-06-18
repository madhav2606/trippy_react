import "./TripStyles.css";
import TripData from "./TripData";
import tripimg1 from "../assets/trip1.jpg"
import tripimg2 from "../assets/trip2.jpg"
import tripimg3 from "../assets/trip3.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using google maps</p>

            <div className="tripcard">
                <TripData
                image = {tripimg1}
                heading = "Trip in Indonesia"
                text = "lorem34wef werw twrgtw rgt ewt ge rwgt wergtwetgwtg wrtg wrgtwrgtwtegwrgt wrgt wt gw tgwetgwetgwtgw twregtwrtgwtgw tgwetgwrgtertghwrtbetyjtyikyuki ik iyk, yukjmnegfv afd vwe gb thn ryjm tuk, uyk,ik ,m hgb  fvswfbsgbd hnjm tjum,yuk, yuk mt hbvs"
                />
                <TripData
                image = {tripimg2}
                heading = "Trip in Bali"
                text = "lorem34wef werw twrgtw rgt ewt ge rwgt wergtwetgwtg wrtg wrgtwrgtwtegwrgt wrgt wt gw tgyikyuki ik iyk, yukjmnegfv afd vwe gb thn ryjm tuk, uyk,ik ,m hgb  fvswfbsgbd hnjm tjum,yuk, yuk mt hbvs"
                />
                <TripData
                image = {tripimg3}
                heading = "Trip in Singapore"
                text = "lorem34wi ik iyk, yukjmnegfv afd vwe gb thn ryjm tuk, uyk,ik ,m hgb  fvswfbsgbd hnjm tjum,yuk, yuk mt hbvsrfbwrgt wrgt wrgtbw tb w gtnryumk yio. iopp iouikyutujr"
                />
            </div>

        </div>
    )
}

export default Trip;