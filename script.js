:root {
    --primary-color: #8a2be2;
    --secondary-color: #4b0082;
    --accent-color: #ff69b4;
    --dark-color: #1a1a2e;
    --text-color: #333;
    --light-bg: #f5f5f7;
    --white: #ffffff;
    --gray: #6c757d;
    --shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body {
    background-color: var(--light-bg);
    color: var(--text-color);
    line-height: 1.6;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

header {
    background-color: var(--dark-color);
    color: var(--white);
    padding: 20px 0;
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.8rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
}

.logo-icon {
    margin-right: 10px;
    font-size: 2rem;
}

.language-selector {
    display: flex;
    gap: 10px;
}

.lang-btn {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--white);
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: var(--transition);
    font-weight: 500;
}

.lang-btn.active {
    background: var(--primary-color);
    border-color: var(--primary-color);
}

.hero {
    padding: 80px 0;
    text-align: center;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--white);
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%238a2be2"/><path d="M0 0L100 100M100 0L0 100" stroke="%234b0082" stroke-width="2"/></svg>');
    opacity: 0.1;
}

.hero h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
    font-weight: 800;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.hero p {
    font-size: 1.3rem;
    max-width: 700px;
    margin: 0 auto 40px;
    font-weight: 500;
}

.offer-card {
    background-color: var(--white);
    border-radius: 15px;
    padding: 40px;
    box-shadow: var(--shadow);
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
    position: relative;
    z-index: 1;
}

.offer-title {
    font-size: 1.8rem;
    color: var(--primary-color);
    margin-bottom: 15px;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.offer-price {
    font-size: 3rem;
    font-weight: 800;
    color: var(--secondary-color);
    text-align: center;
    margin-bottom: 25px;
}

.features {
    list-style: none;
    margin-bottom: 30px;
}

.features li {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    font-weight: 500;
}

.features li:last-child {
    border-bottom: none;
}

.feature-icon {
    color: var(--primary-color);
    margin-right: 12px;
    font-size: 1.3rem;
    font-weight: bold;
}

.cta-button {
    display: block;
    width: 100%;
    background: linear-gradient(to right, var(--primary-color), var(--accent-color));
    color: var(--white);
    border: none;
    padding: 18px;
    border-radius: 10px;
    font-size: 1.3rem;
    font-weight: 700;
    cursor: pointer;
    transition: var(--transition);
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.guarantee {
    text-align: center;
    margin-top: 20px;
    font-weight: 600;
    color: var(--secondary-color);
    font-size: 1.1rem;
}

.testimonials {
    padding: 80px 0;
    background-color: var(--white);
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
    color: var(--dark-color);
    font-size: 2.2rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.testimonial-card {
    background-color: var(--light-bg);
    border-radius: 10px;
    padding: 30px;
    box-shadow: var(--shadow);
    border-left: 5px solid var(--primary-color);
}

.testimonial-text {
    font-style: italic;
    margin-bottom: 
