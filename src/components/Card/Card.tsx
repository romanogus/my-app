import "./Card.css";
import star from "@assets/star.png";

export default function Card(props: { img: string; rating: string; reviewCount: number; country: string; title: string; price: number }) {
  return (
    <div className="card">
      <img src={`src/assets/${props.img}`} className="card__image" alt='Image of Katie Zaferes' />
      {/* <div className="card__status">{props.status}</div> */}
      <div className="card__review">
        <img src={star} className="card__review--star" alt='Star icon'/>
        <span className="card__review--rating">{props.rating}</span>
        <span className="gray card__review--count">({props.reviewCount}) •&nbsp;</span>
        <span className="gray card__review--location">{props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p className="card__price">
        <span className="bold">${props.price}</span> / person
      </p>
    </div>
  );
}
