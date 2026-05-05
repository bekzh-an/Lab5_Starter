import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

test("isPhoneNumber - valid", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});

test("isPhoneNumber - invalid", () => {
  expect(isPhoneNumber("123456")).toBe(false);
  expect(isPhoneNumber("phone")).toBe(false);
});

test("isEmail - valid", () => {
  expect(isEmail("test@gmail.com")).toBe(true);
  expect(isEmail("user123@yahoo.com")).toBe(true);
});

test("isEmail - invalid", () => {
  expect(isEmail("invalid-email")).toBe(false);
  expect(isEmail("test@com")).toBe(false);
});

test("isStrongPassword - valid", () => {
  expect(isStrongPassword("Abc123")).toBe(true);
  expect(isStrongPassword("Strong1")).toBe(true);
});

test("isStrongPassword - invalid", () => {
  expect(isStrongPassword("we")).toBe(false);
  expect(isStrongPassword("pas")).toBe(false);
});

test("isDate - valid", () => {
  expect(isDate("12/25/2020")).toBe(true);
  expect(isDate("01/01/1999")).toBe(true);
});

test("isDate - invalid", () => {
  expect(isDate("99/99/99929")).toBe(false);
  expect(isDate("not2-a-date")).toBe(false);
});

//
// 🎨 isHexColor
//
test("isHexColor - valid", () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
  expect(isHexColor("#000000")).toBe(true);
});

test("isHexColor - invalid", () => {
  expect(isHexColor("FFFFFFF")).toBe(false);
  expect(isHexColor("#GGGGGFG")).toBe(false);
});