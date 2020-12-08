import React, { createRef, useState, useEffect } from "react";
const hereScripts = [
    "https://js.api.here.com/v3/3.1/mapsjs-core.js",
    "https://js.api.here.com/v3/3.1/mapsjs-service.js"
];

const svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">H</text></svg>';

const StoreMap = ({props}) => {
    const mapRef = createRef();

    const createScriptsIfNotExists = () => {
        const scripts = document.getElementsByTagName('script');
        for(let i = hereScripts.length; i--;){
            let scriptExists = false;
            for(let j = scripts.length; j--;){
                if(hereScripts[i] === scripts[j].src)
                    scriptExists = true;
            }
            if(!scriptExists){
                console.log(`criando script ${hereScripts[i]}`);
                let newHereScript = document.createElement("script");
                newHereScript.async = true;
                newHereScript.src = hereScripts[i];
                document.body.appendChild(newHereScript);
            }
        }
    }

    React.useLayoutEffect(() => {
        // `mapRef.current` will be `undefined` when this hook first runs; edge case that
        if (!mapRef.current) return;
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: "VjJKSLUc_Pgh3OZuejiQErVxGGXYs-UocS5W5oCnBO0"
        });
        const defaultLayers = platform.createDefaultLayers();
        const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
          center: { lat: 50, lng: 5 },
          zoom: 4,
          pixelRatio: window.devicePixelRatio || 1
        });

        var icon = new H.map.Icon(svgMarkup),
            coords = {lat: 50, lng: 5},
            marker = new H.map.Marker(coords, {icon: icon});
    
        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
        hMap.addObject(marker);
        //const ui = H.ui.UI.createDefault(hMap, defaultLayers);
    
        // This will act as a cleanup to run once this hook runs again.
        // This includes when the component un-mounts
        return () => {
          hMap.dispose();
        };
      }, [mapRef]); // This will run this hook every time this ref is updated

    return (
        <div className="map" ref={mapRef} style={{ height: "300px" }} />
    );
}

export default StoreMap;