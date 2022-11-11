

module.exports = async function (context, req) {
    //get incoming name from request
    const data =  req.body;

    context.log( "New DATA: ", data )

    context.res = {
        // status: 200, /* Defaults to 200 */
        // body: responseMessage
    };
}
