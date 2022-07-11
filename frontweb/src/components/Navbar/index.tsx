import './styles.css';
import 'bootstrap/js/src/collapse.js'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container-fluid">
                <a href="link" className="nav-logo-text"><h4>MovieFlix</h4></a>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav offset-md-2 main-menu">
                        <li><a href="link">HOME</a></li>
                        <li><a href="link">PLACEHOLDER</a></li>
                        <li><a href="link">PLACEHOLDER</a></li>
                    </ul>
                </div>

                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#movieflix-navbar"
                aria-controls="movieflix-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;