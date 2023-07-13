"use client";
import { MutableRefObject, PropsWithChildren, useEffect, useRef } from "react";
import { Engine, Render, Bodies, World } from "matter-js";
import React from "react";

const useTest = () => {
  const scene = useRef();
  const engine = useRef(Engine.create({ gravity: { y: 0.8 } }));

  useEffect(() => {
    const cw = window.innerWidth;
    const ch = window.innerHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
        showPositions: false,
      },
    });

    World.add(engine.current.world, [
      // Bodies.rectangle(cw / 2, -10, cw, 20, {
      //   isStatic: true,
      //   render: { fillStyle: "transparent", strokeStyle: "transparent" },
      // }),
      Bodies.rectangle(-10, ch / 2, 20, ch, {
        isStatic: true,
        render: { fillStyle: "transparent", strokeStyle: "transparent" },
      }),
      Bodies.rectangle(cw / 2, ch, cw, 20, {
        isStatic: true,
        render: { fillStyle: "transparent", strokeStyle: "transparent" },
      }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, {
        isStatic: true,
        render: { fillStyle: "transparent", strokeStyle: "transparent" },
      }),
    ]);

    setTimeout(() => {
      Engine.run(engine.current);
      Render.run(render);
    }, 0);

    return () => {
      Render.stop(render);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return { engine, scene };
};

const getStyle = (container: any) => {
  // for getting computed styles
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

const GravityDiv = ({
  engine,
  children,
}: PropsWithChildren<{ engine: MutableRefObject<Engine> }>) => {
  const divRef = useRef();

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    const { width, height } = getStyle(divRef);
    const boxBody = Bodies.rectangle(width / 2, -ch, width, height, {
      render: { fillStyle: "red", strokeStyle: "transparent" },
    });
    const box = {
      body: boxBody,
      elem: divRef,
      render() {
        const { x, y } = boxBody.position;
        if (!divRef) return;
        divRef.current.style.top = `${y - height / 2}px`;
        divRef.current.style.left = `${x - width / 2}px`;
        divRef.current.style.transform = `rotate(${boxBody.angle}rad)`;
      },
    };

    World.add(engine.current.world, [box.body]);

    (function rerender() {
      box.render();
      requestAnimationFrame(rerender);
    })();
  });

  return (
    <div className="relative">
      {/* <div className="p-1 bg-white whitespace-nowrap">{children}</div> */}
      <div ref={divRef} className="absolute p-1 bg-white whitespace-nowrap">
        {children}
      </div>
    </div>
  );
};

function Comp() {
  const { engine, scene } = useTest();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        maxHeight: "100vh",
        backgroundColor: "#002fa7",
      }}
    >
      <div
        ref={scene}
        style={{ width: "100%", height: "100%" }}
        className="absolute"
      />
      <div className="absolute top-0 px-5">
        <GravityDiv engine={engine}>
          <h1 className="font-semibold text-[3rem] leading-none pb-1">
            Sebastian King
          </h1>
        </GravityDiv>
        <GravityDiv engine={engine}>
          <p>Software Engineer</p>
        </GravityDiv>
        <GravityDiv engine={engine}>
          <p>Currently at GoodHuman</p>
        </GravityDiv>
        <GravityDiv engine={engine}>
          <div className="flex justify-between gap-12">
            <p className="text-md">
              <a href="https://www.linkedin.com/in/sebastian-king-15011b171/">
                LinkedIn
              </a>
            </p>
            <p className="text-sm">
              <a href="https://github.com/sebastiancwk">GitHub</a>
            </p>
          </div>
        </GravityDiv>
      </div>
    </div>
  );
}

export default Comp;
