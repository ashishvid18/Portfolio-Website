export class CustomSplitText {
  elements: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  originalHTML: string[] = [];

  constructor(target: string | HTMLElement | HTMLElement[] | string[] | NodeListOf<HTMLElement>, options: { type?: string; linesClass?: string } = {}) {
    if (typeof target === 'string') {
      this.elements = Array.from(document.querySelectorAll(target));
    } else if (Array.isArray(target)) {
      target.forEach(item => {
        if (typeof item === 'string') {
          this.elements.push(...Array.from(document.querySelectorAll(item) as NodeListOf<HTMLElement>));
        } else {
          this.elements.push(item);
        }
      });
    } else if (target instanceof HTMLElement) {
      this.elements = [target];
    } else {
      this.elements = Array.from(target as any);
    }

    this.split(options);
  }

  private split(options: { type?: string; linesClass?: string }) {
    const { type = 'chars,words,lines', linesClass } = options;
    const splitChars = type.includes('chars');
    const splitWords = type.includes('words');
    const splitLines = type.includes('lines');

    this.elements.forEach((el, index) => {
      this.originalHTML[index] = el.innerHTML;
      const text = el.innerText;
      el.innerHTML = '';

      // For simplicity, we'll treat lines as words wrapped in a div if splitLines is true
      // and splitWords/splitChars within them. 
      // Real line splitting is complex, but for portfolio animations, 
      // word/char splitting is usually what's actually animated.

      const words = text.split(/(\s+)/);
      words.forEach(word => {
        if (word.trim() === '') {
          el.appendChild(document.createTextNode(word));
          return;
        }

        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        if (splitWords) {
          wordSpan.className = 'split-word';
          this.words.push(wordSpan);
        }

        if (splitChars) {
          const chars = word.split('');
          chars.forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.innerText = char;
            charSpan.style.display = 'inline-block';
            charSpan.className = 'split-char';
            this.chars.push(charSpan);
            wordSpan.appendChild(charSpan);
          });
        } else {
          wordSpan.innerText = word;
        }

        el.appendChild(wordSpan);
      });

      if (splitLines) {
        // Simple line "mock" - in many cases this is enough for the effect
        // or we can wrap the whole thing. 
        // For true line splitting, we'd need to check offsets, which is heavy.
        if (linesClass) el.classList.add(linesClass);
      }
    });
  }

  revert() {
    this.elements.forEach((el, index) => {
      el.innerHTML = this.originalHTML[index];
    });
  }
}
