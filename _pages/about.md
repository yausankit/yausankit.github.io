---
layout: home
permalink: /
role: "M.S. graduate in Software Engineering, DMIR Lab, Guangdong University of Technology"
headline: "Building reliable language models that reason with evidence"
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section id="about">
  <h2>About Me</h2>
  <div class="about-layout">
    <div class="prose">
      <p class="about-eyebrow">Structured evidence · Language agents · Interpretability</p>
      <h3 class="about-headline">{{ page.headline }}</h3>
      <p class="about-bio">I am an AI researcher based in Guangzhou, with an M.S. in Software Engineering from Guangdong University of Technology. I study how language models and agents organize structured evidence, make decisions, diagnose failures, and determine when verification, repair, or abstention is justified. My work connects external evidence, agent behavior, and internal representations.</p>
    </div>
    <figure class="profile-photo">
      <img src="{{ base_path }}/assets/images/chenjie-qiu-jiuzhaigou.jpg" width="1049" height="1400" loading="lazy" decoding="async" alt="Chenjie Qiu sitting beside a mountain lake" />
    </figure>
  </div>
</section>

<section id="interests">
  <h2>Research Interests</h2>
  <div class="rows">
    <div class="row">
      <div class="k">Knowledge-Aware LLM Systems</div>
      <div class="v"><p>Developing methods for language models to organize, retrieve, and reason over structured external knowledge from graphs, tables, long documents, and dialogue history, while also exploring latent-space memory and retrieval through model-internal representations.</p></div>
    </div>
    <div class="row">
      <div class="k">Affect-Aware LLM Systems</div>
      <div class="v"><p>Studying how emotion-related and user-state signals are represented, retained, and carried across multi-turn dialogue, with a focus on internal representations and affective carryover.</p></div>
    </div>
  </div>
</section>

<section id="publications">
  <h2>Publications</h2>
  {%- comment -%}
  Rows are generated from _publications/, so adding a paper is still one new
  markdown file there and nothing here changes. home-publication-row.html is the
  design's row markup; archive-single.html is the stock academicpages card and
  would not inherit any of this page's styling.
  {%- endcomment -%}
  <div class="rows">
    {%- for post in site.publications reversed -%}
      {% include home-publication-row.html %}
    {%- endfor -%}
  </div>
</section>

<section id="education">
  <h2>Education</h2>
  <div class="rows">
    <div class="row">
      <div class="k">2023 &ndash; 2026</div>
      <div class="v">
        <h3>Guangdong University of Technology</h3>
        <p>M.S. in Software Engineering &middot; DMIR Lab</p>
      </div>
    </div>
    <div class="row">
      <div class="k">2018 &ndash; 2022</div>
      <div class="v">
        <h3>Guangdong University of Finance</h3>
        <p>Bachelor&rsquo;s in E-Commerce</p>
      </div>
    </div>
  </div>
</section>
