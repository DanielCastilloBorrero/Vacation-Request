// src/components/VacationForm.jsx
import React, { useState } from "react";
import DepartmentHeadHandler from "./DepartmentHeadHandler.jsx";
import ManagerHandler from "./ManagerHandler.jsx";
import DirectorHandler from "./DirectorHandler.jsx";
import RequestStatus from "./RequestStatus.jsx";

function VacationForm() {
    const [days, setDays] = useState("");
    const [request, setRequest] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRequest = { days: parseInt(days, 10), status: "Pending" };
        setRequest(newRequest);

        const departmentHead = new DepartmentHeadHandler(
            new ManagerHandler(new DirectorHandler())
        );
        departmentHead.handleRequest(newRequest);
        setRequest({ ...newRequest });
    };

    return (
        <div>
            <h1>Solicitud de Vacaciones</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Días de vacaciones:
                    <input
                        type="number"
                        value={days}
                        onChange={(e) => setDays(e.target.value)}
                        min="0"
                    />
                </label>
                <button type="submit">Enviar Solicitud</button>
            </form>
            {request.status && <RequestStatus request={request} />}
        </div>
    );
}

export default VacationForm;