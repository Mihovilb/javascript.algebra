/* 1. napišite modul za brojanje broja koraka.
Modul će se brinuti o povećanju broja koraka, a izvana će se moći pristupiti dvjema metodama modula:
walk() i getTotalSteps().
2. Exportajte modul iz datoteke.
*/

var brojanjeKoraka = (function () {
    // TODO: dio koda za povećanje broja koraka
    var koraci = 0
    function increaseSteps() {
        koraci++;
    }

    return {
        walk: function () {
            increaseSteps();
        },
        getTotalSteps: function () {
        return koraci;
    },
    run: function () {
        koraci += 5;
    }
};
})();

module.exports = brojanjeKoraka