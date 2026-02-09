declare module 'gsap/all' {
  export { ScrollTrigger } from 'gsap/ScrollTrigger';
  export { SplitText } from 'gsap/SplitText';
}

declare module 'gsap/ScrollTrigger' {
  export interface ScrollTriggerOptions {
    trigger?: string | Element;
    start?: string | number;
    end?: string | number;
    scrub?: boolean | number;
    pin?: boolean | string;
    markers?: boolean;
    [key: string]: any;
  }

  export class ScrollTrigger {
    static create(options: ScrollTriggerOptions): ScrollTrigger;
    static refresh(): void;
    static killAll(): void;
    kill(): void;
    update(): void;
  }
}

declare module 'gsap/SplitText' {
  export interface SplitTextOptions {
    type?: 'chars' | 'words' | 'lines';
    charsClass?: string;
    wordsClass?: string;
    linesClass?: string;
    position?: 'relative' | 'absolute';
    [key: string]: any;
  }

  export class SplitText {
    constructor(element: string | Element, options?: SplitTextOptions);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}
