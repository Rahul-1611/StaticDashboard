import { useState, useEffect } from "react"
export default function Header(props) {
    // useEffect(() => {
    //     if (checked) {
    //         console.log("checked")
    //         let root = document.querySelector('#root');
    //         root.style.backgroundColor = 'red';
    //     }
    // }, [checked])
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