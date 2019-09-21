const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://my.stu.edu.cn/discussion/my-courses#%2Fmy-courses');
    await page.type('#username','18yxhuang3',{delay:100});
    await page.type('#password','31321',{delay:100});
    page.click('#login');
    page.waitFor(1000);
    await page.waitForNavigation({
        waitUntil: 'load'
    });
    await page.waitFor(1000);
    if(await page.$('#username')){
        await page.evaluate(() => alert('登陆失败'))
    }else{
        await page.evaluate(() => alert('登陆成功'))
    }
     await browser.close();
})();
