"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decode_1 = __importDefault(require("./decode"));
exports.decodeURIComponent = decode_1.default;
const encode_1 = __importDefault(require("./encode"));
exports.encodeURIComponent = encode_1.default;
function createURIComponentFn(defaultCharset) {
    return {
        decodeURIComponent(...argv) {
            let [input, charset = defaultCharset] = argv;
            return decode_1.default(input, charset);
        },
        encodeURIComponent(...argv) {
            let [input, charset = defaultCharset] = argv;
            return encode_1.default(input, charset);
        },
    };
}
exports.createURIComponentFn = createURIComponentFn;
exports.default = {
    decodeURIComponent: decode_1.default,
    encodeURIComponent: encode_1.default,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxhenkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxzREFBMEM7QUFvQnpDLDZCQXBCTSxnQkFBa0IsQ0FvQk47QUFuQm5CLHNEQUEwQztBQW9CekMsNkJBcEJNLGdCQUFrQixDQW9CTjtBQWxCbkIsU0FBZ0Isb0JBQW9CLENBQUMsY0FBc0I7SUFFMUQsT0FBTztRQUNOLGtCQUFrQixDQUFDLEdBQUcsSUFBMkM7WUFFaEUsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEdBQUcsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzdDLE9BQU8sZ0JBQWtCLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQzFDLENBQUM7UUFDRCxrQkFBa0IsQ0FBQyxHQUFHLElBQTJDO1lBRWhFLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxHQUFHLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUM3QyxPQUFPLGdCQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUMxQyxDQUFDO0tBQ0QsQ0FBQTtBQUNGLENBQUM7QUFkRCxvREFjQztBQU9ELGtCQUFlO0lBQ2Qsa0JBQWtCLEVBQWxCLGdCQUFrQjtJQUNsQixrQkFBa0IsRUFBbEIsZ0JBQWtCO0NBQ2xCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBkZWNvZGVVUklDb21wb25lbnQgZnJvbSAnLi9kZWNvZGUnO1xuaW1wb3J0IGVuY29kZVVSSUNvbXBvbmVudCBmcm9tICcuL2VuY29kZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVUklDb21wb25lbnRGbihkZWZhdWx0Q2hhcnNldDogc3RyaW5nKVxue1xuXHRyZXR1cm4ge1xuXHRcdGRlY29kZVVSSUNvbXBvbmVudCguLi5hcmd2OiBQYXJhbWV0ZXJzPHR5cGVvZiBkZWNvZGVVUklDb21wb25lbnQ+KVxuXHRcdHtcblx0XHRcdGxldCBbaW5wdXQsIGNoYXJzZXQgPSBkZWZhdWx0Q2hhcnNldF0gPSBhcmd2O1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dCwgY2hhcnNldClcblx0XHR9LFxuXHRcdGVuY29kZVVSSUNvbXBvbmVudCguLi5hcmd2OiBQYXJhbWV0ZXJzPHR5cGVvZiBlbmNvZGVVUklDb21wb25lbnQ+KVxuXHRcdHtcblx0XHRcdGxldCBbaW5wdXQsIGNoYXJzZXQgPSBkZWZhdWx0Q2hhcnNldF0gPSBhcmd2O1xuXHRcdFx0cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpbnB1dCwgY2hhcnNldClcblx0XHR9LFxuXHR9XG59XG5cbmV4cG9ydCB7XG5cdGRlY29kZVVSSUNvbXBvbmVudCxcblx0ZW5jb2RlVVJJQ29tcG9uZW50LFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRlY29kZVVSSUNvbXBvbmVudCxcblx0ZW5jb2RlVVJJQ29tcG9uZW50LFxufVxuIl19