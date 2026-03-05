export function NavigationShowcase() {
    return (
        <div className="space-y-8">
            {/* Navbar */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Navbar</h3>
                <div className="vs-navbar" style={{ borderRadius: "var(--vs-radius)" }}>
                    <div className="vs-navbar-brand">Acme Inc.</div>
                    <ul className="vs-navbar-links">
                        <li><a href="#" style={{ color: "var(--vs-fg)" }}>Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                    <button className="vs-btn vs-btn-primary vs-btn-sm">Get Started</button>
                </div>
            </section>

            {/* Tabs */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Tabs</h3>
                <div className="vs-tabs">
                    <button className="vs-tab vs-tab-active">Overview</button>
                    <button className="vs-tab">Analytics</button>
                    <button className="vs-tab">Settings</button>
                    <button className="vs-tab">Billing</button>
                </div>
                <div style={{ padding: "20px", border: "1px solid var(--vs-border)", borderTop: "none", borderRadius: "0 0 var(--vs-radius) var(--vs-radius)" }}>
                    <p className="vs-body" style={{ fontSize: "14px", color: "var(--vs-muted-fg)" }}>
                        Tab content area. This shows the content for the active Overview tab.
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Breadcrumb</h3>
                <nav className="vs-breadcrumb">
                    <a href="#">Home</a>
                    <span style={{ color: "var(--vs-border)" }}>/</span>
                    <a href="#">Products</a>
                    <span style={{ color: "var(--vs-border)" }}>/</span>
                    <a href="#">Category</a>
                    <span style={{ color: "var(--vs-border)" }}>/</span>
                    <span className="current">Current Page</span>
                </nav>
            </section>

            {/* Pagination */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Pagination</h3>
                <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
                    <button className="vs-btn vs-btn-outline vs-btn-sm" style={{ padding: "6px 10px" }}>←</button>
                    <button className="vs-btn vs-btn-primary vs-btn-sm" style={{ padding: "6px 12px" }}>1</button>
                    <button className="vs-btn vs-btn-ghost vs-btn-sm" style={{ padding: "6px 12px" }}>2</button>
                    <button className="vs-btn vs-btn-ghost vs-btn-sm" style={{ padding: "6px 12px" }}>3</button>
                    <span style={{ padding: "0 4px", color: "var(--vs-muted-fg)" }}>…</span>
                    <button className="vs-btn vs-btn-ghost vs-btn-sm" style={{ padding: "6px 12px" }}>12</button>
                    <button className="vs-btn vs-btn-outline vs-btn-sm" style={{ padding: "6px 10px" }}>→</button>
                </div>
            </section>

            {/* Sidebar */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Sidebar</h3>
                <div style={{ display: "flex", gap: "0", maxWidth: "720px", border: "1px solid var(--vs-border)", borderRadius: "var(--vs-radius)", overflow: "hidden" }}>
                    <div style={{ width: "220px", background: "var(--vs-muted)", padding: "16px", borderRight: "1px solid var(--vs-border)", flexShrink: 0 }}>
                        <div style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.05em", color: "var(--vs-muted-fg)", marginBottom: "12px" }}>
                            Navigation
                        </div>
                        {[
                            { icon: "🏠", label: "Dashboard", active: true },
                            { icon: "👤", label: "Profile", active: false },
                            { icon: "⚙", label: "Settings", active: false },
                            { icon: "📊", label: "Analytics", active: false },
                            { icon: "📁", label: "Projects", active: false },
                        ].map((item) => (
                            <div
                                key={item.label}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px",
                                    padding: "8px 12px",
                                    borderRadius: "var(--vs-radius)",
                                    fontSize: "14px",
                                    cursor: "pointer",
                                    marginBottom: "2px",
                                    background: item.active ? "var(--vs-bg)" : "transparent",
                                    color: item.active ? "var(--vs-fg)" : "var(--vs-muted-fg)",
                                    fontWeight: item.active ? 500 : 400,
                                    boxShadow: item.active ? "var(--vs-shadow-sm)" : "none",
                                }}
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ flex: 1, padding: "24px" }}>
                        <p className="vs-body" style={{ fontSize: "14px", color: "var(--vs-muted-fg)" }}>
                            Main content area. The sidebar provides navigation while content renders here.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
