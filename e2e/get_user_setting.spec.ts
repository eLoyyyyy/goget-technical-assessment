import { test, expect } from '@playwright/test';

test('test user 123 to return user setting', async ({ request }) => {
  const userSettingOf123 = await request.get(`/user/${123}/settings`)
  const res = await userSettingOf123.json()

  expect(userSettingOf123.ok()).toBeTruthy()
  expect(res).toHaveProperty('preferredTheme')
  expect(res).toHaveProperty('sendEmail')
  expect(res).toHaveProperty('resultsPerPage')
});

test('API should return 404 on unknown user ID', async ({ request }) => {
  const userSettingOf123 = await request.get(`/user/${124}/settings`)

  expect(userSettingOf123.ok()).toBeFalsy()
});
