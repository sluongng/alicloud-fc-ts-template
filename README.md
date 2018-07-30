# alicloud-fc-ts-template

A template reposistory for Serverless project using Aliyun(AliCloud) Function Compute service.

## Requirement

In this project, we operate under the following assumptions:

- You have an AliCloud account with at least Function Compute and SLS (for logging related features) enabled
- You decided that you will be using Nodejs8 runtime
- You have setup [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- You have setup [FCli](https://github.com/aliyun/fcli), the official tooling for function compute.
    - [Official Documentation (CN)](https://help.aliyun.com/document_detail/52995.html)
    - [Official Documentation (EN)](https://www.alibabacloud.com/help/doc-detail/52995.htm) (less information)

## How to use

```shell
git clone https://github.com/sluongng/alicloud-fc-ts-template
```

0. Update `env-setup.sh` with appropriate names so `npm run <script-name>` will work properly
1. Development happen in `./src` folder
2. Compile codes to `*.js` with `npm run build`
3. Test the function locally with `npm test`
4. Create/Update the function using `npm run func-create` / `npm run func-update` commands
5. Invoke the function online with `npm run func-invoke`
6. (Assuming you have SLS setup for FC service) Check logs of function in the last 5 minutes using `npm run func-logs`
7. Create/Update trigger with `npm run trigger-create` / `npm run trigger-update`
8. Run whole live cycle with `npm run all`

## Debugging

- This repository also included `ts-node` and the [launch.json](.vscode/launch.json) configurations for debugging on VSCode.
    - Use [eventFunc.test.ts](src/eventFunc.test.ts) file for debugging.

- TODO: Include Docker setup

## Http Trigger

As noted in official documentation [CN](https://help.aliyun.com/document_detail/71229.html?spm=a2c4g.11186623.6.622.9vR6BY)[EN](https://www.alibabacloud.com/help/doc-detail/71229.htm#HTTP%20trigger%20interface%20format), the Http Triggered function has different interface compare to normal `event-based` functions

```javascript
function(request, response, context) {}
```

In this repository, I have also provided a working example via [httpFunc.ts](src/httpFunc.ts) and neccessary models via [httpModels.ts](src/alicloud/httpModels.ts).

The example functionality here is based on the official example on Aliyun/AlibabaCloud website.

An example of [httpTrigger.yml](triggers/httpTrigger.yml) file is also included.

## To Do

- [x] Provided basic setup of `event` driven function
- [x] Provided basic `npm scripts` to assit with building, testing and deploy code
- [x] Provided standard TypScript Compiler and TSlint configurations
- [x] Provided simple VSCode [launch.json](.vscode/launch.json) configuration for debugging locally
- [x] Provided basic setup of `http` driven function
- [ ] To provide setup/scripts for local docker testing with [aliyun/fc-docker](https://github.com/aliyun/fc-docker)
- [x] To provide more event models for `OSS`, `CDN` and `SLS` based events
- [x] To provide more event models for `Gateway`, `TableStore`, `IoT` and `DataHub` based events
- [ ] Reimplement models with `toJSON()` and `fromJSON()` so that it works better with JSON. More information [here](http://choly.ca/post/typescript-json/)