import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import worldMap from './countries.json';

const WorldMap = () => {
    const handleCountryClick = (geo) => {
        // Handle the click event for the country
        console.log('Clicked on:', geo.properties.name);
    };

    return (
        <ComposableMap width={800} height={475}>
        <Geographies geography={worldMap}>
            {({ geographies }) =>
            geographies.map((geo) => (
                <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleCountryClick(geo)}
                />
            ))
            }
        </Geographies>
        </ComposableMap>
    );
};

export default WorldMap;