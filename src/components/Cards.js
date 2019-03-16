import React from "react";
import "../styles/Cards.css";

const handleClick = props => {
    props.changeClickedState(props.id);
    props.shuffle(props);
}
// const Cards = ({changeClickedState, shuffle, name, image, id}) => (
const Cards = (props) => (
    <div className="container">
        <div className="row justify-content-md-center">
            <div className="col-2 col-s-6">
                <div className="card">
                    <div className="img-container">
                        <img alt={props.name} src={props.image} onClick={() => {
                            handleClick(props)
                        }
                        } />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Cards;