import React from "react";
import { MDXProvider } from "@mdx-js/react";
import TeX from "@matejmazur/react-katex";
import { Code } from "./src/components/code";
import { preToCodeBlock } from "mdx-utils";

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />;
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />;
    }
  },
  div: (props) => {
    if (props?.className?.includes("math-display")) {
      require("katex/dist/katex.min.css");
      return <TeX block math={props.children} />;
    }
    return <div {...props} />;
  },
  span: (props) => {
    if (props?.className?.includes("math-inline")) {
      require("katex/dist/katex.min.css");
      return <TeX math={props.children} />;
    }
    return <span {...props} />;
  },
};
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
