import { capFirst } from './capFirst';

describe('text utils', () => {
  test('capFirst() should change text to cap-first', () => {
    expect(capFirst('anyvaluehere'), 'Anyvaluehere');
  })
});
