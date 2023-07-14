"use client";
import {
  PropsWithChildren,
  useRef,
} from "react";
import React from "react";
import { GravityContainerProvider } from "./gravity-container-provider";

export function GravityContainer({ children }: PropsWithChildren<{}>) {
  const container = useRef<HTMLDivElement>(null);

  return (
    <GravityContainerProvider container={container}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          maxHeight: "100vh",
          backgroundColor: "#002fa7",
        }}
        className="flex"
      >
        <div ref={container} style={{ width: "100vw", height: "100vh" }} />
        <div
          className="absolute flex flex-col items-center justify-center gap-1"
          style={{ width: "100%", height: "100%" }}
        >
          {children}
        </div>
      </div>
    </GravityContainerProvider>
  );
}
