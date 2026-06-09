"use client";

import { useEffect } from "react";

const collections = [
  {
    className: "ci-1",
    label: "Signature Line",
    name: "Éclat Evening",
    count: "24 Exclusive Pieces",
    cta: "Explore Collection",
  },
  {
    className: "ci-2",
    label: "Resort Wear",
    name: "Riviera",
    count: "18 Pieces",
    cta: "Explore",
  },
  {
    className: "ci-3",
    label: "Ready to Wear",
    name: "Atelier Daily",
    count: "32 Pieces",
    cta: "Explore",
  },
];

const products = [
  {
    className: "pi-1",
    badge: "New",
    badgeClass: "new",
    line: "Éclat",
    name: "Silk Draped Gown",
    price: "$1,480",
  },
  {
    className: "pi-2",
    line: "Riviera",
    name: "Linen Wide-Leg Trousers",
    price: "$620",
  },
  {
    className: "pi-3",
    badge: "Limited",
    badgeClass: "ltd",
    line: "Atelier Daily",
    name: "Cashmere Wrap Coat",
    price: "$2,100",
  },
  {
    className: "pi-4",
    badge: "New",
    badgeClass: "new",
    line: "Éclat",
    name: "Structured Blazer Dress",
    price: "$980",
  },
];

const marqueeItems = [
  "Spring 2025 Collection",
  "Exclusive Boutique Pieces",
  "Complimentary Shipping Over $500",
  "Inner Circle — Early Access to New Arrivals",
  "Sustainable Luxury · Timeless Design",
  "Handcrafted in Paris, Milan & Kyoto",
];

function SearchIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default function Home() {
  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealNodes.forEach((node) => observer.observe(node));

    const heroTimer = window.setTimeout(() => {
      document
        .querySelectorAll(".hero-content.reveal")
        .forEach((node) => node.classList.add("visible"));
    }, 100);

    const nav = document.querySelector("nav");
    const handleScroll = () => {
      if (!nav) return;
      if (window.scrollY > 40) {
        nav.style.background = "rgba(247,243,238,0.97)";
        nav.style.boxShadow = "0 1px 0 rgba(26,23,20,0.1)";
      } else {
        nav.style.background = "rgba(247,243,238,0.92)";
        nav.style.boxShadow = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.clearTimeout(heroTimer);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="announce">
        Complimentary express delivery on orders over <strong>$500</strong>{" "}
        &nbsp;·&nbsp; New arrivals every Thursday —{" "}
        <strong>Inner Circle members get first access</strong>
      </div>

      <nav>
        <div className="nav-inner">
          <ul className="nav-links">
            <li>
              <a href="#collections">Collections</a>
            </li>
            <li>
              <a href="#new-arrivals">New Arrivals</a>
            </li>
            <li>
              <a href="#edit">The Edit</a>
            </li>
            <li>
              <a href="#lookbook">Lookbook</a>
            </li>
          </ul>
          <a href="#" className="nav-logo" aria-label="Maison Élise home">
            <span className="nav-logo-name">Maison Élise</span>
            <span className="nav-logo-sub">Paris · Est. 2019</span>
          </a>
          <div className="nav-actions">
            <button className="nav-btn" type="button" aria-label="Search">
              <SearchIcon />
            </button>
            <button className="nav-btn" type="button" aria-label="Wishlist">
              <HeartIcon />
            </button>
            <button className="nav-btn" type="button" aria-label="Shopping bag">
              <BagIcon />
              <span>Bag (0)</span>
            </button>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-wrap">
          <div className="hero">
            <div className="hero-content reveal">
              <div className="eyebrow">Spring Collection 2025</div>
              <h1 className="hero-headline">
                Dressed in
                <br />
                <em>Quiet</em>
                <br />
                Luxury
              </h1>
              <p className="hero-body">
                Curated pieces for the discerning woman. Each garment a
                conversation between craft and refinement — worn for living,
                remembered forever.
              </p>
              <div className="hero-ctas">
                <a href="#collections" className="btn btn-dark">
                  Explore the Collection
                </a>
                <a href="#lookbook" className="btn btn-ghost">
                  View Lookbook
                </a>
              </div>
            </div>
            <div className="hero-image">
              <div className="ep">
                <svg className="ep-grain" xmlns="http://www.w3.org/2000/svg">
                  <filter id="g1">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.68"
                      numOctaves="4"
                      stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#g1)" />
                </svg>
                <div className="ep-vert">Collection N°01</div>
              </div>
              <div className="ep-caption">
                <div className="ep-caption-label">Featured Piece</div>
                <div className="ep-caption-text">The Éclat Silk Gown</div>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee-bar">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span className="marquee-item" key={`${item}-${index}`}>
                {item}
                <span className="marquee-star">✦</span>
              </span>
            ))}
          </div>
        </div>

        <section id="collections">
          <div className="sec">
            <div className="sec-head reveal">
              <div>
                <div className="sec-eyebrow">Curated for You</div>
                <h2 className="sec-title">
                  Shop by <em>Collection</em>
                </h2>
              </div>
              <a href="#" className="link-line">
                All Collections
              </a>
            </div>
            <div className="coll-grid reveal">
              <CollectionCard item={collections[0]} featured />
              <div className="coll-stack">
                <CollectionCard item={collections[1]} />
              </div>
              <div className="coll-stack">
                <CollectionCard item={collections[2]} />
              </div>
            </div>
          </div>
        </section>

        <section className="editorial" id="edit">
          <div className="editorial-inner">
            <div className="ed-img">
              <div className="ed-bg">
                <svg
                  className="ed-grain"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <filter id="g2">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.65"
                      numOctaves="3"
                      stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#g2)" />
                </svg>
              </div>
              <div className="ed-large-text">Saison</div>
            </div>
            <div className="ed-content reveal">
              <div className="ed-eyebrow">The Maison Edit</div>
              <h2 className="ed-title">
                The Art of
                <br />
                <em>Effortless</em>
                <br />
                Elegance
              </h2>
              <p className="ed-body">
                Our Spring collection draws from the language of light — how it
                falls on silk at dusk, how it catches the warmth of a carefully
                chosen accessory. Each piece is designed to move with you, not
                merely upon you.
              </p>
              <a href="#" className="btn-outline">
                Read the Story
              </a>
            </div>
          </div>
        </section>

        <section id="new-arrivals">
          <div className="sec">
            <div className="sec-head reveal">
              <div>
                <div className="sec-eyebrow">Just In</div>
                <h2 className="sec-title">
                  New <em>Arrivals</em>
                </h2>
              </div>
              <a href="#" className="link-line">
                View All
              </a>
            </div>
            <div className="prod-grid">
              {products.map((product, index) => (
                <ProductCard key={product.name} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="story-bg" id="lookbook">
          <div className="story-inner reveal">
            <div className="story-orn" />
            <div className="sec-eyebrow centered">Our Philosophy</div>
            <h2 className="story-title">
              Crafted for the Woman
              <br />
              Who <em>Knows Herself</em>
            </h2>
            <div className="story-rule" />
            <p className="story-body">
              Maison Élise was born from a singular belief: that clothing should
              feel like a second skin, not a statement. We work with artisans
              across Paris, Milan, and Kyoto to source only the finest fabrics —
              each piece thoughtfully constructed to outlast seasons and trends.
              This is not fashion. This is a wardrobe that grows with you.
            </p>
            <a href="#" className="btn btn-dark">
              Our Story
            </a>
          </div>
        </section>

        <section className="nl">
          <div className="nl-eyebrow">The Inner Circle</div>
          <h2 className="nl-title">
            Be the First to
            <br />
            <em>Know Everything</em>.
          </h2>
          <p className="nl-sub">
            Members receive exclusive early access to new collections, private
            event invitations, and personal styling notes from our atelier.
          </p>
          <form className="nl-form">
            <input
              className="nl-input"
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
            />
            <button className="nl-submit" type="submit">
              Join
            </button>
          </form>
          <p className="nl-note">We respect your privacy. Unsubscribe anytime.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}

function CollectionCard({ item }) {
  return (
    <article className="coll-card">
      <div className={`coll-img ${item.className}`} />
      <div className="coll-overlay" />
      <div className="coll-info">
        <div className="coll-label">{item.label}</div>
        <div className="coll-name">{item.name}</div>
        <div className="coll-count">{item.count}</div>
        <a href="#" className="coll-cta">
          {item.cta}
        </a>
      </div>
    </article>
  );
}

function ProductCard({ product, index }) {
  const delayClass = index > 0 ? ` reveal-delay-${index}` : "";

  return (
    <article className={`prod-card reveal${delayClass}`}>
      <div className="prod-img-wrap">
        <div className={`prod-img ${product.className}`} />
        {product.badge ? (
          <span className={`prod-badge ${product.badgeClass}`}>
            {product.badge}
          </span>
        ) : null}
        <button className="prod-qa" type="button">
          Quick Add
        </button>
      </div>
      <div className="prod-info">
        <div className="prod-sub">{product.line}</div>
        <div className="prod-name">{product.name}</div>
        <div className="prod-price">{product.price}</div>
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-top">
          <div>
            <div className="foot-logo">Maison Élise</div>
            <div className="foot-logo-sub">Paris · Est. 2019</div>
            <p className="foot-tag">
              Exclusive women&apos;s fashion, crafted with intention. Because
              every woman deserves a wardrobe that tells her story beautifully.
            </p>
          </div>
          <FooterColumn
            title="Shop"
            links={[
              "New Arrivals",
              "Collections",
              "Éclat Evening",
              "Riviera",
              "Atelier Daily",
              "Private Sale",
            ]}
          />
          <FooterColumn
            title="The Maison"
            links={[
              "Our Story",
              "Lookbook",
              "Journal",
              "Press",
              "Sustainability",
            ]}
          />
          <FooterColumn
            title="Client Services"
            links={[
              "Shipping & Returns",
              "Size Guide",
              "Care Guide",
              "Contact Us",
              "Boutique Locations",
            ]}
          />
        </div>
        <div className="foot-bottom">
          <span>© 2025 Maison Élise. All rights reserved.</span>
          <div className="foot-socials">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Vogue</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <div className="foot-col-title">{title}</div>
      <ul className="foot-links">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
