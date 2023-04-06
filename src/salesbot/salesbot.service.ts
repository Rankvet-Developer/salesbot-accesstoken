import path from 'path';
import { Frame, Page } from 'puppeteer';

export class SalesbotService {
    constructor(private readonly page: Page) {}

    async login() {
        try {
            // go to Google home page
            await this.page.goto(process.env.GOOGLE_URL as string, {
                waitUntil: 'networkidle2',
                timeout: 30000,
            });

            // email
            await this.typing(
                process.env.EMAIL as string,
                'input[type="email"]',
                'Typing email...',
            );

            // password
            await this.typing(
                process.env.PASSWORD as string,
                'input[type="password"]',
                'Typing password...',
            );

            console.log('google login complete...');

            await this.page.goto(process.env.GEARLAUNCH_URL as string, {
                waitUntil: 'networkidle2',
                timeout: 40000,
            });

            await this.page.screenshot({
                path: path.join(__dirname, '../screenshot/1.png'),
                fullPage: true,
            });

            await this.page.waitForNavigation({ timeout: 50000 });

            // await page.waitForTimeout(7000);
            console.log('successfully login...');

            await this.page.screenshot({
                path: path.join(__dirname, '../screenshot/2.png'),
                fullPage: true,
            });
        } catch (err: any) {
            console.log(err.message);
        }
    }

    timer(ms: number) {
        return new Promise((reslove) => setTimeout(reslove, ms));
    }

    private async typing(
        typingText: string,
        selector: string,
        logText: string,
    ) {
        console.log(logText);
        await this.page.waitForSelector(selector, {
            visible: true,
            timeout: 9000,
        });
        await this.page.focus(selector);
        await this.page.keyboard.type(typingText, {
            delay: 90,
        });
        await this.timer(3000);
        await this.page.keyboard.press('Enter');
        await this.timer(5000);
    }

    findGoogleIframe(): Frame | null {
        for (const frame of this.page.mainFrame().childFrames()) {
            if (frame.url().includes('accounts.google.com')) {
                return frame;
            }
        }
        return null;
    }

    getAccessToken(sessionStorageJson: string | null) {
        const sessionStorage = JSON.parse(sessionStorageJson as string);

        // console.log('sessionStorage is ', sessionStorage);
        const obj = sessionStorage.cachedValue;

        // console.log('obj is ', obj);

        // const id_token = null;
        // const access_token = null;

        const [key] = Object.keys(obj || {}).filter(
            (key) => key !== 'responseType',
        );

        console.log('key is ', key);

        const id_token = obj[key]['id_token'];
        const access_token = obj[key]['access_token'];

        // ea or ga
        // if (obj.hasOwnProperty('ea')) {
        //     id_token = sessionStorage?.cachedValue?.ea?.id_token;
        //     access_token = sessionStorage?.cachedValue?.ea?.access_token;
        // } else if (obj.hasOwnProperty('ga')) {
        //     id_token = sessionStorage?.cachedValue?.ga?.id_token;
        //     access_token = sessionStorage?.cachedValue?.ga?.access_token;
        // } else if (obj.hasOwnProperty('ja')) {
        //     id_token = sessionStorage?.cachedValue?.ja?.id_token;
        //     access_token = sessionStorage?.cachedValue?.ja?.access_token;
        // } else {
        //     id_token = sessionStorage?.cachedValue?.ha?.id_token;
        //     access_token = sessionStorage?.cachedValue?.ha?.access_token;
        // }

        return {
            id_token,
            access_token,
        };
    }
}
