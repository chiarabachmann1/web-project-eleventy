# Accessible Static Website Project

This project was developed as part of a group assignment for the Web Engineering course. The goal was to create an accessible, responsive and sustainable static website using a Static Site Generator (SSG) and deploy it with automated workflows to a static hosting service.

The project uses **Eleventy (11ty)** as the SSG and **Clouddflare** as the hosting and deployment platform. All content is written in **Markdown** and transformed into semantic HTML. The layout uses **CSS Grid** for the page structure (header, main, footer) and **Flexbox** inside the main area to organise content and sidebar.

Accessibility (a11y), semantic HTML and sustainable design were key priorities. The final site is mobile-friendly, screen-reader compatible and tested on various screen sizes.

---

## Ecograder Result

This project scores above **90** on [https://ecograder.com](https://ecograder.com), meeting the sustainability requirement.

**Screenshot:**
![image](https://github.com/user-attachments/assets/ac7cbdac-4206-4de3-bb4f-355eb5e660bf)

**Link:** [Ecograder Result Link](https://ecograder.com/report/FX8KrQzJGjDfbUe0fXEfB8JN)


---

## HTML & CSS Validation

You can validate the site using the following tools:

- [W3C HTML Validator Report](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fweb-project-eleventy.pages.dev%2F)
- [W3C CSS Validator Report](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fweb-project-eleventy.pages.dev/&profile=css3svg)

<p>
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            alt="CSS ist valide!" />
</p>
<p>
        <img style="border:0;width:88px;height:31px"
            src="https://jigsaw.w3.org/css-validator/images/vcss"
            alt="CSS ist valide!" />
</p>
          

---

## Technical Stack

- **Static Site Generator:** [Eleventy (11ty)](https://www.11ty.dev/)
    - Renders Markdown to semantic HTML
    - Supports templates and layouts via Nunjucks
    - Lightweight and accessibility-friendly

- **Hosting & CI/CD:** [Cloudflare Pages](https://pages.cloudflare.com/)
    - Automatic builds and deployments from GitHub
    - Free, fast, and includes a global CDN for optimal performance
    - Supports custom domains with HTTPS

---

## Why should you use CSS classes instead of just selectors like p, ul li or div > span?
Here are the reasons, why we don't fullfill the CSS Criterium: 

- Because classes are easier, more flexible and more reliable.
- You can reuse classes. It doesn’t matter if it’s a div, button or span. You just add the class you need.
- If you later change the HTML structure, classes still work. Selectors often break when things move around.
- Classes make your code easier to read. You see right away what something is for. Like warning, card, or btn-primary.
- With classes, you can style exactly what you want. Selectors like section p often catch things you didn’t mean to style.
- Classes help you keep your styles clean. You can work in a modular way and reuse your styles.
- Most modern frameworks use classes. Because they are clear, maintainable and easy to combine.
  
### Bottom line
Classes give you control. Selectors often or potentially catch too much or the wrong thing.

### References 
- **[BEM (Block Element Modifier)](https://getbem.com/)** relies consistently on classes to structure and organize styles.
- **[Atomic CSS and utility-first approaches like Tailwind](https://tailwindcss.com/docs/utility-first)** are entirely based on classes.




---

## Sources and Tools

- Eleventy Documentation: https://www.11ty.dev/docs/
- Netlify Docs: https://docs.netlify.com/
- HTML Validator: https://validator.w3.org/
- CSS Validator: https://jigsaw.w3.org/css-validator/
- Ecograder: https://ecograder.com/
- Nunjucks Docs: https://mozilla.github.io/nunjucks/getting-started.html

> This project was partly supported by [ChatGPT](https://openai.com/chatgpt) for technical structuring and code generation for inspiration. All source code and final documentation were reviewed and verified by the authors.

---

## Team

- Nik Widmer 
- Chiara Bachmann
- Silvan Feldmann

---

