export class NumberUtils {

    public static goToZero(num: number, substractValue: number): number {
        if (num === 0) return 0;
        if (Math.abs(num) <= substractValue) num = 0;
        else if (num > 0) num -= substractValue;
        else num += substractValue;
        return num;
    }

}