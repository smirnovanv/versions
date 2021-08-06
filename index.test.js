const SemVerCompare = require('./index');

test('test right minor version is higher', () => {
  expect(SemVerCompare('1.3.5', '1.4.7.124')).toBe(-1);
});

test('test left minor version is higher', () => {
  expect(SemVerCompare('1.8.5', '1.4.7.124')).toBe(1);
});

test('test equal versions', () => {
  expect(SemVerCompare('1.7.5', '1.7.5')).toBe(0);
});

test('test right version has higher build number', () => {
  expect(SemVerCompare('1.7.5', '1.7.5.99')).toBe(-1);
});

test('test left version has higher build number', () => {
  expect(SemVerCompare('1.3.4.124', '1.3.4')).toBe(1);
});

test('test left version has zero number', () => {
  expect(SemVerCompare('1.0.4.124', '1.3.4')).toBe(-1);
});

test('test failed, wrong symbols', () => {
  expect(() => { SemVerCompare('ttt', 'ss.pp'); }).toThrow(TypeError);
});

test('test failed, left version has wrong symbols', () => {
  expect(() => { SemVerCompare('tt//t', '123.77'); }).toThrow(TypeError);
});

test('test failed, left minor version has wrong symbols', () => {
  expect(() => { SemVerCompare('123.bb', '123.77'); }).toThrow(TypeError);
});

test('test failed, right version has wrong symbols', () => {
  expect(() => { SemVerCompare('4.5.8', 'jljkj.uop'); }).toThrow(TypeError);
});

test('test failed, empty version', () => {
  expect(() => { SemVerCompare('4.5.8', ''); }).toThrow(TypeError);
});

test('test failed, left build version has wrong symbols', () => {
  expect(() => { SemVerCompare('123.4.9.bb', '123.77'); }).toThrow(TypeError);
});

test('test failed, negative numbers', () => {
  expect(() => { SemVerCompare('123.-4.9', '123.77'); }).toThrow(TypeError);
});

test('test failed, number starts with zero', () => {
  expect(() => { SemVerCompare('123.4.9', '123.077'); }).toThrow(TypeError);
});

test('test failed, too many sections', () => {
  expect(() => { SemVerCompare('123.4.9', '123.77.5.9.10'); }).toThrow(TypeError);
});

test('test failed, zero build', () => {
  expect(() => { SemVerCompare('123.4.9', '123.77.5.0'); }).toThrow(TypeError);
});

test('test failed, both major and minor versions are zero', () => {
  expect(() => { SemVerCompare('0.0.9', '123.77.5'); }).toThrow(TypeError);
});