# alicloud-fc-ts-template

A template reposistory for Serverless project using Aliyun(AliCloud) Function Compute service.

## Requirement

In this project, we operate under the following assumptions:

- You have an AliCloud account with at least Function Compute and SLS(for logging related command) enabled
- You decided that you will be using NodeJS8 runtime
- You have setup [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- You have setup [FCli](https://github.com/aliyun/fcli), the official tooling for function compute.
    - [Official Documentation (CN)](https://help.aliyun.com/document_detail/52995.html)
    - [Official Documentation (EN)](https://www.alibabacloud.com/help/doc-detail/52995.htm) (less information)

## How to use

1. Development happen in `./src` folder
2. Compile codes to `*.js` with `npm run build`
3. Test the function locally with `npm test`
4. Create/Update the function using `npm run create` / `npm run update` commands
5. Invoke the function online with `npm run invoke`
6. (Assuming you have SLS setup for FC service) Check logs of function in the last 5 minutes using `npm run logs`
7. Run whole live cycle with `npm run all`