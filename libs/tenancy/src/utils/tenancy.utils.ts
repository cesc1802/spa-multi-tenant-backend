import { DEFAULT_TENANT_DB_CONNECTION } from '../tenancy.constants';
import { AppConstants } from '../constants';
import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * Get tenant model name formatted
 *
 * @export
 * @param {string} model
 * @returns
 */
export function getTenantModelToken(model: string) {
    return `${model}Model`;
}

/**
 * Get tenant model definition name
 *
 * @export
 * @param {string} model
 * @returns
 */
export function getTenantModelDefinitionToken(model: string) {
    return `${model}Definition`;
}

/**
 * Get the connecion token name formatted
 *
 * @export
 * @param {string} [name]
 * @returns
 */
export function getTeanantConnectionToken(name?: string) {
    return name && name !== DEFAULT_TENANT_DB_CONNECTION
        ? `${name}TenantConnection`
        : DEFAULT_TENANT_DB_CONNECTION;
}


export function extractTenantFromHeaders(headers: any): string{
    let tenantId = '';
    const tmp = headers[AppConstants.tenantHeader];
    if(tmp instanceof Array){
        tenantId = tmp[0];
    }else{
        tenantId = tmp;
    }

    if (!tenantId) {
        throw new HttpException(`Malformed request.`, HttpStatus.BAD_REQUEST);
    }

    return tenantId;
}
