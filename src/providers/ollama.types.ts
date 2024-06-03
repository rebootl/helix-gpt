import { uniqueStringArray, extractCodeBlock, log } from "../utils";

export class Completion extends Array<string> {
  constructor(...items: string[]) {
    super();
    this.push(...uniqueStringArray(items));
  }

  static fromResponse(data: any): Completion {
    // const content = data.response as string;
    // const result = extractCodeBlock('', content, '');
    // return new Completion(result as string);
    return new Completion(data.response as string);
    // return new Completion('hi');
  }
}

export class Chat {
  result: string;

  constructor(data: string) {
    this.result = data;
  }

  static fromResponse(data: any, filepath: string, language: string): Chat {
    const content = data.message.content as string;
    const result = extractCodeBlock(filepath, content, language);
    return new Chat(result as string);
  }
}
