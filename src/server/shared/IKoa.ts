import Application, * as Koa from 'koa';
import renderer from 'koa-swig';

interface IRequest<T> extends Application.Request {
  body: T;
}

export interface Context<T = unknown> extends Koa.Context {
  render: typeof renderer;
  request: IRequest<T>;
}
