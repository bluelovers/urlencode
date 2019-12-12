"use strict";
/**
 * Created by user on 2019/12/12.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const buffer_1 = require("buffer");
const iconv_lite_1 = __importDefault(require("iconv-lite"));
function decode(str, charset) {
    if (util_1._isUTF8(charset)) {
        return decodeURIComponent(str);
    }
    let buf = buffer_1.Buffer.from(util_1.decodeToArray(str));
    return iconv_lite_1.default.decode(buf, charset);
}
exports.decode = decode;
exports.default = decode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVjb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7QUFFSCxpQ0FBZ0Q7QUFDaEQsbUNBQWdDO0FBQ2hDLDREQUErQjtBQUUvQixTQUFnQixNQUFNLENBQUMsR0FBVyxFQUFFLE9BQWdCO0lBRW5ELElBQUksY0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUNwQjtRQUNDLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDL0I7SUFDRCxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxPQUFPLG9CQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBUkQsd0JBUUM7QUFFRCxrQkFBZSxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE5LzEyLzEyLlxuICovXG5cbmltcG9ydCB7IF9pc1VURjgsIGRlY29kZVRvQXJyYXkgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlclwiO1xuaW1wb3J0IGljb252IGZyb20gJ2ljb252LWxpdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlKHN0cjogc3RyaW5nLCBjaGFyc2V0Pzogc3RyaW5nKVxue1xuXHRpZiAoX2lzVVRGOChjaGFyc2V0KSlcblx0e1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcblx0fVxuXHRsZXQgYnVmID0gQnVmZmVyLmZyb20oZGVjb2RlVG9BcnJheShzdHIpKTtcblx0cmV0dXJuIGljb252LmRlY29kZShidWYsIGNoYXJzZXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWNvZGVcbiJdfQ==