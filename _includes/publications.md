<h2 id="publications" class="section-heading">{{ include.publications_heading | default: "Publications" }}</h2>
<div class="publications"{% if include.lang == "zh" %} lang="en"{% endif %}>
  <ol class="bibliography">
    {% for publication in site.data.publications.main %}
      {% include publication.html publication=publication %}
    {% endfor %}
  </ol>
</div>

<h2 id="preprints" class="section-heading">{{ include.preprints_heading | default: "Preprints" }}</h2>
<div class="publications"{% if include.lang == "zh" %} lang="en"{% endif %}>
  <ol class="bibliography">
    {% for publication in site.data.publications.preprints %}
      {% include publication.html publication=publication %}
    {% endfor %}
  </ol>
</div>
