import { curry } from "fxjs/es";

export default curry((k, el) => (el.removeAttribute(k), el));
