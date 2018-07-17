/**
 * @file MouseOut.js
 * @author simpart
 */

/**
 * @class event.MouseOver
 * @brief mouse over event for mofron component
 */
mofron.event.MouseOver = class extends mofron.Event {
    
    constructor (po, p1) {
        try {
            super();
            this.name('MouseOver');
            this.prmOpt(po, p1);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
            var evt_func = this.handler();
            tgt_dom.getRawDom().addEventListener(
                'mouseover',
                () => {
                    try {
                        if (null != evt_func[0]) {
                            evt_func[0](evt_func[1]);
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                false
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.event.MouseOver;
/* end of file */
