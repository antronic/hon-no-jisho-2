import Japaneasy from 'japaneasy';

export default {
  word: () => false,
  async glossing(text) {
    const dict = new Japaneasy({ dictionary: 'glossing' });
    const res = await dict(text);
    return this.transformGlossing(res);
  },
  transformGlossing(collection) {
    return collection.map((el) => {
      const explodeFurigana = el.pronunciation.split('; ');
      const jpArr = [];
      explodeFurigana.forEach((furi) => {
        jpArr.push({
          word: el.japanese,
          furigana: furi,
        });
      });
      const enArr = [];
      el.english.forEach((en) => {
        enArr.push({
          pos: [],
          def: [en],
          onlyWith: [],
          seeAlso: [],
        });
      });
      return {
        jp: jpArr,
        en: enArr,
      };
    });
  },
};
