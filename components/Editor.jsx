'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Play, ZoomIn, ZoomOut } from 'lucide-react';
import axios from 'axios';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/matchtags';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint';


import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/clike/clike'; // For Java and C++

// Themes
import 'codemirror/theme/material-darker.css';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/theme/material-palenight.css';
import 'codemirror/theme/midnight.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/theme/isotope.css';
import 'codemirror/theme/liquibyte.css';

const Editor = () => {
    const editorRef = useRef(null);
    const [language, setLanguage] = useState('javascript');
    const [theme, setTheme] = useState('eclipse');
    const [fontSize, setFontSize] = useState(14);
    const [output, setOutput] = useState('');
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
        editorInstance.current.getWrapperElement().classList.add('editor-border');

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

    // this is my backend logic
    const runCode = async () => {
        const code = editorInstance.current.getValue();
        console.log(language, code)
        try {
            const response = await axios.post('http://192.168.29.192:3001/run', {
                language,
                code,
            });
            setOutput(response.data);
        } catch (error) {
            setOutput(error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex gap-4 mb-4 p-4 text-sm">
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="px-2 bg-gray-100 rounded-md hover:cursor-pointer"
                >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="text/x-java">Java</option>
                    <option value="text/x-c++src">C++</option>
                </select>

                <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="px-2 bg-gray-100 rounded-md hover:cursor-pointer"
                >
                    <option value="eclipse">Eclipse</option>
                    <option value="material-darker">Material Darker</option>
                    <option value="material-palenight">Material Palenight</option>
                    <option value="material-ocean">Material Ocean</option>
                    <option value="dracula">Dracula</option>
                    <option value="midnight">Midnight</option>
                    <option value="monokai">Monokai</option>
                    <option value="icecoder">Icecoder</option>
                    <option value="isotope">Isotope</option>
                    <option value="liquibyte">Liqui Byte</option>

                </select>


                <button onClick={increaseFontSize} className="p-2 border rounded"><ZoomIn color='gray' size={20} /></button>
                <button onClick={decreaseFontSize} className="p-2 border rounded"><ZoomOut color='gray' size={20} /></button>
                <button onClick={runCode} className="bg-[#ffd216] px-2 rounded text-black flex items-center gap-2">Run <Play color='black' size={15} /></button>
            </div>

            <textarea ref={editorRef} style={{ display: 'none' }} />

            <div className="output p-4 border-t border-gray-200 ">
                <h2 className="font-semibold">Output:</h2>
                <pre className="whitespace-pre-wrap text-green-800 text-lg">{output}</pre>
            </div>
        </div>
    );
};

export default Editor;
