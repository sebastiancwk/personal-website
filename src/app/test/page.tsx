"use client";
import { useEffect, useRef } from "react";
import { Engine, Render, Bodies, World, Svg, Composite, Body, Vertices } from "matter-js";

const useTest = () => {
  const scene = useRef();
  const engine = useRef(Engine.create());

  useEffect(() => {
    const cw = document.body.clientWidth;
    const ch = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
        showPositions: false
      },
    });

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ]);

    Engine.run(engine.current);
    Render.run(render);

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

const useCircle = () => {

}



function Comp(props) {
  const isPressed = useRef(false);

  const { engine, scene } = useTest();

  useEffect(() => {
    const rectangle = Bodies.rectangle(engine.current.render?.options.width ?? 10 /2, engine.current.render?.options.height ?? 10 / 2, 20, 20, { isStatic: true })

    World.add(engine.current.world, [rectangle])
  }, [engine])

  const handleDown = () => {
    isPressed.current = true;
  };

  const handleUp = () => {
    isPressed.current = false;
  };

  const handleAddCircle = (e) => {
    if (isPressed.current) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        10 + Math.random() * 30,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: "#0000ff",
          },
        }
      );
      World.add(engine.current.world, [ball]);
    }
  };

  return (
    <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
      style={{ width: "100vw", height: "100vh" }}
    >
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sleigh" class="svg-inline--fa fa-sleigh fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M612.7 350.7l-9.3-7.4c-6.9-5.5-17-4.4-22.5 2.5l-10 12.5c-5.5 6.9-4.4 17 2.5 22.5l9.3 7.4c5.9 4.7 9.2 11.7 9.2 19.2 0 13.6-11 24.6-24.6 24.6H48c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h516c39 0 73.7-29.3 75.9-68.3 1.4-23.8-8.7-46.3-27.2-61zM32 224c0 59.6 40.9 109.2 96 123.5V400h64v-48h192v48h64v-48c53 0 96-43 96-96v-96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96v64c0 35.3-28.7 64-64 64h-20.7c-65.8 0-125.9-37.2-155.3-96-29.4-58.8-89.6-96-155.3-96H32C14.3 32 0 46.3 0 64s14.3 32 32 32v128z"></path></svg>
      <div ref={scene} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

export default Comp;
