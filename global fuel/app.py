"""
Global Fuel Analytics - Flask Web Application
Project Title: Global Fuel Prices and Taxation Trends: A Comprehensive Analysis
Author: Data Analytics Specialist
"""

import os
from flask import Flask, render_template, request, flash, redirect, url_for

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "global-fuel-analytics-secret-key-2025")

# ============================================================================
# CONFIGURABLE TABLEAU PUBLIC CONFIGURATION
# ============================================================================
# Official User Link:
# https://public.tableau.com/views/GlobalFuelPriceAndTaxationTrends/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link
TABLEAU_OFFICIAL_URL = "https://public.tableau.com/views/GlobalFuelPriceAndTaxationTrends/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
TABLEAU_VIZ_BASE_URL = "https://public.tableau.com/views/GlobalFuelPriceAndTaxationTrends/Dashboard1"

CONFIG = {
    # Centralized Tableau Link used everywhere
    "TABLEAU_URL": TABLEAU_OFFICIAL_URL,
    
    # Tableau Dashboard embed and direct links
    "DASHBOARD_VIZ_URL": os.environ.get("TABLEAU_DASHBOARD_URL", TABLEAU_VIZ_BASE_URL),
    "DASHBOARD_SHARE_URL": TABLEAU_OFFICIAL_URL,
    
    # Tableau Story embed and direct links
    "STORY_VIZ_URL": os.environ.get("TABLEAU_STORY_URL", TABLEAU_VIZ_BASE_URL),
    "STORY_SHARE_URL": TABLEAU_OFFICIAL_URL,
    
    # Project Metadata
    "PROJECT_TITLE": "Global Fuel Analytics",
    "PROJECT_SUBTITLE": "Global Fuel Prices and Taxation Trends: A Comprehensive Analysis",
    "DATASET_FIELDS": [
        {"name": "Country", "type": "String (Geographic)", "description": "Sovereign nations and territories covered in the global comparative analysis."},
        {"name": "Date", "type": "Date / Temporal", "description": "Monthly / quarterly observation timestamps to track longitudinal price movements."},
        {"name": "Income Level", "type": "Categorical", "description": "World Bank income classifications (High, Upper Middle, Lower Middle, Low income)."},
        {"name": "Region", "type": "Categorical (Geographic)", "description": "Geographical continental clusters (Europe & Central Asia, Sub-Saharan Africa, etc.)."},
        {"name": "Subsidy Level", "type": "Categorical", "description": "Government subsidy categorization measuring sovereign fuel price buffering."},
        {"name": "Brent Crude USD", "type": "Numerical ($ / Barrel)", "description": "Global benchmark international crude oil price index in USD."},
        {"name": "Diesel USD Liter", "type": "Numerical ($ / Liter)", "description": "Retail diesel pump price standardized in US Dollars per liter."},
        {"name": "LPG USD Liter", "type": "Numerical ($ / Liter)", "description": "Liquefied Petroleum Gas retail price standardized in USD per liter."},
        {"name": "Petrol USD Liter", "type": "Numerical ($ / Liter)", "description": "Retail gasoline / petrol pump price standardized in US Dollars per liter."},
        {"name": "Tax Percentage", "type": "Numerical (%)", "description": "Total fiscal levy and excise duties as a percentage of retail consumer price."}
    ]
}


@app.context_processor
def inject_global_data():
    """Injects project settings and navigation variables into all Jinja2 templates."""
    return dict(config=CONFIG)


@app.route("/")
def index():
    """Home Page route."""
    return render_template("index.html", active_page="home")


@app.route("/dashboard")
def dashboard():
    """Interactive Tableau Dashboard Page route."""
    return render_template("dashboard.html", active_page="dashboard")


@app.route("/story")
def story():
    """Tableau Story and Narrative Insights Page route."""
    return render_template("story.html", active_page="story")


@app.route("/about")
def about():
    """Project Details, Methodology, and Dataset Documentation Page route."""
    return render_template("about.html", active_page="about")


@app.route("/contact", methods=["GET", "POST"])
def contact():
    """Contact & Feedback route."""
    if request.method == "POST":
        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip()
        message = request.form.get("message", "").strip()
        
        if not name or not email or not message:
            flash("Please fill in all required fields.", "danger")
        else:
            # Here we flash a success confirmation (can be connected to email service or DB in future)
            flash(f"Thank you, {name}! Your feedback has been received successfully.", "success")
            return redirect(url_for("contact"))
            
    return render_template("contact.html", active_page="contact")


@app.errorhandler(404)
def page_not_found(e):
    """Custom 404 Error Handler."""
    return render_template("404.html"), 404


if __name__ == "__main__":
    # Local development server
    # Set debug=False in production environments
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)

