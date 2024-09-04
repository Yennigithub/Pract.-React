import React, { useState, usesEffect } 
from "react";
import axios from 'axios';

const ParkingSpaceSelector = () => {
    const [ spaces, setSpaces] = useState([]);
    const [selectedSpace] = useState(null);

    usesEffect(() => {

        //Obtener espacios de estacionamiento disponibles desde la API

        axios.get('/api/parkingSpaces') .then(Response =>
            setSpaces(response.data))
            .catch(error =>
                console.error('Error al cargar espacios de estacionamiento:',error));
                }, []);

                const handleSpaceSelect = (space) =>
                {setSelectedSpace(space);

                };
                return (
                    <div className="parking-space-selector">
                        <h2>Seleccione un espacio de estacionamiento</h2>
                        <ul>{spaces.map( space =>
                        (
                            <li key={space.id} onClick={() =>
                                handleSpaceSelect(space)}>
                                    Espacio{space.number}-{space.type}
                                    ({space.status})
                                    </li>
                        ))}
                            </ul>
                            {selectedSpace && (
                                <div>
                                    <h3>Espacio seleccionado: {selectedSpace.number}
                                        </h3>
                                        <p>Tipo: {selectedSpace.type}</p>
                                        <p>Estado: {selectedSpace.status}</p>
                                        <button>Continuar</button>
                    </div>
                )}
                </div>
    );
};
export default ParkingSpaceSelector;

    
