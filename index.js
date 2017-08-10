import {
  addEventListener,
  removeEventListener
} from 'event-listener-with-options'

export default (element, name, listener, options) => {
  addEventListener(element, name, listener, options)
  return () => removeEventListener(element, name, listener, options)
}
