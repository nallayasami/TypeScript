export const showMessage: <T>(t: T) => T = (t) => {
    return t;
}

export class MyMap<T, U> {
    private _t: T;
    private _u: U;
    
    [propName: string]: any;

    constructor(t: T, u: U) {
        this._u = u;
        this._t = t;
    }


    get t() {
        return this._t;
    }
    set t(t: T) {
        this._t = t;
    }

    get u() {
        return this._u;
    }

    set u(u: U) {
        this._u = u;
    }

    display() {
        console.log(this._u, '-', this._u);
    }

}