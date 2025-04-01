class ApprovalHandler {

    constructor(successor = null) {
        this.successor = successor;
    }

    handleRequest(request) {
        if (this.successor) {
            this.successor.handleRequest(request);
        } else {
            request.status = "Rejected";
            request.message = "No se pudo procesar la solicitud.";
        }
    }
}

export default ApprovalHandler;