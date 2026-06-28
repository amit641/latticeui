"use client";
import * as React from "react";
import { kbdAnatomy } from "latticeui-core";

export const Kbd = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function Kbd(props, ref) {
    return <kbd {...kbdAnatomy.attrs("root")} ref={ref} {...props} />;
  }
);
