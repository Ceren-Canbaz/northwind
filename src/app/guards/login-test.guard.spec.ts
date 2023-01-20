import { TestBed } from '@angular/core/testing';

import { LoginTestGuard } from './login-test.guard';

describe('LoginTestGuard', () => {
  let guard: LoginTestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginTestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
