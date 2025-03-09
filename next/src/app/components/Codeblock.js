"use client";
// components/Codeblock.js
import React from 'react';
import { Highlight, themes } from "prism-react-renderer"

const Codeblock = ({ code, language }) => (
    <Highlight
        theme={themes.oneLight}
        code={code.trim()}
        language={language}
    >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre style={style}>
                {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                        ))}
                    </div>
                ))}
            </pre>
        )}
    </Highlight>
);

export default Codeblock;