import React from "react"
import "../styles/Navbar.css"

function Navbar(props) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button onClick={props.resetCats}>Restart</button>

              </li>
              <li className="nav-item center">
                {props.middleMessage}
              </li>
              <li className="nav-item right">
                Score: {props.score}

              </li>
              <li className="nav-item right">
                Top Score: {props.topScore}
              </li>
            </ul>

          </div>

        </nav>

      </div>
    )
}

export default Navbar;