import { defineConfig, devices } from "@playwright/test";
import * as dotenv from 'dotenv';

dotenv.config();


export default defineConfig({
  testDir: "./src/tests",
  retries: 1,
  reporter: "list",
  use: {
    baseURL:process.env.URL,
    viewport: { width: 1920, height: 1080 },
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
    {
      name: "firefox",
      use: { browserName: "firefox" },
    },
    {
      name: "webkit",
      use: { browserName: "webkit" },
    },
  ],
});
