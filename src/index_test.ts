import { handler } from 'index';

// Overloading a fake callback
function mockCallBack(err: Error): void;
function mockCallBack(err: Error, msg: any): void;
function mockCallBack(input: Error | {err: Error, msg: any}): void {
    if (input instanceof Error) {
        console.error(input);
    } else if (input instanceof Object) {
        console.log(input.msg);
    }
}

handler(null, null, mockCallBack);