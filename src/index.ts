import 'dotenv/config';
import { SalesbotService } from './salesbot/salesbot.service';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import AnnoymizeUserAgentPlugin from 'puppeteer-extra-plugin-anonymize-ua';
import { DatabaseService } from './database/database.service';
import { CronJob } from 'cron';

const ua = process.env.USER_AGENT as string;

puppeteer.use(StealthPlugin());
puppeteer.use(
    AnnoymizeUserAgentPlugin({
        customFn: () => ua,
        stripHeadless: true,
        makeWindows: undefined,
    }),
);

const main = async () => {
    let browser = null;
    try {
        const db = new DatabaseService();
        await db.connect();

        browser = await puppeteer.launch({
            headless: false,
            args: [
                `--window-size=${1280 + Math.floor(Math.random() * 100)},${
                    800 + Math.floor(Math.random() * 100)
                }`,
            ],
        });
        const page = await browser.newPage();
        await page.setUserAgent(ua);
        const salesBot = new SalesbotService(page);
        await salesBot.login();
        await salesBot.timer(3000);
        const googleFrame = salesBot.findGoogleIframe();
        const authTokenName = process.env.AUTH_TOKEN_NAME as string;

        if (googleFrame) {
            console.log('Found the google iframe...');

            const sessionStorageJson = await googleFrame.evaluate(
                (authTokenName) => {
                    return sessionStorage.getItem(authTokenName);
                },
                authTokenName,
            );

            const { id_token, access_token } =
                salesBot.getAccessToken(sessionStorageJson);
            console.log('accessToken is ', access_token);
            await db.findAndUpdate({ id_token, access_token });
            await page.close();
            await browser.close();
        } else {
            console.log('frame is not found...');
            await page.close();
            await browser.close();
        }
    } catch (err: any) {
        console.log(err.message);
        if (browser) {
            await browser.close();
        }
    }
};

// console.log('waiting for cron...');
// const job = new CronJob(`15,30,50 * * * *`, () => {
main();
// });

// job.start();
