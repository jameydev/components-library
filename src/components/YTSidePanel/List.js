// import { useState } from "react";

export default function List(props) {
    const {ordered, items} = props;

    const itemList = items.map(item => {
        return (
            <li key={item.id} className="list-item">
                <a href="{item.link}">{item.icon} &nbsp; {item.name}</a>
            </li>
        );
    });

    return ordered ? (
        <div className="list">
            <ol>
                {itemList}
            </ol>
        </div>
    ) : (
        <div className="list">
            <ul>
                {itemList}
            </ul>
        </div>
    );
}