import { capFirst } from './text';

describe('text utils', () => {
  test('capFirst() should change text to cap-first', () => {
    expect(capFirst('anyvaluehere'), 'Anyvaluehere');
  })
});
