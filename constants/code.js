/**
 * Code Constants File
 *
 * @package backend/constants
 * @author Ion Podolean <ion.podolean22@gmail.com>
 * @copyright 2021-01-16
 * */

const code = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    INVALID_INPUT_PARAMS: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    ALREADY_EXIST: 600,

    SEE_PERMISSION: "see",
    EDIT_PERMISSION: "edit",
    DENIED_PERMISSION: "denied",
}

module.exports = code