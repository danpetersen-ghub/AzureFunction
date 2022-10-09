

module.exports = async function (context, req) {
    //import name class
    const NameClass = require("../SharedCode/Class");
    
    //get incoming name from request
    const incomingName = (req.query.name || (req.body && req.body.name));
    
    //create class
    let name = new NameClass( incomingName );

    const responseMessage = name.log();

    context.log( responseMessage )

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
