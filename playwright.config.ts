import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['github']],
  use: {
    baseURL: 'https://playwright-playground.vercel.app/',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name : 'setup',
      testMatch: /.setup\.ts/,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
           storageState: './admin.json',
       },
       dependencies: ['setup'],
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
         storageState: './admin.json',
       },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
          storageState: './admin.json',
       },
      dependencies: ['setup'],
    },
  ],
});
