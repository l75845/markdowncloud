import { route, POST, before } from 'awilix-koa';
import { Context } from '@interfaces/IKoa';
import bodyParser from 'koa-bodyparser';
import fs from 'fs';
import { resolve } from 'path';
import MarkdownIt from 'markdown-it';
import emoji from 'markdown-it-emoji';
import hljs from 'highlight.js';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItTocDoneRight from 'markdown-it-toc-done-right';
import mongoose from '@db/index';
import savemd from 'server/services/saveMarkdown';

const { model } = mongoose;

const md = new MarkdownIt({
  html: false,
  xhtmlOut: true,
  typographer: true,
  linkify: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {
        console.log(__);
      }
    }
    return ''; // use external default escaping
  },
});
md.use(emoji);
md.use(markdownItAnchor, {
  permalink: true,
  permalinkBefore: true,
  permalinkSymbol: '§',
});
md.use(markdownItTocDoneRight);

@route('/api')
class APIController {
  @route('/getContentData')
  @POST()
  @before([bodyParser()])
  actionIndex(ctx: Context<{ id: number }>) {
    try {
      const buffer = fs.readFileSync(resolve(__dirname, 'domNumber.md'));
      // const result = await axios.post<string>(
      //   'https://api.github.com/markdown',
      //   {
      //     text: String(buffer),
      //   },
      // );
      const result = md.render(String(buffer));
      ctx.body = JSON.stringify({ data: { content: result } });
    } catch (e) {
      console.log(e);
    }
  }

  @route('/saveMarkdown')
  @POST()
  @before([bodyParser()])
  async saveMarkdown(
    ctx: Context<{ username: string; }>,
  ) {
    try {
      const { username } = ctx.request.body;
      const mdModel = model(username);
      const result = await savemd(mdModel);
      ctx.body = result.join(',');
    } catch (e) {
      console.log(e);
    }
  }
}

export default APIController;
