import { Test, TestingModule } from '@nestjs/testing';
import { SpaMultiTenantController } from './spa-multi-tenant.controller';
import { SpaMultiTenantService } from './spa-multi-tenant.service';

describe('SpaMultiTenantController', () => {
  let spaMultiTenantController: SpaMultiTenantController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SpaMultiTenantController],
      providers: [SpaMultiTenantService],
    }).compile();

    spaMultiTenantController = app.get<SpaMultiTenantController>(SpaMultiTenantController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(spaMultiTenantController.getHello()).toBe('Hello World!');
    });
  });
});
