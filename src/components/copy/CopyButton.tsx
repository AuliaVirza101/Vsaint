"use client";

import { useState } from "react";

interface CopyButtonProps {
    text: string;
    label?: string;
}

export function CopyButton({ text, label = "Copy" }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback for older browsers
            const textarea = document.createElement("textarea");
            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`
        text-xs font-medium px-2.5 py-1 rounded-md transition-all duration-150
        ${copied
                    ? "bg-green-500/20 text-green-400"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
                }
      `}
        >
            {copied ? "✓ Copied!" : label}
        </button>
    );
}
