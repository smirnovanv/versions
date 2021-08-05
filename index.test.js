const SemVerCompare = require('./index');

test('test right version higher', () => {
    expect(SemVerCompare('1.3.5', '1.4.7.124')).toBe(-1);
  });

  test('test left version higher', () => {
    expect(SemVerCompare('1.8.5', '1.4.7.124')).toBe(1);
  });

  test('test equal versions', () => {
    expect(SemVerCompare('1.7.5', '1.7.5')).toBe(0);
  });

  test('test right version higher and longer', () => {
    expect(SemVerCompare('1.7.5', '1.7.5.99')).toBe(-1);
  });

  test('test left version higher and longer', () => {
    expect(SemVerCompare('1.3.4.124', '1.3.4')).toBe(1);
  });
  
  test('test failed', () => {
    expect(() => {SemVerCompare('ttt', 'ss.pp');}).toThrow(TypeError);
  });

  test('test failed', () => {
    expect(() => {SemVerCompare('tt//t', '123.77');}).toThrow(TypeError);
  });

  