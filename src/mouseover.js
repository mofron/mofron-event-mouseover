/**
 * @file HoverOut.js
 */
mofron.event.MouseOver = class extends mofron.event.Base {
    
    eventFunc () {
        try {
            var cbf = this.cb_func;
            var cbp = this.cb_parm;
            
            this.target.getDom().addEventListener('mouseover',function() {
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
