import ErrorRepository from '../index';

test.each([
  ['Существующий код ошибки', 1, 'Ошибка 1'],
  ['Неизвестный код ошибки', 2, 'Unknown error'],
])('err', (_, code, expected) => {
  const err = new ErrorRepository();
  expect(err.transalate(code)).toBe(expected);
});
