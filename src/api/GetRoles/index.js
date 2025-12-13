module.exports = async function (context, req) {

/*
context.log("===== REQUEST RECEIVED =====");

    context.log("Method:", req.method);
    context.log("Headers:", JSON.stringify(req.headers, null, 2));
    context.log("Query:", JSON.stringify(req.query, null, 2));
    context.log("Params:", JSON.stringify(req.params, null, 2));
    context.log("Body:", JSON.stringify(req.body, null, 2));

    // Specifically log the auth payload
    if (req.body?.clientPrincipal) {
        context.log("===== CLIENT PRINCIPAL =====");
        context.log(JSON.stringify(req.body.clientPrincipal, null, 2));
    } else {
        context.log("NO clientPrincipal FOUND");
    }
*/
  
    const clientPrincipal = req.body?.clientPrincipal;

    if (!clientPrincipal) {
        context.res = { status: 401 };
        return;
    }

    let roles = ["authenticated"];

    // Example logic
    if (clientPrincipal.userDetails.endsWith("@microsoft.com")) {
        roles.push("admin");
    }

    context.res = {
        status: 200,
        body: { roles }
    };
};

