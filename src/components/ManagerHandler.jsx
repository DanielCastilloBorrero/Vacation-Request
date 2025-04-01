import ApprovalHandler from "./ApprovalHandler.jsx";

class ManagerHandler extends ApprovalHandler {

    handleRequest(request) {
        if (request.days <= 10) {
            request.status = "Approved by Manager";
            request.message = "Solicitud aprobada.";
            return request;
        } else {
            super.handleRequest(request);
        }
    }
}

export default ManagerHandler;