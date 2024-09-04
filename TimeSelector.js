import React, { useState } from "react";

const TimeSelector = ({ onTimeSelect }) => {
    const [selectedTime, setSelectedTime] = useState(1); // valor inicial en minutos
    

    const hadleTimeChange = (e) => {
        const time = parseInt(e.target.value);
        setSelectedTime(time);
        onTimeSelect(time); // Envia el tiempo seleccionado al componente padre
    };

    return (
        <div>
            <h3>Seleccione el tiempo de estacionamiento</h3>
            <input
            type="number"
            min="1"
            value={selectedTime}
            onChange={hadleChange}
            /> hours

            </div>
              

     );

    };
    export default TimeSelector;