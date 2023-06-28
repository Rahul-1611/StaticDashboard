export default function Header(props) {
    return (
        <header>
            <div className="head-left">
                <h1>Social Media Dashboard</h1>
                <h4 className="grey">Total Followers: 23,004</h4>
            </div>
            <div className="head-right">
                <div className="grey bold">Dark Mode</div>
                <input type="checkbox" id="a"
                    onChange={props.darkModeFunc}
                />
                <label htmlFor="a">
                    <div className="inner"></div>
                </label>
            </div>
        </header>
    )
}