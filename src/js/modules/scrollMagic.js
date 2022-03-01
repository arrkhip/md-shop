import Tween, { gsap, TimelineMax } from 'gsap';
import ScrollMagic from 'ScrollMagic/scrollmagic/uncompressed/ScrollMagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(ScrollMagic, TimelineMax);

if (document.body.clientWidth >= 900) {
  const controller = new ScrollMagic.Controller({ refreshInterval: 0 });
  const triggersTitle = document.querySelectorAll('.trigger-title');
  const triggersImgBlock = document.querySelectorAll('.trigger-img-block');
  const triggersBlock = document.querySelectorAll('.trigger-block');
  const triggersback = document.querySelectorAll('.trigger-back');
  const ImgCoin = document.querySelector('.authenticity__img-upper');

  const sceneCoin = new ScrollMagic.Scene({
    triggerElement: ImgCoin,
    triggerHook: 1,
    duration: '125%',
  });
  const tlCoin = gsap.timeline();
  ImgCoin.style.transform = 'translateY(450px)';
  ImgCoin.style.opacity = '0';
  tlCoin.to(ImgCoin, 2, {
    transform: 'translateY(0)',
    opacity: 1,
  });
  sceneCoin.setTween(tlCoin);
  sceneCoin.addTo(controller);

  triggersTitle.forEach((triggerTitle) => {
    const sceneTitle = new ScrollMagic.Scene({
      triggerElement: triggerTitle,
      triggerHook: 1,
      duration: '85%',
    });
    const tlTitle = gsap.timeline();
    triggerTitle.style.transform = 'translateY(275px)';
    triggerTitle.style.opacity = '0';
    tlTitle.to(triggerTitle, 2, {
      transform: 'translateY(0)',
      opacity: 1,
    });
    sceneTitle.setTween(tlTitle);
    sceneTitle.addTo(controller);
  });

  triggersImgBlock.forEach((triggerImgBlock) => {
    const sceneImgBlock = new ScrollMagic.Scene({
      triggerElement: triggerImgBlock,
      triggerHook: 1,
      duration: '60%',
    });
    const tlImgBlock = gsap.timeline();
    triggerImgBlock.style.transform = 'translateY(250px)';
    triggerImgBlock.style.opacity = '0';
    tlImgBlock.to(triggerImgBlock, 2, {
      transform: 'translateY(0)',
      opacity: 1,
    });
    sceneImgBlock.setTween(tlImgBlock);
    sceneImgBlock.addTo(controller);
  });

  triggersBlock.forEach((triggerBlock) => {
    const sceneBlock = new ScrollMagic.Scene({
      triggerElement: triggerBlock,
      triggerHook: 1,
      duration: '35%',
    });
    const tlBlock = gsap.timeline();
    triggerBlock.style.transform = 'translateY(225px)';
    triggerBlock.style.opacity = '0';
    tlBlock.to(triggerBlock, 2, {
      transform: 'translateY(0)',
      opacity: 1,
    });
    sceneBlock.setTween(tlBlock);
    sceneBlock.addTo(controller);
  });

  triggersback.forEach((triggerback) => {
    const sceneBalck = new ScrollMagic.Scene({
      triggerElement: triggerback,
      triggerHook: 1,
      duration: '35%',
    });
    const tlBack = gsap.timeline();
    triggerback.style.transform = 'translateY(150px)';
    triggerback.style.opacity = '0';
    tlBack.to(triggerback, 2, {
      transform: 'translateY(0)',
      opacity: 1,
    });
    sceneBalck.setTween(tlBack);
    sceneBalck.addTo(controller);
  });
}
