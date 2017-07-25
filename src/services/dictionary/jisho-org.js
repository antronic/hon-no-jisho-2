import axios from 'axios';

export default {
  async word(text) {
    const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://jisho.org/api/v1/search/words?keyword=${text}`);
    return this.transformWord(res.data.data);
  },
  glossing: () => false,
  transformWord(collection) {
    return collection.map((el) => {
      const jpArr = [];
      el.japanese.forEach((jp) => {
        jpArr.push({
          word: jp.word,
          furigana: jp.reading,
        });
      });
      const enArr = [];
      el.senses.forEach((en) => {
        enArr.push({
          pos: en.parts_of_speech,
          def: en.english_definitions,
          onlyWith: en.restrictions,
          seeAlso: en.see_also,
        });
      });
      return { // Single Definition, one response may contains 1+
        jp: jpArr, // 1+
        en: enArr, // 1+
      };
    });
  },
};
