export default function Card(props) {
    const greenRed = props.updown === 'icon-up.svg' ? 'green' : 'red';
    return (
        <div className={`cardBg ${props.color}`}>
            <div className="card">
                <div className="username">
                    <img src={props.logo} alt="logo" />
                    <span className="userId">{props.userId}</span>
                </div>
                <div className="stat">
                    <div className="no">{props.number}</div>
                    <div className="follow grey">FOLLOWERS</div>
                </div>
                <div className="update">
                    <img src={props.updown} alt="upDown" />
                    <span className={greenRed}>{props.update} Today</span>
                </div>
            </div>
        </div>
    )
}