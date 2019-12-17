import { SuperBasicComponent } from './super-basic.component';

describe('testing a component class directly', () => {

  let component: SuperBasicComponent;

  beforeEach(() => {
    component = new SuperBasicComponent();
  });
  it('has the default word of tacos', () => {
    expect(component.word).toBe('Tacos');
  });

  it('changes it to upper case when you call the method', () => {
    component.makeUpper();
    expect(component.word).toBe('TACOS');
  });
});
