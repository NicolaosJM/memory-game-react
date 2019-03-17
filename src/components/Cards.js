import React from "react";
import "../styles/Cards.css";

const handleClick = props => {
    props.changeClickedState(props.id);
    props.shuffle(props);
}
// const Cards = ({changeClickedState, shuffle, name, image, id}) => (
const Cards = (props) => (
    // <div className="container">
        // {/* <div className="row"> */}
        // <div className="justify-content-md-center">
             
                <div className="card">
                    <div className="img-container">
                        <img alt={props.name} src={props.image} onClick={() => {
                            handleClick(props)
                        }
                        } />
                    </div>
                </div>
            
        // </div> 
        
)

export default Cards;