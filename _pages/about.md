---
layout: home
permalink: /
role: "Research Assistant · Singapore Management University"
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section id="about">
  <figure class="profile-photo">
    <img src="{{ base_path }}/assets/images/chenjie-qiu-portrait.jpg" width="600" height="800" loading="lazy" decoding="async" alt="Chenjie Qiu sitting beside a mountain lake" />
  </figure>
  <p>I am a research assistant at <strong>Singapore Management University (SMU)</strong>, working with <a href="https://dluoedu.github.io/">Prof. Dongsheng Luo</a>. I received my M.S. from <strong>Guangdong University of Technology (GDUT)</strong>, advised by Bingfeng Chen and <a href="https://boyanxu1.github.io/">Boyan Xu</a> in the <a href="https://dmir.gdut.edu.cn/">DMIR Lab</a>. My research focuses on <strong>structured knowledge reasoning</strong> and <strong>self-evolving language agents</strong>, with additional interests in large language model interpretability and affective computing.</p>
  <p class="profile-links">
    {%- if site.author.email -%}<a href="mailto:{{ site.author.email }}">Email</a>{%- endif -%}
    {%- if site.author.googlescholar -%}<a href="{{ site.author.googlescholar }}" rel="me noopener">Google Scholar <span aria-hidden="true">&#8599;</span></a>{%- endif -%}
    {%- if site.author.github -%}<a href="https://github.com/{{ site.author.github }}" rel="me noopener">GitHub <span aria-hidden="true">&#8599;</span></a>{%- endif -%}
  </p>
</section>

<section id="interests">
  <p>My research asks how language models and agents learn from evidence, feedback, and their own mistakes:</p>
  <ul class="topics">
    <li><strong>Structured Knowledge Reasoning:</strong> Retrieval and reasoning over documents, knowledge graphs, tables, and databases, including probing which evidence actually shaped an answer and when to repair, verify, or abstain.</li>
    <li><strong>Self-Evolving Agents:</strong> Agents that learn from feedback and memory, and benchmarks that test whether they learn a general rule or only a list of special cases.</li>
  </ul>
  <p>I am glad to discuss research and collaboration on these topics. Feel free to reach me by email.</p>
</section>

<section id="publications">
  <h2>Publications</h2>
  {%- comment -%}
  Entries are generated from _publications/, so adding a paper is still one new
  markdown file there and nothing here changes.
  {%- endcomment -%}
  <ol class="pubs">
    {%- for post in site.publications reversed -%}
      {% include home-publication-row.html %}
    {%- endfor -%}
  </ol>
</section>
