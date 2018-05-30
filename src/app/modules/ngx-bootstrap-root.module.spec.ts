import { NgxBootstrapRootModule } from './ngx-bootstrap-root.module';

describe('NgxBootstrapRootModule', () => {
  let ngxBootstrapRootModule: NgxBootstrapRootModule;

  beforeEach(() => {
    ngxBootstrapRootModule = new NgxBootstrapRootModule();
  });

  it('should create an instance', () => {
    expect(ngxBootstrapRootModule).toBeTruthy();
  });
});
