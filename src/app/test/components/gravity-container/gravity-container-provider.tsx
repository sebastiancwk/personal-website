import { Bodies, Engine, Render, World } from "matter-js";
import React, {
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import { useContext } from "react";

type GravityContainerContextProps = {
  engine: Engine;
  container: HTMLDivElement;
};
const GravityContainerContext =
  React.createContext<GravityContainerContextProps>(
    {} as GravityContainerContextProps
  );

export const GravityContainerProvider = ({
  container,
  children,
}: PropsWithChildren<{ container: MutableRefObject<HTMLDivElement> }>) => {
  const engine = useRef(Engine.create({ gravity: { y: 0.5 } }));

  useEffect(() => {
    const cw = window.innerWidth;
    const ch = window.innerHeight;

    const render = Render.create({
      element: container.current,
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
      Bodies.rectangle(cw / 2, -10, cw, 20, {
        isStatic: true,
        render: { fillStyle: "transparent", strokeStyle: "transparent" },
      }),
      Bodies.rectangle(-5, ch / 2, 20, ch, {
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

  return (
    <GravityContainerContext.Provider
      value={{ engine: engine.current, container: container.current }}
    >
      {children}
    </GravityContainerContext.Provider>
  );
};

export const useGravityContext = () => useContext(GravityContainerContext);
