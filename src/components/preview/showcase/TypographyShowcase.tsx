export function TypographyShowcase() {
    return (
        <div className="space-y-8">
            {/* Heading Scale */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Heading Scale</h3>
                <div className="space-y-3">
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", width: "32px", flexShrink: 0 }}>H1</span>
                        <h1 className="vs-heading vs-h1">The quick brown fox</h1>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", width: "32px", flexShrink: 0 }}>H2</span>
                        <h2 className="vs-heading vs-h2">The quick brown fox</h2>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", width: "32px", flexShrink: 0 }}>H3</span>
                        <h3 className="vs-heading vs-h3">The quick brown fox</h3>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", width: "32px", flexShrink: 0 }}>H4</span>
                        <h4 className="vs-heading vs-h4">The quick brown fox</h4>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", width: "32px", flexShrink: 0 }}>H5</span>
                        <h5 className="vs-heading vs-h5">The quick brown fox</h5>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "16px" }}>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", width: "32px", flexShrink: 0 }}>H6</span>
                        <h6 className="vs-heading vs-h6">The quick brown fox</h6>
                    </div>
                </div>
            </section>

            {/* Body Text */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Body Text</h3>
                <div className="space-y-4">
                    <div>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", display: "block", marginBottom: "4px" }}>Lead</span>
                        <p className="vs-lead">
                            A lead paragraph stands out from regular body text. Use it for introductions and key messages that need emphasis.
                        </p>
                    </div>
                    <div>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", display: "block", marginBottom: "4px" }}>Body</span>
                        <p className="vs-body">
                            Regular body text for general content. Good typography is invisible — it doesn&apos;t draw attention to itself but instead lets the reader focus on the message. Well-chosen fonts, proper line height, and comfortable measure all contribute to readability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blockquote */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Blockquote</h3>
                <blockquote className="vs-blockquote">
                    <p className="vs-body" style={{ fontSize: "16px" }}>
                        &ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
                    </p>
                    <footer className="vs-body" style={{ fontSize: "14px", marginTop: "8px", fontStyle: "normal" }}>
                        — Steve Jobs
                    </footer>
                </blockquote>
            </section>

            {/* Code */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Code</h3>
                <div className="space-y-4">
                    <div>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", display: "block", marginBottom: "4px" }}>Inline code</span>
                        <p className="vs-body">
                            Install the package with <code className="vs-code">pnpm add vsaint</code> and import with <code className="vs-code">import &#123; theme &#125; from &apos;vsaint&apos;</code>.
                        </p>
                    </div>
                    <div>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", display: "block", marginBottom: "4px" }}>Code block</span>
                        <pre className="vs-code-block">
                            {`:root {
  --vs-primary: #18181b;
  --vs-primary-fg: #ffffff;
  --vs-bg: #ffffff;
  --vs-fg: #09090b;
  --vs-radius: 8px;
}`}
                        </pre>
                    </div>
                </div>
            </section>

            {/* Lists */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Lists</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", display: "block", marginBottom: "8px" }}>Unordered</span>
                        <ul className="vs-list" style={{ paddingLeft: "20px" }}>
                            <li className="vs-body" style={{ fontSize: "15px", marginBottom: "4px" }}>Design tokens for colors</li>
                            <li className="vs-body" style={{ fontSize: "15px", marginBottom: "4px" }}>Typography system</li>
                            <li className="vs-body" style={{ fontSize: "15px", marginBottom: "4px" }}>Component-level styles</li>
                            <li className="vs-body" style={{ fontSize: "15px", marginBottom: "4px" }}>Animation presets</li>
                        </ul>
                    </div>
                    <div>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", display: "block", marginBottom: "8px" }}>Ordered</span>
                        <ol className="vs-list" style={{ paddingLeft: "20px" }}>
                            <li className="vs-body" style={{ fontSize: "15px", marginBottom: "4px" }}>Browse the theme gallery</li>
                            <li className="vs-body" style={{ fontSize: "15px", marginBottom: "4px" }}>Preview on real components</li>
                            <li className="vs-body" style={{ fontSize: "15px", marginBottom: "4px" }}>Copy the CSS you need</li>
                            <li className="vs-body" style={{ fontSize: "15px", marginBottom: "4px" }}>Paste into your project</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Font Specimen */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Font Specimen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", display: "block", marginBottom: "8px" }}>Sans-serif</span>
                        <div style={{ fontFamily: "var(--vs-font-sans)" }}>
                            <div className="vs-body" style={{ fontSize: "24px", fontWeight: 300, lineHeight: 1.3 }}>Aa Bb Cc Dd Ee Ff</div>
                            <div className="vs-body" style={{ fontSize: "24px", fontWeight: 400, lineHeight: 1.3 }}>Gg Hh Ii Jj Kk Ll</div>
                            <div className="vs-body" style={{ fontSize: "24px", fontWeight: 600, lineHeight: 1.3 }}>Mm Nn Oo Pp Qq Rr</div>
                            <div className="vs-body" style={{ fontSize: "24px", fontWeight: 700, lineHeight: 1.3 }}>Ss Tt Uu Vv Ww Xx</div>
                            <div className="vs-body" style={{ fontSize: "14px", color: "var(--vs-muted-fg)", marginTop: "8px" }}>
                                0123456789 !@#$%^&amp;*()
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)", fontFamily: "var(--vs-font-mono)", display: "block", marginBottom: "8px" }}>Monospace</span>
                        <div style={{ fontFamily: "var(--vs-font-mono)" }}>
                            <div className="vs-body" style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.4 }}>Aa Bb Cc Dd Ee Ff</div>
                            <div className="vs-body" style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.4 }}>Gg Hh Ii Jj Kk Ll</div>
                            <div className="vs-body" style={{ fontSize: "20px", fontWeight: 700, lineHeight: 1.4 }}>Mm Nn Oo Pp Qq Rr</div>
                            <div className="vs-body" style={{ fontSize: "14px", color: "var(--vs-muted-fg)", marginTop: "8px" }}>
                                0123456789 !@#$%^&amp;*()
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
