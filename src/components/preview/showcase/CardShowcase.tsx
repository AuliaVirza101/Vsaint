export function CardShowcase() {
    return (
        <div className="space-y-8">
            {/* Basic Card */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Basic Card</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="vs-card">
                        <div className="vs-card-image">
                            <div style={{ width: "100%", height: "200px", background: "linear-gradient(135deg, var(--vs-primary), var(--vs-accent))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--vs-primary-fg)", fontSize: "14px", fontFamily: "var(--vs-font-mono)" }}>
                                Image Placeholder
                            </div>
                        </div>
                        <div className="vs-card-header">
                            <h4 className="vs-heading vs-h4">Card Title</h4>
                        </div>
                        <div className="vs-card-body">
                            <p className="vs-body" style={{ fontSize: "14px", color: "var(--vs-muted-fg)" }}>
                                This is a basic card with an image, title, description, and action buttons below.
                            </p>
                        </div>
                        <div className="vs-card-footer">
                            <button className="vs-btn vs-btn-primary vs-btn-sm">Action</button>
                            <button className="vs-btn vs-btn-ghost vs-btn-sm">Cancel</button>
                        </div>
                    </div>

                    <div className="vs-card">
                        <div className="vs-card-header">
                            <h4 className="vs-heading vs-h4">No Image Card</h4>
                        </div>
                        <div className="vs-card-body">
                            <p className="vs-body" style={{ fontSize: "14px", color: "var(--vs-muted-fg)" }}>
                                A card without an image. Content-focused with a clean layout suitable for text-heavy sections.
                            </p>
                        </div>
                        <div className="vs-card-footer">
                            <button className="vs-btn vs-btn-outline vs-btn-sm">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Pricing Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { name: "Starter", price: "$9", features: ["5 projects", "Basic analytics", "Email support"] },
                        { name: "Pro", price: "$29", features: ["Unlimited projects", "Advanced analytics", "Priority support", "Custom domains"], featured: true },
                        { name: "Enterprise", price: "$99", features: ["Everything in Pro", "SSO / SAML", "Dedicated manager", "SLA guarantee", "Custom integrations"] },
                    ].map((plan) => (
                        <div key={plan.name} className={`vs-card vs-card-pricing ${plan.featured ? "featured" : ""}`}>
                            <div style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase" as const, letterSpacing: "0.05em", color: "var(--vs-muted-fg)", marginBottom: "4px" }}>
                                {plan.name}
                            </div>
                            <div className="price">
                                {plan.price}<span className="period">/mo</span>
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", textAlign: "left" as const }}>
                                {plan.features.map((f) => (
                                    <li key={f} style={{ fontSize: "14px", color: "var(--vs-fg)", padding: "6px 0", borderBottom: "1px solid var(--vs-border)" }}>
                                        ✓ {f}
                                    </li>
                                ))}
                            </ul>
                            <button className={`vs-btn ${plan.featured ? "vs-btn-primary" : "vs-btn-outline"}`} style={{ width: "100%" }}>
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stat Cards */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Stat Cards</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Total Users", value: "12,489", trend: "+12%" },
                        { label: "Revenue", value: "$48.2k", trend: "+8.1%" },
                        { label: "Orders", value: "1,024", trend: "+23%" },
                        { label: "Conversion", value: "3.2%", trend: "-0.4%" },
                    ].map((stat) => (
                        <div key={stat.label} className="vs-card vs-card-stat">
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-value">{stat.value}</div>
                            <div style={{ fontSize: "13px", marginTop: "8px", color: stat.trend.startsWith("+") ? "#16a34a" : "var(--vs-destructive)" }}>
                                {stat.trend}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonial Card */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Testimonial Card</h3>
                <div className="vs-card" style={{ maxWidth: "480px" }}>
                    <div className="vs-card-body">
                        <p className="vs-body" style={{ fontSize: "15px", fontStyle: "italic", marginBottom: "16px" }}>
                            &ldquo;This design system saved us weeks of work. The themes are thoughtfully crafted and the copy-paste workflow is exactly what we needed.&rdquo;
                        </p>
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, var(--vs-primary), var(--vs-accent))" }} />
                            <div>
                                <div className="vs-body" style={{ fontSize: "14px", fontWeight: 600 }}>Sarah Chen</div>
                                <div className="vs-body" style={{ fontSize: "12px", color: "var(--vs-muted-fg)" }}>Lead Designer, Acme Inc.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
