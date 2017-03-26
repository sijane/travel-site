import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import $ from 'jquery'
import StickyHeader from './modules/StickyHeader'

const mobileMenu = new MobileMenu()
new RevealOnScroll($('.feature-item'), '90%')
// new RevealOnScroll(document.querySelectorAll('.feature-item'), '90%')
new RevealOnScroll($('.testimonial'), '70%')
const stickyHeader = new StickyHeader()
