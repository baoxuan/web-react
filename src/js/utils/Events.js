
const bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
const unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
const prefix = bind !== 'addEventListener' ? 'on' : '';


const events = {
  one(node, eventNames, eventListener) {
    const typeArray = eventNames.split(' ');
    const recursiveFunction = function (e) {
      e.target.removeEventListener(e.type, recursiveFunction);
      return eventListener(e);
    };

    for (let i = typeArray.length - 1; i >= 0; i -= 1) {
      this.on(node, typeArray[i], recursiveFunction);
    }
  },


  /**
   * Bind `node` event `eventName` to `eventListener`.
   *
   * @param {Element} node
   * @param {String} eventName
   * @param {Function} eventListener
   * @param {Boolean} capture
   * @return {Obejct}
   * @api public
   */

  on(node, eventName, eventListener, capture) {
    node[bind](prefix + eventName, eventListener, capture || false);

    return {
      off() {
        node[unbind](prefix + eventName, eventListener, capture || false);
      },
    };
  },


  /**
   * Unbind `node` event `eventName`'s callback `eventListener`.
   *
   * @param {Element} node
   * @param {String} eventName
   * @param {Function} eventListener
   * @param {Boolean} capture
   * @return {Function}
   * @api public
   */

  off(node, eventName, eventListener, capture) {
    node[unbind](prefix + eventName, eventListener, capture || false);
    return eventListener;
  },
};

module.exports = events;
