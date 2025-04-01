import ApprovalHandler from "./ApprovalHandler.jsx";

class DirectorHandler extends ApprovalHandler {

    handleRequest(request) {
        if (request.days <= 15) {
            request.status = "Approved by Director";
            request.message = "Solicitud aprobada.";
        } else {
            super.handleRequest(request);
        }
    }
}

export default DirectorHandler;