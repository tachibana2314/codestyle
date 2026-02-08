const { chromium } = require('@playwright/test');

(async () => {
  let browser;
  try {
    console.log('Launching browser...');
    browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    
    const context = await browser.newContext({
      viewport: { width: 1920, height: 1080 }
    });
    
    const page = await context.newPage();
    
    console.log('Navigating to site...');
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle',
      timeout: 30000
    });
    
    // Wait for content to be visible
    await page.waitForSelector('h1', { timeout: 10000 });
    
    // Full page screenshot
    console.log('Taking full page screenshot...');
    await page.screenshot({
      path: 'site-fullpage.png',
      fullPage: true
    });
    
    // Viewport screenshot
    console.log('Taking viewport screenshot...');
    await page.screenshot({
      path: 'site-desktop.png'
    });
    
    // Mobile view
    console.log('Taking mobile screenshot...');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({
      path: 'site-mobile.png',
      fullPage: true
    });
    
    // Take screenshots of specific sections
    console.log('Taking section screenshots...');
    
    // Hero section
    const heroSection = await page.$('section:first-of-type');
    if (heroSection) {
      await heroSection.screenshot({ path: 'hero-section.png' });
    }
    
    // Works section
    const worksSection = await page.$('section:nth-of-type(2)');
    if (worksSection) {
      await worksSection.screenshot({ path: 'works-section.png' });
    }
    
    console.log('Screenshots saved successfully!');
    console.log('Files created:');
    console.log('- site-fullpage.png');
    console.log('- site-desktop.png');
    console.log('- site-mobile.png');
    console.log('- hero-section.png');
    console.log('- works-section.png');
    
  } catch (error) {
    console.error('Error capturing screenshots:', error.message);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();