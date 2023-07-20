"use client";
import {
  MutableRefObject,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
} from "react";
import React from "react";
import { GravityDiv } from "./components/gravity-div/gravity-div";
import { GravityContainer } from "./components/gravity-container/gravity-container";

function Page() {
  const defaultDelay = 2000;

  return (
    <GravityContainer>
      <div
        className="absolute flex flex-col justify-between gap-1 pt-3"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="flex flex-col gap-1 items-start pl-2">
          <GravityDiv delay={defaultDelay}>
            <h1 className="font-semibold text-[3rem] leading-none  tracking-wider p-2 bg-white">
              Hi 👋, I&apos;m Seb
            </h1>
          </GravityDiv>
          <div className="flex gap-1">
            <GravityDiv delay={defaultDelay}>
              <p className="p-1 bg-white">
                I&apos;m a Software Engineer based in Tasmania, Australia
              </p>
            </GravityDiv>
          </div>
          <GravityDiv delay={defaultDelay}>
            <p className="p-1 bg-white">
              Currently at{" "}
              <a href="https://www.goodhuman.me/" target="_blank">
                GoodHuman
              </a>
            </p>
          </GravityDiv>
          <div className="flex gap-1">
            <GravityDiv delay={defaultDelay}>
              <p className="text-sm p-1 bg-white">
                <a
                  href="https://www.linkedin.com/in/sebastian-king-15011b171/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </p>
            </GravityDiv>
            <GravityDiv delay={defaultDelay}>
              <p className="text-sm p-1 bg-white">
                <a href="https://github.com/sebastiancwk" target="_blank">
                  GitHub
                </a>
              </p>
            </GravityDiv>
          </div>
          <GravityDiv delay={defaultDelay}>
            <p className="p-1 bg-white text-xs">
              Wanna chat? Send me an{" "}
              <a href="mailto: sebastiancwking@gmail.com" target="_blank">
                email
              </a>
            </p>
          </GravityDiv>
        </div>
        <div className=" flex justify-center pb-2">
          <GravityDiv isStatic>
            {" "}
            <p className="text-[0.75rem] p-1 text-white opacity-60">
              &copy; Sebastian King 2023
            </p>
          </GravityDiv>
        </div>
      </div>
    </GravityContainer>
  );
}

export default Page;
