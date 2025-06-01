

export class WindowUtil {

    public static getWindowFormat(): string {
         return window.innerWidth < 1080 ? "mobile" :window.innerWidth > 1080 ? "desktop" : "unknown";
    }

}