function RequestStatus({ request }) {
    return (
        <div>
            <h2>Estado de la Solicitud</h2>
            <p>Días solicitados: {request.days}</p>
            <p>Estado: {request.status || "Pendiente"}</p>
            <p>Mensaje: {request.message || ""}</p>
        </div>
    );
}

export default RequestStatus;