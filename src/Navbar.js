export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title"> BetterTranspo </a>
        <ul>
            <li>
                <a href="/add">Add Route</a>
            </li>
            <li>
                <a href="/favs">See Favourite Route</a>
            </li>
        </ul>
    </nav>
}
