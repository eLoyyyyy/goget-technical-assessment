import { test, expect } from '@playwright/test';

test('test user 123 should be existing', async ({ request }) => {
  const userSettingOf123 = await request.get(`/user/${123}/settings`)

  expect(userSettingOf123.ok()).toBeTruthy()
});

test('should be able to update sendEmail from false to true or from true to false', async ({ request }) => {
  const URL = `/user/${123}/settings`
  const userSettingOf123 = await request.get(URL)
  const body = await userSettingOf123.json()

  expect(userSettingOf123.ok()).toBeTruthy()

  const changes = await request.put(URL, {
    data: {
      sendEmail: !body.sendEmail,
      preferredTheme: body.preferredTheme,
      resultsPerPage: body.resultsPerPage
    }
  })

  expect(changes.ok()).toBeTruthy()

  const result = await(await request.get(URL)).json()

  expect(result.sendEmail).toBe(!body.sendEmail)
});

test('should pass if preferredTheme is light', async ({ request }) => {
  const URL = `/user/${123}/settings`
  const userSettingOf123 = await request.get(URL)
  const body = await userSettingOf123.json()

  expect(userSettingOf123.ok()).toBeTruthy()


  const changes = await request.put(URL, {
    data: {
      sendEmail: body.sendEmail,
      preferredTheme: 'light',
      resultsPerPage: body.resultsPerPage
    }
  })

  expect(changes.ok()).toBeTruthy()
});

test('should pass if preferredTheme is dark', async ({ request }) => {
  const URL = `/user/${123}/settings`
  const userSettingOf123 = await request.get(URL)
  const body = await userSettingOf123.json()

  expect(userSettingOf123.ok()).toBeTruthy()


  const changes = await request.put(URL, {
    data: {
      sendEmail: body.sendEmail,
      preferredTheme: 'dark',
      resultsPerPage: body.resultsPerPage
    }
  })

  expect(changes.ok()).toBeTruthy()
});

test('should pass if preferredTheme is system', async ({ request }) => {
  const URL = `/user/${123}/settings`
  const userSettingOf123 = await request.get(URL)
  const body = await userSettingOf123.json()

  expect(userSettingOf123.ok()).toBeTruthy()


  const changes = await request.put(URL, {
    data: {
      sendEmail: body.sendEmail,
      preferredTheme: 'system',
      resultsPerPage: body.resultsPerPage
    }
  })

  expect(changes.ok()).toBeTruthy()
});

test('should fail if preferredTheme is not light, dark or system', async ({ request }) => {
  const URL = `/user/${123}/settings`
  const userSettingOf123 = await request.get(URL)
  const body = await userSettingOf123.json()

  expect(userSettingOf123.ok()).toBeTruthy()

  const changes = await request.put(URL, {
    data: {
      sendEmail: body.sendEmail,
      preferredTheme: 'medium',
      resultsPerPage: body.resultsPerPage
    }
  })

  expect(changes.ok()).toBeFalsy()
});
