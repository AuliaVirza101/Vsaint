export function FormShowcase() {
    return (
        <div className="space-y-8">
            {/* Text Inputs */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Text Inputs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="vs-form-group">
                        <label className="vs-label">Default</label>
                        <input className="vs-input" type="text" placeholder="Enter text..." />
                    </div>
                    <div className="vs-form-group">
                        <label className="vs-label">With Value</label>
                        <input className="vs-input" type="text" defaultValue="John Doe" />
                    </div>
                    <div className="vs-form-group">
                        <label className="vs-label">Error State</label>
                        <input className="vs-input vs-input-error" type="text" defaultValue="invalid@" />
                        <span style={{ fontSize: "12px", color: "var(--vs-destructive)", marginTop: "4px", display: "block" }}>
                            Please enter a valid email address.
                        </span>
                    </div>
                    <div className="vs-form-group">
                        <label className="vs-label">Disabled</label>
                        <input className="vs-input" type="text" disabled defaultValue="Can't edit this" />
                    </div>
                </div>
            </section>

            {/* Select */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Select</h3>
                <div style={{ maxWidth: "320px" }}>
                    <div className="vs-form-group">
                        <label className="vs-label">Choose an option</label>
                        <select className="vs-select">
                            <option>Select...</option>
                            <option>Option One</option>
                            <option>Option Two</option>
                            <option>Option Three</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Textarea */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Textarea</h3>
                <div style={{ maxWidth: "480px" }}>
                    <div className="vs-form-group">
                        <label className="vs-label">Message</label>
                        <textarea className="vs-textarea" placeholder="Write your message here..." rows={4} />
                    </div>
                </div>
            </section>

            {/* Checkboxes & Radios */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Checkboxes & Radios</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="vs-label" style={{ marginBottom: "12px" }}>Select features</label>
                        <div className="space-y-2">
                            <label className="vs-checkbox">
                                <input type="checkbox" defaultChecked /> Dark mode support
                            </label>
                            <label className="vs-checkbox">
                                <input type="checkbox" defaultChecked /> Responsive design
                            </label>
                            <label className="vs-checkbox">
                                <input type="checkbox" /> Animation presets
                            </label>
                            <label className="vs-checkbox">
                                <input type="checkbox" /> RTL support
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="vs-label" style={{ marginBottom: "12px" }}>Choose a plan</label>
                        <div className="space-y-2">
                            <label className="vs-radio">
                                <input type="radio" name="plan" defaultChecked /> Monthly
                            </label>
                            <label className="vs-radio">
                                <input type="radio" name="plan" /> Yearly
                            </label>
                            <label className="vs-radio">
                                <input type="radio" name="plan" /> Lifetime
                            </label>
                        </div>
                    </div>
                </div>
            </section>

            {/* Toggle */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Toggle</h3>
                <div className="space-y-4">
                    <div className="vs-toggle">
                        <div className="vs-toggle-track active">
                            <div className="vs-toggle-thumb" />
                        </div>
                        <span className="vs-body" style={{ fontSize: "14px" }}>Notifications enabled</span>
                    </div>
                    <div className="vs-toggle">
                        <div className="vs-toggle-track">
                            <div className="vs-toggle-thumb" />
                        </div>
                        <span className="vs-body" style={{ fontSize: "14px" }}>Marketing emails</span>
                    </div>
                </div>
            </section>

            {/* Complete Form Example */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Login Form</h3>
                <div className="vs-card" style={{ maxWidth: "400px", padding: "32px" }}>
                    <h4 className="vs-heading vs-h4" style={{ marginBottom: "4px" }}>Welcome back</h4>
                    <p className="vs-body" style={{ fontSize: "14px", color: "var(--vs-muted-fg)", marginBottom: "24px" }}>
                        Enter your credentials to access your account.
                    </p>
                    <div className="vs-form-group">
                        <label className="vs-label">Email</label>
                        <input className="vs-input" type="email" placeholder="you@example.com" />
                    </div>
                    <div className="vs-form-group">
                        <label className="vs-label">Password</label>
                        <input className="vs-input" type="password" placeholder="••••••••" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                        <label className="vs-checkbox" style={{ fontSize: "13px" }}>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#" style={{ fontSize: "13px", color: "var(--vs-primary)", textDecoration: "none" }}>Forgot password?</a>
                    </div>
                    <button className="vs-btn vs-btn-primary" style={{ width: "100%" }}>Sign In</button>
                    <p style={{ fontSize: "13px", color: "var(--vs-muted-fg)", textAlign: "center" as const, marginTop: "16px" }}>
                        Don&apos;t have an account? <a href="#" style={{ color: "var(--vs-primary)", textDecoration: "none" }}>Sign up</a>
                    </p>
                </div>
            </section>
        </div>
    );
}
