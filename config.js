/**
 * config.js - Configuration settings for the generated API
 */
var config = {};
config.server = {};
config.mongo = {};

//TODO: remove config.server?

/**
 * Your app title goes here.
 * @type {string}
 */
config.appTitle = "rest-hapi API";

/**
 * Your app version goes here.
 * @type {string}
 */
config.version = '1.0.0';

/**
 * Flag signifying whether the absolute path to the models directory is provided
 * default: false
 * @type {boolean}
 */
config.absoluteModelPath = false;

/**
 * Path to the models directory
 * default: 'models'
 * @type {string}
 */
config.modelPath = 'models';

/**
 * Flag signifying whether the absolute path to the api directory is provided
 * @type {boolean}
 */
config.absoluteApiPath = false;

/**
 * Path to the directory for additional endpoints
 * default: 'api'
 * @type {string}
 */
config.apiPath = 'api';

/**
 * Cors settings for generated endpoints. Can be set to false to disable.
 * @type {{additionalHeaders: string[], additionalExposedHeaders: string[]}}
 */
config.cors =  {
    additionalHeaders: [],
    additionalExposedHeaders: []
};

/**
 * Mongo settings
 * - config.mongo.URI = 'mongodb://localhost/rest_hapi'; (local db, default)
 */
config.mongo.URI = 'mongodb://localhost/rest_hapi';

/**
 * Authentication strategy to be used for all generated endpoints.
 * Set to false for no authentication.
 * default: false
 * @type {boolean/string}
 */
config.authStrategy = false;

/**
 * If set to false, MANY_MANY associations (including linking model data) will be saved in their own collection in th db.  This is useful if a single document
 * will be associated with many other documents, which could cause the document size to become very large. For example,
 * a business might be associated with thousands of users.
 *
 * Embedding the associations will be more efficient for population/association queries but less efficient for memory/document size.
 *
 * This setting can be individually overwritten by setting the "embedAssociation" association property.
 * default: false
 * @type {boolean}
 */
config.embedAssociations = false;

/**
 * MetaData options:
 * - createdAt: (default: true) date specifying when the document was created.
 * - updatedAt: (default: true) date specifying when the document was last updated.
 * - deletedAt: (default: true) date specifying when the document was soft deleted.
 * - createdBy: (default: false) _id of user that created the document.
 * - updatedBy: (default: false) _id of user that last updated the document.
 * - updatedBy: (default: false) _id of user that soft deleted the document.
 */
config.enableCreatedAt = true;
config.enableUpdatedAt = true;
config.enableDeletedAt = true;
config.enableCreatedBy = false;
config.enableUpdatedBy = false;
config.enableDeletedBy = false;

/**
 * Enables policies via mrhorse (https://github.com/mark-bradshaw/mrhorse).
 * default: false
 * @type {boolean}
 */
config.enablePolicies = false;

/**
 * Flag signifying whether the absolute path to the policies directory is provided.
 * default: false
 * @type {boolean}
 */
config.absolutePolicyPath = false;

/**
 * Path to the directory for mrhorse policies (https://github.com/mark-bradshaw/mrhorse).
 * default: 'policies'
 * @type {string}
 */
config.policyPath = 'policies';

/**
 * Enables document level authorization.
 * default: true
 * @type {boolean}
 */
config.enableDocumentScopes = true;

/**
 * If true, modifies the root scope of any document to allow access to the document's creator.
 * The scope value added is in the form: "user-{_id}" where "{_id}" is the _id of the user.
 * NOTE:
 * - This assumes that your authentication credentials (request.auth.credentials) will contain either
 * a "user" object with a "_id" property, or the user's _id stored in a property defined by "config.userIdKey".
 * - This also assumes that the user creating the document will have "user-{_id}" within their scope.
 * - Requires "config.enableDocumentScopes" to be "true".
 * - This setting can be individually overwritten by setting the "authorizeDocumentCreator" routeOptions property.
 * default: false
 * @type {boolean}
 */
config.authorizeDocumentCreator = false;

/**
 * Same as "authorizeDocumentCreator", but modifies the "readScope" rather than the root scope.
 * default: false
 * @type {boolean}
 */
config.authorizeDocumentCreatorToRead = false;

/**
 * Same as "authorizeDocumentCreator", but modifies the "updateScope" rather than the root scope.
 * default: false
 * @type {boolean}
 */
config.authorizeDocumentCreatorToUpdate = false;

/**
 * Same as "authorizeDocumentCreator", but modifies the "deleteScope" rather than the root scope.
 * default: false
 * @type {boolean}
 */
config.authorizeDocumentCreatorToDelete = false;

/**
 * Same as "authorizeDocumentCreator", but modifies the "associateScope" rather than the root scope.
 * default: false
 * @type {boolean}
 */
config.authorizeDocumentCreatorToAssociate = false;

/**
 * This is the path/key to the user _id stored in your request.auth.credentials object.
 * default: "user._id"
 * @type {string}
 */
config.userIdKey = "user._id";

/**
 * Determines what action takes place when one or more document scope checks fail for requests dealing with multiple
 * documents (Ex: deleteMany or list). Options are:
 * - true: if one or more documents fail, the request responds with a 403.
 * - false: documents that don't pass are simply removed from the request (Ex: not deleted or not retrieved)
 * default: false
 * @type {boolean}
 */
config.enableDocumentScopeFail = false;

/**
 * Flag specifying whether to text index all string fields for all models to enable text search.
 * WARNING: enabling this adds overhead to add inserts and updates, as well as added storage requirements.
 * default: false.
 * @type {boolean}
 */
config.enableTextSearch = false;

/**
 * Soft delete options
 * - enableSoftDelete: adds "isDeleted" property to each model. Delete endpoints set "isDeleted" to true
 * unless the payload contains { hardDelete: true }, in which case the document is actually deleted (default false)
 * - filterDeletedEmbeds: if enabled, associations with "isDeleted" set to true will not populate (default false)
 * NOTE: this option is known to be buggy
 * @type {boolean}
 */
config.enableSoftDelete = false;
config.filterDeletedEmbeds = false;

/**
 * Validation options:
 * default: true
 * @type {boolean}
 */
config.enableQueryValidation = true;
config.enablePayloadValidation = true;
config.enableResponseValidation = true;

/**
 * Determines the hapi failAction of each response. Options are:
 * - true: responses that fail validation will return a 500 error.
 * - false: responses that fail validation will just log the offense and send the response as-is.
 * default: false
 * @type {boolean}
 */
config.enableResponseFail = false;

/**
 * If set to true, (and authStrategy is not false) then endpoints will be generated with pre-defined
 * scopes based on the model definition.
 * default: false
 * @deprecated since v0.29.0, use "config.generateRouteScopes" instead
 * @type {boolean}
 */
config.generateScopes = false;

/**
 * If set to true, (and authStrategy is not false) then endpoints will be generated with pre-defined
 * scopes based on the model definition.
 * default: false
 * @type {boolean}
 */
config.generateRouteScopes = false;

/**
 * If set to true, the scope for each endpoint will be logged when then endpoint is generated.
 * default: false
 * @type {boolean}
 */
config.logScopes = false;

/**
 * If set to true, each route will be logged as it is generated.
 * default: false
 * @type {boolean}
 */
config.logRoutes = false;

/**
 * Log level options:
 * - INTERNAL use it for logging calls and other internal stuff
 * - DEBUG recommended to use it for debugging applications
 * - NOTE development verbose information (default)
 * - INFO minor information
 * - LOG significant messages
 * - WARNING really important stuff
 * - ERROR application business logic error condition
 * - FATAL system error condition
 */
config.loglevel = "DEBUG";

/**
 * Determines the initial expansion state of the swagger docs
 * - options: 'none', 'list', 'full' (default: 'none')
 * default: 'none'
 * @type {string}
 */
config.docExpansion = 'none';

module.exports = config;