/**
 * @file MouseOut.js
 * @author simpart
 */

/**
 * @class event.MouseOver
 * @brief mouse over event for mofron component
 */
mofron.event.MouseOver = class extends mofron.Event {
    
    constructor (fnc, prm) {
        try {
            super();
            this.name('MouseOver');
            this.prmOpt(
                ('function' === typeof fnc) ?
                {'handlar' : new mofron.Param(fnc, prm)} : fnc
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    eventConts (tgt_dom) {
        try {
            var evt_func = this.handlar();
            tgt_dom.getRawDom().addEventListener('mouseover',function() {
                try {
                    if (null != evt_func[0]) {
                        evt_func[0](evt_func[1]);
                    }
                } catch (e) {
                    console.error(e.stack);
                    throw e;
                }
            },false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.MouseOver;
