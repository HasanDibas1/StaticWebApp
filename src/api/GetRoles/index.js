
module.exports = async function (context, req) {
    // Get authenticated user info
    const clientPrincipal = req.headers["x-ms-client-principal"]
        ? JSON.parse(Buffer.from(req.headers["x-ms-client-principal"], "base64").toString("utf8"))
        : null;

    // Default: no roles
    let roles = [];

    if (clientPrincipal) {
        roles = clientPrincipal.userRoles || [];
    }

    context.res = {
        body: {
            roles: roles
        }
    };
};

