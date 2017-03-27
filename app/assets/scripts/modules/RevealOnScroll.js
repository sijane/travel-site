import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els
    this.offsetPercentage = offset
    this.hideInitially()
    this.createWaypoints()
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item")
    // this.itemsToReveal.forEach(item => item.classList.add('reveal-item'))
  }

//   createWaypoints() {
//     const that = this
//     this.itemsToReveal.forEach(item => {
//       new Waypoint({
//         element: item,
//         handler: () => item.classList.add('reveal-item--is-visible'),
//         offset: that.offsetPercentage
//       })
//     })
//   }
// }

  createWaypoints() {
    const that = this
    this.itemsToReveal.each(function() {
      let currentItem = this
      new Waypoint({
        element: currentItem,
        handler: () => {
          $(currentItem).addClass("reveal-item--is-visible")
        },
        offset: that.offsetPercentage
      })
    })
  }
}

export default RevealOnScroll
