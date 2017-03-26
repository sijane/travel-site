import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import $ from 'jquery'
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal'

const mobileMenu = new MobileMenu()

new RevealOnScroll($('.feature-item'), '88%')
// new RevealOnScroll(document.querySelectorAll('.feature-item'), '90%')
new RevealOnScroll($('.testimonial'), '65%')

const stickyHeader = new StickyHeader()

const modal = new Modal()
