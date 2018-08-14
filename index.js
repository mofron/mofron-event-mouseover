/**
 * @file MouseOut.js
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class event.MouseOver
 * @brief mouse over event for mofron component
 */
mf.event.MouseOver = class extends mf.Event {
    
    constructor (po) {
        try {
            super();
            this.name('MouseOver');
            this.prmMap('handler');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (tgt_dom) {
        try {
            let evt_obj = this;
            tgt_dom.getRawDom().addEventListener(
                'mouseover',
                () => { 
                    try { evt_obj.execHandler(); } catch (e) {
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
module.exports = mf.event.MouseOver;
/* end of file */
