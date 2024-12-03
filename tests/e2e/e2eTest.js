import { Builder, By, Key, until } from 'selenium-webdriver';

describe('End-To-End Tests', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('User login flow', async () => {
    await driver.get('http://localhost:3000');  // Assuming the frontend runs locally

    // Simulate login
    await driver.findElement(By.name('username')).sendKeys('testuser');
    await driver.findElement(By.name('password')).sendKeys('password123', Key.RETURN);

    await driver.wait(until.elementLocated(By.id('dashboard')), 5000);
    
    const dashboardElement = await driver.findElement(By.id('dashboard'));
    expect(await dashboardElement.isDisplayed()).toBe(true); // Ensure dashboard is displayed after login
  });
});

