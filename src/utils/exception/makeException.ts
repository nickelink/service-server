export class HttpException extends Error {
  public statusCode: number;

  public statusMsg: string;

  public msg: string;

  constructor(statusCode: number, statusMsg: string, msg: string) {
    super(msg);
    this.statusCode = statusCode;
    this.statusMsg = statusMsg;
    this.msg = msg;
  }
}
