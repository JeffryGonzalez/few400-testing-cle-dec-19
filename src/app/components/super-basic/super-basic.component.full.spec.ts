import { SuperBasicComponent } from './super-basic.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click, ButtonClickEvents } from 'src/app/utils/testing';


describe('using the component', () => {
  let component: SuperBasicComponent;
  let fixture: ComponentFixture<SuperBasicComponent>;

  let deH1: DebugElement;
  let elH1: HTMLElement;
  let deBtn: DebugElement;
  let elBtn: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperBasicComponent]
    });

    fixture = TestBed.createComponent(SuperBasicComponent);
    component = fixture.componentInstance;

    deH1 = fixture.debugElement.query(By.css('h1'));
    elH1 = deH1.nativeElement;
    deBtn = fixture.debugElement.query(By.css('input'));
    elBtn = deBtn.nativeElement;
    fixture.detectChanges();
  });

  it('created the component', () => {
    expect(component).toBeDefined();
  });

  it('has the right default value', () => {
    expect(elH1.innerText).toBe('Tacos');
  });

  it('allows you to click to make the thing upper', () => {
    // click(deBtn, ButtonClickEvents.left);
    click(elBtn);
    fixture.detectChanges();
    expect(elH1.innerText).toBe('TACOS');
  });

});
