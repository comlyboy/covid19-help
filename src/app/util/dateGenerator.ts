const date = new Date();


export function generateDate() {

    const printDate = (new Date()).toString().split(' ').splice(1, 3).join('_');
    const printTime = `${new Date().getHours()}_${new Date().getMinutes()}_${new Date().getSeconds()}`;

    return `${printDate}at${printTime}`;
}