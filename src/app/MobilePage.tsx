import { useState } from "react";
import { SpecificationTableScrollableMobile } from "../imports/SpecificationsAccordion";

const COLLAPSED_HEIGHT = 580; // px of table visible when folded
const GRADIENT_HEIGHT  = 120; // px of the fade-out at the bottom

const divider = (
  <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
);

function AccordionRow({ label, count, open }: { label: string; count?: number; open?: boolean }) {
  return (
    <>
      {divider}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{
            fontFamily: "'Roboto:Regular', sans-serif",
            fontSize: 18,
            lineHeight: "28px",
            color: "#3d3d3c",
            fontWeight: 400,
          }}>{label}</span>
          {count !== undefined && (
            <span style={{
              fontFamily: "'Roboto:Regular', sans-serif",
              fontSize: 16,
              lineHeight: "24px",
              color: "#3d3d3c",
              fontWeight: 400,
            }}>({count})</span>
          )}
        </div>
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19" stroke="#3d3d3c" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="#3d3d3c" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </div>
    </>
  );
}

function ToggleButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      display: "inline-flex",
      alignItems: "center",
      height: 48,
      borderRadius: 16,
      border: "1px solid #3d3d3c",
      padding: "0 32px",
      background: "none",
      cursor: "pointer",
    }}>
      <span style={{
        fontFamily: "'Husqvarna Gothic:Bold', sans-serif",
        fontSize: 14,
        lineHeight: "14px",
        letterSpacing: "1px",
        color: "#3d3d3c",
        textTransform: "uppercase",
      }}>
        {label}
      </span>
    </button>
  );
}

export default function MobilePage() {
  const [tableExpanded, setTableExpanded] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#e0e0df",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "60px 0 80px",
      gap: 24,
    }}>
      <p style={{
        fontFamily: "'Roboto:Regular', sans-serif",
        fontSize: 13,
        letterSpacing: "1px",
        color: "#888",
        textTransform: "uppercase",
        margin: 0,
      }}>
        Mobile view — 375 px
      </p>

      {/* Phone frame */}
      <div style={{
        width: 375,
        background: "white",
        borderRadius: 48,
        boxShadow: "0 24px 80px rgba(0,0,0,0.18)",
        overflow: "hidden",
        paddingBottom: 32,
      }}>
        {/* Status bar stub */}
        <div style={{ height: 44, background: "#f4f4f3" }} />

        {/* Content with 40px left/right margin */}
        <div style={{ padding: "24px 40px 0" }}>
          <p style={{
            fontFamily: "'Husqvarna Gothic:Bold', sans-serif",
            fontSize: 28,
            lineHeight: "32px",
            letterSpacing: "-0.2px",
            color: "#3d3d3c",
            margin: "0 0 20px 0",
          }}>
            Product information
          </p>
          <AccordionRow label="Manuals & Documents" count={31} />
          <AccordionRow label="Accessories" count={10} />
          <AccordionRow label="Features" count={12} />
          <AccordionRow label="Specifications" count={4} open />
          {divider}
        </div>

        {/* Text + Desktop view button above the table */}
        <div style={{ padding: "16px 40px 0", display: "flex", flexDirection: "column", gap: 16 }}>
          <p style={{
            fontFamily: "'Roboto:Regular', sans-serif",
            fontSize: 16,
            lineHeight: "24px",
            letterSpacing: "0.4px",
            color: "#3d3d3c",
            fontWeight: 350,
            margin: 0,
          }}>
            Compare specifications and features with similar Husqvarna products.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              height: 48,
              borderRadius: 16,
              border: "1px solid #3d3d3c",
              padding: "0 32px",
              cursor: "pointer",
            }}>
              <span style={{
                fontFamily: "'Husqvarna Gothic:Bold', sans-serif",
                fontSize: 14,
                lineHeight: "14px",
                letterSpacing: "1px",
                color: "#3d3d3c",
                textTransform: "uppercase",
              }}>
                Desktorp view
              </span>
            </div>
          </a>
        </div>

        {/* Table with fold/expand */}
        <div style={{ padding: "16px 40px 0" }}>
          {/* Clipping container */}
          <div style={{
            position: "relative",
            maxHeight: tableExpanded ? 2000 : COLLAPSED_HEIGHT,
            overflowX: "visible",
            overflowY: "clip",
            transition: "max-height 0.4s ease",
          }}>
            <SpecificationTableScrollableMobile />

            {/* Bottom gradient fade — only when collapsed */}
            {!tableExpanded && (
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: GRADIENT_HEIGHT,
                background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)",
                pointerEvents: "none",
                zIndex: 10,
              }} />
            )}
          </div>

          {/* Show all / Show less button */}
          <div style={{ paddingTop: 16 }}>
            {tableExpanded
              ? <ToggleButton label="Show less" onClick={() => setTableExpanded(false)} />
              : <ToggleButton label="Show all"  onClick={() => setTableExpanded(true)}  />
            }
          </div>
        </div>

        {/* Post-table accordion rows */}
        <div style={{ padding: "16px 40px 0" }}>
          <AccordionRow label="Reviews" count={32} />
          <AccordionRow label="Bundles" count={1} />
          <AccordionRow label="Spare parts" count={8} />
          <AccordionRow label="Services" count={2} />
          <AccordionRow label="Owner Support" />
          <AccordionRow label="Related Articles" count={3} />
          {divider}
        </div>
      </div>
    </div>
  );
}
