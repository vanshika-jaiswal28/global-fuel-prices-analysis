# Global Fuel Analytics: Global Fuel Prices and Taxation Trends

> **Data Analytics with Tableau Project & Flask Web Application**  
> An interactive web application built with **Python Flask**, **Tableau Public**, **HTML5/CSS3**, and **Bootstrap 5** analyzing international fuel prices, crude oil price pass-through, income-tier disparities, and sovereign taxation frameworks.

---

## 📌 Project Overview

Energy pricing directly influences consumer inflation, supply chain logistics, and economic growth. While upstream crude oil is traded on international benchmark exchanges (such as Brent Crude in USD/barrel), end-consumer pump prices vary by over 1000% across sovereign nations.

This project, titled **"Global Fuel Prices and Taxation Trends: A Comprehensive Analysis"**, builds a bridge between enterprise data visualization in **Tableau Public** and modern web delivery in **Python Flask**. It allows researchers, analysts, and students to interactively explore:
1. **Fiscal Wedge**: Sovereign excise tax percentages and duties.
2. **Subsidies & Energy Sovereignty**: Artificial price cushioning in net oil producers vs. import-reliant nations.
3. **Product Divergence**: Retail price comparisons across **Petrol (Gasoline)**, **Diesel**, and **LPG**.
4. **Upstream Benchmark Correlation**: Temporal price transmission between Brent Crude ($/barrel) and pump prices ($/liter).

---

## 🛠️ Technology Stack

- **Backend**: Python 3.10+ & Flask 3
- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **UI Framework**: Bootstrap 5.3 & Bootstrap Icons
- **Data Visualization**: Tableau Public (Embedding API v3 & Responsive Web Component)
- **Production WSGI Server**: Gunicorn
- **Version Control**: Git & GitHub

---

## 📂 Project Structure

```text
global-fuel-analytics/
│
├── app.py                     # Main Flask application and URL routing
├── requirements.txt           # Python dependencies
├── .gitignore                 # Git ignore rules
├── README.md                  # Complete documentation and setup guide
│
├── templates/                 # Jinja2 HTML templates
│   ├── base.html              # Core navigation layout, header, and footer
│   ├── index.html             # Home page with hero, metric cards, and overview
│   ├── dashboard.html         # Interactive Tableau Public Dashboard embed page
│   ├── story.html             # Sequenced Tableau Story narrative page
│   ├── about.html             # Project methodology, dataset dictionary & limitations
│   ├── contact.html           # Feedback form & author contact page
│   └── 404.html               # Custom 404 error page
│
└── static/                    # Static assets
    ├── css/
    │   └── style.css          # Custom theme (Navy, Teal, White, Orange)
    ├── js/
    │   └── main.js            # Tableau lifecycle, spinner, fullscreen & UX
    └── images/                # Project screenshots & visual assets
```

---

## 📊 Dataset Schema (10 Dimensions)

| # | Field Name | Data Type | Analytical Role |
|---|---|---|---|
| 1 | **Country** | String (Geographic) | Sovereign nation or territory analyzed. |
| 2 | **Date** | Date / Temporal | Monthly / quarterly observation timestamp. |
| 3 | **Income Level** | Categorical | World Bank income tier (High, Upper Middle, Lower Middle, Low). |
| 4 | **Region** | Categorical (Geo) | Continental cluster (e.g., Europe & Central Asia, Sub-Saharan Africa). |
| 5 | **Subsidy Level** | Categorical | Sovereign subsidy intensity (High, Medium, Low, None). |
| 6 | **Brent Crude USD** | Numerical ($/bbl) | International upstream crude oil benchmark price. |
| 7 | **Diesel USD Liter** | Numerical ($/L) | Retail diesel pump price in USD per liter. |
| 8 | **LPG USD Liter** | Numerical ($/L) | Retail Liquefied Petroleum Gas price in USD per liter. |
| 9 | **Petrol USD Liter** | Numerical ($/L) | Retail gasoline / petrol pump price in USD per liter. |
| 10 | **Tax Percentage** | Numerical (%) | Fiscal tax and excise duty share of total pump price. |

---

## 🚀 Quick Start Guide (Local Setup)

### 1. Prerequisites
- Python 3.9 or higher installed ([Download Python](https://www.python.org/downloads/))
- Git installed ([Download Git](https://git-scm.com/downloads))

### 2. Clone or Navigate to the Project
Open your terminal (PowerShell, Command Prompt, or Bash) and navigate to the project directory:
```bash
cd "c:\Users\lenovo\OneDrive\Desktop\global fuel"
```

### 3. (Optional but Recommended) Create a Virtual Environment
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate
```

### 4. Install Dependencies
```bash
pip install -r requirements.txt
```

### 5. Run the Flask Web Application
```bash
python app.py
```

You should see output similar to:
```text
 * Serving Flask app 'app'
 * Debug mode: on
 * Running on http://127.0.0.1:5000 (Press CTRL+C to quit)
```

### 6. View in Browser
Open your browser and visit:  
👉 **`http://localhost:5000`** or **`http://127.0.0.1:5000`**

---

## 🔗 How to Embed Your Own Tableau Public Dashboard & Story

Your application has centralized configuration inside **`app.py`**.

```python
CONFIG = {
    # Central Tableau Link used across all buttons & views
    "TABLEAU_URL": "https://public.tableau.com/views/GlobalFuelPriceAndTaxationTrends/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    "DASHBOARD_VIZ_URL": "https://public.tableau.com/views/GlobalFuelPriceAndTaxationTrends/Dashboard1",
    "DASHBOARD_SHARE_URL": "https://public.tableau.com/views/GlobalFuelPriceAndTaxationTrends/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    "STORY_VIZ_URL": "https://public.tableau.com/views/GlobalFuelPriceAndTaxationTrends/Dashboard1",
    "STORY_SHARE_URL": "https://public.tableau.com/views/GlobalFuelPriceAndTaxationTrends/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
}
```

### How to get the URL from Tableau Public:
1. Open your published dashboard or story on [Tableau Public](https://public.tableau.com).
2. Click the **Share** icon (top right or bottom of the viz).
3. Copy the link under **Link** (e.g., `https://public.tableau.com/views/YourWorkbook/YourDashboard`).
4. Paste this link into `DASHBOARD_VIZ_URL` or `STORY_VIZ_URL` in `app.py`.
5. Save `app.py` and refresh your browser.

---

## 🐙 Git and GitHub Setup Instructions

Follow these exact commands to push your project to GitHub:

### 1. Initialize Git in the project directory
```bash
git init
```

### 2. Configure Git user identity (if first time)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Add all files and make initial commit
```bash
git add .
git commit -m "Initial commit: Global Fuel Analytics Flask application with Tableau embed"
```

### 4. Create a new repository on GitHub
- Go to [GitHub.com](https://github.com) and sign in.
- Click **New Repository** (`+` icon in top-right).
- Repository Name: `global-fuel-analytics`
- Set it to **Public**.
- Do not initialize with README, .gitignore, or license (we already created them).
- Click **Create repository**.

### 5. Link and Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/global-fuel-analytics.git
git push -u origin main
```

---

## ☁️ Free Cloud Deployment Guide

You can deploy this Flask web application online for free in under 5 minutes:

### Option A: Render.com (Recommended & 100% Free)
1. Sign up for free at [Render.com](https://render.com).
2. Click **New +** -> **Web Service**.
3. Connect your GitHub account and select your `global-fuel-analytics` repository.
4. Set the following settings:
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
5. Click **Create Web Service**.
6. Render will build and launch your application at `https://global-fuel-analytics.onrender.com`.

### Option B: PythonAnywhere (Free)
1. Register at [PythonAnywhere.com](https://www.pythonanywhere.com).
2. Open a Bash console and clone your GitHub repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/global-fuel-analytics.git
   ```
3. Create a virtualenv and install dependencies:
   ```bash
   mkvirtualenv --python=/usr/bin/python3.10 myenv
   pip install -r requirements.txt
   ```
4. In the **Web** tab, configure the WSGI configuration file to point to `app.py`.
5. Reload your web app.

---

## 💼 Adding to SkillWallet & Portfolio Submissions

When submitting this project to **SkillWallet** or project evaluation portals:

1. **GitHub Repository URL**:
   ```text
   https://github.com/YOUR_USERNAME/global-fuel-analytics
   ```
2. **Live Application URL**:
   ```text
   https://your-app-name.onrender.com (or your local demo link)
   ```
3. **Tableau Public Dashboard URL**:
   ```text
   https://public.tableau.com/views/GlobalFuelPriceAndTaxationTrends/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link
   ```
4. **Project Description**:
   > Global Fuel Analytics is a full-stack Flask web application and data visualization project integrating Tableau Public. It analyzes global retail fuel prices (Petrol, Diesel, LPG), crude oil price pass-through, regional disparities, and sovereign taxation frameworks across 10 empirical dimensions.

---

## 🛠️ Common Troubleshooting & FAQ

### Q1: `python` or `pip` is not recognized?
- **Solution**: Ensure Python was installed with the checkbox **"Add Python to PATH"** enabled. Alternatively, run `py app.py` or use the full path to Python.

### Q2: Port 5000 is already in use?
- **Solution**: Run on another port:
  ```bash
  python -c "from app import app; app.run(port=5001, debug=True)"
  ```
  Then visit `http://localhost:5001`.

### Q3: Tableau visualization shows a blank box or grey screen?
- **Cause**: Modern browsers sometimes block embedded third-party frames when strict tracker protection or third-party cookie blocking is enabled.
- **Solution**: 
  1. Click the **"Open on Tableau Public"** button provided right on the dashboard page.
  2. Or disable third-party cookie blocking for `public.tableau.com` in your browser settings.

---

## 📄 License & Academic Attribution
Developed for educational, research, and data visualization portfolio demonstration.
Data sources: Global fuel pricing indices, World Bank income classifications, and Brent crude benchmark indices.

