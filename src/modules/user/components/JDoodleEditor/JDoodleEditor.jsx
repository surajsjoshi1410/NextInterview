import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import 'codemirror/lib/codemirror.css'; // Basic styles for CodeMirror
import 'codemirror/mode/sql/sql';       // MySQL mode
import 'codemirror/mode/python/python'; // Python mode
// import 'codemirror/addon/hint/show-hint'; // Autocomplete hint
// import 'codemirror/addon/hint/sql-hint';  // MySQL autocomplete hints
// import 'codemirror/addon/hint/python-hint';  // Python autocomplete hints

export default function JDoodleEditor() {
    const [language, setLanguage] = useState("python");
    const [code, setCode] = useState("// Write your code here...");

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleCodeChange = (editor, data, value) => {
        setCode(value);
    };

    const handleKeyEvent = (editor, event) => {
        if (event.key === "Tab") {
            editor.showHint({ hint: editor.getHelper(editor.getCursor(), "hint") });
            return true; // Prevents default tab behavior
        }
        return false;
    };

    return (
        <div>
            <h1>Code Editor with Autocompletion</h1>
            <select onChange={handleLanguageChange} value={language}>
                <option value="python">Python</option>
                <option value="mysql">MySQL</option>
            </select>

            <CodeMirror
                value={code}
                options={{
                    mode: language === "mysql" ? "sql" : "python", // Dynamically switch mode
                    theme: "default", // You can use other themes like "monokai"
                    lineNumbers: true, // Show line numbers
                    extraKeys: {
                        "Ctrl-Space": "autocomplete", // Autocomplete on Ctrl+Space
                        "Tab": handleKeyEvent, // Show hint on tab key press
                    },
                }}
                onChange={handleCodeChange} // Handle code change
            />
        </div>
    );
}
