export const smallCards = (props) => {
    let updown = props.color === "green" ? 'up' : 'down';
    return (
        <div className="sm-card">
            <div className="sm-card-up">
                <span className="title bold">{props.title}</span>
                <img src={`icon-${props.logo}.svg`} alt="logo" />
            </div>
            <div className="sm-card-down">
                <span className="value bold">{props.change}</span>
                <span className="rating">
                    <img src={`icon-${updown}.svg`} alt="" />
                    <span className={`change ${props.color}`}>{props.rating}%</span>
                </span>
            </div>
        </div>
    )
}


