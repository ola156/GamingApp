import React, { useRef } from "react";
import AnimatedTitle from "../components/AnimatedTitle";
import gsap from "gsap";
import Button from "../components/Button";

const Story = () => {
  const frameRef = useRef("null");

  const handleMouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,

      ease: "power1.inOut",
    });
  };
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const X = clientX - rect.left;
    const Y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((Y - centerY) / centerY) * -10;
    const rotateY = ((X - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="story" className="min-h-dvh  w-screen bg-black text-blue-50">
      <div className="flex size-full  flex-col items-center py-10 pb-24  ">
        <p className="font-general text-sm uppercase  md:text-[10px]">
          The multiverse ip world
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="The St<b>o</b>ry of <br /> A hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  src="/img/entrance.webp"
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  alt="story"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center  md:-mt-62  md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start ">
            <p className="sm:mt-20 mt-60 lg:mt-20 max-w-sm text-center text-violet-50 font-circular-web md:text-start">
              Where realms converge,lies zentry and the Boundless pillarrs.
              Discover its secret and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
              id="realm-button"
              title="discover prologue"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
