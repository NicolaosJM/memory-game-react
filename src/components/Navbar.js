import React from "react"
import "../styles/Navbar.css"

function Navbar(props) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <button onClick={props.resetGame}>restart</button>

              </li>
              <li className="nav-item">
                Score: {props.score}

              </li>
              <li className="nav-item">
                Top Score: {props.topScore}
              </li>
            </ul>

          </div>

        </nav>

      </div>
    )
}

export default Navbar;