import Tween, { gsap, TimelineMax } from 'gsap';
import ScrollMagic from 'ScrollMagic/scrollmagic/uncompressed/ScrollMagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
ScrollMagicPluginGsap(ScrollMagic, TimelineMax);

if (document.body.clientWidth >= 900) {
  const controller = new ScrollMagic.Controller();
  const triggersTitle = document.querySelectorAll('.trigger-title');
  const triggersImgBlock = document.querySelectorAll('.trigger-img-block');
  const triggersBlock = document.querySelectorAll('.trigger-block');
  const triggersback = document.querySelectorAll('.trigger-back');

  triggersTitle.forEach((triggerTitle) => {
    const sceneTitle = new ScrollMagic.Scene({
      triggerElement: triggerTitle,
      triggerHook: 1,
      duration: '175%',
    });
    const tlTitle = gsap.timeline();
    triggerTitle.style.transform = 'translateY(350px)';
    tlTitle.to(triggerTitle, 2, {
      transform: 'translateY(0)',
    });
    sceneTitle.setTween(tlTitle);
    sceneTitle.addTo(controller);
  });

  triggersImgBlock.forEach((triggerImgBlock) => {
    const sceneImgBlock = new ScrollMagic.Scene({
      triggerElement: triggerImgBlock,
      triggerHook: 1,
      duration: '155%',
    });
    const tlImgBlock = gsap.timeline();
    triggerImgBlock.style.transform = 'translateY(275px)';
    tlImgBlock.to(triggerImgBlock, 2, {
      transform: 'translateY(0)',
    });
    sceneImgBlock.setTween(tlImgBlock);
    sceneImgBlock.addTo(controller);
  });

  triggersBlock.forEach((triggerBlock) => {
    const sceneBlock = new ScrollMagic.Scene({
      triggerElement: triggerBlock,
      triggerHook: 1,
      duration: '200%',
    });
    const tlBlock = gsap.timeline();
    triggerBlock.style.transform = 'translateY(275px)';
    tlBlock.to(triggerBlock, 2, {
      transform: 'translateY(0)',
    });
    sceneBlock.setTween(tlBlock);
    sceneBlock.addTo(controller);
  });

  triggersback.forEach((triggerback) => {
    const sceneBalck = new ScrollMagic.Scene({
      triggerElement: triggerback,
      triggerHook: 1,
      duration: '275%',
    });
    const tlBack = gsap.timeline();
    triggerback.style.transform = 'translateY(200px)';
    tlBack.to(triggerback, 2, {
      transform: 'translateY(0)',
    });
    sceneBalck.setTween(tlBack);
    sceneBalck.addTo(controller);
  });
}
