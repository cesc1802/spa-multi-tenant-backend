import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { extractTenantFromHeaders } from './utils';

@Injectable()
export class TenancyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    if(request.route && request.route.path === '/auth/login'){
      console.log('TenancyGuard: Skipping login route');
      return true;
    }
    const tenantId = extractTenantFromHeaders(request.headers);
    // return (request.user as any).tenant == tenantId;
  }
}
