// code your solution here



function superbowlWin(record) {
    const winningYearObj = record.find(entry => entry.result === "W");




if (winningYearObj) {
    return winningYearObj.year;
  } else {
    return undefined;
  }
}



const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // ...
  ];


  
  describe('superbowlWin(record)', function () {
    it('returns a year the Denver Broncos won the superbowl', function () {
      expect(superbowlWin(record)).to.equal('2015');
    });
  
    it('returns undefined if the record has no win objects', function() {
      const sadReality = [
        { result: "N/A" },
        { result: "N/A" },
        { result: "N/A" }
      ];
      expect(superbowlWin(sadReality)).to.equal(undefined);
    });
  });