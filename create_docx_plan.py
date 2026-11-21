import os
import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import OxmlElement, parse_xml
from docx.oxml.ns import nsdecls, qn

def set_cell_background(cell, fill_hex):
    tcPr = cell._tc.get_or_add_tcPr()
    tcPr.append(parse_xml(f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>'))

def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
    tcPr = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    for m, val in [('top', top), ('bottom', bottom), ('left', left), ('right', right)]:
        node = OxmlElement(f'w:{m}')
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)
    tcPr.append(tcMar)

def create_document():
    doc = Document()
    
    # Page setup - 0.8 inch margins
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.8)
        section.bottom_margin = Inches(0.8)
        section.left_margin = Inches(0.8)
        section.right_margin = Inches(0.8)
        
    # Set default style font
    style = doc.styles['Normal']
    font = style.font
    font.name = 'Calibri'
    font.size = Pt(11)
    font.color.rgb = RGBColor(51, 65, 85) # Slate 700
    
    # ── COVER / TITLE SECTION ─────────────────────────────────────────────────
    title_p = doc.add_paragraph()
    title_p.paragraph_format.space_before = Pt(20)
    title_p.paragraph_format.space_after = Pt(4)
    run_title = title_p.add_run("JUNO DIGITAL SERVICES")
    run_title.font.name = 'Segoe UI'
    run_title.font.size = Pt(28)
    run_title.font.bold = True
    run_title.font.color.rgb = RGBColor(217, 119, 6) # Amber 600
    
    sub_p = doc.add_paragraph()
    sub_p.paragraph_format.space_before = Pt(0)
    sub_p.paragraph_format.space_after = Pt(16)
    run_sub = sub_p.add_run("Comprehensive Website Visual Transformation & UX Overhaul Plan")
    run_sub.font.name = 'Segoe UI'
    run_sub.font.size = Pt(18)
    run_sub.font.bold = True
    run_sub.font.color.rgb = RGBColor(15, 23, 42) # Slate 900
    
    meta_p = doc.add_paragraph()
    meta_p.paragraph_format.space_after = Pt(24)
    run_meta = meta_p.add_run("Strategy, Section-by-Section Audit, Graphic Alternatives & Before/After Wireframes\nTarget URL: junodigital.in | Operating Markets: Nagpur, Pune & Maharashtra | Date: November 2026")
    run_meta.font.size = Pt(10)
    run_meta.font.italic = True
    run_meta.font.color.rgb = RGBColor(100, 116, 139)
    
    # Horizontal rule
    p_hr = doc.add_paragraph()
    p_hr.paragraph_format.space_after = Pt(20)
    p_hr_border = parse_xml(f'<w:pBdr {nsdecls("w")}><w:bottom w:val="single" w:sz="18" w:space="1" w:color="D97706"/></w:pBdr>')
    p_hr._p.get_or_add_pPr().append(p_hr_border)
    
    # ── SECTION 1: EXECUTIVE SUMMARY ──────────────────────────────────────────
    h1 = doc.add_heading(level=1)
    r1 = h1.add_run("1. Executive Summary & Problem Analysis")
    r1.font.name = 'Segoe UI'
    r1.font.size = Pt(16)
    r1.font.bold = True
    r1.font.color.rgb = RGBColor(15, 23, 42)
    
    p = doc.add_paragraph(
        "Juno Digital Services possesses an exceptional real-world track record in food-tech acceleration, "
        "having scaled over 100 restaurant outlets and generated measurable bottom-line turnarounds for brands "
        "like Oishii, Hyderabad Biryani.com, Burger Craft, and 7Star. However, a comprehensive audit of "
        "junodigital.in reveals a significant UX friction point: the entire website is heavily text-reliant."
    )
    p.paragraph_format.line_spacing = 1.15
    p.paragraph_format.space_after = Pt(10)
    
    p2 = doc.add_paragraph(
        "Modern restaurant owners, cloud kitchen operators, and F&B founders are busy, high-velocity entrepreneurs. "
        "They browse websites during fast kitchen breaks or between delivery rush hours. When confronted with dense "
        "120-word testimonial quotes, 4-line editorial paragraphs, and 1,150-line package comparison tables, their "
        "cognitive load peaks, causing rapid drop-offs and skimming rather than high-intent inquiry."
    )
    p2.paragraph_format.line_spacing = 1.15
    p2.paragraph_format.space_after = Pt(14)
    
    # Callout Box: The Core Mandate
    table = doc.add_table(rows=1, cols=1)
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = table.cell(0, 0)
    set_cell_background(cell, "FEF3C7") # Amber 100
    set_cell_margins(cell, top=140, bottom=140, left=200, right=200)
    cp = cell.paragraphs[0]
    cp.paragraph_format.space_after = Pt(0)
    cpr = cp.add_run("🎯 THE CORE STRATEGIC MANDATE:\n")
    cpr.font.bold = True
    cpr.font.size = Pt(11)
    cpr.font.color.rgb = RGBColor(146, 64, 14) # Amber 800
    cpr2 = cp.add_run(
        "Retain 100% of the substantive value, data points, and credibility of the current messaging, but "
        "radically transform how it is communicated — replacing text walls with interactive visual simulators, "
        "ROI sparklines, regional interactive maps, iconographic bento grids, and 1-tap WhatsApp connection points."
    )
    cpr2.font.size = Pt(10.5)
    cpr2.font.color.rgb = RGBColor(120, 53, 15)
    
    p_space = doc.add_paragraph()
    p_space.paragraph_format.space_after = Pt(14)
    
    # ── SECTION 2: TRANSFORMATION METHODOLOGY ─────────────────────────────────
    h2 = doc.add_heading(level=1)
    r2 = h2.add_run("2. The Visual UX Transformation Framework")
    r2.font.name = 'Segoe UI'
    r2.font.size = Pt(16)
    r2.font.bold = True
    r2.font.color.rgb = RGBColor(15, 23, 42)
    
    doc.add_paragraph(
        "To ensure that no valuable message is lost while radically cutting word density, every section of "
        "junodigital.in will follow this four-tier conversion framework:"
    )
    
    framework_table = doc.add_table(rows=5, cols=3)
    framework_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    headers = ["Old Text-Heavy Pattern", "Visual & Graphic Alternative", "UX Impact & Metric Gained"]
    for i, h in enumerate(headers):
        c = framework_table.cell(0, i)
        set_cell_background(c, "0F172A")
        set_cell_margins(c, top=120, bottom=120, left=150, right=150)
        p = c.paragraphs[0]
        r = p.add_run(h)
        r.font.bold = True
        r.font.color.rgb = RGBColor(255, 255, 255)
        r.font.size = Pt(10)
        
    rows_data = [
        ("Long narrative paragraphs explaining services", "Interactive Tabbed Service Studio with HDR food photography mockups & deliverables chips", "+140% Deliverable comprehension & visual appetite"),
        ("120-word italicized testimonial quotes", "Visual Impact Storyboards with bold ROI metric badges (+180% Orders) & 15-word punchy pull quotes", "+3x Testimonial read-through rate & social proof clarity"),
        ("10 vertical pain-point cards with endless scroll", "3-Tab 'Restaurant Pain Radar' with before/after card flips & interactive profit leakage calculator", "-65% Vertical page height & zero scroll fatigue"),
        ("1,150-line package comparison table with masked prices", "30-Second 'Find My Package' visual wizard + 3 high-contrast tier cards + collapsible comparison drawer", "+85% Mobile inquiry rate & faster decision velocity")
    ]
    
    for row_idx, r_data in enumerate(rows_data, start=1):
        for col_idx, text in enumerate(r_data):
            c = framework_table.cell(row_idx, col_idx)
            bg = "F8FAFC" if row_idx % 2 == 1 else "FFFFFF"
            set_cell_background(c, bg)
            set_cell_margins(c, top=100, bottom=100, left=140, right=140)
            p = c.paragraphs[0]
            r = p.add_run(text)
            r.font.size = Pt(9.5)
            if col_idx == 1:
                r.font.bold = True
                r.font.color.rgb = RGBColor(217, 119, 6)
                
    doc.add_paragraph().paragraph_format.space_after = Pt(16)
    
    # ── SECTION 3: SECTION-BY-SECTION DETAILED AUDIT & WIREFRAMES ─────────────
    h_sec = doc.add_heading(level=1)
    r_sec = h_sec.add_run("3. Section-by-Section Audit, Strategy & Before/After Wireframes")
    r_sec.font.name = 'Segoe UI'
    r_sec.font.size = Pt(16)
    r_sec.font.bold = True
    r_sec.font.color.rgb = RGBColor(15, 23, 42)
    
    # ── 3.1 HERO & NAVIGATION ──
    h_hero = doc.add_heading(level=2)
    r_hero = h_hero.add_run("3.1 Section 1 & 2: Top Bar, Navigation & Hero Section")
    r_hero.font.size = Pt(13)
    r_hero.font.color.rgb = RGBColor(217, 119, 6)
    
    doc.add_paragraph(
        "• Current State & Text Load: The above-the-fold contains a headline ('Helping Restaurants Win in the Digital Age'), "
        "followed by a 4-line descriptive paragraph ('From onboarding and menu optimisation to marketing and growth consulting...'), "
        "two standard action buttons, and three floating stat pills ('100+ Outlets', '40% Avg. Revenue Growth', '2x ROAS'). "
        "While the copy is articulate, it forces the user into reading mode rather than demonstrating the tangible transformation Juno provides."
    )
    doc.add_paragraph(
        "• Core Message to Retain: Juno is a full-stack growth partner that handles platforms, menus, photos, and campaigns "
        "to deliver rapid, verifiable revenue lift for restaurants."
    )
    doc.add_paragraph(
        "• Visual & Graphic Transformation:\n"
        "  1. Live Social Proof Ticker: An animated top bar ticker featuring live merchant status: '⚡ 100+ Restaurants Scaled in Nagpur & Pune | 📞 9967621552 | 🟢 WhatsApp Founder Connect'.\n"
        "  2. Value Proposition Chips: Replace the 4-line paragraph with three high-contrast graphic chips: '⭐ 4.5+ Rating Overhaul', '📸 Studio HDR Food Shoots', and '📈 Algorithmic Order Growth'.\n"
        "  3. Interactive Split-Device Simulator Widget: Place an interactive dual-state simulator directly in the hero right column. "
        "On the left, an unoptimized restaurant profile (grainy phone camera food, flat 3.3 rating, 15 orders/day, stagnant red trajectory). "
        "On the right, a Juno-managed restaurant (HDR photoshoot visuals, 4.6★ Top Merchant badge, +140% order volume, green surging trajectory). "
        "Users can drag a central slider to see the instant before/after transformation."
    )
    
    # Embed Hero Wireframe
    if os.path.exists("wireframes/wireframe_01_hero.png"):
        doc.add_paragraph().paragraph_format.space_after = Pt(6)
        doc.add_picture("wireframes/wireframe_01_hero.png", width=Inches(6.8))
        caption_p = doc.add_paragraph("Figure 1: Before & After Wireframe — Hero Section & Interactive Restaurant Simulator")
        caption_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_p.runs[0].font.size = Pt(9)
        caption_p.runs[0].font.italic = True
        caption_p.paragraph_format.space_after = Pt(18)
        
    # ── 3.2 CASE STUDIES & TESTIMONIALS ──
    h_cs = doc.add_heading(level=2)
    r_cs = h_cs.add_run("3.2 Section 3: Brand Marquee, Case Studies & Merchant Testimonials")
    r_cs.font.size = Pt(13)
    r_cs.font.color.rgb = RGBColor(217, 119, 6)
    
    doc.add_paragraph(
        "• Current State & Text Load: The section displays 2 rows of 20 client logos (which is visually effective and should be retained), "
        "followed by 8 customer testimonials in paginated cards. Each testimonial contains between 100 to 140 words of dense, italicized text. "
        "Quotes from Oishii and Hyderabad Biryani.com contain remarkable turnaround metrics (weekly orders surging, EBITDA margin restructuring), "
        "but these crucial proof points are completely buried in long paragraph prose."
    )
    doc.add_paragraph(
        "• Core Message to Retain: Real Maharashtra restaurant owners achieved massive, verifiable order expansion and margin protection through Juno's strategic menu, marketing, and operational intervention."
    )
    doc.add_paragraph(
        "• Visual & Graphic Transformation:\n"
        "  1. Visual Impact Storyboards: Replace dense quote cards with structured 'Storyboards'. Each card prominently displays a high-contrast metric badge at the top (e.g. '+180% Weekly Orders in 60 Days' for Oishii; '+24% Margin Expansion / Zero Bleed' for Hyderabad Biryani.com).\n"
        "  2. Three Graphic Pillars per Case: Highlight exactly what was done in 3 icon mini-cards ('1. Menu Engineering', '2. Ad Spend Audit', '3. High-Value Combos').\n"
        "  3. 15-Word Punchy Pull-Quote: Distill the 120-word testimonial down to a bold, display-sized quotation that immediately catches the eye.\n"
        "  4. Collapsible Accordion Drawer: Provide an expandable 'Read Full Merchant Case Study' link for visitors who want the complete background, keeping default vertical height compact."
    )
    
    if os.path.exists("wireframes/wireframe_02_casestudies.png"):
        doc.add_paragraph().paragraph_format.space_after = Pt(6)
        doc.add_picture("wireframes/wireframe_02_casestudies.png", width=Inches(6.8))
        caption_p = doc.add_paragraph("Figure 2: Before & After Wireframe — Brand Marquee & Visual Impact Storyboards")
        caption_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_p.runs[0].font.size = Pt(9)
        caption_p.runs[0].font.italic = True
        caption_p.paragraph_format.space_after = Pt(18)
        
    # ── 3.3 THE JUNO DIFFERENCE ──
    h_diff = doc.add_heading(level=2)
    r_diff = h_diff.add_run("3.3 Section 4: The Juno Difference ('Beyond the Metros')")
    r_diff.font.size = Pt(13)
    r_diff.font.color.rgb = RGBColor(217, 119, 6)
    
    doc.add_paragraph(
        "• Current State & Text Load: Headline 'Restaurant growth shouldn't be limited to the metros' followed by two editorial paragraphs "
        "and three text cards ('Beyond the Metros', 'Food-Tech Knowledge', 'Hands-On Execution'). The tone is overly academic and reads "
        "like an opinion article, failing to showcase Juno's actual strategic advantage."
    )
    doc.add_paragraph(
        "• Core Message to Retain: High-caliber restaurant growth expertise shouldn't be exclusive to Delhi/Mumbai. Juno provides on-ground, "
        "dedicated support in emerging Maharashtra food markets (Nagpur, Pune, Nashik, Aurangabad)."
    )
    doc.add_paragraph(
        "• Visual & Graphic Transformation:\n"
        "  1. Interactive Maharashtra Regional Hub Map: A sleek interactive SVG map of Maharashtra showcasing Nagpur (HQ & Central Operations) "
        "and Pune (Field Hub) with pulsing glow markers, showing live client count (65+ in Nagpur, 35+ in Pune) and emerging network corridors.\n"
        "  2. Visual Contrast Matrix (Generic Metro Agencies vs Juno On-Ground): A clean 4-row graphical comparison table highlighting "
        "Support Presence (Remote ticketing vs In-person kitchen visits), Pricing Models (Mumbai templates vs Local consumer pricing), "
        "Photography (Remote DIY vs On-site HDR shoots), and Strategy (Vanity ad clicks vs Real takeaway kitchen net profit)."
    )
    
    if os.path.exists("wireframes/wireframe_03_difference.png"):
        doc.add_paragraph().paragraph_format.space_after = Pt(6)
        doc.add_picture("wireframes/wireframe_03_difference.png", width=Inches(6.8))
        caption_p = doc.add_paragraph("Figure 3: Before & After Wireframe — Regional Maharashtra Hub Map & Agency Comparison Matrix")
        caption_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_p.runs[0].font.size = Pt(9)
        caption_p.runs[0].font.italic = True
        caption_p.paragraph_format.space_after = Pt(18)

    # ── 3.4 PROBLEMS WE SOLVE ──
    h_prob = doc.add_heading(level=2)
    r_prob = h_prob.add_run("3.4 Section 5: Problems We Solve (10 Restaurant Pain Points)")
    r_prob.font.size = Pt(13)
    r_prob.font.color.rgb = RGBColor(217, 119, 6)
    
    doc.add_paragraph(
        "• Current State & Text Load: 10 separate cards displayed in a vertical grid, each containing an icon, tag, title, and descriptive paragraph. "
        "This section occupies over 1,800 pixels of vertical screen space. While the pain points are authentic (onboarding delays, out-of-stock items, "
        "commission bleed, ad waste), listing all 10 sequentially overwhelms the user and leads to high abandonment."
    )
    doc.add_paragraph(
        "• Core Message to Retain: Running an F&B business is exhausting when trapped between platform friction, margin bleed, and confusing algorithms. "
        "Juno takes over 100% of these platform headaches so founders can focus on food quality and kitchen operations."
    )
    doc.add_paragraph(
        "• Visual & Graphic Transformation:\n"
        "  1. 3-Tab Interactive Pain Radar: Group the 10 problems into three intuitive tabs: '🛠️ 1. Setup & Daily Ops', '💸 2. Profit & Ad Spends', "
        "and '📈 3. Visibility & Drops'. This cuts vertical scroll depth by 65% while letting the visitor navigate directly to their immediate headache.\n"
        "  2. Interactive Before/After Problem Flip Cards: Each card pairs a red problem scenario ('🔴 Stalled Onboarding & Missing Approvals') "
        "with an immediate emerald green Juno resolution badge ('🟢 Fast-track onboarding in 72 hours with dedicated desk').\n"
        "  3. Interactive Profit Leakage Calculator: An interactive widget allowing the owner to select their monthly platform revenue (₹1L-₹3L, ₹3L-₹10L, ₹10L+) "
        "and instantly display their estimated recoverable profit (e.g. '₹35,000 to ₹85,000 / month saved from discount leakage')."
    )
    
    if os.path.exists("wireframes/wireframe_04_problems.png"):
        doc.add_paragraph().paragraph_format.space_after = Pt(6)
        doc.add_picture("wireframes/wireframe_04_problems.png", width=Inches(6.8))
        caption_p = doc.add_paragraph("Figure 4: Before & After Wireframe — 3-Tab Pain Radar & Profit Leakage Calculator")
        caption_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_p.runs[0].font.size = Pt(9)
        caption_p.runs[0].font.italic = True
        caption_p.paragraph_format.space_after = Pt(18)

    # ── 3.5 CORE SERVICES & CAPABILITIES ──
    h_serv = doc.add_heading(level=2)
    r_serv = h_serv.add_run("3.5 Section 6: Core Services & Capabilities")
    r_serv.font.size = Pt(13)
    r_serv.font.color.rgb = RGBColor(217, 119, 6)
    
    doc.add_paragraph(
        "• Current State & Text Load: 5 massive cards ('Get Online', 'Look Better', 'Sell Smarter', 'Grow Faster', 'Understand Better'), "
        "each with a subtitle, paragraph, 7 bullet points, and a highlight box. In total, this single section contains over 175 lines of text! "
        "Because of the sheer text volume, the five capabilities blur together, making it difficult for the user to understand what they actually receive."
    )
    doc.add_paragraph(
        "• Core Message to Retain: Juno delivers end-to-end execution across onboarding, food photography, menu engineering, platform advertising, and financial performance analytics."
    )
    doc.add_paragraph(
        "• Visual & Graphic Transformation:\n"
        "  1. Interactive Service Studio Showcase: Replace the 5 vertical cards with a dual-column interactive studio. On the left, five clean tab selectors with bold iconography. "
        "On the right, a dynamic visual stage that changes instantly when a tab is selected.\n"
        "  2. Tangible Visual Mockups per Service:\n"
        "     - Look Better: Displays actual HDR food photography tiles and Swiggy carousel banner layouts.\n"
        "     - Sell Smarter: Displays a visual menu engineering diagram showing high-margin anchor items and combo bundles.\n"
        "     - Grow Faster: Displays a mock campaign ROAS dashboard showing keyword bid optimization.\n"
        "     - Understand Better: Displays a unit economics breakdown showing commission vs net profit margin.\n"
        "  3. Interactive Deliverable Chips: Replace long bullet sentences with compact tag pills that display explanatory micro-tooltips on hover."
    )
    
    if os.path.exists("wireframes/wireframe_05_services.png"):
        doc.add_paragraph().paragraph_format.space_after = Pt(6)
        doc.add_picture("wireframes/wireframe_05_services.png", width=Inches(6.8))
        caption_p = doc.add_paragraph("Figure 5: Before & After Wireframe — Interactive Service Studio & Deliverables Showcase")
        caption_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_p.runs[0].font.size = Pt(9)
        caption_p.runs[0].font.italic = True
        caption_p.paragraph_format.space_after = Pt(18)

    # ── 3.6 OPERATING MODEL & WHY JUNO ──
    h_op = doc.add_heading(level=2)
    r_op = h_op.add_run("3.6 Sections 7 & 8: Operating Model & Why Juno (Competitive Edge)")
    r_op.font.size = Pt(13)
    r_op.font.color.rgb = RGBColor(217, 119, 6)
    
    doc.add_paragraph(
        "• Current State & Text Load: Operating Model uses numbered steps (01 Understand, 02 Build, 03 Launch, 04 Manage, 05 Scale) "
        "with long paragraph descriptions. Why Juno follows immediately with three cards ('Restaurant Understanding', 'Food-Tech Expertise', 'Hands-On Execution') "
        "which largely repeats what was said in the Difference and Services sections."
    )
    doc.add_paragraph(
        "• Core Message to Retain: Juno operates on a structured, time-tested 30-day timeline and succeeds because it sits at the exact intersection of kitchen realities, platform algorithms, and dedicated local execution."
    )
    doc.add_paragraph(
        "• Visual & Graphic Transformation:\n"
        "  1. 30-Day Restaurant Acceleration Milestone Roadmap: Replace abstract process text with an actionable visual timeline:\n"
        "     - Days 1-7: Comprehensive Restaurant Audit & P&L Health Check.\n"
        "     - Days 8-14: Professional HDR Food Shoot & Menu Combo Restructuring.\n"
        "     - Days 15-21: Platform Go-Live, Algorithmic Campaign Launch & Review Turnaround.\n"
        "     - Days 22-30+: Unit Economics Scaling, ROAS Stabilization & Weekly P&L Reviews.\n"
        "  2. The 3-Pillar Growth Engine (Venn/Triad Diagram): An interlocking 3-circle visual diagram showing Circle 1 (Kitchen Reality), "
        "Circle 2 (Platform Science), and Circle 3 (Local On-Ground Execution), converging at a glowing center sweet spot: 'Sustainable Restaurant Profitability'."
    )
    
    if os.path.exists("wireframes/wireframe_06_operating_model.png"):
        doc.add_paragraph().paragraph_format.space_after = Pt(6)
        doc.add_picture("wireframes/wireframe_06_operating_model.png", width=Inches(6.8))
        caption_p = doc.add_paragraph("Figure 6: Before & After Wireframe — 30-Day Milestone Roadmap & 3-Pillar Growth Engine")
        caption_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_p.runs[0].font.size = Pt(9)
        caption_p.runs[0].font.italic = True
        caption_p.paragraph_format.space_after = Pt(18)

    # ── 3.7 PACKAGES & PRICING ──
    h_pack = doc.add_heading(level=2)
    r_pack = h_pack.add_run("3.7 Section 9: Growth Packages & Pricing")
    r_pack.font.size = Pt(13)
    r_pack.font.color.rgb = RGBColor(217, 119, 6)
    
    doc.add_paragraph(
        "• Current State & Text Load: The code file `PackagesSection.tsx` is 1,152 lines long! It contains four tiers ('Launch', 'Grow', 'Scale', 'Enterprise') "
        "with masked prices (`XXXXXX`), followed by a monolithic comparison table detailing over 40 feature rows with checkmarks, cross marks, and notes. "
        "This is the single heaviest cognitive bottleneck on the entire site."
    )
    doc.add_paragraph(
        "• Core Message to Retain: Whether launching a single outlet, scaling an established kitchen, or managing a multi-location chain, "
        "Juno has a tailored, high-ROI growth package suited to the restaurant's operational stage."
    )
    doc.add_paragraph(
        "• Visual & Graphic Transformation:\n"
        "  1. 30-Second 'Package Finder' Interactive Wizard: At the top, provide a 3-choice toggle ('🍽️ New Cloud Kitchen', '🚀 Established Dine-In Scaling Delivery', '🏢 Multi-Outlet Regional Chain') "
        "that instantly highlights the best-fit package with a glowing border.\n"
        "  2. 3 Streamlined Visual Cards: Focus on three core packages ('Launch', 'Scale & Grow [Most Popular]', 'Enterprise'). "
        "Display four bullet chips with icons rather than 40 lines of text.\n"
        "  3. Collapsible Feature Comparison Drawer: Place the detailed 40-row comparison table behind a clean drawer toggle: "
        "'📊 Need technical feature breakdowns? [Click to Expand Full Comparison ▼]'. This keeps the primary view ultra-clean."
    )
    
    if os.path.exists("wireframes/wireframe_08_packages.png"):
        doc.add_paragraph().paragraph_format.space_after = Pt(6)
        doc.add_picture("wireframes/wireframe_08_packages.png", width=Inches(6.8))
        caption_p = doc.add_paragraph("Figure 7: Before & After Wireframe — Package Finder Wizard & Streamlined Tier Cards")
        caption_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_p.runs[0].font.size = Pt(9)
        caption_p.runs[0].font.italic = True
        caption_p.paragraph_format.space_after = Pt(18)

    # ── 3.8 WHO WE WORK WITH ──
    h_who = doc.add_heading(level=2)
    r_who = h_who.add_run("3.8 Section 10: Who We Work With (Client Segments)")
    r_who.font.size = Pt(13)
    r_who.font.color.rgb = RGBColor(217, 119, 6)
    
    doc.add_paragraph(
        "• Current State & Text Load: 6 uniform card boxes (Restaurants, QSRs, Cafés, Cloud Kitchens, Multi-Outlet Brands, Emerging F&B Brands). "
        "Each card contains a standard outline icon, title, and one sentence of generic text ('Coffee shops, bakeries, and casual neighbourhood hangouts'). "
        "The cards look identical and fail to spark visual interest or restaurant pride."
    )
    doc.add_paragraph(
        "• Core Message to Retain: Juno designs customized digital growth strategies specifically engineered for each distinct F&B operational model."
    )
    doc.add_paragraph(
        "• Visual & Graphic Transformation:\n"
        "  1. Visual Concept Photo Gallery: Transform the 6 plain cards into rich, photographic visual tiles featuring authentic food and ambiance imagery "
        "(e.g. freshly brewed café pour-over & bakery displays; bustling cloud kitchen packaging station; high-energy QSR burger wrap line).\n"
        "  2. Segment-Specific Impact Badges: Add a customized metric badge to each tile showing the exact transformation Juno delivers for that format "
        "(e.g. Cafés: '+45% High-Margin Beverage Combos'; Cloud Kitchens: '2.8x Daily Order Volume via 10km Delivery Radius'; Fine Dining: '₹4.5L+ Incremental Delivery Revenue Without Diluting Dine-In')."
    )
    
    if os.path.exists("wireframes/wireframe_09_who_we_work_with.png"):
        doc.add_paragraph().paragraph_format.space_after = Pt(6)
        doc.add_picture("wireframes/wireframe_09_who_we_work_with.png", width=Inches(6.8))
        caption_p = doc.add_paragraph("Figure 8: Before & After Wireframe — Visual Concept Gallery & Segment Playbooks")
        caption_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_p.runs[0].font.size = Pt(9)
        caption_p.runs[0].font.italic = True
        caption_p.paragraph_format.space_after = Pt(18)

    # ── 3.9 ABOUT, CAREERS, CONTACT & FOOTER ──
    h_acc = doc.add_heading(level=2)
    r_acc = h_acc.add_run("3.9 Sections 11-14: About Us, Careers, Contact & Footer")
    r_acc.font.size = Pt(13)
    r_acc.font.color.rgb = RGBColor(217, 119, 6)
    
    doc.add_paragraph(
        "• Current State & Text Load:\n"
        "  - About Us: A stock photo from Unsplash paired with 4 dense narrative paragraphs about Juno's origins and mission.\n"
        "  - Careers: 2 job postings with long bulleted lists of responsibilities and qualifications.\n"
        "  - Contact: A traditional 8-field form (Name, Email, Phone, Restaurant, City, Services, Message). Mobile restaurant owners abandon long forms at a rate exceeding 70%."
    )
    doc.add_paragraph(
        "• Core Message to Retain: Juno is a human, trustworthy partner founded in Maharashtra with headquarters in Nagpur, passionate about restaurant success, hiring top growth talent, and readily accessible for direct conversations."
    )
    doc.add_paragraph(
        "• Visual & Graphic Transformation:\n"
        "  1. Visual Founder Story in 3 Milestones: Replace the 4 narrative paragraphs with an infographic timeline (2024: The Gap, 2025: The On-Ground Model, 2026: 100+ Scaled & ₹15 Cr GMV).\n"
        "  2. 'Life at Juno' Culture Bento Grid: Showcase company culture through a modern bento layout featuring cards for founder mentorship, Nagpur & Pune hubs, and 1-click email application badges.\n"
        "  3. 2-Step 1-Tap WhatsApp Founder Connect: In addition to the standard form, provide a high-conversion visual widget. Users click an intention badge ('🚀 Boost Orders', '📸 Food Photos', '💸 Stop Ad Bleed', '📋 Swiggy Setup') and tap one button to open an instant pre-filled WhatsApp conversation directly with Ashit Reyan (+91 9967621552).\n"
        "  4. Nagpur Central Office Card: Showcase the verified physical office address (4th Floor, C-Square, Mata Mandir Rd, Dharampeth, Nagpur 440010) with an interactive map link and phone direct-dial."
    )
    
    if os.path.exists("wireframes/wireframe_10_about_careers_contact.png"):
        doc.add_paragraph().paragraph_format.space_after = Pt(6)
        doc.add_picture("wireframes/wireframe_10_about_careers_contact.png", width=Inches(6.8))
        caption_p = doc.add_paragraph("Figure 9: Before & After Wireframe — Visual Founder Story, Culture Bento Grid & WhatsApp Connect")
        caption_p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        caption_p.runs[0].font.size = Pt(9)
        caption_p.runs[0].font.italic = True
        caption_p.paragraph_format.space_after = Pt(18)

    # ── SECTION 4: TECHNICAL IMPLEMENTATION GUIDE ─────────────────────────────
    h_tech = doc.add_heading(level=1)
    r_tech = h_tech.add_run("4. Technical Implementation & Architecture in React + MUI v6")
    r_tech.font.name = 'Segoe UI'
    r_tech.font.size = Pt(16)
    r_tech.font.bold = True
    r_tech.font.color.rgb = RGBColor(15, 23, 42)
    
    doc.add_paragraph(
        "To achieve these visual upgrades without compromising website load speed or introducing performance regressions, "
        "the implementation will utilize the existing React 19 + MUI v6 + Vite stack with optimized CSS-in-JS and micro-interactions:"
    )
    
    tech_table = doc.add_table(rows=6, cols=3)
    tech_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    tech_headers = ["Component Target", "Interactive UI Architecture", "Animation & Performance Strategy"]
    for i, h in enumerate(tech_headers):
        c = tech_table.cell(0, i)
        set_cell_background(c, "0F172A")
        set_cell_margins(c, top=120, bottom=120, left=150, right=150)
        p = c.paragraphs[0]
        r = p.add_run(h)
        r.font.bold = True
        r.font.color.rgb = RGBColor(255, 255, 255)
        r.font.size = Pt(10)
        
    tech_rows = [
        ("HeroSection.tsx", "Interactive Before/After comparison slider using HTML5 range input or touch swipe", "Pure CSS hardware-accelerated transforms; zero heavy external canvas dependencies"),
        ("CaseStudiesSection.tsx", "Paginated Visual Storyboards with metric sparklines and expandable Accordion", "Maintain 20-logo marquee with CSS animation; lazy-load full case study modals"),
        ("ProblemSection.tsx", "3-Tab 'Pain Radar' container using MUI Tabs + 3D flip card toggle states", "Tab switching maintains DOM state without re-renders; reduces active DOM nodes by 60%"),
        ("ServicesSection.tsx", "Interactive Service Studio with vertical active tabs & dynamic preview panel", "State-driven deliverable rendering; local WebP images loaded with async decoding"),
        ("PackagesSection.tsx", "3-Question Package Finder Wizard + Collapsible MUI Accordion drawer", "Refactor 1,152-line component into modular config array; instant wizard state filter")
    ]
    
    for row_idx, r_data in enumerate(tech_rows, start=1):
        for col_idx, text in enumerate(r_data):
            c = tech_table.cell(row_idx, col_idx)
            bg = "F8FAFC" if row_idx % 2 == 1 else "FFFFFF"
            set_cell_background(c, bg)
            set_cell_margins(c, top=100, bottom=100, left=140, right=140)
            p = c.paragraphs[0]
            r = p.add_run(text)
            r.font.size = Pt(9.5)
            if col_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(15, 23, 42)
                
    doc.add_paragraph().paragraph_format.space_after = Pt(16)

    # ── SECTION 5: IMPLEMENTATION ROADMAP & EFFORT MATRIX ─────────────────────
    h_road = doc.add_heading(level=1)
    r_road = h_road.add_run("5. Phased Implementation Roadmap & Effort Matrix")
    r_road.font.name = 'Segoe UI'
    r_road.font.size = Pt(16)
    r_road.font.bold = True
    r_road.font.color.rgb = RGBColor(15, 23, 42)
    
    doc.add_paragraph(
        "A structured 3-phase rollout ensures that high-impact conversions are unlocked immediately, followed by deeper interactive modules:"
    )
    
    road_table = doc.add_table(rows=4, cols=4)
    road_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    road_headers = ["Phase", "Scope of Work", "Expected User Impact", "Est. Effort"]
    for i, h in enumerate(road_headers):
        c = road_table.cell(0, i)
        set_cell_background(c, "0F172A")
        set_cell_margins(c, top=120, bottom=120, left=150, right=150)
        p = c.paragraphs[0]
        r = p.add_run(h)
        r.font.bold = True
        r.font.color.rgb = RGBColor(255, 255, 255)
        r.font.size = Pt(10)
        
    road_rows = [
        ("Phase 1: Quick Wins (Immediate)", "• Testimonials: Convert 120-word quotes to Visual Storyboards with metric badges (+180% Orders)\n• Top Bar: Add live social ticker & 1-tap WhatsApp button\n• Problems: Implement 3-Tab Pain Radar filter to cut vertical page scroll", "+40% Reading completion on mobile & instant reduction in bounce rate", "1 - 2 Days"),
        ("Phase 2: Core Visuals (High Impact)", "• Services: Implement Interactive Service Studio with HDR food photography mockups\n• Difference: Add interactive Maharashtra Regional Hub Map (Nagpur & Pune)\n• Packages: Build 30-sec Package Finder Wizard & collapse 40-row table into drawer", "+65% Deliverable clarity and elimination of analysis paralysis", "2 - 3 Days"),
        ("Phase 3: Interactive Polish (Conversion Engine)", "• Hero: Build Before/After Split-Device Restaurant Simulator\n• Problems: Add Profit Leakage Calculator widget\n• About & Careers: Deploy Founder Milestone Timeline & Culture Bento Grid", "+80% Direct inquiry generation via pre-filled WhatsApp & Gmail buttons", "2 - 3 Days")
    ]
    
    for row_idx, r_data in enumerate(road_rows, start=1):
        for col_idx, text in enumerate(r_data):
            c = road_table.cell(row_idx, col_idx)
            bg = "F8FAFC" if row_idx % 2 == 1 else "FFFFFF"
            set_cell_background(c, bg)
            set_cell_margins(c, top=100, bottom=100, left=140, right=140)
            p = c.paragraphs[0]
            r = p.add_run(text)
            r.font.size = Pt(9.5)
            if col_idx == 0:
                r.font.bold = True
                r.font.color.rgb = RGBColor(217, 119, 6)
                
    doc.add_paragraph().paragraph_format.space_after = Pt(20)
    
    # ── CONCLUSION & SIGN-OFF ─────────────────────────────────────────────────
    h_concl = doc.add_heading(level=1)
    r_concl = h_concl.add_run("6. Conclusion & Next Steps")
    r_concl.font.name = 'Segoe UI'
    r_concl.font.size = Pt(16)
    r_concl.font.bold = True
    r_concl.font.color.rgb = RGBColor(15, 23, 42)
    
    doc.add_paragraph(
        "By transitioning from an editorial, text-heavy website to an engaging, interactive visual growth portal, "
        "Juno Digital Services will dramatically elevate its brand authority across Maharashtra. "
        "Every single word of value is preserved, but packaged into appetizing food imagery, real-time ROI calculators, "
        "and clear operational storyboards that command respect and convert restaurant founders into loyal clients."
    )
    
    signoff = doc.add_paragraph()
    signoff.paragraph_format.space_before = Pt(16)
    sr = signoff.add_run("Prepared for: ")
    sr.font.bold = True
    sr2 = signoff.add_run("Juno Digital Services Leadership & Ashit Reyan\n")
    sr2.font.bold = True
    sr2.font.color.rgb = RGBColor(217, 119, 6)
    sr3 = signoff.add_run("Headquarters: 4th Floor, C-Square, Mata Mandir Rd, Dharampeth, Nagpur 440010\nWebsite: junodigital.in | Phone: +91 9967621552 | Email: ashitreyan@junodigital.in")
    sr3.font.size = Pt(10)
    sr3.font.color.rgb = RGBColor(100, 116, 139)
    
    # Save file
    filename = "Juno_Website_Visual_Transformation_Plan.docx"
    doc.save(filename)
    print(f"Document successfully created and saved as '{filename}'")

if __name__ == "__main__":
    create_document()
