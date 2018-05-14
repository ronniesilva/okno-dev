import { MaterialdesignModule } from './materialdesign.module';

describe('MaterialdesignModule', () => {
  let materialdesignModule: MaterialdesignModule;

  beforeEach(() => {
    materialdesignModule = new MaterialdesignModule();
  });

  it('should create an instance', () => {
    expect(materialdesignModule).toBeTruthy();
  });
});
