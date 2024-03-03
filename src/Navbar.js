export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title"> BetterTranspo </a>
        <ul>
            <li>
                <a href="/leaderboards">Leaderboards</a>
            </li>
            <li>
                <a href="/upload">Upload Accomplishments</a>
            </li>
            <li>
                <a href="/tips">Tips</a>
            </li>
        </ul>
    </nav>
}
