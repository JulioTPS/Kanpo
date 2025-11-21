import { TestBed } from '@angular/core/testing';
import { Kanpo } from './kanpo';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kanpo],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Kanpo);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
