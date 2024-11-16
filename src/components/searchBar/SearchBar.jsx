import { useState } from 'react';
import './searchBar.scss';
const types = ["buy", "rent"]

function SearchBar() {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 0,
    })
    const switchType = (val) => {
        setQuery(prev => ({ ...prev, type: val }));
    }

    return (
        <div className="searchBar">
            <div className="type">
                {types.map(type => (
                    <button key={type} onClick={() => switchType(type)} className={query.type === type ? "active" : ""}>
                        {type}</button>
                ))}
            </div>
            <div className="searchField">
                <div className="field location">
                    <img src="/loca.png" alt="" />
                    <input type="text" name="location" placeholder="City Location" />
                </div>
                <div className="field minPrice">
                    <img src="/price.png" alt="" />
                    <input type="number" name="minPrice" min={0} max={10000000} placeholder="Min Price" />
                </div>
                <div className="field maxPrice">
                    <img src="/price.png" alt="" />
                    <input type="number" name="maxPrice" min={0} max={10000000} placeholder="Max Price" />
                </div>
                <div className="searchBtn">
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar