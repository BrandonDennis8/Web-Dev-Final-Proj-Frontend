import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">the IronTigers!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Columbia, MO. Sign up today for local meet up times, competitions, and Q&As from record-holding lifters.</p>
                <address className="public__addr">
                    Iron Tigers<br />
                    405 Tiger Ln<br />
                    Columbia, MO 65203<br />
                    <a href="tel:+15555555555">(573) 315-2000</a>
                </address>
                <br />
                <p>Owner: Ted Coan</p>
            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public