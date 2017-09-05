import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { FAKE_USER1 } from '../../test/fake-users';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let de: DebugElement;
  let eAvatar: HTMLElement;
  let eTitle: HTMLElement;
  let eLink: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.user = FAKE_USER1;
    fixture.detectChanges();
    de = fixture.debugElement;
    eAvatar = de.query(By.css('img')).nativeElement;
    eTitle = de.query(By.css('h2')).nativeElement;
    eLink = de.query(By.css('a')).nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct img', () => {
    expect(eAvatar.getAttribute('src')).toContain(component.user.avatar);
  });

  it('should have correct title', () => {
    expect(eTitle.textContent).toContain(component.user.login);
  });

  it('should have correct link', () => {
    expect(eLink.getAttribute('href')).toContain(component.user.url);
    expect(eLink.textContent).toContain(component.user.url);
  });
});
