---
layout: home
permalink: /
role: "Research-based M.Eng. graduate in Software Engineering, DMIR Lab, Guangdong University of Technology"
headline: "Evidence, representations, and user state in language models"
tagline: "Studying how structured evidence, internal representations, and user state shape what language models understand and say."
facts:
  - label: "Lab"
    value: "DMIR, GDUT"
  - label: "Based in"
    value: "Guangzhou, Guangdong"
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section id="about">
  <h2>About Me</h2>
  <div class="about-layout">
    <div class="prose">
      <p>I hold a <strong>research-based M.Eng. in Software Engineering from Guangdong University of Technology</strong> and am based in Guangzhou. My research sits at the intersection of natural language processing, retrieval, and interpretability for large language models.</p>
      <p>I study how models select and use structured evidence from graphs, tables, long documents, and dialogue history, as well as how affective and user-state signals are represented and carried across turns. My work spans structure-aware sentiment reasoning, retrieval-augmented generation, and representation analysis.</p>
      <p>I am interested in the conditions behind a model's answer: which evidence it relies on, what it overlooks, and how internal representations relate to its behavior.</p>
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
  {% if site.author.googlescholar %}
    <p class="section-note">You can also find my articles on <a href="{{ site.author.googlescholar }}">my Google Scholar profile</a>.</p>
  {% endif %}
</section>

<section id="education">
  <h2>Education</h2>
  <div class="rows">
    <div class="row">
      <div class="k">2023 &ndash; 2026</div>
      <div class="v">
        <h3>Guangdong University of Technology</h3>
        <p>M.Eng. in Software Engineering (Research-based) &mdash; Guangzhou, Guangdong</p>
      </div>
    </div>
    <div class="row">
      <div class="k">2018 &ndash; 2022</div>
      <div class="v">
        <h3>Guangdong University of Finance</h3>
        <p>Bachelor's degree in E-Commerce &mdash; Guangzhou, Guangdong</p>
      </div>
    </div>
  </div>
</section>
