/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MetricsToolbarComponent } from './metrics-toolbar.component';

describe('Component: MetricsToolbar', () => {
  it('should create an instance', () => {
    let component = new MetricsToolbarComponent();
    expect(component).toBeTruthy();
  });
});
