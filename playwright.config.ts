import { defineConfig, devices } from "@playwright/test";
import * as dotenv from 'dotenv';


require('dotenv').config();

export default defineConfig({
  testDir: "./src/tests",
  retries: 0,
  reporter: "list",
  use: {
    baseURL: process.env.URL || 'https://the-internet.herokuapp.com',
    viewport: { width: 1920, height: 1080 },
    trace: "off",
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
