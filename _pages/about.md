---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section id="about-me"></section>

I am a Master's student at Guangdong University of Technology, working in the Data Mining & Information Retrieval Laboratory. My research focuses on knowledge management and memory for Large Language Models, especially over graph and table knowledge, as well as Affective Computing. My work aims to bridge the gap between natural language processing and database management, enhancing human-computer interaction.

## Research Interests

- **Knowledge Management & LLM Memory**: Exploring how large language models organize, retrieve, and reason over external knowledge as memory, with recent work on GraphRAG and table question answering.
- **Affective Computing & LLM Interpretability**: Studying how emotion concepts are represented inside large language models, with a focus on emotion vectors, activation steering, and the structure of affective representations.

<h2 id="publications">Publications</h2>

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% if site.publication_category %}
{% for category in site.publication_category %}
{% assign title_shown = false %}
{% for post in site.publications reversed %}
{% if post.category != category[0] %}
{% continue %}
{% endif %}
{% unless title_shown %}
<h3>{{ category[1].title }}</h3><hr />
{% assign title_shown = true %}
{% endunless %}
{% include archive-single.html %}
{% endfor %}
{% endfor %}
{% else %}
{% for post in site.publications reversed %}
{% include archive-single.html %}
{% endfor %}
{% endif %}

<h2 id="education">Education</h2>

<p>
  <strong>Guangdong University of Technology</strong><br />
  Master's student, Data Mining & Information Retrieval Laboratory<br />
  Guangzhou, Guangdong
</p>
