export function ButtonShowcase() {
    return (
        <div className="space-y-8">
            {/* Primary Variants */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Button Variants</h3>
                <div className="flex flex-wrap gap-3">
                    <button className="vs-btn vs-btn-primary">Primary</button>
                    <button className="vs-btn vs-btn-secondary">Secondary</button>
                    <button className="vs-btn vs-btn-outline">Outline</button>
                    <button className="vs-btn vs-btn-ghost">Ghost</button>
                    <button className="vs-btn vs-btn-destructive">Destructive</button>
                    <button className="vs-btn vs-btn-link">Link</button>
                </div>
            </section>

            {/* Sizes */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <button className="vs-btn vs-btn-primary vs-btn-sm">Small</button>
                    <button className="vs-btn vs-btn-primary">Medium</button>
                    <button className="vs-btn vs-btn-primary vs-btn-lg">Large</button>
                </div>
            </section>

            {/* States */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">States</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <button className="vs-btn vs-btn-primary">Normal</button>
                    <button className="vs-btn vs-btn-primary" disabled>Disabled</button>
                    <button className="vs-btn vs-btn-primary vs-btn-loading">Loading</button>
                </div>
            </section>

            {/* All Variants in Outline */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Outline Sizes</h3>
                <div className="flex flex-wrap items-center gap-3">
                    <button className="vs-btn vs-btn-outline vs-btn-sm">Small</button>
                    <button className="vs-btn vs-btn-outline">Medium</button>
                    <button className="vs-btn vs-btn-outline vs-btn-lg">Large</button>
                </div>
            </section>

            {/* With Icons (using Unicode for now) */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">With Icons</h3>
                <div className="flex flex-wrap gap-3">
                    <button className="vs-btn vs-btn-primary">
                        <span>⬇</span> Download
                    </button>
                    <button className="vs-btn vs-btn-outline">
                        <span>★</span> Star
                    </button>
                    <button className="vs-btn vs-btn-ghost">
                        <span>⚙</span> Settings
                    </button>
                    <button className="vs-btn vs-btn-destructive">
                        <span>✕</span> Delete
                    </button>
                </div>
            </section>

            {/* Button Group */}
            <section>
                <h3 className="vs-heading vs-h5 mb-4">Button Group</h3>
                <div className="inline-flex rounded-lg overflow-hidden border" style={{ borderColor: "var(--vs-border)" }}>
                    <button className="vs-btn vs-btn-outline" style={{ borderRadius: 0, borderRight: "none" }}>Left</button>
                    <button className="vs-btn vs-btn-outline" style={{ borderRadius: 0, borderRight: "none" }}>Center</button>
                    <button className="vs-btn vs-btn-outline" style={{ borderRadius: 0 }}>Right</button>
                </div>
            </section>
        </div>
    );
}
