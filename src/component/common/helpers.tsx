
export default class Helpers{
    static formatDate(date: Date = new Date()): string {
        let resultDate = date.getDay + "/" + date.getMonth  + "/" + date.getFullYear ;
        return resultDate
    }
}