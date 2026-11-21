import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs("wireframes", exist_ok=True)

# ── Color Palette ─────────────────────────────────────────────────────────────
BG_DARK = (15, 23, 42)          # #0F172A
PANEL_BG = (30, 41, 59)         # #1E293B
PANEL_BORDER = (51, 65, 85)     # #334155
CARD_BG = (24, 32, 47)
CARD_BG_LIGHT = (44, 58, 80)
ACCENT_AMBER = (245, 158, 11)   # #F59E0B
ACCENT_BLUE = (59, 130, 246)    # #3B82F6
ACCENT_GREEN = (16, 185, 129)   # #10B981
ACCENT_RED = (239, 68, 68)      # #EF4444
ACCENT_PURPLE = (168, 85, 247)  # #A855F7
TEXT_WHITE = (255, 255, 255)
TEXT_MUTED = (148, 163, 184)    # #94A3B8
TEXT_DARK = (30, 41, 59)

def get_font(size, bold=False):
    font_path = "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf"
    try:
        return ImageFont.truetype(font_path, size)
    except:
        return ImageFont.load_default()

def create_base_canvas(width=1360, height=720, title="", subtitle=""):
    img = Image.new("RGB", (width, height), color=BG_DARK)
    draw = ImageDraw.Draw(img)
    
    # Outer container border
    draw.rounded_rectangle([15, 15, width - 15, height - 15], radius=16, outline=PANEL_BORDER, width=2)
    
    # Header
    draw.text((35, 22), title, fill=TEXT_WHITE, font=get_font(22, bold=True))
    draw.text((35, 52), subtitle, fill=TEXT_MUTED, font=get_font(13))
    
    # Left Panel (BEFORE)
    panel_w = (width - 95) // 2
    left_x1, left_y1 = 35, 82
    left_x2, left_y2 = left_x1 + panel_w, height - 28
    draw.rounded_rectangle([left_x1, left_y1, left_x2, left_y2], radius=12, fill=PANEL_BG, outline=(160, 50, 50), width=2)
    
    # Badge Before
    draw.rounded_rectangle([left_x1 + 16, left_y1 + 14, left_x1 + 250, left_y1 + 44], radius=8, fill=(80, 24, 24))
    draw.text((left_x1 + 26, left_y1 + 20), "BEFORE: Text-Heavy & Static", fill=(255, 190, 190), font=get_font(12, bold=True))
    
    # Right Panel (AFTER)
    right_x1, right_y1 = left_x2 + 25, 82
    right_x2, right_y2 = right_x1 + panel_w, height - 28
    draw.rounded_rectangle([right_x1, right_y1, right_x2, right_y2], radius=12, fill=PANEL_BG, outline=(20, 150, 95), width=2)
    
    # Badge After
    draw.rounded_rectangle([right_x1 + 16, right_y1 + 14, right_x1 + 265, right_y1 + 44], radius=8, fill=(16, 75, 50))
    draw.text((right_x1 + 26, right_y1 + 20), "AFTER: Visual, Interactive & Graphic", fill=(170, 255, 210), font=get_font(12, bold=True))
    
    return img, draw, (left_x1, left_y1, left_x2, left_y2), (right_x1, right_y1, right_x2, right_y2)

# ─────────────────────────────────────────────────────────────────────────────
# 1. HERO SECTION WIREFRAME
# ─────────────────────────────────────────────────────────────────────────────
def generate_hero_wireframe():
    img, draw, (lx1, ly1, lx2, ly2), (rx1, ry1, rx2, ry2) = create_base_canvas(
        title="SECTION 1 & 2: HERO & ABOVE-THE-FOLD TRANSFORMATION",
        subtitle="Converting dense paragraph copy and static pills into an Interactive Restaurant Simulator with Live Platform Mockups"
    )
    
    # Left: BEFORE
    draw.rounded_rectangle([lx1 + 20, ly1 + 60, lx2 - 20, ly1 + 86], radius=6, fill=CARD_BG)
    draw.text((lx1 + 32, ly1 + 66), "GET IN TOUCH TODAY! • 9967621552", fill=TEXT_MUTED, font=get_font(11))
    
    draw.rounded_rectangle([lx1 + 20, ly1 + 95, lx2 - 20, ly1 + 130], radius=8, fill=CARD_BG)
    draw.text((lx1 + 32, ly1 + 104), "JUNO DIGITAL      Services   Approach   Packages   About   Contact   [CTA]", fill=TEXT_MUTED, font=get_font(11))
    
    draw.text((lx1 + 25, ly1 + 155), "Helping Restaurants Win in the", fill=TEXT_WHITE, font=get_font(18, bold=True))
    draw.text((lx1 + 25, ly1 + 182), "Digital Age.", fill=ACCENT_AMBER, font=get_font(20, bold=True))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 220, lx2 - 25, ly1 + 330], radius=8, fill=CARD_BG, outline=(70, 80, 95))
    draw.text((lx1 + 38, ly1 + 232), "[ 4-Line Dense Paragraph ]", fill=(255, 120, 120), font=get_font(12, bold=True))
    draw.text((lx1 + 38, ly1 + 256), "From onboarding and menu optimisation to marketing and growth consulting", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 276), "— we manage your digital food business so you can focus on running your kitchen.", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 296), "India's restaurant industry is growing far beyond traditional metro markets...", fill=TEXT_MUTED, font=get_font(11))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 350, lx1 + 200, ly1 + 390], radius=8, fill=ACCENT_AMBER)
    draw.text((lx1 + 42, ly1 + 362), "Schedule Consultation", fill=TEXT_DARK, font=get_font(11, bold=True))
    draw.rounded_rectangle([lx1 + 215, ly1 + 350, lx1 + 360, ly1 + 390], radius=8, outline=ACCENT_AMBER, width=1)
    draw.text((lx1 + 240, ly1 + 362), "Explore Services", fill=ACCENT_AMBER, font=get_font(11))
    
    draw.text((lx1 + 25, ly1 + 415), "Static Floating Pills (No context / low credibility):", fill=TEXT_MUTED, font=get_font(11))
    draw.rounded_rectangle([lx1 + 25, ly1 + 440, lx1 + 180, ly1 + 490], radius=10, fill=CARD_BG)
    draw.text((lx1 + 40, ly1 + 448), "100+ Outlets", fill=TEXT_WHITE, font=get_font(12, bold=True))
    draw.text((lx1 + 40, ly1 + 468), "Scaled Across India", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([lx1 + 195, ly1 + 440, lx1 + 370, ly1 + 490], radius=10, fill=CARD_BG)
    draw.text((lx1 + 210, ly1 + 448), "40% Revenue Growth", fill=TEXT_WHITE, font=get_font(12, bold=True))
    draw.text((lx1 + 210, ly1 + 468), "Average Merchant Lift", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([lx1 + 385, ly1 + 440, lx2 - 25, ly1 + 490], radius=10, fill=CARD_BG)
    draw.text((lx1 + 400, ly1 + 448), "2x Higher ROAS", fill=TEXT_WHITE, font=get_font(12, bold=True))
    draw.text((lx1 + 400, ly1 + 468), "On Ad Spends", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 510, lx2 - 25, ly2 - 20], radius=8, fill=(50, 20, 20), outline=(120, 40, 40))
    draw.text((lx1 + 38, ly1 + 520), "⚠️ UX Audit Critique:", fill=(255, 140, 140), font=get_font(12, bold=True))
    draw.text((lx1 + 38, ly1 + 544), "• Text-heavy paragraph gets skipped (average reading time < 3s).", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 564), "• Zero visual proof of how Juno changes a restaurant's digital presence.", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 584), "• No direct instant hook (e.g. WhatsApp or Interactive Calculator).", fill=TEXT_MUTED, font=get_font(11))
    
    # Right: AFTER
    draw.rounded_rectangle([rx1 + 20, ly1 + 60, rx2 - 20, ly1 + 86], radius=6, fill=CARD_BG_LIGHT)
    draw.text((rx1 + 32, ly1 + 66), "⚡ LIVE: 100+ Restaurants Scaled in Nagpur & Pune   |   📞 Call 9967621552   |   🟢 WhatsApp Quick Audit", fill=(200, 240, 220), font=get_font(10, bold=True))
    
    draw.text((rx1 + 25, ly1 + 105), "Turn Food Delivery Platforms Into", fill=TEXT_WHITE, font=get_font(16, bold=True))
    draw.text((rx1 + 25, ly1 + 130), "Your Most Profitable Sales Channel.", fill=ACCENT_AMBER, font=get_font(18, bold=True))
    
    chips = ["⭐ 4.5+ Rating Overhaul", "📸 High-Conversion Food Photos", "📈 Algorithmic Order Growth"]
    cx = rx1 + 25
    for chip in chips:
        draw.rounded_rectangle([cx, ly1 + 165, cx + 175, ly1 + 192], radius=14, fill=CARD_BG, outline=ACCENT_AMBER)
        draw.text((cx + 10, ly1 + 171), chip, fill=TEXT_WHITE, font=get_font(10))
        cx += 185
        
    sim_box = [rx1 + 25, ly1 + 210, rx2 - 25, ly1 + 480]
    draw.rounded_rectangle(sim_box, radius=12, fill=CARD_BG, outline=(50, 100, 80), width=2)
    draw.text((rx1 + 40, ly1 + 222), "INTERACTIVE DEMO: Before vs After Juno Optimization", fill=ACCENT_GREEN, font=get_font(12, bold=True))
    
    # Left Half: Unoptimized Listing Mockup
    draw.rounded_rectangle([rx1 + 40, ly1 + 250, rx1 + 280, ly1 + 445], radius=8, fill=(35, 20, 25), outline=(120, 50, 60))
    draw.text((rx1 + 52, ly1 + 260), "❌ Typical Unmanaged Restaurant", fill=(255, 120, 120), font=get_font(11, bold=True))
    draw.text((rx1 + 52, ly1 + 285), "• Phone-camera grainy food photos", fill=TEXT_MUTED, font=get_font(10))
    draw.text((rx1 + 52, ly1 + 305), "• Flat 3.3 Star rating & ignored reviews", fill=TEXT_MUTED, font=get_font(10))
    draw.text((rx1 + 52, ly1 + 325), "• Deep discounting killing profit margins", fill=TEXT_MUTED, font=get_font(10))
    draw.text((rx1 + 52, ly1 + 345), "• 15-20 daily orders with random dips", fill=TEXT_MUTED, font=get_font(10))
    draw.line([(rx1 + 52, ly1 + 420), (rx1 + 120, ly1 + 415), (rx1 + 180, ly1 + 430), (rx1 + 260, ly1 + 425)], fill=ACCENT_RED, width=3)
    draw.text((rx1 + 52, ly1 + 385), "Stagnant GMV Trajectory 📉", fill=ACCENT_RED, font=get_font(10, bold=True))
    
    # Right Half: Juno Optimized Mockup
    draw.rounded_rectangle([rx1 + 300, ly1 + 250, rx2 - 40, ly1 + 445], radius=8, fill=(20, 45, 35), outline=(40, 140, 90))
    draw.text((rx1 + 312, ly1 + 260), "✅ Juno Managed Partner Store", fill=(160, 255, 200), font=get_font(11, bold=True))
    draw.text((rx1 + 312, ly1 + 285), "• Studio HDR Food Shoot & Combos", fill=TEXT_WHITE, font=get_font(10))
    draw.text((rx1 + 312, ly1 + 305), "• 4.6★ Verified Top Merchant Status", fill=TEXT_WHITE, font=get_font(10))
    draw.text((rx1 + 312, ly1 + 325), "• Positive Unit Economics & Margin Audit", fill=TEXT_WHITE, font=get_font(10))
    draw.text((rx1 + 312, ly1 + 345), "• 90-120 daily orders (2.4x Growth)", fill=TEXT_WHITE, font=get_font(10))
    draw.line([(rx1 + 312, ly1 + 430), (rx1 + 370, ly1 + 415), (rx1 + 440, ly1 + 385), (rx1 + 530, ly1 + 355)], fill=ACCENT_GREEN, width=4)
    draw.text((rx1 + 312, ly1 + 385), "+140% Weekly GMV Lift 🚀", fill=ACCENT_GREEN, font=get_font(10, bold=True))
    
    draw.rounded_rectangle([rx1 + 150, ly1 + 448, rx1 + 430, ly1 + 474], radius=13, fill=CARD_BG_LIGHT, outline=ACCENT_GREEN)
    draw.text((rx1 + 170, ly1 + 454), "◄ Drag slider to compare transformation ►", fill=TEXT_WHITE, font=get_font(10, bold=True))
    
    draw.rounded_rectangle([rx1 + 25, ly1 + 500, rx1 + 260, ly1 + 545], radius=10, fill=ACCENT_AMBER)
    draw.text((rx1 + 45, ly1 + 514), "📊 Get Free 15-Min Restaurant Audit", fill=TEXT_DARK, font=get_font(11, bold=True))
    
    draw.rounded_rectangle([rx1 + 280, ly1 + 500, rx2 - 25, ly1 + 545], radius=10, fill=ACCENT_GREEN)
    draw.text((rx1 + 315, ly1 + 514), "💬 Connect on WhatsApp (Founder Direct)", fill=TEXT_WHITE, font=get_font(11, bold=True))
    
    draw.rounded_rectangle([rx1 + 25, ly1 + 560, rx2 - 25, ly2 - 20], radius=8, fill=CARD_BG)
    draw.text((rx1 + 40, ly1 + 575), "🏆 Proven with 100+ Brands:  [Oishii]   [Hyderabad Biryani]   [Burger Craft]   [7Star]   [Al Rahman]", fill=TEXT_MUTED, font=get_font(10))
    
    img.save("wireframes/wireframe_01_hero.png")
    print("Generated wireframe_01_hero.png")

# ─────────────────────────────────────────────────────────────────────────────
# 2. CASE STUDIES & TESTIMONIALS WIREFRAME
# ─────────────────────────────────────────────────────────────────────────────
def generate_casestudies_wireframe():
    img, draw, (lx1, ly1, lx2, ly2), (rx1, ry1, rx2, ry2) = create_base_canvas(
        title="SECTION 3: BRAND MARQUEE & TESTIMONIALS TRANSFORMATION",
        subtitle="Replacing 120-word dense italic quotes with Visual Impact Storyboards, Verified Badges & Metric Sparklines"
    )
    
    # Left: BEFORE
    draw.text((lx1 + 25, ly1 + 65), "Brand Marquee: 2 Scrolling Rows of 20 Logos (Good)", fill=TEXT_MUTED, font=get_font(11))
    draw.rounded_rectangle([lx1 + 25, ly1 + 90, lx2 - 25, ly1 + 130], radius=8, fill=CARD_BG)
    draw.text((lx1 + 40, ly1 + 102), "[Logo 1] [Logo 2] [Logo 3] [Logo 4] [Logo 5] [Logo 6] [Logo 7] [Logo 8]", fill=TEXT_MUTED, font=get_font(10))
    
    # Testimonials Header
    draw.text((lx1 + 25, ly1 + 150), "Testimonials: 8 Cards (2 per page)", fill=TEXT_WHITE, font=get_font(14, bold=True))
    
    # Giant text card 1 (Oishii)
    draw.rounded_rectangle([lx1 + 25, ly1 + 180, lx2 - 25, ly1 + 380], radius=10, fill=CARD_BG, outline=(70, 80, 95))
    draw.text((lx1 + 40, ly1 + 195), "“When we started working with JUNO, our online business wasn't performing", fill=(220, 220, 230), font=get_font(10))
    draw.text((lx1 + 40, ly1 + 215), "to its potential despite investments in visibility campaigns. Their team took a", fill=(220, 220, 230), font=get_font(10))
    draw.text((lx1 + 40, ly1 + 235), "step back, reassessed our entire approach and helped us rebuild the strategy", fill=(220, 220, 230), font=get_font(10))
    draw.text((lx1 + 40, ly1 + 255), "from the ground up. We reworked our menu categories, moved away from campaigns", fill=(220, 220, 230), font=get_font(10))
    draw.text((lx1 + 40, ly1 + 275), "that weren't delivering meaningful returns, introduced stronger offers for new", fill=(220, 220, 230), font=get_font(10))
    draw.text((lx1 + 40, ly1 + 295), "users and strategically reactivated visibility campaigns. Weekly orders grew...", fill=(220, 220, 230), font=get_font(10))
    draw.text((lx1 + 40, ly1 + 335), "— Oishii (Nagpur)", fill=ACCENT_AMBER, font=get_font(11, bold=True))
    draw.text((lx1 + 400, ly1 + 355), "[ 120 words of dense text! ]", fill=ACCENT_RED, font=get_font(10, bold=True))
    
    # Critique
    draw.rounded_rectangle([lx1 + 25, ly1 + 405, lx2 - 25, ly2 - 20], radius=8, fill=(50, 20, 20), outline=(120, 40, 40))
    draw.text((lx1 + 38, ly1 + 420), "⚠️ UX Audit Critique:", fill=(255, 140, 140), font=get_font(12, bold=True))
    draw.text((lx1 + 38, ly1 + 448), "• Mobile users bounce when encountering 8 paragraphs of italicized quotes.", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 472), "• Key business achievements (+orders, margin recovery) are buried inside sentences.", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 496), "• Missing visual proof (no food photo, no metric badge, no sparkline).", fill=TEXT_MUTED, font=get_font(11))
    
    # Right: AFTER (Visual Impact Storyboard)
    draw.text((rx1 + 25, ly1 + 65), "Interactive Case Storyboard (Tabbed by Food Category / Brand)", fill=TEXT_MUTED, font=get_font(11))
    
    # Category Pills
    draw.rounded_rectangle([rx1 + 25, ly1 + 90, rx1 + 130, ly1 + 118], radius=14, fill=ACCENT_AMBER)
    draw.text((rx1 + 42, ly1 + 96), "All Stories", fill=TEXT_DARK, font=get_font(10, bold=True))
    
    cats = ["Asian & Sushi", "Biryani & Mughlai", "Cafés & Desserts", "Cloud Kitchens"]
    cx = rx1 + 140
    for c in cats:
        draw.rounded_rectangle([cx, ly1 + 90, cx + 110, ly1 + 118], radius=14, fill=CARD_BG, outline=PANEL_BORDER)
        draw.text((cx + 12, ly1 + 96), c, fill=TEXT_MUTED, font=get_font(9))
        cx += 118
        
    # Storyboard Card 1: Oishii Visual Story
    draw.rounded_rectangle([rx1 + 25, ly1 + 135, rx2 - 25, ly1 + 355], radius=12, fill=CARD_BG, outline=ACCENT_AMBER, width=2)
    # Header: Brand + Location + Key Metric Pill
    draw.text((rx1 + 42, ly1 + 150), "🍣 Oishii  •  Japanese & Asian Cuisine", fill=TEXT_WHITE, font=get_font(13, bold=True))
    draw.text((rx1 + 42, ly1 + 170), "📍 Nagpur, Maharashtra", fill=TEXT_MUTED, font=get_font(10))
    
    # Giant Visual Metric Pill
    draw.rounded_rectangle([rx2 - 210, ly1 + 148, rx2 - 40, ly1 + 195], radius=8, fill=(16, 75, 50), outline=ACCENT_GREEN)
    draw.text((rx2 - 198, ly1 + 154), "+180% Weekly Orders", fill=TEXT_WHITE, font=get_font(12, bold=True))
    draw.text((rx2 - 198, ly1 + 174), "Turnaround in 60 Days", fill=(170, 255, 210), font=get_font(9))
    
    # 3 Graphic Pillars of What Was Done
    draw.rounded_rectangle([rx1 + 42, ly1 + 205, rx1 + 210, ly1 + 265], radius=8, fill=CARD_BG_LIGHT)
    draw.text((rx1 + 52, ly1 + 215), "1. Menu Engineering", fill=ACCENT_AMBER, font=get_font(10, bold=True))
    draw.text((rx1 + 52, ly1 + 235), "Reworked bento combos & tags", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([rx1 + 225, ly1 + 205, rx1 + 395, ly1 + 265], radius=8, fill=CARD_BG_LIGHT)
    draw.text((rx1 + 235, ly1 + 215), "2. Ad Spend Audit", fill=ACCENT_AMBER, font=get_font(10, bold=True))
    draw.text((rx1 + 235, ly1 + 235), "Cut wasteful low-ROI campaigns", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([rx1 + 410, ly1 + 205, rx2 - 40, ly1 + 265], radius=8, fill=CARD_BG_LIGHT)
    draw.text((rx1 + 420, ly1 + 215), "3. High-Value Offers", fill=ACCENT_AMBER, font=get_font(10, bold=True))
    draw.text((rx1 + 420, ly1 + 235), "Targeted first-time foodies", fill=TEXT_MUTED, font=get_font(9))
    
    # 15-word punchy pull quote
    draw.text((rx1 + 42, ly1 + 285), "“JUNO rebuilt our strategy from scratch. Weekly orders surged while marketing ROI doubled.”", fill=TEXT_WHITE, font=get_font(11, bold=True))
    
    # Expand button
    draw.rounded_rectangle([rx1 + 42, ly1 + 315, rx1 + 220, ly1 + 342], radius=6, fill=PANEL_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 55, ly1 + 322), "📖 Read Full Merchant Case Study ▼", fill=ACCENT_AMBER, font=get_font(9, bold=True))
    
    # Storyboard Card 2: Hyderabad Biryani.com Visual Story
    draw.rounded_rectangle([rx1 + 25, ly1 + 375, rx2 - 25, ly1 + 595], radius=12, fill=CARD_BG, outline=(50, 100, 80), width=1)
    draw.text((rx1 + 42, ly1 + 390), "🍗 Hyderabad Biryani.com  •  Multi-Outlet Delivery", fill=TEXT_WHITE, font=get_font(13, bold=True))
    draw.text((rx1 + 42, ly1 + 410), "📍 Regional Maharashtra Outlets", fill=TEXT_MUTED, font=get_font(10))
    
    draw.rounded_rectangle([rx2 - 210, ly1 + 388, rx2 - 40, ly1 + 435], radius=8, fill=(16, 75, 50), outline=ACCENT_GREEN)
    draw.text((rx2 - 198, ly1 + 394), "+24% Margin Expansion", fill=TEXT_WHITE, font=get_font(12, bold=True))
    draw.text((rx2 - 198, ly1 + 414), "Zero Discount Margin Bleed", fill=(170, 255, 210), font=get_font(9))
    
    # 3 Graphic Pillars
    draw.rounded_rectangle([rx1 + 42, ly1 + 445, rx1 + 210, ly1 + 505], radius=8, fill=CARD_BG_LIGHT)
    draw.text((rx1 + 52, ly1 + 455), "1. P&L Restructuring", fill=ACCENT_GREEN, font=get_font(10, bold=True))
    draw.text((rx1 + 52, ly1 + 475), "Stopped aggressive discounting", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([rx1 + 225, ly1 + 445, rx1 + 395, ly1 + 505], radius=8, fill=CARD_BG_LIGHT)
    draw.text((rx1 + 235, ly1 + 455), "2. Commission Audit", fill=ACCENT_GREEN, font=get_font(10, bold=True))
    draw.text((rx1 + 235, ly1 + 475), "Renegotiated platform slabs", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([rx1 + 410, ly1 + 445, rx2 - 40, ly1 + 505], radius=8, fill=CARD_BG_LIGHT)
    draw.text((rx1 + 420, ly1 + 455), "3. Stable Bottom Line", fill=ACCENT_GREEN, font=get_font(10, bold=True))
    draw.text((rx1 + 420, ly1 + 475), "Maximized net unit profit", fill=TEXT_MUTED, font=get_font(9))
    
    draw.text((rx1 + 42, ly1 + 525), "“JUNO stopped our margin bleeding. They focus on financial health, not just vanity sales.”", fill=TEXT_WHITE, font=get_font(11, bold=True))
    
    draw.rounded_rectangle([rx1 + 42, ly1 + 555, rx1 + 220, ly1 + 582], radius=6, fill=PANEL_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 55, ly1 + 562), "📖 Read Full Merchant Case Study ▼", fill=ACCENT_GREEN, font=get_font(9, bold=True))
    
    img.save("wireframes/wireframe_02_casestudies.png")
    print("Generated wireframe_02_casestudies.png")

# ─────────────────────────────────────────────────────────────────────────────
# 3. THE JUNO DIFFERENCE WIREFRAME
# ─────────────────────────────────────────────────────────────────────────────
def generate_difference_wireframe():
    img, draw, (lx1, ly1, lx2, ly2), (rx1, ry1, rx2, ry2) = create_base_canvas(
        title="SECTION 4: THE JUNO DIFFERENCE TRANSFORMATION",
        subtitle="Transforming editorial text essays into an Interactive Regional Maharashtra Map & Metro vs Juno Visual Matrix"
    )
    
    # Left: BEFORE
    draw.text((lx1 + 25, ly1 + 65), "Headline: Restaurant growth shouldn't be limited to metros", fill=TEXT_WHITE, font=get_font(13, bold=True))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 100, lx2 - 25, ly1 + 240], radius=8, fill=CARD_BG, outline=(70, 80, 95))
    draw.text((lx1 + 38, ly1 + 115), "[ 2 Dense Paragraphs of Prose ]", fill=(255, 120, 120), font=get_font(11, bold=True))
    draw.text((lx1 + 38, ly1 + 140), "India's restaurant industry is growing far beyond traditional metro markets.", fill=TEXT_MUTED, font=get_font(10))
    draw.text((lx1 + 38, ly1 + 160), "Yet much of the expertise, technology, and hands-on support is still", fill=TEXT_MUTED, font=get_font(10))
    draw.text((lx1 + 38, ly1 + 180), "concentrated in the bigger cities. Juno is changing that. Starting with Nagpur,", fill=TEXT_MUTED, font=get_font(10))
    draw.text((lx1 + 38, ly1 + 200), "Pune, and emerging restaurant markets across Maharashtra...", fill=TEXT_MUTED, font=get_font(10))
    
    draw.text((lx1 + 25, ly1 + 260), "3 Small Text Cards:", fill=TEXT_MUTED, font=get_font(11))
    draw.rounded_rectangle([lx1 + 25, ly1 + 285, lx2 - 25, ly1 + 340], radius=8, fill=CARD_BG)
    draw.text((lx1 + 40, ly1 + 295), "🗺️ Beyond the Metros", fill=TEXT_WHITE, font=get_font(11, bold=True))
    draw.text((lx1 + 40, ly1 + 315), "Focusing on growing restaurant hubs like Nagpur, Pune, and surrounding markets.", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 355, lx2 - 25, ly1 + 410], radius=8, fill=CARD_BG)
    draw.text((lx1 + 40, ly1 + 365), "🍽️ Food-Tech Knowledge", fill=TEXT_WHITE, font=get_font(11, bold=True))
    draw.text((lx1 + 40, ly1 + 385), "Deep expertise in platforms, marketplace dynamics, digital menus, and customer acquisition.", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 425, lx2 - 25, ly1 + 480], radius=8, fill=CARD_BG)
    draw.text((lx1 + 40, ly1 + 435), "📈 Hands-On Execution", fill=TEXT_WHITE, font=get_font(11, bold=True))
    draw.text((lx1 + 40, ly1 + 455), "We combine digital strategy with local execution to help you build a stronger online business.", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 505, lx2 - 25, ly2 - 20], radius=8, fill=(50, 20, 20), outline=(120, 40, 40))
    draw.text((lx1 + 38, ly1 + 520), "⚠️ UX Audit Critique:", fill=(255, 140, 140), font=get_font(12, bold=True))
    draw.text((lx1 + 38, ly1 + 544), "• Fails to visually prove Juno's geographic superiority in Maharashtra.", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 568), "• Reads like a static blog post rather than a high-energy growth firm.", fill=TEXT_MUTED, font=get_font(11))
    
    # Right: AFTER
    draw.text((rx1 + 25, ly1 + 65), "Interactive Maharashtra Food Hub Map + Comparison Matrix", fill=TEXT_WHITE, font=get_font(13, bold=True))
    
    # Visual Maharashtra Map Representation
    draw.rounded_rectangle([rx1 + 25, ly1 + 95, rx2 - 25, ly1 + 310], radius=12, fill=CARD_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 40, ly1 + 108), "🗺️ REGIONAL EXECUTION NETWORK (On-the-ground support)", fill=ACCENT_AMBER, font=get_font(11, bold=True))
    
    # Nagpur Hub Pin
    draw.rounded_rectangle([rx1 + 360, ly1 + 140, rx1 + 540, ly1 + 205], radius=8, fill=CARD_BG_LIGHT, outline=ACCENT_AMBER, width=2)
    draw.text((rx1 + 372, ly1 + 148), "📍 NAGPUR (Headquarters)", fill=ACCENT_AMBER, font=get_font(11, bold=True))
    draw.text((rx1 + 372, ly1 + 168), "• Dharampeth Central Office", fill=TEXT_WHITE, font=get_font(9))
    draw.text((rx1 + 372, ly1 + 185), "• 65+ Outlets Managed Locally", fill=(170, 255, 210), font=get_font(9, bold=True))
    
    # Pune Hub Pin
    draw.rounded_rectangle([rx1 + 50, ly1 + 190, rx1 + 230, ly1 + 255], radius=8, fill=CARD_BG_LIGHT, outline=ACCENT_BLUE, width=2)
    draw.text((rx1 + 62, ly1 + 198), "📍 PUNE (Hub)", fill=ACCENT_BLUE, font=get_font(11, bold=True))
    draw.text((rx1 + 62, ly1 + 218), "• Dedicated Account Leads", fill=TEXT_WHITE, font=get_font(9))
    draw.text((rx1 + 62, ly1 + 235), "• High-Volume Cloud Kitchens", fill=(170, 255, 210), font=get_font(9, bold=True))
    
    # Connecting Line
    draw.line([(rx1 + 230, ly1 + 220), (rx1 + 360, ly1 + 175)], fill=ACCENT_AMBER, width=2)
    
    # Emerging Nodes
    draw.text((rx1 + 50, ly1 + 280), "Emerging Coverage: [ Nashik ]  [ Aurangabad ]  [ Amravati ]  [ Kolhapur ]", fill=TEXT_MUTED, font=get_font(10))
    
    # Visual Contrast Matrix (Metros Agency vs Juno)
    draw.rounded_rectangle([rx1 + 25, ly1 + 330, rx2 - 25, ly2 - 20], radius=12, fill=CARD_BG, outline=(50, 100, 80), width=1)
    draw.text((rx1 + 40, ly1 + 342), "⚖️ WHY METRO AGENCIES FAIL TIER-2/3 RESTAURANTS (VS JUNO)", fill=TEXT_WHITE, font=get_font(11, bold=True))
    
    # Table Header
    draw.text((rx1 + 40, ly1 + 375), "Feature", fill=TEXT_MUTED, font=get_font(10, bold=True))
    draw.text((rx1 + 200, ly1 + 375), "Generic Metro Agencies", fill=(255, 120, 120), font=get_font(10, bold=True))
    draw.text((rx1 + 400, ly1 + 375), "Juno On-Ground Model", fill=ACCENT_GREEN, font=get_font(10, bold=True))
    draw.line([(rx1 + 35, ly1 + 395), (rx2 - 35, ly1 + 395)], fill=PANEL_BORDER, width=1)
    
    rows = [
        ("Support Presence", "❌ Remote ticketing / junior callers", "✅ In-person visits & direct WhatsApp"),
        ("Local Palate & Pricing", "❌ Generic Mumbai/Delhi templates", "✅ Custom Nagpur & Pune consumer pricing"),
        ("Photography Support", "❌ Heavy extra fees, remote DIY", "✅ On-site professional food shoots"),
        ("P&L Margin Focus", "❌ Obsessed with vanity ad spend", "✅ Focus on net takeaway kitchen profit"),
    ]
    ry = ly1 + 408
    for r in rows:
        draw.text((rx1 + 40, ry), r[0], fill=TEXT_WHITE, font=get_font(10))
        draw.text((rx1 + 200, ry), r[1], fill=(255, 180, 180), font=get_font(10))
        draw.text((rx1 + 400, ry), r[2], fill=(180, 255, 210), font=get_font(10, bold=True))
        ry += 32
        
    img.save("wireframes/wireframe_03_difference.png")
    print("Generated wireframe_03_difference.png")

# ─────────────────────────────────────────────────────────────────────────────
# 4. PROBLEMS WE SOLVE WIREFRAME
# ─────────────────────────────────────────────────────────────────────────────
def generate_problems_wireframe():
    img, draw, (lx1, ly1, lx2, ly2), (rx1, ry1, rx2, ry2) = create_base_canvas(
        title="SECTION 5: PROBLEMS WE SOLVE (10 PAIN POINTS) TRANSFORMATION",
        subtitle="Converting 10 vertical text cards into a 3-Category Interactive Pain Radar with Before/After Flip Cards"
    )
    
    # Left: BEFORE (10 cards vertical scroll nightmare)
    draw.text((lx1 + 25, ly1 + 65), "10 Separate Text Cards Stacked Vertically (Endless Page Scroll)", fill=TEXT_MUTED, font=get_font(11))
    
    cards_before = [
        ("1. Getting Listed on Swiggy & Zomato", "Chasing partner managers, endless document re-submissions, bank verification delays..."),
        ("2. Keeping Your Menu Updated", "Toggling out-of-stock items, adjusting combo rates, updating taxes at 11 PM..."),
        ("3. Food Photography Hassles", "Organizing disruptive shoots during rush hours, paying steep fees, facing rejections..."),
        ("4. Managing Offers & Promotions", "Surviving discount wars without wiping out your profit margins..."),
        ("5. Decoding Order Drops & Surges", "Guessing why yesterday had 120 orders but today only 15..."),
    ]
    cy = ly1 + 95
    for c in cards_before:
        draw.rounded_rectangle([lx1 + 25, cy, lx2 - 25, cy + 62], radius=8, fill=CARD_BG)
        draw.text((lx1 + 38, cy + 10), c[0], fill=TEXT_WHITE, font=get_font(11, bold=True))
        draw.text((lx1 + 38, cy + 32), c[1], fill=TEXT_MUTED, font=get_font(9))
        cy += 72
        
    draw.text((lx1 + 25, cy + 10), "... + 5 more cards below the fold creating massive scroll fatigue!", fill=ACCENT_RED, font=get_font(11, bold=True))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 510, lx2 - 25, ly2 - 20], radius=8, fill=(50, 20, 20), outline=(120, 40, 40))
    draw.text((lx1 + 38, ly1 + 520), "⚠️ UX Audit Critique:", fill=(255, 140, 140), font=get_font(12, bold=True))
    draw.text((lx1 + 38, ly1 + 544), "• 10 cards take up 1,800px of vertical space, losing 70% of readers.", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 568), "• No interactive element to diagnose which problem the owner is suffering from.", fill=TEXT_MUTED, font=get_font(11))
    
    # Right: AFTER (Interactive Pain Radar & Flip Cards)
    draw.text((rx1 + 25, ly1 + 65), "Interactive 3-Tab Pain Radar (Select Your Biggest Bottleneck)", fill=TEXT_WHITE, font=get_font(12, bold=True))
    
    # 3 Category Tabs
    draw.rounded_rectangle([rx1 + 25, ly1 + 95, rx1 + 195, ly1 + 130], radius=10, fill=ACCENT_AMBER)
    draw.text((rx1 + 38, ly1 + 105), "🛠️ 1. Setup & Daily Ops", fill=TEXT_DARK, font=get_font(11, bold=True))
    
    draw.rounded_rectangle([rx1 + 210, ly1 + 95, rx1 + 380, ly1 + 130], radius=10, fill=CARD_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 225, ly1 + 105), "💸 2. Profit & Ad Spends", fill=TEXT_MUTED, font=get_font(11))
    
    draw.rounded_rectangle([rx1 + 395, ly1 + 95, rx2 - 25, ly1 + 130], radius=10, fill=CARD_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 410, ly1 + 105), "📈 3. Visibility & Drops", fill=TEXT_MUTED, font=get_font(11))
    
    # Interactive Problem Flip-Card Mockup 1
    draw.rounded_rectangle([rx1 + 25, ly1 + 150, rx2 - 25, ly1 + 305], radius=12, fill=CARD_BG, outline=ACCENT_RED, width=2)
    # Red Side (Problem)
    draw.text((rx1 + 40, ly1 + 165), "🔴 THE HEADACHE: Partner Management & Menu Chaos", fill=(255, 120, 120), font=get_font(12, bold=True))
    draw.text((rx1 + 40, ly1 + 190), "• Stalled onboarding, missing GST/FSSAI approvals, no account manager answering calls.", fill=TEXT_MUTED, font=get_font(10))
    draw.text((rx1 + 40, ly1 + 210), "• Manually marking 8 items out of stock across 3 different portals every rush hour.", fill=TEXT_MUTED, font=get_font(10))
    
    # Green Side (Juno Transformation)
    draw.rounded_rectangle([rx1 + 40, ly1 + 235, rx2 - 40, ly1 + 292], radius=8, fill=(16, 60, 40), outline=ACCENT_GREEN)
    draw.text((rx1 + 52, ly1 + 245), "🟢 HOW JUNO SOLVES IT (100% Offloaded):", fill=(170, 255, 210), font=get_font(11, bold=True))
    draw.text((rx1 + 52, ly1 + 268), "Fast-track onboarding in 72 hours + Dedicated operations desk handling daily live updates.", fill=TEXT_WHITE, font=get_font(10))
    
    # Interactive Problem Flip-Card Mockup 2
    draw.rounded_rectangle([rx1 + 25, ly1 + 325, rx2 - 25, ly1 + 480], radius=12, fill=CARD_BG, outline=ACCENT_AMBER, width=2)
    draw.text((rx1 + 40, ly1 + 340), "🔴 THE HEADACHE: Sudden Order Drops & Commission Bleed", fill=(255, 150, 120), font=get_font(12, bold=True))
    draw.text((rx1 + 40, ly1 + 365), "• 40% drops on Monday with zero explanation from platform dashboards.", fill=TEXT_MUTED, font=get_font(10))
    draw.text((rx1 + 40, ly1 + 385), "• Giving 50% discounts while paying 28% commission, leaving zero kitchen profit.", fill=TEXT_MUTED, font=get_font(10))
    
    draw.rounded_rectangle([rx1 + 40, ly1 + 410, rx2 - 40, ly1 + 467], radius=8, fill=(16, 60, 40), outline=ACCENT_GREEN)
    draw.text((rx1 + 52, ly1 + 420), "🟢 HOW JUNO SOLVES IT (Algorithmic Defense & Unit Economics):", fill=(170, 255, 210), font=get_font(11, bold=True))
    draw.text((rx1 + 52, ly1 + 443), "Deep algorithmic ranking recovery + Restructured pricing tiers that guarantee positive margin.", fill=TEXT_WHITE, font=get_font(10))
    
    # Bottom Self-Diagnostic Hook
    draw.rounded_rectangle([rx1 + 25, ly1 + 500, rx2 - 25, ly2 - 20], radius=10, fill=CARD_BG_LIGHT)
    draw.text((rx1 + 40, ly1 + 515), "🔍 Restaurant Profit Leakage Calculator", fill=ACCENT_AMBER, font=get_font(11, bold=True))
    draw.text((rx1 + 40, ly1 + 538), "Select your current monthly Swiggy/Zomato volume:  [₹1L - ₹3L]   [₹3L - ₹10L]   [₹10L+]", fill=TEXT_WHITE, font=get_font(10))
    draw.text((rx1 + 40, ly1 + 560), "Estimated Recoverable Profit with Juno: ₹35,000 to ₹85,000 / month", fill=ACCENT_GREEN, font=get_font(11, bold=True))
    
    img.save("wireframes/wireframe_04_problems.png")
    print("Generated wireframe_04_problems.png")

# ─────────────────────────────────────────────────────────────────────────────
# 5. CORE SERVICES WIREFRAME
# ─────────────────────────────────────────────────────────────────────────────
def generate_services_wireframe():
    img, draw, (lx1, ly1, lx2, ly2), (rx1, ry1, rx2, ry2) = create_base_canvas(
        title="SECTION 6: CORE SERVICES & CAPABILITIES TRANSFORMATION",
        subtitle="Replacing 5 massive text cards (35 bullets) with an Interactive 5-Step Service Studio with Live Visual Mockups"
    )
    
    # Left: BEFORE
    draw.text((lx1 + 25, ly1 + 65), "5 Huge Text Cards Stacked with 7 Bullets Each (175 Lines of Text)", fill=TEXT_MUTED, font=get_font(11))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 95, lx2 - 25, ly1 + 490], radius=10, fill=CARD_BG, outline=(70, 80, 95))
    draw.text((lx1 + 40, ly1 + 110), "Get Online (Onboarding)  |  Look Better (Photography)  |  Sell Smarter...", fill=TEXT_WHITE, font=get_font(12, bold=True))
    
    # Bullet Wall
    bullets = [
        "• Swiggy & Zomato onboarding & documentation support",
        "• Restaurant listing setup & platform coordination",
        "• Professional on-site food photography shoots",
        "• Hero banner graphics & digital menu design",
        "• Menu restructuring & combo engineering",
        "• Price elasticity & discount strategy optimization",
        "• Sponsored ads setup, bid management & ROAS tracking",
        "• Daily platform health checks & out-of-stock management",
        "• Customer ratings & review turnaround management",
        "• Weekly business reviews & P&L margin dashboards..."
    ]
    by = ly1 + 145
    for b in bullets:
        draw.text((lx1 + 40, by), b, fill=TEXT_MUTED, font=get_font(10))
        by += 26
        
    draw.rounded_rectangle([lx1 + 25, ly1 + 510, lx2 - 25, ly2 - 20], radius=8, fill=(50, 20, 20), outline=(120, 40, 40))
    draw.text((lx1 + 38, ly1 + 520), "⚠️ UX Audit Critique:", fill=(255, 140, 140), font=get_font(12, bold=True))
    draw.text((lx1 + 38, ly1 + 544), "• Overwhelming bullet list makes all 5 core services blur together.", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 568), "• Owners cannot visualize deliverables (e.g. food photos or engineered menus).", fill=TEXT_MUTED, font=get_font(11))
    
    # Right: AFTER (Interactive Service Studio)
    draw.text((rx1 + 25, ly1 + 65), "Interactive Service Studio (Click category to see live visual deliverable)", fill=TEXT_WHITE, font=get_font(12, bold=True))
    
    # Left Navigation Tabs (Vertical)
    tabs = [
        ("📸 Look Better", "Food Photography & Creative", True),
        ("📋 Sell Smarter", "Menu Engineering & Combos", False),
        ("🚀 Grow Faster", "Ad Spend & ROAS Scaling", False),
        ("📊 Understand Better", "Margin & Analytics P&L", False),
        ("🏪 Get Online", "Instant 72h Onboarding", False),
    ]
    ty = ly1 + 95
    for t in tabs:
        fill_col = ACCENT_AMBER if t[2] else CARD_BG
        text_col = TEXT_DARK if t[2] else TEXT_WHITE
        draw.rounded_rectangle([rx1 + 25, ty, rx1 + 230, ty + 70], radius=8, fill=fill_col, outline=PANEL_BORDER)
        draw.text((rx1 + 38, ty + 15), t[0], fill=text_col, font=get_font(11, bold=True))
        draw.text((rx1 + 38, ty + 38), t[1], fill=text_col if t[2] else TEXT_MUTED, font=get_font(9))
        ty += 80
        
    # Right Studio Visual Preview (for Active Tab: Look Better)
    preview_box = [rx1 + 245, ly1 + 95, rx2 - 25, ly2 - 20]
    draw.rounded_rectangle(preview_box, radius=12, fill=CARD_BG, outline=ACCENT_AMBER, width=2)
    
    draw.text((rx1 + 265, ly1 + 115), "DELIVERABLE SHOWCASE: High-Conversion Food Imagery", fill=ACCENT_AMBER, font=get_font(12, bold=True))
    draw.text((rx1 + 265, ly1 + 138), "We turn dull phone snapshots into irresistible, appetizing platform banners.", fill=TEXT_MUTED, font=get_font(10))
    
    # Visual Image Grid Mockup
    draw.rounded_rectangle([rx1 + 265, ly1 + 170, rx1 + 390, ly1 + 280], radius=8, fill=(60, 40, 30))
    draw.text((rx1 + 285, ly1 + 215), "📸 HDR Biryani Shoot", fill=TEXT_WHITE, font=get_font(9, bold=True))
    draw.text((rx1 + 285, ly1 + 235), "Optimized lighting & garnish", fill=TEXT_MUTED, font=get_font(8))
    
    draw.rounded_rectangle([rx1 + 405, ly1 + 170, rx2 - 40, ly1 + 280], radius=8, fill=(30, 50, 60))
    draw.text((rx1 + 425, ly1 + 215), "🍱 Bento Combo Mockup", fill=TEXT_WHITE, font=get_font(9, bold=True))
    draw.text((rx1 + 425, ly1 + 235), "Platform banner compliant", fill=TEXT_MUTED, font=get_font(8))
    
    # Deliverables Chips Bar
    draw.text((rx1 + 265, ly1 + 300), "Included Deliverables (Interactive Hover):", fill=TEXT_WHITE, font=get_font(10, bold=True))
    chips_d = ["30+ High-Res Shots", "Zomato Gold Banners", "Swiggy Carousel Graphics", "Digital Menu Badges"]
    d_x = rx1 + 265
    for cd in chips_d:
        draw.rounded_rectangle([d_x, ly1 + 325, d_x + 140, ly1 + 355], radius=12, fill=CARD_BG_LIGHT)
        draw.text((d_x + 8, ly1 + 332), cd, fill=(200, 240, 220), font=get_font(8, bold=True))
        d_x += 148
        
    # Proven Impact Stat
    draw.rounded_rectangle([rx1 + 265, ly1 + 375, rx2 - 40, ly1 + 435], radius=8, fill=(16, 75, 50), outline=ACCENT_GREEN)
    draw.text((rx1 + 280, ly1 + 388), "📈 Measurable Impact on Conversions:", fill=(170, 255, 210), font=get_font(10, bold=True))
    draw.text((rx1 + 280, ly1 + 410), "Listings with Juno professional food shoots experience a 38% higher click-to-order rate.", fill=TEXT_WHITE, font=get_font(9))
    
    # CTA inside preview
    draw.rounded_rectangle([rx1 + 265, ly1 + 460, rx2 - 40, ly1 + 505], radius=8, fill=ACCENT_AMBER)
    draw.text((rx1 + 340, ly1 + 472), "📅 Book a 1-Day Restaurant Shoot in Nagpur/Pune", fill=TEXT_DARK, font=get_font(10, bold=True))
    
    img.save("wireframes/wireframe_05_services.png")
    print("Generated wireframe_05_services.png")

# ─────────────────────────────────────────────────────────────────────────────
# 6. OPERATING MODEL & WHY JUNO WIREFRAME
# ─────────────────────────────────────────────────────────────────────────────
def generate_operating_model_wireframe():
    img, draw, (lx1, ly1, lx2, ly2), (rx1, ry1, rx2, ry2) = create_base_canvas(
        title="SECTIONS 7 & 8: OPERATING MODEL & WHY JUNO TRANSFORMATION",
        subtitle="Replacing text numbered lists with a Dynamic Milestone Roadmap & 3-Pillar Growth Engine Venn Diagram"
    )
    
    # Left: BEFORE
    draw.text((lx1 + 25, ly1 + 65), "Numbered Horizontal Step Circles with Text Paragraphs", fill=TEXT_MUTED, font=get_font(11))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 95, lx2 - 25, ly1 + 320], radius=8, fill=CARD_BG)
    draw.text((lx1 + 40, ly1 + 110), "Step 01: Understand  — We start with your restaurant, numbers...", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((lx1 + 40, ly1 + 140), "Step 02: Build       — We create the right digital foundation...", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((lx1 + 40, ly1 + 170), "Step 03: Launch      — Going live with new menus, photography...", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((lx1 + 40, ly1 + 200), "Step 04: Manage      — Daily monitoring, adjustments, promos...", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((lx1 + 40, ly1 + 230), "Step 05: Scale       — Expanding kitchen capacity, multi-outlets...", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((lx1 + 40, ly1 + 270), "Why Juno: 3 text cards repeating the same value points", fill=TEXT_MUTED, font=get_font(10))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 345, lx2 - 25, ly2 - 20], radius=8, fill=(50, 20, 20), outline=(120, 40, 40))
    draw.text((lx1 + 38, ly1 + 360), "⚠️ UX Audit Critique:", fill=(255, 140, 140), font=get_font(12, bold=True))
    draw.text((lx1 + 38, ly1 + 385), "• Fails to answer: 'What happens in week 1 vs week 4?' (no timeline clarity).", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 410), "• 'Why Juno' 3 pillars lack visual synergy (looks like generic text padding).", fill=TEXT_MUTED, font=get_font(11))
    
    # Right: AFTER
    draw.text((rx1 + 25, ly1 + 65), "1. 30-Day Milestone Roadmap  +  2. The 3-Pillar Growth Engine", fill=TEXT_WHITE, font=get_font(12, bold=True))
    
    # 30-Day Milestone Roadmap Graphic
    draw.rounded_rectangle([rx1 + 25, ly1 + 95, rx2 - 25, ly1 + 290], radius=12, fill=CARD_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 40, ly1 + 108), "🗓️ THE 30-DAY RESTAURANT ACCELERATION TIMELINE", fill=ACCENT_AMBER, font=get_font(11, bold=True))
    
    # Timeline Nodes
    nodes = [
        ("Days 1-7", "Audit & P&L", "Deep listing diagnostic\n& menu margin check"),
        ("Days 8-14", "Content Shoot", "HDR food photography\n& combo restructuring"),
        ("Days 15-21", "Go-Live Push", "Algorithmic campaign\nlaunch & review blitz"),
        ("Days 22-30+", "Profit Scale", "ROAS stabilization &\nweekly P&L review")
    ]
    nx = rx1 + 35
    for n in nodes:
        draw.rounded_rectangle([nx, ly1 + 140, nx + 125, ly1 + 245], radius=8, fill=CARD_BG_LIGHT, outline=ACCENT_AMBER)
        draw.rounded_rectangle([nx + 10, ly1 + 148, nx + 115, ly1 + 172], radius=4, fill=ACCENT_AMBER)
        draw.text((nx + 18, ly1 + 152), n[0], fill=TEXT_DARK, font=get_font(9, bold=True))
        draw.text((nx + 10, ly1 + 180), n[1], fill=TEXT_WHITE, font=get_font(10, bold=True))
        draw.text((nx + 10, ly1 + 202), n[2], fill=TEXT_MUTED, font=get_font(8))
        nx += 140
        
    # The 3-Pillar Growth Engine Venn/Triad Diagram
    draw.rounded_rectangle([rx1 + 25, ly1 + 305, rx2 - 25, ly2 - 20], radius=12, fill=CARD_BG, outline=(50, 100, 80), width=1)
    draw.text((rx1 + 40, ly1 + 318), "⚙️ THE JUNO GROWTH ENGINE (Why Standard Agencies Fail)", fill=(170, 255, 210), font=get_font(11, bold=True))
    
    # 3 Interlocking Circles / Pillars
    draw.rounded_rectangle([rx1 + 45, ly1 + 350, rx1 + 200, ly1 + 475], radius=10, fill=CARD_BG_LIGHT, outline=ACCENT_BLUE)
    draw.text((rx1 + 55, ly1 + 360), "1. Kitchen Reality", fill=ACCENT_BLUE, font=get_font(10, bold=True))
    draw.text((rx1 + 55, ly1 + 385), "• Real prep times\n• Food cost & margins\n• Rush hour stress", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([rx1 + 220, ly1 + 350, rx1 + 375, ly1 + 475], radius=10, fill=CARD_BG_LIGHT, outline=ACCENT_PURPLE)
    draw.text((rx1 + 230, ly1 + 360), "2. Platform Science", fill=ACCENT_PURPLE, font=get_font(10, bold=True))
    draw.text((rx1 + 230, ly1 + 385), "• Swiggy/Zomato SEO\n• Bid CTR algorithms\n• Category ranking", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([rx1 + 395, ly1 + 350, rx2 - 45, ly1 + 475], radius=10, fill=CARD_BG_LIGHT, outline=ACCENT_GREEN)
    draw.text((rx1 + 405, ly1 + 360), "3. Local Execution", fill=ACCENT_GREEN, font=get_font(10, bold=True))
    draw.text((rx1 + 405, ly1 + 385), "• On-site food shoot\n• WhatsApp support\n• Nagpur/Pune team", fill=TEXT_MUTED, font=get_font(9))
    
    # Central Sweet Spot Banner
    draw.rounded_rectangle([rx1 + 100, ly1 + 490, rx1 + 480, ly1 + 535], radius=8, fill=(16, 75, 50), outline=ACCENT_GREEN)
    draw.text((rx1 + 130, ly1 + 502), "🎯 RESULT: Scalable Restaurant Revenue with Stable Profit", fill=TEXT_WHITE, font=get_font(11, bold=True))
    
    img.save("wireframes/wireframe_06_operating_model.png")
    print("Generated wireframe_06_operating_model.png")

# ─────────────────────────────────────────────────────────────────────────────
# 7. GROWTH PACKAGES & PRICING WIREFRAME
# ─────────────────────────────────────────────────────────────────────────────
def generate_packages_wireframe():
    img, draw, (lx1, ly1, lx2, ly2), (rx1, ry1, rx2, ry2) = create_base_canvas(
        title="SECTION 9: PACKAGES & PRICING TRANSFORMATION",
        subtitle="Replacing a 1,150-line massive feature table with an Interactive Package Finder Wizard + 3 Clean Cards"
    )
    
    # Left: BEFORE
    draw.text((lx1 + 25, ly1 + 65), "1,150 Lines: 4 Tiers + Massive Monolithic Comparison Table", fill=TEXT_MUTED, font=get_font(11))
    
    # Masked price cards
    draw.rounded_rectangle([lx1 + 25, ly1 + 95, lx1 + 140, ly1 + 190], radius=8, fill=CARD_BG)
    draw.text((lx1 + 35, ly1 + 105), "Launch", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((lx1 + 35, ly1 + 125), "[XXXXXX]", fill=(120, 120, 140), font=get_font(10))
    
    draw.rounded_rectangle([lx1 + 155, ly1 + 95, lx1 + 270, ly1 + 190], radius=8, fill=CARD_BG)
    draw.text((lx1 + 165, ly1 + 105), "Grow", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((lx1 + 165, ly1 + 125), "[XXXXXX]", fill=(120, 120, 140), font=get_font(10))
    
    draw.rounded_rectangle([lx1 + 285, ly1 + 95, lx1 + 400, ly1 + 190], radius=8, fill=CARD_BG)
    draw.text((lx1 + 295, ly1 + 105), "Scale", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((lx1 + 295, ly1 + 125), "[XXXXXX]", fill=(120, 120, 140), font=get_font(10))
    
    draw.rounded_rectangle([lx1 + 415, ly1 + 95, lx2 - 25, ly1 + 190], radius=8, fill=CARD_BG)
    draw.text((lx1 + 425, ly1 + 105), "Enterprise", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((lx1 + 425, ly1 + 125), "[Custom]", fill=(120, 120, 140), font=get_font(10))
    
    # Table Clutter Mockup
    draw.rounded_rectangle([lx1 + 25, ly1 + 205, lx2 - 25, ly1 + 480], radius=8, fill=CARD_BG, outline=(70, 80, 95))
    draw.text((lx1 + 38, ly1 + 220), "Dense Feature Comparison Matrix (Dozens of rows):", fill=(255, 120, 120), font=get_font(11, bold=True))
    table_rows = [
        "Listing Setup: ✓  |  ✓  |  ✓  |  ✓",
        "Food Shoot: —  |  15 items  |  30 items  |  Unlimited",
        "Menu Engineering: Basic  |  Advanced  |  Full Overhaul  |  Bespoke",
        "Ad Budget Management: —  |  Up to ₹20k  |  Up to ₹75k  |  Custom",
        "Review Management: —  |  Weekly  |  Daily  |  24/7 SLA",
        "Weekly Strategy Call: —  |  Bi-weekly  |  Weekly  |  Dedicated Desk",
        "P&L Audit: —  |  Monthly  |  Bi-weekly  |  Real-time",
    ]
    ty = ly1 + 250
    for tr in table_rows:
        draw.text((lx1 + 38, ty), tr, fill=TEXT_MUTED, font=get_font(10))
        ty += 28
        
    draw.rounded_rectangle([lx1 + 25, ly1 + 505, lx2 - 25, ly2 - 20], radius=8, fill=(50, 20, 20), outline=(120, 40, 40))
    draw.text((lx1 + 38, ly1 + 520), "⚠️ UX Audit Critique:", fill=(255, 140, 140), font=get_font(12, bold=True))
    draw.text((lx1 + 38, ly1 + 544), "• Restaurant owners get analysis paralysis looking at 40 table rows.", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 568), "• Masked prices without an interactive ROI calculator frustrate high-intent leads.", fill=TEXT_MUTED, font=get_font(11))
    
    # Right: AFTER (Interactive Package Finder Wizard + Clean Tier Cards)
    draw.text((rx1 + 25, ly1 + 65), "Interactive 'Package Finder' Wizard + Streamlined Tier Cards", fill=TEXT_WHITE, font=get_font(12, bold=True))
    
    # 3-Question Wizard Header
    draw.rounded_rectangle([rx1 + 25, ly1 + 95, rx2 - 25, ly1 + 185], radius=10, fill=CARD_BG, outline=ACCENT_AMBER)
    draw.text((rx1 + 40, ly1 + 106), "🎯 30-SECOND WIZARD: Which package fits your restaurant?", fill=ACCENT_AMBER, font=get_font(11, bold=True))
    draw.text((rx1 + 40, ly1 + 128), "Select your current stage:", fill=TEXT_WHITE, font=get_font(10))
    
    # Wizard Options
    draw.rounded_rectangle([rx1 + 40, ly1 + 148, rx1 + 195, ly1 + 175], radius=6, fill=PANEL_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 50, ly1 + 154), "🍽️ New Cloud Kitchen", fill=TEXT_MUTED, font=get_font(9))
    
    draw.rounded_rectangle([rx1 + 210, ly1 + 148, rx1 + 375, ly1 + 175], radius=6, fill=ACCENT_AMBER)
    draw.text((rx1 + 220, ly1 + 154), "🚀 Dine-In Scaling Online ★", fill=TEXT_DARK, font=get_font(9, bold=True))
    
    draw.rounded_rectangle([rx1 + 390, ly1 + 148, rx2 - 40, ly1 + 175], radius=6, fill=PANEL_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 400, ly1 + 154), "🏢 Multi-Outlet Chain", fill=TEXT_MUTED, font=get_font(9))
    
    # 3 Highlighted Cards
    # Card 1: Starter
    draw.rounded_rectangle([rx1 + 25, ly1 + 200, rx1 + 195, ly1 + 460], radius=10, fill=CARD_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 38, ly1 + 215), "LAUNCH", fill=TEXT_WHITE, font=get_font(12, bold=True))
    draw.text((rx1 + 38, ly1 + 235), "For new outlets going live", fill=TEXT_MUTED, font=get_font(9))
    draw.text((rx1 + 38, ly1 + 265), "• 72h Swiggy/Zomato Setup\n• Digital Menu Creation\n• 1 Food Shoot (15 Items)\n• Platform Verification", fill=TEXT_MUTED, font=get_font(9))
    draw.rounded_rectangle([rx1 + 35, ly1 + 415, rx1 + 185, ly1 + 448], radius=6, fill=CARD_BG_LIGHT)
    draw.text((rx1 + 52, ly1 + 424), "Select Launch", fill=TEXT_WHITE, font=get_font(10))
    
    # Card 2: Grow (Recommended)
    draw.rounded_rectangle([rx1 + 210, ly1 + 195, rx1 + 395, ly1 + 470], radius=12, fill=CARD_BG_LIGHT, outline=ACCENT_AMBER, width=2)
    draw.rounded_rectangle([rx1 + 250, ly1 + 195, rx1 + 355, ly1 + 215], radius=4, fill=ACCENT_AMBER)
    draw.text((rx1 + 262, ly1 + 198), "MOST POPULAR", fill=TEXT_DARK, font=get_font(8, bold=True))
    
    draw.text((rx1 + 225, ly1 + 225), "SCALE & GROW", fill=TEXT_WHITE, font=get_font(13, bold=True))
    draw.text((rx1 + 225, ly1 + 245), "For restaurants doing ₹1L-₹10L/mo", fill=ACCENT_AMBER, font=get_font(9))
    draw.text((rx1 + 225, ly1 + 275), "• Complete Menu Re-engineering\n• HDR Studio Photography (35 Items)\n• Ad Spends & Algorithmic ROAS\n• Weekly P&L & Margin Audit\n• Dedicated WhatsApp Growth Lead", fill=TEXT_WHITE, font=get_font(9))
    draw.rounded_rectangle([rx1 + 225, ly1 + 420, rx1 + 380, ly1 + 455], radius=8, fill=ACCENT_AMBER)
    draw.text((rx1 + 250, ly1 + 430), "🚀 Accelerate My Outlet", fill=TEXT_DARK, font=get_font(10, bold=True))
    
    # Card 3: Multi-Outlet / Enterprise
    draw.rounded_rectangle([rx1 + 410, ly1 + 200, rx2 - 25, ly1 + 460], radius=10, fill=CARD_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 425, ly1 + 215), "ENTERPRISE", fill=TEXT_WHITE, font=get_font(12, bold=True))
    draw.text((rx1 + 425, ly1 + 235), "3+ Locations or Regional Chain", fill=TEXT_MUTED, font=get_font(9))
    draw.text((rx1 + 425, ly1 + 265), "• Multi-outlet catalog sync\n• Dedicated On-Ground Manager\n• Custom Growth Playbooks\n• Real-Time Margin Alerts", fill=TEXT_MUTED, font=get_font(9))
    draw.rounded_rectangle([rx1 + 420, ly1 + 415, rx2 - 40, ly1 + 448], radius=6, fill=CARD_BG_LIGHT)
    draw.text((rx1 + 445, ly1 + 424), "Talk to Founder", fill=TEXT_WHITE, font=get_font(10))
    
    # Collapsible Comparison Drawer Toggle
    draw.rounded_rectangle([rx1 + 25, ly1 + 490, rx2 - 25, ly2 - 20], radius=8, fill=CARD_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 180, ly1 + 510), "📊 Need granular technical details?  [Click to Expand Full Feature Comparison Drawer ▼]", fill=ACCENT_AMBER, font=get_font(10, bold=True))
    
    img.save("wireframes/wireframe_08_packages.png")
    print("Generated wireframe_08_packages.png")

# ─────────────────────────────────────────────────────────────────────────────
# 8. WHO WE WORK WITH WIREFRAME
# ─────────────────────────────────────────────────────────────────────────────
def generate_who_we_work_with_wireframe():
    img, draw, (lx1, ly1, lx2, ly2), (rx1, ry1, rx2, ry2) = create_base_canvas(
        title="SECTION 10: WHO WE WORK WITH (CLIENT SEGMENTS) TRANSFORMATION",
        subtitle="Transforming 6 generic text cards into an Appetizing Visual Concept Gallery with Tailored Growth Badges"
    )
    
    # Left: BEFORE
    draw.text((lx1 + 25, ly1 + 65), "6 Identical Gray Boxes with Generic Icons & 1-Line Text", fill=TEXT_MUTED, font=get_font(11))
    
    boxes = [
        ("Restaurants", "Casual dining, fine dining, and family-style restaurants."),
        ("QSRs", "Quick service operations built for speed and volume."),
        ("Cafés", "Coffee shops, bakeries, and casual neighbourhood hangouts."),
        ("Cloud Kitchens", "Delivery-first food concepts and virtual brands."),
        ("Multi-Outlet Brands", "Local and regional chains scaling to multiple locations."),
        ("Emerging F&B Brands", "New food concepts launching into competitive markets.")
    ]
    by = ly1 + 95
    for b in boxes:
        draw.rounded_rectangle([lx1 + 25, by, lx2 - 25, by + 55], radius=8, fill=CARD_BG)
        draw.text((lx1 + 38, by + 10), "🍽️  " + b[0], fill=TEXT_WHITE, font=get_font(11, bold=True))
        draw.text((lx1 + 38, by + 30), b[1], fill=TEXT_MUTED, font=get_font(9))
        by += 64
        
    draw.rounded_rectangle([lx1 + 25, ly1 + 505, lx2 - 25, ly2 - 20], radius=8, fill=(50, 20, 20), outline=(120, 40, 40))
    draw.text((lx1 + 38, ly1 + 520), "⚠️ UX Audit Critique:", fill=(255, 140, 140), font=get_font(12, bold=True))
    draw.text((lx1 + 38, ly1 + 544), "• Visually flat; does not evoke food cravings or restaurant pride.", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 568), "• Owners don't see what Juno specifically does for THEIR exact format.", fill=TEXT_MUTED, font=get_font(11))
    
    # Right: AFTER (Visual Concept Gallery)
    draw.text((rx1 + 25, ly1 + 65), "Appetizing Visual Gallery with Segment-Specific Growth Playbooks", fill=TEXT_WHITE, font=get_font(12, bold=True))
    
    # 4 Rich Visual Photo Tiles with Tags
    tiles = [
        ("☕ Cafés & Bakeries", "Evening dessert combos & beverage attachment campaigns.", "+45% High-Margin Ticket Size", (40, 30, 20), ACCENT_AMBER),
        ("☁️ Cloud Kitchens", "Multi-brand listing setup & 10km delivery radius optimization.", "2.8x Daily Order Volume", (20, 40, 50), ACCENT_BLUE),
        ("🍔 Fast Casual & QSRs", "Speed of delivery tags & high-converting combo photos.", "Under 25-Min Delivery Badge", (50, 30, 20), ACCENT_GREEN),
        ("👑 Fine Dine & Family", "Off-peak delivery revenue without cannibalizing dine-in.", "₹4.5L+ Incremental Monthly GMV", (30, 20, 40), ACCENT_PURPLE),
    ]
    
    positions = [
        (rx1 + 25, ly1 + 95, rx1 + 285, ly1 + 275),
        (rx1 + 305, ly1 + 95, rx2 - 25, ly1 + 275),
        (rx1 + 25, ly1 + 295, rx1 + 285, ly1 + 475),
        (rx1 + 305, ly1 + 295, rx2 - 25, ly1 + 475),
    ]
    
    for i in range(4):
        p = positions[i]
        t = tiles[i]
        draw.rounded_rectangle(list(p), radius=12, fill=t[3], outline=t[4], width=2)
        # Title
        draw.text((p[0] + 16, p[1] + 16), t[0], fill=TEXT_WHITE, font=get_font(12, bold=True))
        draw.text((p[0] + 16, p[1] + 42), t[1], fill=TEXT_MUTED, font=get_font(9))
        
        # Simulated Food Photo Area
        draw.rounded_rectangle([p[0] + 16, p[1] + 80, p[2] - 16, p[3] - 50], radius=8, fill=CARD_BG)
        draw.text((p[0] + 28, p[1] + 105), "[ High-Res Food Shoot / Ambiance Mockup ]", fill=TEXT_MUTED, font=get_font(8))
        
        # Tailored Impact Badge
        draw.rounded_rectangle([p[0] + 16, p[3] - 40, p[2] - 16, p[3] - 12], radius=6, fill=PANEL_BG)
        draw.text((p[0] + 24, p[3] - 34), "🏆 " + t[2], fill=t[4], font=get_font(9, bold=True))
        
    # Interactive Filter Tag at bottom
    draw.rounded_rectangle([rx1 + 25, ly1 + 495, rx2 - 25, ly2 - 20], radius=8, fill=CARD_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 40, ly1 + 510), "⚡ Don't see your food format? We've worked with Shawarma joints, Sweet marts, & Bars.", fill=TEXT_WHITE, font=get_font(10))
    draw.text((rx1 + 40, ly1 + 532), "👉 Click here to view custom case studies for your cuisine", fill=ACCENT_AMBER, font=get_font(9, bold=True))
    
    img.save("wireframes/wireframe_09_who_we_work_with.png")
    print("Generated wireframe_09_who_we_work_with.png")

# ─────────────────────────────────────────────────────────────────────────────
# 9. ABOUT, CAREERS, CONTACT & FOOTER WIREFRAME
# ─────────────────────────────────────────────────────────────────────────────
def generate_about_careers_contact_wireframe():
    img, draw, (lx1, ly1, lx2, ly2), (rx1, ry1, rx2, ry2) = create_base_canvas(
        title="SECTIONS 11-14: ABOUT, CAREERS & CONTACT TRANSFORMATION",
        subtitle="Replacing essay paragraphs with a Visual Founder Story, Culture Bento Grid & Instant 2-Step WhatsApp Booking"
    )
    
    # Left: BEFORE
    draw.text((lx1 + 25, ly1 + 65), "About Section: 4 Long Paragraphs of Static Text (Right Column)", fill=TEXT_MUTED, font=get_font(11))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 95, lx2 - 25, ly1 + 230], radius=8, fill=CARD_BG)
    draw.text((lx1 + 38, ly1 + 108), "About Us: Wall of text", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((lx1 + 38, ly1 + 130), "Juno Digital Services was built with a simple belief: Great restaurant...", fill=TEXT_MUTED, font=get_font(9))
    draw.text((lx1 + 38, ly1 + 150), "We work with restaurants to manage and grow the digital side...", fill=TEXT_MUTED, font=get_font(9))
    draw.text((lx1 + 38, ly1 + 170), "From onboarding and food photography to menu optimisation...", fill=TEXT_MUTED, font=get_font(9))
    draw.text((lx1 + 38, ly1 + 190), "Built beyond the metros, we bring hands-on operational excellence...", fill=TEXT_MUTED, font=get_font(9))
    
    draw.text((lx1 + 25, ly1 + 245), "Careers & Contact: Standard Form & Long Job Requirement Bullets", fill=TEXT_MUTED, font=get_font(11))
    draw.rounded_rectangle([lx1 + 25, ly1 + 270, lx2 - 25, ly1 + 480], radius=8, fill=CARD_BG)
    draw.text((lx1 + 38, ly1 + 285), "Careers: 2 jobs with 12 bullet points of requirements each.", fill=TEXT_WHITE, font=get_font(10))
    draw.text((lx1 + 38, ly1 + 315), "Contact: Standard 8-field form (Name, Email, Phone, Restaurant, Message...)", fill=TEXT_WHITE, font=get_font(10))
    draw.text((lx1 + 38, ly1 + 345), "High form abandonment rate (>70% drop-off on mobile).", fill=ACCENT_RED, font=get_font(10, bold=True))
    
    draw.rounded_rectangle([lx1 + 25, ly1 + 505, lx2 - 25, ly2 - 20], radius=8, fill=(50, 20, 20), outline=(120, 40, 40))
    draw.text((lx1 + 38, ly1 + 520), "⚠️ UX Audit Critique:", fill=(255, 140, 140), font=get_font(12, bold=True))
    draw.text((lx1 + 38, ly1 + 544), "• Low trust transfer (no human founder faces, no culture video/photos).", fill=TEXT_MUTED, font=get_font(11))
    draw.text((lx1 + 38, ly1 + 568), "• Mobile restaurant owners hate filling long contact forms during kitchen hours.", fill=TEXT_MUTED, font=get_font(11))
    
    # Right: AFTER (Bento Grid, Visual Timeline & 2-Step WhatsApp Connect)
    draw.text((rx1 + 25, ly1 + 65), "1. Visual Founder Story  |  2. Culture Bento Grid  |  3. 1-Tap WhatsApp", fill=TEXT_WHITE, font=get_font(12, bold=True))
    
    # About Visual Timeline (Top)
    draw.rounded_rectangle([rx1 + 25, ly1 + 95, rx2 - 25, ly1 + 240], radius=10, fill=CARD_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 40, ly1 + 108), "📖 OUR STORY IN 3 VISUAL MILESTONES (Replaces 4 paragraphs)", fill=ACCENT_AMBER, font=get_font(11, bold=True))
    
    ms = [
        ("2024: The Gap", "Saw great restaurants in Nagpur & Pune struggle with distant metro agencies."),
        ("2025: The Model", "Built an on-ground growth team combining food-tech algorithms & daily kitchen ops."),
        ("2026: 100+ Scaled", "Over ₹15 Cr in platform GMV managed with proven unit economics.")
    ]
    mx = rx1 + 35
    for m in ms:
        draw.rounded_rectangle([mx, ly1 + 135, mx + 175, ly1 + 225], radius=8, fill=CARD_BG_LIGHT)
        draw.text((mx + 12, ly1 + 145), m[0], fill=TEXT_WHITE, font=get_font(10, bold=True))
        draw.text((mx + 12, ly1 + 170), m[1], fill=TEXT_MUTED, font=get_font(8))
        mx += 188
        
    # Culture & Careers Bento Grid
    draw.rounded_rectangle([rx1 + 25, ly1 + 255, rx1 + 270, ly1 + 375], radius=10, fill=CARD_BG, outline=ACCENT_BLUE)
    draw.text((rx1 + 38, ly1 + 268), "💼 LIFE AT JUNO (Culture Bento)", fill=ACCENT_BLUE, font=get_font(10, bold=True))
    draw.text((rx1 + 38, ly1 + 292), "• Direct mentorship from F&B veterans", fill=TEXT_WHITE, font=get_font(9))
    draw.text((rx1 + 38, ly1 + 312), "• Nagpur HQ & Pune field hubs", fill=TEXT_WHITE, font=get_font(9))
    draw.text((rx1 + 38, ly1 + 332), "• Rapid ownership of merchant P&Ls", fill=TEXT_WHITE, font=get_font(9))
    draw.text((rx1 + 38, ly1 + 352), "👉 2 Open Roles [1-Click Apply]", fill=ACCENT_AMBER, font=get_font(9, bold=True))
    
    # 2-Step WhatsApp Connect Widget (High conversion)
    draw.rounded_rectangle([rx1 + 285, ly1 + 255, rx2 - 25, ly1 + 450], radius=12, fill=(16, 60, 40), outline=ACCENT_GREEN, width=2)
    draw.text((rx1 + 300, ly1 + 268), "💬 1-TAP FOUNDER CONNECT (90% Conversion)", fill=(170, 255, 210), font=get_font(11, bold=True))
    draw.text((rx1 + 300, ly1 + 292), "No long forms. Text us directly on WhatsApp:", fill=TEXT_WHITE, font=get_font(9))
    
    # Visual Option Pills
    draw.text((rx1 + 300, ly1 + 315), "I want to:", fill=TEXT_MUTED, font=get_font(9))
    draw.rounded_rectangle([rx1 + 300, ly1 + 332, rx1 + 420, ly1 + 358], radius=6, fill=PANEL_BG)
    draw.text((rx1 + 310, ly1 + 338), "🚀 Boost Orders", fill=TEXT_WHITE, font=get_font(9))
    
    draw.rounded_rectangle([rx1 + 430, ly1 + 332, rx2 - 40, ly1 + 358], radius=6, fill=PANEL_BG)
    draw.text((rx1 + 440, ly1 + 338), "📸 Food Photos", fill=TEXT_WHITE, font=get_font(9))
    
    draw.rounded_rectangle([rx1 + 300, ly1 + 368, rx1 + 420, ly1 + 394], radius=6, fill=PANEL_BG)
    draw.text((rx1 + 310, ly1 + 374), "💸 Stop Ad Bleed", fill=TEXT_WHITE, font=get_font(9))
    
    draw.rounded_rectangle([rx1 + 430, ly1 + 368, rx2 - 40, ly1 + 394], radius=6, fill=PANEL_BG)
    draw.text((rx1 + 440, ly1 + 374), "📋 Swiggy Setup", fill=TEXT_WHITE, font=get_font(9))
    
    # Big Green WhatsApp CTA
    draw.rounded_rectangle([rx1 + 300, ly1 + 406, rx2 - 40, ly1 + 440], radius=8, fill=ACCENT_GREEN)
    draw.text((rx1 + 340, ly1 + 414), "🟢 Chat on WhatsApp with Ashit Reyan", fill=TEXT_WHITE, font=get_font(10, bold=True))
    
    # Nagpur HQ Map Card at Bottom
    draw.rounded_rectangle([rx1 + 25, ly1 + 465, rx2 - 25, ly2 - 20], radius=10, fill=CARD_BG, outline=PANEL_BORDER)
    draw.text((rx1 + 40, ly1 + 478), "📍 NAGPUR HEADQUARTERS: 4th Floor, C-Square, Mata Mandir Rd, Dharampeth, Nagpur 440010", fill=TEXT_WHITE, font=get_font(10, bold=True))
    draw.text((rx1 + 40, ly1 + 500), "📞 Direct: +91 9967621552   |   ✉️ ashitreyan@junodigital.in   |   Hours: Mon - Sat, 10 AM - 8 PM", fill=TEXT_MUTED, font=get_font(9))
    
    img.save("wireframes/wireframe_10_about_careers_contact.png")
    print("Generated wireframe_10_about_careers_contact.png")

# Run all generators
if __name__ == "__main__":
    generate_hero_wireframe()
    generate_casestudies_wireframe()
    generate_difference_wireframe()
    generate_problems_wireframe()
    generate_services_wireframe()
    generate_operating_model_wireframe()
    generate_packages_wireframe()
    generate_who_we_work_with_wireframe()
    generate_about_careers_contact_wireframe()
    print("All 8 comprehensive wireframe graphics generated successfully!")
