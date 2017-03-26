import $ from 'jquery'
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'
import smoothScroll from 'jquery-smooth-scroll'

class StickyHeader {
  constructor() {
    this.lazyImages = $('.lazyload')
    this.siteHeader = $('.site-header')
    this.headerTrigger = $('.large-hero__title')
    this.siteHeaderIcon = $('.site-header__btn-container')
    this.pageSection = $('.page-section')
    this.headerLinks = $('.primary-nav a')
    this.createHeaderWaypoint()
    this.createPageSectionWaypoints()
    this.addSmoothScroll()
    this.refreshWaypoints()
    // this.resetPageSectionWaypoint()
  }

  refreshWaypoints() {
    this.lazyImages.on("load", function() {
      Waypoint.refreshAll()
    })
  }

  addSmoothScroll() {
    this.headerLinks.smoothScroll()
  }

  createHeaderWaypoint() {
    const that = this
    new Waypoint({
      element: this.headerTrigger[0],
      handler: direction => {
        if (direction == "down") {
          that.siteHeader.addClass('site-header--dark')
          that.siteHeaderIcon.addClass('site-header__btn-container--orange')
        } else {
          that.siteHeader.removeClass('site-header--dark')
          that.siteHeaderIcon.removeClass('site-header__btn-container--orange')
          that.headerLinks.removeClass('is-current-link')
        }
      }
    })
  }

  // resetPageSectionWaypoint() {
  //   const that = this
  //   new Waypoint({
  //     element: this.headerTrigger[0],
  //     handler: direction => {
  //       if (direction == "up")
  //         that.headerLinks.removeClass('is-current-link')
  //     },
  //     offset: "-20%"
  //   })
  // }

  createPageSectionWaypoints() {
    const that = this
    this.pageSection.each(function() {
      const currentPageSection = this
      new Waypoint({
        element: currentPageSection,
        handler: direction => {
          if (direction == "down") {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link')
            that.headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link')
          }
        },
        offset: '20%'
      })

      new Waypoint({
        element: currentPageSection,
        handler: direction => {
          if (direction == "up") {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link')
            that.headerLinks.removeClass('is-current-link')
            $(matchingHeaderLink).addClass('is-current-link')
          }
        },
        offset: '-40%'
      })
    })
  }
}

export default StickyHeader
