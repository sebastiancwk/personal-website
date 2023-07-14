"use client";
import {
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Engine, Render, Bodies, World } from "matter-js";
import React from "react";
import { GravityDiv } from "./components/gravity-div/gravity-div";
import { GravityContainer } from "./components/gravity-container/gravity-container";

function Page() {
  const defaultDelay = 1000;

  return (
    <GravityContainer>
      <div
        className="absolute flex flex-col items-center justify-center gap-1"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="flex flex-col gap-1 items-start">
          <GravityDiv delay={defaultDelay}>
            <h1 className="font-semibold text-[3rem] leading-none p-2 bg-white">
              Sebastian King
            </h1>
          </GravityDiv>
          <GravityDiv delay={defaultDelay}>
            <p className="p-1 bg-white">Software Engineer</p>
          </GravityDiv>
          <GravityDiv delay={defaultDelay}>
            <p className="p-1 bg-white">
              Currently at{" "}
              <a href="https://www.goodhuman.me/" target="_blank">
                GoodHuman
              </a>
            </p>
          </GravityDiv>
          <GravityDiv delay={defaultDelay}>
            <div className="flex justify-between gap-12 p-1 bg-white">
              <p className="text-md">
                <a
                  href="https://www.linkedin.com/in/sebastian-king-15011b171/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>
              <p className="text-sm">
                <a href="https://github.com/sebastiancwk" target="_blank">
                  GitHub
                </a>
              </p>
            </div>
          </GravityDiv>
        </div>
      </div>
    </GravityContainer>
  );
}

export default Page;
