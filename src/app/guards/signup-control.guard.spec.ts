import { TestBed } from '@angular/core/testing';

import { SignupControlGuard } from './signup-control.guard';

describe('SignupControlGuard', () => {
  let guard: SignupControlGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignupControlGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
