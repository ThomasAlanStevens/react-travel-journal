import React from "react";

export default function Location(props){
    return(
        <section className="eventContainer flex-row">
            <img className="eventImage "src={props.data.imageUrl}></img>
            <section className="eventInfo flex-col">
                <section className="locationInfo flex-row">
                    <img className="locationIcon" src="./locationIcon.png"></img>
                    <h4 className="country">{props.data.location}</h4>
                    <a className="googleMaps" href={props.data.googleMapsUrl}>View on Google Maps</a>
                </section>
                <h2 className="eventTitle">{props.data.title}</h2>
                <h4 className="eventDates">{props.data.startDate} {props.data.endDate}</h4>
                <p className="eventDescription">{props.data.description}</p>
            </section>
        </section>
    )
}