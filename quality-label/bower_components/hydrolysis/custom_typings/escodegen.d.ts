declare module 'escodegen' {
  import {Node} from 'estree.d';
  interface GenerateOpts {
    comment?: boolean;
    format?: {
      indent?: {
        style?: string;
        base?: number;
        adjustMultilineComment: boolean;
      }
    }
  }
  export function generate(ast:Node, opts?: GenerateOpts):string;

}
