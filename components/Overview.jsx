import { smallCards as SmCard } from "./SmCard"
import data from "../data.json";

export default function Overview() {
    const smc = data.overview.map(info => {
        return (
            <SmCard
                {...info}
            // title = {info.title} n so on
            />
        )
    })

    return (
        <>
            <h2>Overview - Today</h2>
            <div className="overview">
                {smc}
            </div>
        </>
    )
}