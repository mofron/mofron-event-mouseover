/**
 * @file MouseOut.js
 * @author simpart
 */

/**
 * @class event.MouseOver
 * @brief mouse over event for mofron component
 */
mofron.event.MouseOver = class extends mofron.Event {
    
    eventConts () {
        try {
            var cbf = this.func;
            var cbp = this.parm;
            
            this.target.getRawDom().addEventListener('mouseover',function() {
                try {
                    if (null != cbf) {
                        cbf(cbp);
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
