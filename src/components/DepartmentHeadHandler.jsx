import ApprovalHandler from "./ApprovalHandler.jsx";

class DepartmentHeadHandler extends ApprovalHandler {

    handleRequest(request) {
        if (request.days <= 5) {
            request.status = "Approved by Department Head";
            request.message = "Solicitud aprobada.";
            return request;
        } else {
            super.handleRequest(request);
        }
    }
}

export default DepartmentHeadHandler;