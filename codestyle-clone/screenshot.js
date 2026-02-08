const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set viewport to desktop size
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Navigate to the page
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for content to load
    await page.waitForTimeout(2000);
    
    // Take full page screenshot
    await page.screenshot({ 
      path: 'screenshot-fullpage.png',
      fullPage: true
    });
    
    // Take viewport screenshot
    await page.screenshot({ 
      path: 'screenshot-viewport.png'
    });
    
    // Mobile view
    await page.setViewport({ width: 390, height: 844 }); // iPhone 14 Pro
    await page.screenshot({ 
      path: 'screenshot-mobile.png',
      fullPage: true
    });
    
    console.log('Screenshots saved successfully!');
    await browser.close();
  } catch (error) {
    console.error('Error taking screenshots:', error);
    process.exit(1);
  }
})();