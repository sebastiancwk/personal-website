import { Bodies, Engine, World } from "matter-js";
import { MutableRefObject, PropsWithChildren, useEffect, useRef } from "react";
import { useGravityContext } from "../gravity-container/gravity-container-provider";

const getStyle = (container: any) => {
  const widthInPx = getComputedStyle(container.current).getPropertyValue(
    "width"
  );
  const heightInPx = getComputedStyle(container.current).getPropertyValue(
    "height"
  );

  const width = Number(widthInPx.replace("px", ""));
  const height = Number(heightInPx.replace("px", ""));

  return { width, height };
};

type GravityDivProps = PropsWithChildren<{
  delay?: number;
}>;

export const GravityDiv = ({
  delay = 0,
  children,
}: GravityDivProps) => {
  const divRef = useRef<HTMLDivElement>();
  const startingPointRef = useRef<HTMLDivElement>();

  const { engine } = useGravityContext();

  useEffect(() => {
    const { left = 0, top = 0 } =
      startingPointRef.current?.getBoundingClientRect() ?? {};

    const { width, height } = getStyle(divRef);

    const boxBody = Bodies.rectangle(
      left + width / 2,
      top + height / 2,
      width,
      height,
      {
        render: { fillStyle: "transparent", strokeStyle: "transparent" },
      }
    );
    const box = {
      body: boxBody,
      elem: divRef,
      render() {
        const { x, y } = boxBody.position;
        if (!divRef?.current) return;
        divRef.current.style.top = `${y - height / 2}px`;
        divRef.current.style.left = `${x - width / 2}px`;
        divRef.current.style.transform = `rotate(${boxBody.angle}rad)`;
      },
    };

    box.render();
    setTimeout(() => {
      if (startingPointRef?.current)
        startingPointRef.current.className += " hidden";

      World.add(engine.world, [box.body]);
      (function rerender() {
        box.render();
        requestAnimationFrame(rerender);
      })();
    }, delay);
  });

  return (
    <div className="">
      <div ref={startingPointRef} className="ml-2 whitespace-nowrap">
        {children}
      </div>
      <div
        ref={divRef}
        className="absolute whitespace-nowrap"
        style={{ top: "-20vh" }}
      >
        {children}
      </div>
    </div>
  );
};
