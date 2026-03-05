export function FeedbackShowcase() {
    return (
        <div className="space-y-8">
            {/* Badges */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Badges</h3>
                <div className="flex flex-wrap gap-2">
                    <span className="vs-badge">Default</span>
                    <span className="vs-badge vs-badge-success">Success</span>
                    <span className="vs-badge vs-badge-warning">Warning</span>
                    <span className="vs-badge vs-badge-destructive">Error</span>
                </div>
            </section>

            {/* Alerts */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Alerts</h3>
                <div className="space-y-3">
                    <div className="vs-alert">
                        <span>ℹ️</span>
                        <div>
                            <strong style={{ display: "block", marginBottom: "2px" }}>Information</strong>
                            This is a neutral informational alert for general messages.
                        </div>
                    </div>
                    <div className="vs-alert vs-alert-success">
                        <span>✅</span>
                        <div>
                            <strong style={{ display: "block", marginBottom: "2px" }}>Success</strong>
                            Your changes have been saved successfully.
                        </div>
                    </div>
                    <div className="vs-alert vs-alert-warning">
                        <span>⚠️</span>
                        <div>
                            <strong style={{ display: "block", marginBottom: "2px" }}>Warning</strong>
                            Your trial expires in 3 days. Upgrade to keep access.
                        </div>
                    </div>
                    <div className="vs-alert vs-alert-error">
                        <span>❌</span>
                        <div>
                            <strong style={{ display: "block", marginBottom: "2px" }}>Error</strong>
                            Failed to process payment. Please check your card details.
                        </div>
                    </div>
                </div>
            </section>

            {/* Toast */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Toast Notification</h3>
                <div style={{ maxWidth: "360px" }}>
                    <div className="vs-card" style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: "12px", boxShadow: "var(--vs-shadow-lg)" }}>
                        <span style={{ fontSize: "18px" }}>✅</span>
                        <div style={{ flex: 1 }}>
                            <div className="vs-body" style={{ fontSize: "14px", fontWeight: 500 }}>Saved!</div>
                            <div className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)" }}>Your changes have been saved.</div>
                        </div>
                        <button className="vs-btn vs-btn-ghost" style={{ padding: "4px 8px", fontSize: "16px" }}>✕</button>
                    </div>
                </div>
            </section>

            {/* Progress */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Progress Bar</h3>
                <div className="space-y-4" style={{ maxWidth: "400px" }}>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
                            <span className="vs-body" style={{ fontSize: "13px" }}>Upload progress</span>
                            <span className="vs-body" style={{ fontSize: "13px", color: "var(--vs-muted-fg)" }}>72%</span>
                        </div>
                        <div className="vs-progress">
                            <div className="vs-progress-bar" style={{ width: "72%" }} />
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", marginBottom: "6px" }}>
                            <span className="vs-body" style={{ fontSize: "13px" }}>Storage used</span>
                            <span className="vs-body" style={{ fontSize: "13px", color: "var(--vs-muted-fg)" }}>25%</span>
                        </div>
                        <div className="vs-progress">
                            <div className="vs-progress-bar" style={{ width: "25%" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skeleton */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Skeleton Loader</h3>
                <div className="vs-card" style={{ padding: "20px", maxWidth: "400px" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
                        <div className="vs-skeleton" style={{ width: "40px", height: "40px", borderRadius: "50%", flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                            <div className="vs-skeleton" style={{ width: "60%", height: "14px", marginBottom: "8px" }} />
                            <div className="vs-skeleton" style={{ width: "40%", height: "10px" }} />
                        </div>
                    </div>
                    <div className="vs-skeleton" style={{ width: "100%", height: "12px", marginBottom: "8px" }} />
                    <div className="vs-skeleton" style={{ width: "100%", height: "12px", marginBottom: "8px" }} />
                    <div className="vs-skeleton" style={{ width: "75%", height: "12px" }} />
                </div>
            </section>

            {/* Modal Preview */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Modal Preview</h3>
                <div style={{ position: "relative", background: "rgba(0,0,0,0.4)", borderRadius: "var(--vs-radius)", padding: "40px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "280px" }}>
                    <div className="vs-card" style={{ padding: "32px", maxWidth: "420px", width: "100%", boxShadow: "var(--vs-shadow-lg)" }}>
                        <h4 className="vs-heading vs-h4" style={{ marginBottom: "8px" }}>Confirm Action</h4>
                        <p className="vs-body" style={{ fontSize: "14px", color: "var(--vs-muted-fg)", marginBottom: "24px" }}>
                            Are you sure you want to proceed? This action cannot be undone.
                        </p>
                        <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                            <button className="vs-btn vs-btn-outline">Cancel</button>
                            <button className="vs-btn vs-btn-destructive">Delete</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tooltip */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Tooltip</h3>
                <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <button className="vs-btn vs-btn-outline">Hover me</button>
                        <div style={{
                            position: "absolute",
                            bottom: "calc(100% + 8px)",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "var(--vs-fg)",
                            color: "var(--vs-bg)",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            whiteSpace: "nowrap" as const,
                            boxShadow: "var(--vs-shadow-md)",
                        }}>
                            This is a tooltip
                            <div style={{
                                position: "absolute",
                                top: "100%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                border: "5px solid transparent",
                                borderTopColor: "var(--vs-fg)",
                            }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
