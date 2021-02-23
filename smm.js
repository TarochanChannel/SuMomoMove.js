/* SuMomoMove.js  */
/* (c) MonHu 2021 */

//export
export {
    Canvas
};

//canvas
class Canvas {
    constructor(_width,_height,_backgroundColor) {
        this._canvas = document.createElement('canvas');
        this._canvas.width = _width;
        this._canvas.height = _height;
        this._canvas.style.backgroundColor = _backgroundColor;

        document.body.appendChild(this._canvas);

        this._ctx = this._canvas.getContext('2d');
    }
    get_width() {
        return this._canvas.width;
    }
    set_width(_width) {
        this._canvas.width = _width;
    }
    get_height() {
        return this._canvas.height;
    }
    set_height(_height) {
        this._canvas.height = _height;
    }
    get_backgroundColor() {
        return this._canvas.style.backgroundColor;
    }
    set_backgroundColor(_backgroundColor) {
        this._canvas.style.backgroundColor = _backgroundColor;
    }
};