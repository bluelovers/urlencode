"use strict";
/**
 * Created by user on 2019/12/12.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const iconv_lite_1 = __importDefault(require("iconv-lite"));
function encode(str, charset) {
    if (util_1._isUTF8(charset)) {
        return encodeURIComponent(str);
    }
    let buf = iconv_lite_1.default.encode(str, charset);
    return util_1.encodeBuffer(buf);
}
exports.encode = encode;
exports.default = encode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5jb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRzs7Ozs7QUFFSCxpQ0FBK0M7QUFDL0MsNERBQStCO0FBRS9CLFNBQWdCLE1BQU0sQ0FBQyxHQUFXLEVBQUUsT0FBZ0I7SUFFbkQsSUFBSSxjQUFPLENBQUMsT0FBTyxDQUFDLEVBQ3BCO1FBQ0MsT0FBTyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMvQjtJQUVELElBQUksR0FBRyxHQUFHLG9CQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxPQUFPLG1CQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUIsQ0FBQztBQVRELHdCQVNDO0FBRUQsa0JBQWUsTUFBTSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS8xMi8xMi5cbiAqL1xuXG5pbXBvcnQgeyBfaXNVVEY4LCBlbmNvZGVCdWZmZXIgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IGljb252IGZyb20gJ2ljb252LWxpdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlKHN0cjogc3RyaW5nLCBjaGFyc2V0Pzogc3RyaW5nKVxue1xuXHRpZiAoX2lzVVRGOChjaGFyc2V0KSlcblx0e1xuXHRcdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKTtcblx0fVxuXG5cdGxldCBidWYgPSBpY29udi5lbmNvZGUoc3RyLCBjaGFyc2V0KTtcblx0cmV0dXJuIGVuY29kZUJ1ZmZlcihidWYpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlbmNvZGVcbiJdfQ==