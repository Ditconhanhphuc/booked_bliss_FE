import React, { useState } from 'react';
import './filter.scss';

function Filter() {
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
    const [areaWidth, setAreaWidth] = useState(80);
    const [areaLength, setAreaLength] = useState(30);
    const [minPrice, setMinPrice] = useState(1000);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [bedroom, setBedroom] = useState(1);

    const handleLocationChange = (location) => {
        setSelectedLocations((prev) =>
            prev.includes(location)
                ? prev.filter((l) => l !== location)
                : [...prev, location]
        );
    };

    const handlePropertyTypeChange = (type) => {
        setSelectedPropertyTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    return (
        <div className="filter-sidebar">
            <div className="filter-section">
                <h3>Filter By: Price</h3>
                <div className="slider-container">
                    <label className="slider-item">
                        Min:
                        <input
                            type="range"
                            min="1000"
                            max="10000"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        {minPrice}
                    </label>
                    <label className="slider-item">
                        Max:
                        <input
                            type="range"
                            min="10000"
                            max="200000"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                        {maxPrice}
                    </label>
                </div>
            </div>
            <div className="filter-section location">
                <h3>Filter By: Location</h3>
                {['Any', 'Ho Chi Minh', 'Ha Noi', 'Binh Dinh', 'Binh Duong', 'Hai Phong', 'Can Tho'].map((location, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={location}
                            onChange={() => handleLocationChange(location)}
                            checked={selectedLocations.includes(location)}
                        />
                        {location}
                    </label>
                ))}
            </div>

            <div className="filter-section property">
                <h3>Filter By: Property</h3>
                {['Houses', 'Apartments', 'Condo', 'Land'].map((type, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            value={type}
                            onChange={() => handlePropertyTypeChange(type)}
                            checked={selectedPropertyTypes.includes(type)}
                        />
                        {type}
                    </label>
                ))}
            </div>

            <div className="filter-section">
                <h3>Filter By: Bedroom</h3>
                <div className="slider-container">
                    <label className="slider-item">
                        Bedroom:
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={bedroom}
                            onChange={(e) => setBedroom(e.target.value)}
                        />
                        {bedroom}
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Filter;