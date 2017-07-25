import JishoOrg from './jisho-org';
import Wwwjdic from './wwwjdic';

export default {
  dictionaries: [JishoOrg, Wwwjdic],
  word() {

  },
  glossing() {

  },
  getDefaultWordStructure: () => ([{
    jp: [{
      word: '',
      furigana: '',
    }], // 1+
    en: [
      {
        pos: [], // 1+
        def: [], // 1+
        onlyWith: [], // 0+
        seeAlso: [], // 0+
      },
    ], // 1+
  }]),
  getDefaultGlossingStructure: () => ([{
    jp: [{
      word: '',
      furigana: '',
    }],
    en: [
      {
        pos: [], // 0
        def: [], // 1
        onlyWith: [], // 0
        seeAlso: [], // 0
      },
    ], // 1+
  }]),
};
