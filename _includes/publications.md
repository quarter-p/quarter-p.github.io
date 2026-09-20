<h2 id="publications" class="section-heading">Publications</h2>
<div class="publications">
  <ol class="bibliography">
    {% for publication in site.data.publications.main %}
      {% include publication.html publication=publication %}
    {% endfor %}
  </ol>
</div>

<h2 id="preprints" class="section-heading">Preprints</h2>
<div class="publications">
  <ol class="bibliography">
    {% for publication in site.data.publications.preprints %}
      {% include publication.html publication=publication %}
    {% endfor %}
  </ol>
</div>
