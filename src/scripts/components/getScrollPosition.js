import { throttle } from './throttle'

export const getScrollPosition = () => {
  const text = document.querySelector('#text');

  text.onscroll = throttle(function () {
    localStorage.setItem('scrollPosition', text.scrollTop);
  }, 300)

  window.onload = () => {
    text.scrollTop = +(localStorage.getItem('scrollPosition')) || 0;
  }
}