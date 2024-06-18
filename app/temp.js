'use client'
import React, { useState, useRef, useEffect } from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint';

// Language modes
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike'; // For Java and C++

// Themes
import 'codemirror/theme/material-darker.css';
import 'codemirror/theme/eclipse.css';

const Editor = () => {
    const editorRef = useRef(null);
    const [language, setLanguage] = useState('javascript');
    const [theme, setTheme] = useState('eclipse');
    const [fontSize, setFontSize] = useState(14);
    const editorInstance = useRef(null);

    useEffect(() => {
        editorInstance.current = CodeMirror.fromTextArea(editorRef.current, {
            mode: language,
            theme: theme,
            autoCloseTags: true,
            autoCloseBrackets: true,
            lineNumbers: true,
            extraKeys: {
                'Ctrl-Space': 'autocomplete',
            },
        });

        editorInstance.current.getWrapperElement().style.height = '100vh';
        editorInstance.current.getWrapperElement().style.fontSize = `${fontSize}px`;

        // Clean up on unmount
        return () => {
            if (editorInstance.current) {
                editorInstance.current.toTextArea();
            }
        };
    }, []);

    useEffect(() => {
        if (editorInstance.current) {
            editorInstance.current.setOption('mode', language);
            editorInstance.current.setOption('theme', theme);
            editorInstance.current.getWrapperElement().style.fontSize = `${fontSize}px`;
            editorInstance.current.refresh();
        }
    }, [language, theme, fontSize]);

    const increaseFontSize = () => {
        setFontSize((prevSize) => prevSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize((prevSize) => Math.max(10, prevSize - 2));
    };

    return (
        <div className="flex flex-col h-screen text-sm">
            <div className="flex justify-end items-en bg-gray-100 gap-2 p-1">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="rounded-md px-2 bg-black text-white border-none"
                >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="text/x-java">Java</option>
                    <option value="text/x-c++src">C++</option>
                </select>

                <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="rounded-md px-2 bg-black text-white border-none"
                >
                    <option value="eclipse">Eclipse</option>
                    <option value="material-darker">Material Darker</option>
                </select>

                <button onClick={increaseFontSize}
                    className="rounded-md px-2 bg-black text-white border-none">
                    font+
                </button>

                <button onClick={decreaseFontSize}
                    className="rounded-md px-2 bg-black text-white border-none">
                    font-
                </button>
            </div>

            <textarea ref={editorRef} style={{ display: 'none' }} />
        </div>
    );
};

export default Editor;
