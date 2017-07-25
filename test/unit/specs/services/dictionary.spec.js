import WWWJDIC from '@/services/dictionary/wwwjdic';
import JishoOrg from '@/services/dictionary/jisho-org';

describe('Service: Dictionary', () => {
  describe('WWWJDIC', () => {
    describe('#glossing()', () => {
      let res;
      before((done) => {
        WWWJDIC.glossing('昨日すき焼きを食べました').then((data) => {
          res = data;
          done();
        });
      });
      it('should transform result correctly', () => {
        expect(res).to.be.a('array');
        res.forEach((el) => {
          expect(el).to.have.key(['jp', 'en']);
          expect(el.jp).to.have.length.above(0);
          expect(el.en).to.have.length.above(0);
        });
      });
      it('should seperate sentence correctly', () => {
        expect(res[0].jp[0].word).to.contain('昨日');
        expect(res[1].jp[0].word).to.contain('焼き肉');
        expect(res[2].jp[0].word).to.contain('食べ');
      });
    });
  });
  describe('JishoOrg', () => {
    describe('#word()', () => {
      const res = {};
      before((done) => {
        JishoOrg.word('昨日').then((data1) => {
          res['昨日'] = data1;
          JishoOrg.word('上げる').then((data2) => {
            res['上げる'] = data2;
            done();
          });
        });
      });
      it('should transform result correctly', () => {
        expect(res['昨日']).to.be.a('array');
        res['昨日'].forEach((el) => {
          expect(el).to.have.key(['jp', 'en']);
          expect(el.jp).to.have.length.above(0);
          expect(el.en).to.have.length.above(0);
        });
        expect(res['上げる']).to.be.a('array');
        res['上げる'].forEach((el) => {
          expect(el).to.have.key(['jp', 'en']);
          expect(el.jp).to.have.length.above(0);
          expect(el.en).to.have.length.above(0);
        });
      });
      // it('should translate correctly', () => {
      //
      // });
    });
  });
});
