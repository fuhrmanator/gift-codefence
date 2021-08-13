export class FormatCodeFence {
    format(arg0: string): string {
        return '\\n```\\n'  // code fence start
            + arg0.replace(/([\{\}\[\]\:\=\~\#])/g, '\\$1')  // escape special GIFT chars
            .replace(/\r?\n/g, '\\n' )  // convert newlines to  \n (Moodle GIFT)
            .replace(/\\n /g, '\\n ')  // replace space non-breaking space at beginning of line to preserve indentation
            + '\\n```'  // code fence end
    }
}