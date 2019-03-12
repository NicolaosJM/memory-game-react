import React from "react"

function Navbar(props) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                restart

              </li>
              <li className="nav-item">
                {props.score}

              </li>
              <li className="nav-item">
                {props.topScore}
              </li>
            </ul>

          </div>

        </nav>

      </div>
    )
}

export default Navbar;