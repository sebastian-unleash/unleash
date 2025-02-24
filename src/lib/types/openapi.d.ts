// Partial types for "@unleash/express-openapi".
declare module '@unleash/express-openapi' {
    import { RequestHandler } from 'express';
    import { OpenAPIV3 } from 'openapi-types';

    export interface ExpressOpenApi extends RequestHandler {
        validPath: (operation: OpenAPIV3.OperationObject) => RequestHandler;
        schema: (name: string, schema: OpenAPIV3.SchemaObject) => void;
        swaggerui: RequestHandler;
    }

    export default function openapi(docsPath: string, any): ExpressOpenApi;
}
